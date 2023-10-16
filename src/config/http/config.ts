import { ApiConfig } from "@/models/http-config";
import { authMethods } from "@/services/auth/config";

const apiConfig: ApiConfig = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  endpoints: {
    ...authMethods,
  },
};

export default apiConfig;
