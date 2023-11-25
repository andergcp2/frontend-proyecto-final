import { axiosMethod } from "@/config/http/axios";
import {
  AssignProjectProps,
  AssignTestProps,
  CandidatesByCriteriaParams,
  SearchCandidateResponse,
} from "@/models";
import { CandidateTest } from "@/models/test.model";

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

export const getCandidateTests = async (
  candidateId: string
): Promise<CandidateTest[]> => {
  const response = await axiosMethod({
    name: "getCandidateTests",
    pathParams: { candidateId },
  });
  return response.data as CandidateTest[];
};

export const assignProject = async ({ candidateId, projectId }: AssignProjectProps) => {
  const response = await axiosMethod({
    name: "assignProject",
    pathParams: {
      candidateId: candidateId,
      projectId: projectId,
    },
  });
  return response.data;
};
