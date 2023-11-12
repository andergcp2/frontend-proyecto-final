import { useTranslations } from "next-intl"

const useCandidateTestContext = () => {
  const t = useTranslations('Dashboard.Modules.CandidateTest')
  return { t }
}

export default useCandidateTestContext