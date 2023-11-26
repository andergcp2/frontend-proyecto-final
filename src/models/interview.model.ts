export interface CreateInterviewFormProps {
  candidateId: number;
  companyId: number;
  projectId: number;
  interviewDate: string;
  topic: string;
}

export interface Interview extends CreateInterviewFormProps {
  status: string;
  comment: string;
  interviewId: number;
  score?: number;
}

export interface InterviewsResponse {
  items: Interview[];
  page: number;
  pages: number;
  total_items: number;
}

export interface RateInterview {
  interviewId: number;
  rating: number;
  comment: string;
}
