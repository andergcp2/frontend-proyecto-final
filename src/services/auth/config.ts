import { Method } from "axios";

export const authMethods = {
  signUpCompany: {
    method: "POST" as Method,
    url: "companies",
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
};
