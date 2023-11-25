import { axiosMethod } from "@/config/http/axios";
import {
  CreateInterviewFormProps,
  Interview,
  InterviewsResponse,
  RateInterview,
} from "@/models/interview";

export const createInterview = async (data: CreateInterviewFormProps) => {
  const response = await axiosMethod({
    name: "createInterview",
    data,
  });
  return response.data;
};

export const getInterviews = async (companyId: string) => {
  const response = await axiosMethod<InterviewsResponse>({
    name: "getInterviews",
    pathParams: {
      companyId,
    },
  });
  return response.data;
};

export const updateInterview = async (data: CreateInterviewFormProps) => {
  const response = await axiosMethod({
    name: "updateInterview",
    data,
  });
  return response.data;
};

export const rateInterview = async (data: RateInterview) => {
  const response = await axiosMethod({
    name: "rateInterview",
    data: {
      score: data.rating,
      comment: data.comment,
    },
    pathParams: {
      interviewId: data.interviewId.toString(),
    },
  });
  return response.data;
};
