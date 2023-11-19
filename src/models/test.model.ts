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
  id: number;
  idcandidate: number;
  idtest: number;
  maxdatepresent?: string;
  presentationdate?: string | null;
  qualificationtest?: string | null;
  testestatus: string;
  createdAt?: string;
  test?: {
    profiles: Array<{ id: number; profile: string }>;
    techSkills: Array<{ id: number; skill: string }>;
    questions: Array<{ id: number; question: string; level: number }>;
    id: number;
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
