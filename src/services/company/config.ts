import { Method } from "axios";

export const companyMethods = {
  getCompanyCandidates: {
    method: "GET" as Method,
    url: "companies/{params.companyId}/candidates",
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
  rateCandidate: {
    method: "POST" as Method,
    url: "projects/{params.projectId}/candidates/{params.candidateId}/evaluate",
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
};
