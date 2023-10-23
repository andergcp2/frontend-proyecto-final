'use client'

import { createContext, useContext } from 'react'
import useProjectContext from './useProjectContext';
import { CreateProjectDTO, Project } from '@/models';

interface ProjectContextProps {
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