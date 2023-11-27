export interface CompanyCandidate {
  id: number;
  name: string;
  lastName: string;
  email: string;
  phone: number;
  companyId?: number;
  score?: number;
  comments?: string;
  projectId?: number;
}

export interface RateCompanyCandidate {
  projectId: number;
  candidateId: number;
  score: number;
  comments: string;
}
