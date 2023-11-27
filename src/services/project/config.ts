import { Method } from "axios";

export const projectMethods = {
  createProject: {
    method: "POST" as Method,
    url: "projects",
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
  getProjectsByCompanyId: {
    method: "GET" as Method,
    url: "projects/companies/{params.companyId}",
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
};
