import QuestionsBankContainer from "./container/QuestionsBankContainer";
import { QuestionsBankProvider } from "./context/questionsBankContext"

const QuestionsBank = () => {
  return (
    <QuestionsBankProvider>
      <QuestionsBankContainer />
    </QuestionsBankProvider>
  )
}

export default QuestionsBank;