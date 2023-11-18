'use client'

import { Dispatch, SetStateAction, createContext, useContext } from "react";
import useAssignTestContext from "./useAssignTestContext";
import { FormikProps } from "formik";
import { AssignTestProps, SearchCandidateRow } from "@/models";
import { Test } from "@/models/test.model";

interface AssignTestContextProps {
  candidates: SearchCandidateRow[]
  formik: FormikProps<AssignTestProps>
  isLoading: boolean
  open: boolean
  tests: Test[]
  validationSchema: any,
  handleCandidateChange: (_: any, value: any) => void
  handleTestChange: (_: any, value: any) => void
  setOpen: Dispatch<SetStateAction<boolean>>
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
