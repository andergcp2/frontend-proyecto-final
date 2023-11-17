'use client'

import { createContext, useContext } from "react";
import useAssignTestContext from "./useAssignTestContext";
import { FormikProps } from "formik";
import { AssignTestProps, SearchCandidateRow } from "@/models";
import { Test } from "@/models/test.model";

interface AssignTestContextProps {
  candidates: SearchCandidateRow[]
  formik: FormikProps<AssignTestProps>
  isLoading: boolean
  tests: Test[]
  validationSchema: any,
  t: (...args0: any) => string
}

const AssignTestContext = createContext<AssignTestContextProps>({} as AssignTestContextProps);

export const AssignTestProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const states = useAssignTestContext()
  return (
    <AssignTestContext.Provider value={states}>{children}</AssignTestContext.Provider>
  )
}

export const useAssignTest = () => useContext(AssignTestContext);
