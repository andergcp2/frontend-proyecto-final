import CandidateTestContainer from "./container/CandidateTestContainer";
import { CandidateTestProvider } from "./context/candidateTestContext";

const CandidateTest = () => {
  return (
    <CandidateTestProvider>
      <CandidateTestContainer />
    </CandidateTestProvider>
  )
}

export default CandidateTest;