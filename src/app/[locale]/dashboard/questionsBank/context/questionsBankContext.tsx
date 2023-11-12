'use client';
import { createContext, useContext } from "react";
import useQuestionsBankContext from "./useQuestionsBankContext";

interface QuestionsBankContextProps { }

const QuestionsBankContext = createContext<QuestionsBankContextProps>({} as QuestionsBankContextProps);

export const QuestionsBankProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const states = useQuestionsBankContext()
  return (
    <QuestionsBankContext.Provider value={{ states }}>{children}</QuestionsBankContext.Provider>
  )
}

export const useQuestionsBank = () => useContext(QuestionsBankContext);