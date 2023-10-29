import { LoginDTO, SignUpCandidateDTO, SignUpCompanyDTO } from '@/models'
import { createContext, useContext } from 'react'
import useAbcAuth from './useAbcAuth'


interface IAuthContext {
  isSignUpCandidateLoading: boolean,
  isSignUpCompanyLoading: boolean,
  Login: (variables: LoginDTO) => Promise<void>,
  SignUpCompany: (variables: SignUpCompanyDTO, options?: {}) => Promise<void>, // TODO: add the right type in the response
  SignUpCandidate: (variables: SignUpCandidateDTO, options?: {}) => Promise<void>, // TODO: add the right type in the response
}

const AuthContext = createContext<IAuthContext>({
  isSignUpCompanyLoading: false,
  isSignUpCandidateLoading: false,
  Login: async () => { },
  SignUpCompany: async () => { },
  SignUpCandidate: async () => { },
})

export const AuthProvider = ({ children }: any) => {
  const auth = useAbcAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
