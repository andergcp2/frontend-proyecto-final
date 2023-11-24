import { createContext, useContext } from "react";
import useCreateInterviewContext from "./useCreateInterviewContext";
import { FormikProps } from "formik";
import { CreateInterviewFormProps } from "@/models/interview";

interface CreateInterviewContextProps {
  formik: FormikProps<CreateInterviewFormProps>
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