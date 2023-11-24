'use client';

import { FC } from "react"
import CreateInterviewContainer from "./container/CreateInterviewContainer"
import { CreateInterviewProvider } from "./context/createInterviewContext"

export interface CreateInterviewProps { }

const CreateInterview: FC<CreateInterviewProps> = () => {
  return (
    <CreateInterviewProvider>
      <CreateInterviewContainer />
    </CreateInterviewProvider>
  )
}

export default CreateInterview