'use client';

import InterviewContainer from "./container/InterviewContainer"
import { InterviewProvider } from "./context/interviewContext"

const Interview = () => {
  return (
    <InterviewProvider>
      <InterviewContainer />
    </InterviewProvider>
  )
}

export default Interview