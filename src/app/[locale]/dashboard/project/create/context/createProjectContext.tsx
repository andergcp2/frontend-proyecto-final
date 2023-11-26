'use client'

import { createContext, useContext } from 'react'
import useCreateProjectContext from './useCreateProjectContext';
import { CreateProjectDTO, Project } from '@/models';
import { FormikProps } from 'formik';

interface CreateProjectContextProps {
  formik: FormikProps<Project>
  modalTitle: string,
  modalType: 'success' | 'error' | 'warning' | 'info' | 'question',
  open: boolean,
  validationSchema: any,
  CreateProject: (variables: CreateProjectDTO) => Promise<void>,
  handleClose: () => void,
  t: (...args0: any) => string
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