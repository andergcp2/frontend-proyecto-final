import { Method } from "axios";

export const interviewMethods = {
  createInterview: {
    method: "POST" as Method,
    url: "interviews",
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
};
