import { useCallback, useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl"
import { getSession } from "next-auth/react";
import { testDone, testInit, testNext } from "@/services/test";
import { getCandidateTests } from "@/services/candidate";
import { CandidateTest, TestAnswer, TestDone, TestNext, TestQuestion } from '@/models'

export enum TestStep {
  INIT = 'INIT',
  QUESTIONS = 'QUESTIONS',
  RESULTS = 'RESULTS',
}

const useCandidateTestTakerContext = () => {
  const t = useTranslations('Dashboard.Modules.CandidateTestTaker')

  const [candidateId, setCandidateId] = useState<number>(0)
  const [candidateTests, setCandidateTests] = useState<CandidateTest[]>([])
  const [currentAnswerOptions, setCurrentAnswerOptions] = useState<TestAnswer[]>([])
  const [currentQuestion, setCurrentQuestion] = useState<TestQuestion>({} as TestQuestion)
  const [currentTest, setCurrentTest] = useState<CandidateTest>({} as CandidateTest)
  const [isFinalQuestion, setIsFinalQuestion] = useState<boolean>(false)
  const [numQuestion, setNumQuestion] = useState<number>(0)
  const [questionId, setQuestionId] = useState<number>(0)
  const [selectedAnswerId, setSelectedAnswerId] = useState<number>(0);
  const [testId, setTestId] = useState<number>(0)
  const [testResults, setTestResults] = useState<TestDone>({} as TestDone)
  const [testStep, setTestStep] = useState<TestStep>(TestStep.INIT)
  const [totalQuestions, setTotalQuestions] = useState<number>(0)
  const [initTestError, setInitTestError] = useState<string>('')

  const SetTestId = useCallback((id: number) => {
    setTestId(id)
  }, [])

  const updateNewQuestion = useCallback((data: TestNext) => {
    setCurrentQuestion(data.question)
    setCurrentAnswerOptions(data.answers)
    setTotalQuestions(data.totalQuestions)
    setNumQuestion(data.numQuestion)
    setQuestionId(data.question.id)
  }, [])

  // QUERIES
  const getTestsData = async () => {
    const session = await getSession()
    setCandidateId(parseInt(session?.user?.id ?? '0'))
    const response = await getCandidateTests(session?.user?.id as string ?? '')
    return response
  }

  const { isFetching: isFetchingCandidateTestsData } = useQuery({
    queryKey: ['candidateTests'],
    queryFn: getTestsData,
    onSuccess: (data) => {
      setCandidateTests([...data] ?? [])
    },
    onError: (error: any) => {
      setInitTestError(error.message)
      console.log(error.message) // TODO Do something
    },
    enabled: !!testId
  })

  // EFFECTS
  useEffect(() => {
    const currentTest = candidateTests.find(
      (candidateTest) => parseInt(candidateTest.idtest) == testId
    ) ?? {} as CandidateTest
    setCurrentTest(currentTest)
    return () => {
      setCurrentTest({} as CandidateTest)
    }
  }, [candidateTests, testId])

  useEffect(() => {
    setIsFinalQuestion(numQuestion === totalQuestions)
    return () => {
      setIsFinalQuestion(false)
    }
  }, [numQuestion, totalQuestions])

  //MUTATIONS
  const { mutateAsync: testInitReq, isLoading: isLoadingInitTest } = useMutation({
    mutationKey: ['candidateTest'],
    mutationFn: testInit,
    onSuccess: (data) => {
      updateNewQuestion(data)
    },
    onError: (error: any) => {
      setInitTestError(error.message)
      alert(error.message)
      console.log('Ander error testInit', error.message)
    }
  })

  const { mutateAsync: testNextReq, isLoading: isLoadingNextTest } = useMutation({
    mutationKey: ['candidateTest'],
    mutationFn: testNext,
    onSuccess: (data) => {
      updateNewQuestion(data)
    },
    onError: (error: any) => {
      alert(error.message)
      console.log('Ander error testNext ', error.message)
    }
  })

  const { mutateAsync: testDoneReq, isLoading: isLoadingDoneTest } = useMutation({
    mutationKey: ['candidateTest'],
    mutationFn: testDone,
    onSuccess: (data) => {
      setTestResults(data)
    },
    onError: (error: any) => {
      alert(error.message)
      console.log('Ander error testDone ', error.message)
    }
  })

  // HANDLERS
  const handleTestStart = useCallback(async () => {
    await testInitReq({ candidateId, testId })
    if (initTestError) {
      alert(initTestError)
      setInitTestError('')
      return
    }
    setTestStep(TestStep.QUESTIONS)
  }, [candidateId, initTestError, testId, testInitReq])

  const handleNextQuestion = useCallback(() => {
    testNextReq({ candidateId, testId, totalQuestions, numQuestion, questionId, answerId: selectedAnswerId })
  }, [candidateId, numQuestion, questionId, selectedAnswerId, testId, testNextReq, totalQuestions])

  const handleTestEnd = useCallback(() => {
    testDoneReq({ candidateId, testId, totalQuestions, numQuestion, questionId, answerId: selectedAnswerId })
    setTestStep(TestStep.RESULTS)
  }, [candidateId, numQuestion, questionId, selectedAnswerId, testDoneReq, testId, totalQuestions])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswerId(parseInt((event.target as HTMLInputElement).value));
  };

  return {
    currentAnswerOptions,
    currentQuestion,
    currentTest,
    isFetchingCandidateTestsData,
    isFinalQuestion,
    numQuestion,
    totalQuestions,
    selectedAnswerId,
    t,
    testId,
    testResults,
    testStep,
    handleChange,
    handleNextQuestion,
    handleTestEnd,
    handleTestStart,
    SetTestId
  }
}

export default useCandidateTestTakerContext