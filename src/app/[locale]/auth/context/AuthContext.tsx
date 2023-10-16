import { SignUpCompanyDTO } from '@/models'
import { Dispatch, SetStateAction, createContext, useContext } from 'react'
import useAbcAuth from './useAbcAuth'

interface IAuthContext {
  isSignUpCompanyLoading: boolean
  SignUpCompany: (variables: SignUpCompanyDTO) => Promise<void>
}

const AuthContext = createContext<IAuthContext>({
  isSignUpCompanyLoading: false,
  SignUpCompany: async () => { },
})

export const AuthProvider = ({ children }: any) => {
  const auth = useAbcAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)