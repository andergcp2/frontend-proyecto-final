'use client';

import { Interview } from "@/models/interview.model";
import { getInterviews, rateInterview } from "@/services/interview";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { GridColDef } from "@mui/x-data-grid";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const useCreateInterviewContext = () => {
  const t = useTranslations('Interview')
  const [openRate, setOpenRate] = useState(false);
  const [interviewToRate, setInterviewToRate] = useState<Interview | null>(null)
  const [rating, setRate] = useState(0)
  const [comment, setComment] = useState('')

  const handleRowClick = (params: any) => {
    // redirect to interview page
    // push(`${mainRoutes.dashboard.interview}/${params.row.id}`)
    console.log(params) // TODO: Define wath to do on row click
  }

  const handleRateClick = (params: Interview) => {
    setInterviewToRate(params)
    setOpenRate(true)
  }

  const handleRateInterview = () => {
    rateInterviewReq()
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
    setInterviewToRate(null)
  }

  const getInterviwesData = async () => {
    const session = await getSession()
    const companyId = session?.user?.id as string ?? ''
    const response = await getInterviews(companyId)
    return response
  }

  const { data: interviewsData, isFetching: isFetchingInterviewsData, refetch } = useQuery({
    queryKey: ['company-interviews'],
    queryFn: getInterviwesData,

  })

  const RateInterview = async () => {
    rateInterview({
      interviewId: interviewToRate?.interviewId ?? 0,
      rating,
      comment,
    })
  }

  const { mutateAsync: rateInterviewReq, isLoading: isRatingLoading } = useMutation({
    mutationFn: RateInterview,
    onSuccess: () => {
      setRate(0)
      setComment('')
      setInterviewToRate(null)
      refetch()
    }
  })

  const interviews: Interview[] = interviewsData?.items ?? []
  const headerClassName = 'search-candidate-header'

  const columns: GridColDef[] = [
    { field: 'interviewId', headerName: 'InterviewId', flex: 1, headerClassName, minWidth: 100, },
    { field: 'interviewDate', headerName: 'Date', flex: 1, headerClassName, minWidth: 150, },
    { field: 'topic', headerName: 'Topic', flex: 1, headerClassName, minWidth: 150, },
    { field: 'comment', headerName: 'Comment', flex: 1, headerClassName, minWidth: 180, },
    { field: 'status', headerName: 'Status', flex: 1, headerClassName, minWidth: 120, },
    {
      field: 'rate', headerName: 'Rate', flex: 1, headerClassName, minWidth: 150,
      renderCell: (params) => {
        if (params.row?.status && params.row.status !== 'FINALIZADA') {
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
    }
  ];

  const rows: Interview[] = interviews.map((interview) => {
    return {
      interviewId: interview.interviewId,
      interviewDate: new Date(interview.interviewDate).toLocaleDateString(),
      topic: interview.topic,
      candidateId: interview.candidateId,
      companyId: interview.companyId,
      projectId: interview.projectId,
      comment: interview.comment,
      status: interview.status,
      rating: interview.score,
    }
  })

  return {
    columns,
    comment,
    interviewToRate,
    isFetchingInterviewsData,
    isRatingLoading,
    openRate,
    rating,
    rows,
    t,
    handleRateChange,
    handleRateClose,
    handleRateCommentChange,
    handleRateInterview,
    handleRowClick,
  }
}

export default useCreateInterviewContext