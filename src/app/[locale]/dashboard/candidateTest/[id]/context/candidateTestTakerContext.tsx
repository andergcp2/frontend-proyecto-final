'use client'

import { createContext, useContext } from "react";
import useCandidateTestTakerContext, { TestStep } from "./useCandidateTestTakerContext";
import { CandidateTest, TestAnswer, TestDone, TestQuestion } from "@/models";

interface CandidateTestTakerContextProps {
  currentAnswerOptions: TestAnswer[]
  currentQuestion: TestQuestion
  currentTest: CandidateTest
  isFetchingCandidateTestsData: boolean
  isFinalQuestion: boolean
  numQuestion: number,
  selectedAnswerId: number,
  testId: number,
  testResults: TestDone,
  testStep: TestStep,
  totalQuestions: number,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleNextQuestion: () => void
  handleTestEnd: () => void
  handleTestStart: () => void
  SetTestId: (id: number) => void
  t: (...args: any[]) => string
}

const CandidateTestTakerContext = createContext<CandidateTestTakerContextProps>({} as CandidateTestTakerContextProps);

export const CandidateTestTakerProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const states = useCandidateTestTakerContext()
  return (
    <CandidateTestTakerContext.Provider value={states}>{children}</CandidateTestTakerContext.Provider>
  )
}

export const useCandidateTestTaker = () => useContext(CandidateTestTakerContext);