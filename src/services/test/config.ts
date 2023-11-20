import { Method } from "axios";

export const testMethods = {
  getTests: {
    method: "GET" as Method,
    url: "/pruebas",
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
  testInit: {
    method: "POST" as Method,
    url: "/tests-taker/init/{params.candidateId}/{params.testId}",
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
  testNext: {
    method: "POST" as Method,
    url: "/tests-taker/next/{params.candidateId}/{params.testId}",
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
  testDone: {
    method: "POST" as Method,
    url: "/tests-taker/done/{params.candidateId}/{params.testId}",
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
};
