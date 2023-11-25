import { axiosMethod } from "@/config/http/axios";
import { CreateInterviewFormProps } from "@/models/interview";

export const createInterview = async (data: CreateInterviewFormProps) => {
  const response = await axiosMethod({
    name: "createInterview",
    data,
  });
  return response.data;
};
