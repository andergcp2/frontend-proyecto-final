import { Method } from "axios";

export const candidateMethods = {
  getCandidatesByCriteria: {
    method: "GET" as Method,
    url: "candidates/{params.queryParams}",
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
  assignTest: {
    method: "POST" as Method,
    // url: "candidates/tests",
    url: "candidateTest",
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
  getCandidateTests: {
    method: "GET" as Method,
    url: "candidateTest/{params.candidateId}",
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
  assignProject: {
    method: "POST" as Method,
    url: "projects/{params.projectId}/candidates/{params.candidateId}",
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
};
