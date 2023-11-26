import { CompanyCandidate, SearchCandidateRow } from "@/models";
import { getCompanyCandidates, rateCandidate } from "@/services/company";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { GridColDef } from "@mui/x-data-grid";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useEffect, useState, useMemo } from "react";

const useManageCandidatesContext = () => {
  const t = useTranslations('Dashboard.Modules.ManageCandidates')
  const [openRate, setOpenRate] = useState(false);
  const [candidateToRate, setCandidateToRate] = useState<CompanyCandidate | null>(null)
  const [rating, setRate] = useState<number>(0)
  const [comment, setComment] = useState<string>('')

  const handleRowClick = (params: any) => {
    // redirect to interview page
    // push(`${mainRoutes.dashboard.interview}/${params.row.id}`)
    console.log(params) // TODO: Define wath to do on row click
  }

  const handleRateClick = (params: CompanyCandidate) => {
    setCandidateToRate(params)
    setOpenRate(true)
  }

  const handleRateCandidate = () => {
    rateCandidateReq()
    setOpenRate(false)
  }

  const handleRateCommentChange = (event: any) => {
    setComment(event.target.value)
  }

  const handleRateChange = (event: any) => {
    setRate(event.target.value)
  }

  const handleRateClose = () => {
    setOpenRate(false)
    setRate(0)
    setComment('')
    setCandidateToRate(null)
  }

  const getCandidatesData = async () => {
    const session = await getSession()
    const companyId = session?.user?.id as string ?? ''
    const response = await getCompanyCandidates(companyId)
    return response
  }

  const { data: candidatesData, isFetching: isFetchingCandidatesData, refetch } = useQuery({
    queryKey: ['company-candidates'],
    queryFn: getCandidatesData,
  })

  const RateCandidate = async () => {
    rateCandidate({
      candidateId: candidateToRate?.id ?? 0,
      score: rating,
      comments: comment,
      projectId: candidateToRate?.projectId ?? 0
    })
    console.log('Ander voy a calificar al candidato')
  }

  const { mutateAsync: rateCandidateReq, isLoading: isRatingLoading } = useMutation({
    mutationFn: RateCandidate,
    onSuccess: () => {
      setRate(0)
      setComment('')
      setCandidateToRate(null)
      refetch()
    }
  })

  const candidates = useMemo(() => candidatesData ?? [], [candidatesData])

  useEffect(() => {
    console.log('Ander candidates', candidates)

  }, [candidates])

  const headerClassName = 'search-candidate-header'

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Names', flex: 1, headerClassName, minWidth: 120, },
    { field: 'lastName', headerName: 'Last Names', flex: 1, headerClassName, minWidth: 120, },
    { field: 'email', headerName: 'Email', flex: 1, headerClassName, minWidth: 120, },
    { field: 'phone', headerName: 'Phone Number', flex: 1, headerClassName, minWidth: 120, },
    { field: 'comments', headerName: 'Comments', flex: 1, headerClassName, minWidth: 200, },
    {
      field: 'rate', headerName: 'Rate', flex: 1, headerClassName, minWidth: 150,
      renderCell: (params) => {
        console.log('Ander params ', params)
        if (!params.row?.rating) {
          return (
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleRateClick(params.row)}
            >
              {t('rateButton')}
            </Button>
          )
        }
        return <Rating name="read-only" value={params.row.rating} readOnly />
      }
    },
    { field: 'id', headerName: 'ID', width: 70, headerClassName, minWidth: 120, },
    { field: 'projectId', headerName: 'Project Id', flex: 1, headerClassName, minWidth: 120, },
  ]

  const rows: CompanyCandidate[] = candidates.map((candidate: CompanyCandidate) => {
    return {
      id: candidate.id,
      name: candidate.name,
      lastName: candidate.lastName,
      email: candidate.email,
      phone: candidate.phone,
      rating: candidate.score,
      comments: candidate.comments,
      projectId: candidate.projectId,
    }
  })

  return {
    columns,
    comment,
    candidateToRate,
    isFetchingCandidatesData,
    isRatingLoading,
    openRate,
    rating,
    rows,
    t,
    handleRateChange,
    handleRateClose,
    handleRateCommentChange,
    handleRateCandidate,
    handleRowClick,
  }
};

export default useManageCandidatesContext;