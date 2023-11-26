import { createContext, useContext } from "react";
import useProjectContext from "./useProjectContext";
import { GridColDef } from "@mui/x-data-grid";
import { Project } from "@/models";

interface ProjectContextProps {
  columns: GridColDef[]
  rows: Project[]
  isFetchingProjectsData: boolean
  handleRowClick: (params: any) => void
  t: (...args0: any) => string
}

const ProjectContext = createContext<ProjectContextProps>({} as ProjectContextProps);

export const ProjectProvider = ({ children }: {
  children: React.ReactNode
}) => {
  const states = useProjectContext()
  return (
    < ProjectContext.Provider value={states}>
      {children}
    </ProjectContext.Provider >
  )
}

export const useProject = () => useContext(ProjectContext);