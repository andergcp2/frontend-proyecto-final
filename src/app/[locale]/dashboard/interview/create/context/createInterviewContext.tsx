import { Dispatch, SetStateAction, createContext, useContext } from "react";
import useCreateInterviewContext from "./useCreateInterviewContext";
import { FormikProps } from "formik";
import { CreateInterviewFormProps } from "@/models/interview.model";
import { Project, SearchCandidateRow } from "@/models";

interface CreateInterviewContextProps {
  candidates: SearchCandidateRow[] | undefined
  formik: FormikProps<CreateInterviewFormProps>
  isLoading: boolean
  open: boolean
  projects: Project[] | undefined
  handleDateTimeChange: (event: any, value: any) => void
  handleCandidateChange: (event: any, value: any) => void
  handleProjectChange: (event: any, value: any) => void
  setOpen: Dispatch<SetStateAction<boolean>>
  t: (...args0: any) => string
}

const CreateInterviewContext = createContext<CreateInterviewContextProps>({} as CreateInterviewContextProps);

export const CreateInterviewProvider = ({ children }: {
  children: React.ReactNode
}) => {
  const states = useCreateInterviewContext();
  return (
    <CreateInterviewContext.Provider value={states}>
      {children}
    </CreateInterviewContext.Provider>
  )
}

export const useCreateInterview = () => useContext(CreateInterviewContext);