'use client'

import { FC } from "react";
import { CreateProjectProvider } from "./create/context/createProjectContext";

interface ProjectLayoutProps {
  children: React.ReactNode
}

const ProjectLayout: FC<ProjectLayoutProps> = (
  { children }:
    { children: React.ReactNode }
) => {
  return (
    <CreateProjectProvider>
      {children}
    </CreateProjectProvider>);
}

export default ProjectLayout;