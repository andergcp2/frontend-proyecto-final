export interface SignUpCompanyDTO {
  companyName: string;
  idType: string;
  idNumber: number;
  industry: string;
  email: string;
  phone: number;
  country: string;
  city: string;
  address: string;
  logo: string;
  reprIdType: string;
  reprIdNumber: number;
  legal_repr_profession: string;
  reprName: string;
  password: string;
}

export const PASSWORD_REGEX =
  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,30}$/;
