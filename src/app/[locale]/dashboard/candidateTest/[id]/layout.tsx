'use client'

import { FC } from 'react'
import { CandidateTestTakerProvider } from './context/candidateTestTakerContext';

export interface TestTakerLayoutProps {
  children: React.ReactNode;
}

const services: FC<TestTakerLayoutProps> = ({ children }) => {
  return (
    <CandidateTestTakerProvider>
      {children}
    </CandidateTestTakerProvider>
  )
}

export default services