import { useTranslations } from "next-intl"
import { getSession } from "next-auth/react";
import { useRouter } from 'next/navigation'
import { useQuery } from "@tanstack/react-query";
import { GridColDef } from '@mui/x-data-grid';
import { getCandidateTests } from "@/services/candidate";
import { CandidateTest } from "@/models/test.model";
import { mainRoutes } from "@/models";

const useCandidateTestContext = () => {
  const t = useTranslations('Dashboard.Modules.CandidateTest')
  const { push } = useRouter()

  const getTestsData = async () => {
    const session = await getSession()
    const response = await getCandidateTests(session?.user?.id as string ?? '')
    return response
  }

  const { data: candidateTestsData, isFetching: isFetchingCandidateTestsData } = useQuery({
    queryKey: ['candidateTests'],
    queryFn: getTestsData,
    onSuccess: (data) => {
      // setCandidateTests([...data] ?? [])
      console.log(data)
    },
    onError: (error: any) => {
      console.log(error.message) // TODO Do something
    }
  })

  const headerClassName = 'search-candidate-header'
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Test Id', width: 70, headerClassName, minWidth: 100 },
    { field: 'name', headerName: 'Name', flex: 1, headerClassName, minWidth: 150 },
    { field: 'numQuestions', headerName: 'Número preguntas', flex: 1, headerClassName, minWidth: 100 },
    { field: 'idcandidate', headerName: 'idcandidate', flex: 1, headerClassName, minWidth: 100 },
    { field: 'idtest', headerName: 'idtest', flex: 1, headerClassName, minWidth: 100 },
    { field: 'testestatus', headerName: 'Test Status', flex: 1, headerClassName, minWidth: 120 },
  ];

  const candidateTests: CandidateTest[] = candidateTestsData ?? []

  const rows: CandidateTest[] = candidateTests.map((candidateTest) => {
    return {
      id: candidateTest.test?.id ?? '',
      name: candidateTest.test?.name ?? '',
      idcandidate: candidateTest.idcandidate,
      idtest: candidateTest.idtest,
      testestatus: candidateTest.testestatus,
      numQuestions: candidateTest.test?.numQuestions ?? 0,
    }
  })

  const handleRowClick = (params: any) => {
    // redirect to test page
    push(`${mainRoutes.dashboard.candidateTest}/${params.row.idtest}`)
  }
  return {
    // candidateTestData,
    candidateTests,
    columns,
    // isFetchingCandidateTestData,
    isFetchingCandidateTestsData,
    rows,
    t,
    handleRowClick,
  }
}

export default useCandidateTestContext