import { useTranslations } from "next-intl"

const useQuestionsBankContext = () => {
  const t = useTranslations('Dashboard.Modules.QuestionsBank')

  return { t }
}

export default useQuestionsBankContext