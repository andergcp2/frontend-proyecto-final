import { Method } from "axios";

export const candidateMethods = {
  getCandidatesByCriteria: {
    method: "GET" as Method,
    url: "candidates/{params.queryParams}",
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
  assignTest: {
    method: "POST" as Method,
    url: "candidates/tests",
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
};
