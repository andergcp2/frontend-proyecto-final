import { axiosMethod } from "@/config/http/axios";
import { CandidatesByCriteriaParams, SearchCandidateResponse, SearchCandidateRow } from "@/models";

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
