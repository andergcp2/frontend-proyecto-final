import { Method } from "axios";

export const testMethods = {
  getTests: {
    method: "GET" as Method,
    url: "/pruebas",
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
};
