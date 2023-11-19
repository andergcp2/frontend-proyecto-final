'use client'

import { createContext, useContext } from "react";
import useCandidateContext from "./useCandidateContext";

interface CandidateContextProps { 
  t: (...args: any[]) => string
}

const CandidateContext = createContext<CandidateContextProps>({} as CandidateContextProps);

export const CandidateProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const states = useCandidateContext()
  return (
    <CandidateContext.Provider value={ states }>{children}</CandidateContext.Provider>
  )
}

export const useCandidate = () => useContext(CandidateContext);