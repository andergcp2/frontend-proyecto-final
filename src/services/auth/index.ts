import { axiosMethod } from "@/config/http/axios";
import { SignUpCompanyDTO, SignUpCandidateDTO } from "@/models";

export const signUpCompany = async (
  params: SignUpCompanyDTO
): Promise<void> => {
  await axiosMethod<any>({
    name: "signUpCompany",
    data: {
      ...params,
    },
  });
};

export const signUpCandidate = async (
  params: SignUpCandidateDTO
): Promise<void> => {
  await axiosMethod<any>({
    name: "signUpCandidate",
    data: {
      ...params,
    },
  });
};
