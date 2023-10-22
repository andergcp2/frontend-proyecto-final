import { SignUpCompanyDTO } from '@/models'
import { Dispatch, SetStateAction, createContext, useContext } from 'react'
import useAbcAuth from './useAbcAuth'

interface IAuthContext {
  isSignUpCompanyLoading: boolean,
  Login: (variables: { email: string, password: string }) => Promise<void>,
  SignUpCompany: (variables: SignUpCompanyDTO) => Promise<void>
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