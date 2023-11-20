import Confetti from 'react-confetti'
import InitialStep from "../components/InitialStep"
import QuestionStep from "../components/QuestionStep"
import ResultsStep from "../components/ResultsStep"
import { useCandidateTestTaker } from "../context/candidateTestTakerContext"
import { TestStep } from "../context/useCandidateTestTakerContext"

const TestMain = () => {
  const { testStep, testResults } = useCandidateTestTaker()

  if (testStep === TestStep.INIT) {
    return (
      <InitialStep />
    )
  }

  if (testStep === TestStep.QUESTIONS) {
    return (
      <QuestionStep />
    )
  }

  if (testStep === TestStep.RESULTS) {
    return (
      <>
        {testResults.result > 4 ? <Confetti width={2000} height={850} numberOfPieces={100} /> : <> </>}
        <ResultsStep />
      </>
    )
  }
}

export default TestMain