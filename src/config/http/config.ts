import { ApiConfig } from "@/models/http-config";
import { authMethods } from "@/services/auth/config";
import { candidateMethods } from "@/services/candidate/config";
import { interviewMethods } from "@/services/interview/config";
import { projectMethods } from "@/services/project/config";
import { testMethods } from "@/services/test/config";

const apiConfig: ApiConfig = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  endpoints: {
    ...authMethods,
    ...projectMethods,
    ...candidateMethods,
    ...testMethods,
    ...interviewMethods,
  },
};

export default apiConfig;
