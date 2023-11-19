import { useTranslations } from "next-intl"
import { GridColDef } from '@mui/x-data-grid';
import { CandidateTest } from "@/models/test.model";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCandidateTests } from "@/services/candidate";
import { getSession } from "next-auth/react";


const useCandidateTestContext = () => {
  const t = useTranslations('Dashboard.Modules.CandidateTest')

  // const [candidateTests, setCandidateTests] = useState<CandidateTest[]>([])

  const getTestsData = async () => {
    const session = await getSession()
    console.log(session)
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
    { field: 'id', headerName: 'Test Id', width: 70, headerClassName, },
    { field: 'name', headerName: 'Name', flex: 1, headerClassName },
    { field: 'numQuestions', headerName: 'Número preguntas', flex: 1, headerClassName },
    { field: 'idcandidate', headerName: 'idcandidate', flex: 1, headerClassName },
    { field: 'idtest', headerName: 'idtest', flex: 1, headerClassName },
    { field: 'testestatus', headerName: 'Test Status', flex: 1, headerClassName },
  ];

  const candidateTests: CandidateTest[] = candidateTestsData ?? []

  const rows: CandidateTest[] = candidateTests.map((candidateTest) => {
    return {
      id: candidateTest.test?.id ?? 0,
      name: candidateTest.test?.name ?? '',
      idcandidate: candidateTest.idcandidate,
      idtest: candidateTest.idtest,
      testestatus: candidateTest.testestatus,
      numQuestions: candidateTest.test?.numQuestions ?? 0,
    }
  })

  const handleRowClick = (params: any) => {
    alert(`User "${params.row.names}" clicked`);
  }
  return { isFetchingCandidateTestsData, columns, rows, t, handleRowClick }
}

export default useCandidateTestContext