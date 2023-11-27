'use client';

import { useMutation } from "@tanstack/react-query";
import { createProject } from "@/services/project";
import { CreateProjectDTO, Project, mainRoutes } from "@/models";
import * as Yup from 'yup'
import { useState } from "react";
import { useFormik } from "formik";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";

// const softSkillSchema = Yup.object({
//   name: Yup.string().required('required'),
// })

// const techSkillSchema = Yup.object({
//   name: Yup.string().required('required'),
// })

const profileSchema = Yup.object({
  name: Yup.string().required('required'),
  profession: Yup.string().required('required'),
  // softSkill is an array of SoftSkill
  // softskills: Yup.array().of(softSkillSchema),
  // techskills: Yup.array().of(techSkillSchema),
  softskills: Yup.string().required('required'),
  techskills: Yup.string().required('required'),
})

const validationSchema = Yup.object({
  name: Yup.string().required('required'),
  type: Yup.string().required('required'),
  leader: Yup.string().required('required'),
  role: Yup.string().required('required'),
  phone: Yup.number().required('required'),
  email: Yup.string().required('required'),
  country: Yup.string().required('required'),
  city: Yup.string().required('required'),
  address: Yup.string().required('required'),
  profiles: Yup.array().of(profileSchema)
})

const useCreateProjectContext = () => {
  // TRANSLATIONS
  const t = useTranslations('Project')
  const { push } = useRouter()

  // STATES
  const [open, setOpen] = useState(false)
  const [modalType, setModalType] = useState<'success' | 'error' | 'warning' | 'info' | 'question'>('info')
  const [modalTitle, setModalTitle] = useState('')

  // MUTATIONS
  const { mutateAsync: CreateProjectReq, isLoading: isCreateProjectLoading } = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      setModalTitle(t('createProjectSuccess'))
      setModalType('success')
      setOpen(true)
      push(mainRoutes.dashboard.project)
    },
    onError: (error: any) => {
      setModalTitle(t('createProjectError'))
      setModalType('error')
      setOpen(true)
      console.log(error.message)
    }
  })

  // FUNCTIONS
  const CreateProject = async (variables: CreateProjectDTO) => {
    const session = await getSession()
    const company = parseInt(session?.user?.id as string ?? '')
    await CreateProjectReq({ ...variables, company })
  }

  const handleClose = () => {
    setOpen(false)
    push(mainRoutes.dashboard.project)
  }

  // FORMIK - FORMS
  const formik = useFormik<Project>({
    initialValues: {
      id: 0,
      name: '',
      type: '',
      leader: '',
      role: '',
      phone: 0,
      email: '',
      country: '',
      city: '',
      address: '',
      profiles: [],
    },
    validationSchema,
    onSubmit: CreateProject
  })

  return {
    formik,
    modalTitle,
    modalType,
    open,
    t,
    validationSchema,
    CreateProject,
    handleClose,
  };
}

export default useCreateProjectContext;