import { createContext, useContext } from "react";
import useManageCandidatesContext from "./useManageCandidatesContext";
import { GridColDef } from "@mui/x-data-grid";
import { CompanyCandidate } from "@/models";

interface ManageCandidatesContextProps {
  candidateToRate: CompanyCandidate | null
  columns: GridColDef[]
  comment: string
  // interviewToRate: Interview | null
  isFetchingCandidatesData: boolean
  isRatingLoading: boolean
  openRate: boolean
  rating: number
  rows: CompanyCandidate[]
  handleRateChange: (event: any) => void
  handleRateClose: () => void
  handleRateCommentChange: (event: any) => void
  handleRateCandidate: () => void
  handleRowClick: (params: any) => void
  t: (...args0: any) => string
}

const ManageCandidatesContext = createContext<ManageCandidatesContextProps>({} as ManageCandidatesContextProps);

export const ManageCandidatesProvider = ({ children }: {
  children: React.ReactNode
}) => {
  const states = useManageCandidatesContext()
  return (
    < ManageCandidatesContext.Provider value={states}>
      {children}
    </ManageCandidatesContext.Provider >
  )
}

export const useManageCandidates = () => useContext(ManageCandidatesContext);