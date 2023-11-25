import { Method } from "axios";

export const interviewMethods = {
  createInterview: {
    method: "POST" as Method,
    url: "interviews",
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
  getInterviews: {
    method: "GET" as Method,
    url: "interviews/companies/{params.companyId}",
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
  updateInterview: {
    method: "PUT" as Method,
    url: "interviews/{params.interviewId}",
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
  rateInterview: {
    method: "PUT" as Method,
    url: "interviews/{params.interviewId}",
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
};
