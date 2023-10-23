import { LoginDTO, SignUpCompanyDTO } from '@/models'
import { createContext, useContext } from 'react'
import useAbcAuth from './useAbcAuth'


interface IAuthContext {
  isSignUpCompanyLoading: boolean,
  Login: (variables: LoginDTO) => Promise<void>,
  SignUpCompany: (variables: SignUpCompanyDTO, options?: {}) => Promise<void>
}

const AuthContext = createContext<IAuthContext>({
  isSignUpCompanyLoading: false,
  Login: async () => { },
  SignUpCompany: async () => { },
})

export const AuthProvider = ({ children }: any) => {
  const auth = useAbcAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
