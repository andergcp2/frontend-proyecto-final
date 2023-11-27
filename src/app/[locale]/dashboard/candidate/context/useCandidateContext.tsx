'use client'

import { SearchCandidateRow } from "@/models"
import { useQuery } from "@tanstack/react-query"
import { useTranslations } from "next-intl"
import { useState } from "react"


const useCandidateContext = () => {
  const t = useTranslations('Dashboard.Modules.Candidate')

  const [username, setUsename] = useState<string>('')
  const [candidate, setCandidate] = useState<SearchCandidateRow>()

  // const getCandidateByUsername = async () => {
  //   const response = await (username)
  //   return response
  // }

  // const { data: candidateData, isFetching: isFetchingCandidatesData } = useQuery({
  //   queryKey: ['candidate', username],
  //   queryFn: getCandidateByUsername,
  //   onSuccess: (data) => {
  //     setCandidate(data)
  //   },
  //   onError: (error: any) => {
  //     console.log(error.message)
  //   }}
  // );

  return { 
    t
   }
}

export default useCandidateContext