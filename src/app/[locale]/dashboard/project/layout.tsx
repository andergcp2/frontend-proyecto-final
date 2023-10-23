'use client'

import { FC } from "react";
import { ProjectProvider } from "./context/projectContext";

interface ProjectLayoutProps {
  children: React.ReactNode
}

const ProjectLayout: FC<ProjectLayoutProps> = (
  { children }:
    { children: React.ReactNode }
) => {
  return (
    <ProjectProvider>
      {children}
    </ProjectProvider>);
}

export default ProjectLayout;