import { Method } from "axios";

export const authMethods = {
  signUpCompany: {
    method: "POST" as Method,
    url: "company/", // TODO: Check the right url of the endpoint
    baseUrl: process.env.NEXT_PUBLIC_API_AUTH_URL,
  },
};
