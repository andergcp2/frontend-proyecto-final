'use client'

import CreateProjectContainer from "./container/CreateProjectContainer"
import { CreateProjectProvider } from "./context/createProjectContext"


const CreateProject = () =>
(
  <CreateProjectProvider>
    <CreateProjectContainer />
  </CreateProjectProvider>
)


export default CreateProject