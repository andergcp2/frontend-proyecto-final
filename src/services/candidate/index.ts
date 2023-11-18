import { axiosMethod } from "@/config/http/axios";
import {
  AssignTestProps,
  CandidatesByCriteriaParams,
  SearchCandidateResponse,
} from "@/models";

export const getCandidatesByCriteria = async ({
  queryParams,
  page,
  perPage,
}: CandidatesByCriteriaParams): Promise<SearchCandidateResponse> => {
  const response = await axiosMethod<SearchCandidateResponse>({
    name: "getCandidatesByCriteria",
    pathParams: { queryParams },
    params: {
      page,
      perPage,
    },
  });
  return response.data;
};

export const assignTest = async ({ candidateId, testId }: AssignTestProps) => {
  const response = await axiosMethod({
    name: "assignTest",
    data: {
      idcandidate: candidateId,
      idtest: testId,
    },
  });
  return response.data;
};
