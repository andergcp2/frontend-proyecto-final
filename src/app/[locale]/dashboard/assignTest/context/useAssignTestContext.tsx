'use client'

import { useFormik } from "formik"
import { useTranslations } from "next-intl"
import * as Yup from 'yup'
import { assignTest, getCandidatesByCriteria } from '@/services/candidate'
import { useMutation, useQuery } from "@tanstack/react-query";
import { AssignTestProps, SearchCandidateRow } from "@/models";
import { getTests } from "@/services/test"
import { useMemo, useState } from "react"
import { Test } from "@/models/test.model"

const validationSchema = Yup.object<AssignTestProps>({
  candidateId: Yup.string().required('required'),
  testId: Yup.string().required('required'),
})

const useAssignTestContext = () => {
  const t = useTranslations('Dashboard.Modules.AssignTest')

  // STATES
  const [candidates, setCandidates] = useState<SearchCandidateRow[]>([])
  const [tests, setTests] = useState<Test[]>([])
  const [open, setOpen] = useState(false)

  // MUTATIONS
  const { mutateAsync: AssignTestReq, isLoading: isAssignTestLoading } = useMutation({
    mutationFn: assignTest,
    onSuccess: () => {
      setOpen(true)
      // alert('Test asignado exitosamente')
      console.log('Test asignado exitosamente')
    },
    onError: (error: any) => {
      alert('Hubo un error asignando el test')
      console.log(error.message)
    }
  })

  const getCandidatesData = async () => {
    const response = await getCandidatesByCriteria({ queryParams: '', page: 1, perPage: 10 })
    return response
  }

  const { isFetching: isFetchingCandidatesData } = useQuery({
    queryKey: ['candidates'],
    queryFn: getCandidatesData,
    onSuccess: (data) => {
      setCandidates([...data.items] ?? [])
      console.log(data)
    },
    onError: (error: any) => {
      console.log(error.message)
    },
  })

  const getTestsData = async () => {
    const response = await getTests()
    return response
  }
  const { isFetching: isFetchingTestsData } = useQuery({
    queryKey: ['tests'],
    queryFn: getTestsData,
    onSuccess: (data) => {
      setTests([...data] ?? [])
      console.log(data)
    },
    onError: (error: any) => {
      console.log(error.message)
    },
  })

  // FUNCTIONS
  const AssignTest = async (variables: AssignTestProps) => {
    await AssignTestReq(variables)
  }


  // EFFECTS - MEMOS
  const isLoading = useMemo(
    () =>
      isFetchingCandidatesData ||
      isFetchingTestsData ||
      isAssignTestLoading, [
    isAssignTestLoading, isFetchingCandidatesData, isFetchingTestsData]
  )

  // useEffect(() => {
  //   console.log('isLoading', isLoading)
  // }, [isLoading])

  // FORMIK
  const formik = useFormik<AssignTestProps>({
    initialValues: {
      candidateId: 0,
      testId: 0,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await AssignTest(values)
    }
  })

  const handleCandidateChange = (_: any, value: any) => {
    formik.setFieldValue("candidateId", value?.id || null);
  };

  const handleTestChange = (_: any, value: any) => {
    formik.setFieldValue("testId", value?.id || null);
  };

  return {
    candidates,
    isLoading,
    formik,
    open,
    t,
    tests,
    validationSchema,
    handleCandidateChange,
    handleTestChange,
    setOpen,
  }
}

export default useAssignTestContext