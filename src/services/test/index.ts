import { axiosMethod } from "@/config/http/axios";
import { Test } from "@/models/test.model";

export const getTests = async (): Promise<Test[]> => {
  const response = await axiosMethod({
    name: "getTests",
  });
  return response.data as Test[];
};
