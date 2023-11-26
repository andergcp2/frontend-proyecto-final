'use client'

import { createContext, useContext } from 'react'
import useCreateProjectContext from './useCreateProjectContext';
import { CreateProjectDTO, Project } from '@/models';
import { FormikProps } from 'formik';

interface CreateProjectContextProps {
  formik: FormikProps<Project>
  t: (...args0: any) => string
  validationSchema: any,
  CreateProject: (variables: CreateProjectDTO) => Promise<void>,
}

const CreateProjectContext = createContext<CreateProjectContextProps>({} as CreateProjectContextProps);

export const CreateProjectProvider = ({ children }: {
  children: React.ReactNode
}) => {
  const states = useCreateProjectContext();
  return (
    <CreateProjectContext.Provider value={states}>
      {children}
    </CreateProjectContext.Provider>
  )
}

export const useCreateProject = () => useContext(CreateProjectContext);