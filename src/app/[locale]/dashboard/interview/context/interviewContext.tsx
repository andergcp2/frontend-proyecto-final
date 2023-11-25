import { createContext, useContext } from "react";
import { GridColDef } from "@mui/x-data-grid";
import useInterviewContext from "./useInterviewContext";
import { Interview } from "@/models/interview";

interface InterviewContextProps {
  columns: GridColDef[]
  comment: string
  interviewToRate: Interview | null
  isFetchingInterviewsData: boolean
  isRatingLoading: boolean
  openRate: boolean
  rating: number
  rows: Interview[]
  handleRateChange: (event: any) => void
  handleRateClose: () => void
  handleRateCommentChange: (event: any) => void
  handleRateInterview: () => void
  handleRowClick: (params: any) => void
  t: (...args0: any) => string
}

const InterviewContext = createContext<InterviewContextProps>({} as InterviewContextProps);

export const InterviewProvider = ({ children }: {
  children: React.ReactNode
}) => {
  const states = useInterviewContext()
  return (
    <InterviewContext.Provider value={states}>
      {children}
    </InterviewContext.Provider>
  )
}

export const useInterview = () => useContext(InterviewContext);