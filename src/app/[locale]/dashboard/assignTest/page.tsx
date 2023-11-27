'use client'

import AssignTestContainer from "./container/AssignTestContainer"
import { AssignTestProvider } from "./context/assignTestContext"

const AssignTest = () => {
  return (
    <AssignTestProvider>
      <AssignTestContainer />
    </AssignTestProvider>
  )
}

export default AssignTest