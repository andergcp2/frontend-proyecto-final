'use client'

import ProjectContainer from "./container/ProjectContainer";
import { ProjectProvider } from "./context/projectContext";

const ProjectPage = () => (
  <ProjectProvider>
    <ProjectContainer />
  </ProjectProvider>
);

export default ProjectPage;
