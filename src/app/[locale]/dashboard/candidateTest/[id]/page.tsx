'use client'

import { useEffect } from 'react'
import TestMain from './container/TestMain'
import { useCandidateTestTaker } from './context/candidateTestTakerContext'

export default function TestPage({ params }: { params: { id: string } }) {
  const { SetTestId } = useCandidateTestTaker()
  useEffect(() => {
    SetTestId(parseInt(params.id))
    //Clean up component
    return () => {
      SetTestId(0)
    }
  }, [params.id, SetTestId])

  return (
    <TestMain />
  )
}
