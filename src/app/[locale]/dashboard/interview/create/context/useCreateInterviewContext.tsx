'use client';

import * as Yup from 'yup';
import { useTranslations } from "next-intl";
import { CreateInterviewFormProps } from '@/models/interview';
import { useFormik } from 'formik';

const validationSchema = Yup.object<CreateInterviewFormProps>({
  candidateId: Yup.number().required('required'),
  companyId: Yup.number().required('required'),
  projectId: Yup.number().required('required'),
  profileId: Yup.number().required('required'),
  interviewDate: Yup.string().required('required'),
  topic: Yup.string().required('required'),
})

const useCreateInterviewContext = () => {
  const t = useTranslations('Interview.Create')

  // FORMIK
  const formik = useFormik<CreateInterviewFormProps>({
    initialValues: {
      candidateId: 0,
      companyId: 0,
      projectId: 0,
      profileId: 0,
      interviewDate: '',
      topic: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values)
    }
  })



  return { formik, t }
}

export default useCreateInterviewContext;