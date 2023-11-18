import { Test } from "./test.model";

export interface Candidate {
  id: number;
  names: string;
  lastNames: string;
  identificationType: string;
  identificationNumber: string;
  email: string;
  phoneNumber: string;
  country: string;
  city: string;
  address: string;
  photo: string;
  profession: string;
  softskills: CandidateSoftSkill[];
  technicalSkills: CandidateTechnicalSkill[];
  username: string;
  password: string;
  termsAndConditions: boolean;
  privacyPolicy: boolean;
}

export interface CandidateSoftSkill {
  id?: number;
  name?: string;
  level?: number;
}

export interface CandidateTechnicalSkill {
  id?: number;
  name?: string;
  level?: number;
}

export type SearchCandidateRow = {
  id: number;
  name?: string;
  lastName?: string;
  identificationType?: string;
  identificationNumber?: string;
  email?: string;
  phone?: string;
  country?: string;
  city?: string;
  address?: string;
  photo?: string;
  profession?: string;
  softskills?: CandidateSoftSkill[];
  technicalSkills?: CandidateTechnicalSkill[];
  createdAt?: string;
};

export type searchCandidateParams = {
  role?: "";
  softSkills?: [];
  technicalSkills?: [];
};

export type SearchCandidateResponse = {
  items: SearchCandidateRow[];
  page: number;
  total_items: number;
  pages: number;
};

export interface AssignTestProps {
  candidateId: number;
  testId: number;
}

export interface CandidateProfile {
  id: number;
  profile: string;
}
