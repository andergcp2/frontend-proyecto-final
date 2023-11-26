'use client';

import * as Yup from 'yup';
import { useTranslations } from "next-intl";
import { CreateInterviewFormProps } from '@/models/interview.model';
import { Dayjs } from 'dayjs';
import { useFormik } from 'formik';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getCandidatesByCriteria } from '@/services/candidate';
import { useEffect, useState } from 'react';
import { SearchCandidateRow } from '@/models';
import { getProjectsByCompanyId } from '@/services/project';
import { useSession } from 'next-auth/react';
import { createInterview } from '@/services/interview';

const validationSchema = Yup.object<CreateInterviewFormProps>({
  candidateId: Yup.number().required('required'),
  companyId: Yup.number().required('required'),
  projectId: Yup.number().required('required'),
  interviewDate: Yup.string().required('required'),
  topic: Yup.string().required('required'),
})

const useCreateInterviewContext = () => {
  const t = useTranslations('Interview.Create')

  const [open, setOpen] = useState(false)
  const [candidates, setCandidates] = useState<SearchCandidateRow[]>([])
  const [stringInterviewDate, setStringInterviewDate] = useState('')

  const { data: sessionData, } = useSession()
  let companyId = sessionData?.user?.id

  // HANDLERS
  const handleDateTimeChange = (date: Dayjs) => {
    let month: string | number = date.month() + 1
    month = `${month < 10 ? '0' : ''}${month}`
    const year = date.year()
    const day = `${date.date() < 10 ? '0' : ''}${date.date()}`
    setStringInterviewDate(`${year}-${month}-${day}`)
    formik.setFieldValue('interviewDate', date)
  }

  // QUERIES
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

  const getProjectsData = async () => {
    const response = await getProjectsByCompanyId(companyId)
    return response
  }
  const { data: projects, isFetching: isFetchingProjectsData, refetch } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjectsData,
    onError: (error: any) => {
      console.log(error.message)
    },
    enabled: !!companyId,
  })

  // EFFECTS
  useEffect(() => {
    if (companyId) refetch()
  }, [companyId, refetch])

  // MUTATIONS
  const CreateInterview = async (values: CreateInterviewFormProps) => {
    createInterviewReq({
      candidateId: values.candidateId,
      companyId: parseInt(companyId ?? '0'),
      projectId: values.projectId,
      interviewDate: stringInterviewDate,
      topic: values.topic,
    })
  }

  const { mutateAsync: createInterviewReq, isLoading: isLoadingCreateInterview } = useMutation({
    mutationFn: createInterview,
    onSuccess: (data) => {
      setOpen(true)
      console.log(data)
    },
    onError: (error: any) => {
      console.log(error.message)
    },
  })

  // FORMIK
  const formik = useFormik<CreateInterviewFormProps>({
    initialValues: {
      candidateId: 0,
      companyId: 0,
      projectId: 0,
      interviewDate: '',
      topic: '',
    },
    validationSchema: validationSchema,
    onSubmit: CreateInterview
  })

  // CONSTS
  const isLoading = isFetchingCandidatesData || isFetchingProjectsData

  return {
    candidates,
    formik,
    isLoading,
    open,
    projects,
    t,
    handleDateTimeChange,
    setOpen,
  }
}

export default useCreateInterviewContext;