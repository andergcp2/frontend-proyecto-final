import { axiosMethod } from "@/config/http/axios";
import { CompanyCandidate, RateCompanyCandidate } from "@/models";

export const getCompanyCandidates = async (companyId: string) => {
  const response = await axiosMethod<CompanyCandidate[]>({
    name: "getCompanyCandidates",
    pathParams: {
      companyId,
    },
  });
  return response.data;
};

export const rateCandidate = async (data: RateCompanyCandidate) => {
  const response = await axiosMethod({
    name: "rateCandidate",
    data: JSON.stringify({
      score: data.score,
      comments: data.comments,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    pathParams: {
      projectId: data.projectId?.toString(),
      candidateId: data.candidateId.toString(),
    },
  });
  return response.data;
};
