import { Software } from "aws-sdk/clients/directconnect";

export const PASSWORD_REGEX =
  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,30}$/;

export interface SignUpCompanyDTO {
  companyName: string;
  idType: string;
  idNumber: number;
  industry: string;
  email: string;
  phone: number;
  country: string;
  city: string;
  address: string;
  logo: string;
  reprIdType: string;
  reprIdNumber: number;
  legal_repr_profession: string;
  reprName: string;
  password: string;
}

export interface SignUpCandidateDTO {
  name: string;
  lastName: string;
  idType: string;
  identification: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  // photo: string;
  profession: string;
  // softskills: CandidateSoftSkill[];
  softskills: string[];
  technicalSkills: string[];
  // technicalSkills: CandidateTechnicalSkill[];
  username: string;
  password: string;
  // termsAndConditions: boolean;
  // privacyPolicy: boolean;
}

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
  id: number;
  name: string;
  level: number;
}

export interface CandidateTechnicalSkill {
  id: number;
  name: string;
  level: number;
}

export interface Permission {
  name: string;
}
export interface Role {
  id: number;
  name: string;
  description?: string;
  permissions: Permission[];
}

export interface User {
  id: number;
  email: string;
  username: string;
  name: string;
  IdToken?: string;
  token?: string;
  role?: Role;
}

export interface LoginDTO {
  username: string;
  password: string;
}

export interface Login {
  token: string;
  user: User;
}
