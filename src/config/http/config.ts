import { ApiConfig } from "@/models/http-config";
import { authMethods } from "@/services/auth/config";
import { candidateMethods } from "@/services/candidate/config";
import { projectMethods } from "@/services/project/config";

const apiConfig: ApiConfig = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  endpoints: {
    ...authMethods,
    ...projectMethods,
    ...candidateMethods,
  },
};

export default apiConfig;
