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

export interface Question {
  id: number;
  question: string;
  level: number;
}
