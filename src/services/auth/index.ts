import { axiosMethod } from "@/config/http/axios";
import { SignUpCompanyDTO } from "@/models";

export const signUpCompany = async (
  params: SignUpCompanyDTO
): Promise<void> => {
  await axiosMethod<any>({
    name: "signUpOTP",
    data: {
      ...params,
    },
  });
};
