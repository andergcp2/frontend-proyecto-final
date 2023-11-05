'use client'

import { createContext, useContext } from 'react'
import useProjectContext from './useProjectContext';
import { CreateProjectDTO, Project } from '@/models';
import { FormikProps } from 'formik';

interface ProjectContextProps {
  formik: FormikProps<Project>
  t: (...args0: any) => string
  validationSchema: any,
  CreateProject: (variables: CreateProjectDTO) => Promise<void>,
}

const ProjectContext = createContext<ProjectContextProps>({} as ProjectContextProps);

export const ProjectProvider = ({ children }: {
  children: React.ReactNode
}) => {
  const states = useProjectContext();
  return (
    <ProjectContext.Provider value={states}>
      {children}
    </ProjectContext.Provider>
  )
}

export const useProject = () => useContext(ProjectContext);