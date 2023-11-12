'use client'

import { createContext, useContext } from "react";
import useCandidateTestContext from "./useCandidateTestContext";

interface CandidateTestContextProps { }

const CandidateTestContext = createContext<CandidateTestContextProps>({} as CandidateTestContextProps);

export const CandidateTestProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const states = useCandidateTestContext()
  return (
    <CandidateTestContext.Provider value={{ states }}>{children}</CandidateTestContext.Provider>
  )
}

export const useCandidateTest = () => useContext(CandidateTestContext);