import { Method } from "axios";

export const projectMethods = {
  createProject: {
    method: "POST" as Method,
    url: "projects",
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  },
};
