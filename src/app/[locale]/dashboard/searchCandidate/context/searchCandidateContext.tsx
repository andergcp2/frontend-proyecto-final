'use client';

import { Dispatch, SetStateAction, createContext, useContext } from "react";
import useSearchCandidateContext from "./useSearchCandidateContext";
import { GridColDef } from "@mui/x-data-grid";
import { Candidate, Project, SearchCandidateResponse, SearchCandidateRow, searchCandidateParams } from "@/models";

interface SearchCandidateContextProps {
  columns: GridColDef[],
  isFetchingCandidatesData: boolean,
  rows: SearchCandidateRow[],
  projects: Project[],
  validationSchema: any,
  buildParams: (values: searchCandidateParams) => string,
  getCandidatesData: () => Promise<SearchCandidateResponse>,
  setQueryParams: Dispatch<SetStateAction<string>>
  t: (...args: any[]) => string
}
const SearchCandidateContext = createContext<SearchCandidateContextProps>({} as SearchCandidateContextProps);

export const SearchCandidateProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const states = useSearchCandidateContext()
  return (
    <SearchCandidateContext.Provider value={states}>{children}</SearchCandidateContext.Provider>
  )
}

export const useSearchCandidate = () => useContext(SearchCandidateContext);