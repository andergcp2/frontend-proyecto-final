import { Method } from "axios";

export const authMethods = {
  signUpCompany: {
    method: "POST" as Method,
    url: "companies",
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
  signUpCandidate: {
    method: "POST" as Method,
    url: "candidates",
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
};
