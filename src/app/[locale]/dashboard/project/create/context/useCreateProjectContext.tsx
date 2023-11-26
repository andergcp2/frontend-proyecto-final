'use client';

import { useMutation } from "@tanstack/react-query";
import { createProject } from "@/services/project";
import { CreateProjectDTO, Project, mainRoutes } from "@/models";
import * as Yup from 'yup'
import { useState } from "react";
import { useFormik } from "formik";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const softSkillSchema = Yup.object({
  name: Yup.string().required('required'),
})

const techSkillSchema = Yup.object({
  name: Yup.string().required('required'),
})

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

  // MUTATIONS
  const { mutateAsync: CreateProjectReq, isLoading: isCreateProjectLoading } = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      alert('Proyecto creado exitosamente') // TODO Replace with modal
      push(mainRoutes.dashboard.project)
    },
    onError: (error: any) => {
      alert('Hubo un error creando el proyecto')
      console.log(error.message)
    }
  })

  // FUNCTIONS
  const CreateProject = async (variables: CreateProjectDTO) => {
    await CreateProjectReq(variables)
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
    t,
    validationSchema,
    CreateProject,
  };
}

export default useCreateProjectContext;