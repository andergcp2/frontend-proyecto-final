import { CandidateTechnicalSkill, CandidateProfile } from ".";

export interface Test {
  profiles: CandidateProfile[];
  techSkills: CandidateTechnicalSkill[];
  questions: Question[];
  id: number;
  name: string;
  numQuestions: number;
  minLevel: number;
  createdAt: string;
}

export interface CandidateTest {
  id: string;
  idcandidate: string;
  idtest: string;
  maxdatepresent?: string;
  presentationdate?: string | null;
  qualificationtest?: string | null;
  testestatus: string;
  createdAt?: string;
  test?: {
    profiles: Array<{ id: number; profile: string }>;
    techSkills: Array<{ id: number; skill: string }>;
    questions: Array<{ id: number; question: string; level: number }>;
    id: string;
    name: string;
    numQuestions: number;
    minLevel: number;
    createdAt: string;
  };
}

export interface Question {
  id: number;
  question: string;
  level: number;
}

export interface TestNext {
  pruebaId: number;
  candidatoId: number;
  totalQuestions: number;
  numQuestion: number;
  question: TestQuestion;
  answers: TestAnswer[];
}

export interface TestQuestion {
  id: number;
  question: string;
}

export interface TestAnswer {
  id: number;
  answer: string;
}

export interface TestDone {
  testId: number;
  candidateId: number;
  result: number;
}

export interface TestInitProps {
  candidateId: number;
  testId: number;
}

export interface TestNextProps extends TestInitProps {
  totalQuestions: number;
  numQuestion: number;
  questionId: number;
  answerId: number;
}
