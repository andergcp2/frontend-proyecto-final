'use client';
import { createContext, useContext } from "react";
import useQuestionsBankContext from "./useQuestionsBankContext";
import { UploadProps } from "antd/es/upload";

interface QuestionsBankContextProps {
  props: UploadProps<any>,
  t: (...args: any[]) => string
}

const QuestionsBankContext = createContext<QuestionsBankContextProps>({} as QuestionsBankContextProps);

export const QuestionsBankProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const states = useQuestionsBankContext()
  return (
    <QuestionsBankContext.Provider value={states}>{children}</QuestionsBankContext.Provider>
  )
}

export const useQuestionsBank = () => useContext(QuestionsBankContext);