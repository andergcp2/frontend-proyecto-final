import { useToast } from '@/context/Toast.context'
import { SignUpCompanyDTO, mainRoutes } from '@/models'
import { signUpCompany } from '@/services/auth'
import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

export default function useQanttoAuth() {
  const [signUpCompanyDTO, setSignUpCompanyDTO] = useState<SignUpCompanyDTO>()

  const { showToast } = useToast()
  const t = useTranslations('Auth.ToastMsg')

  const { push } = useRouter()

  const { mutateAsync: SignUpCompanyReq, isLoading: isSignUpCompanyLoading } = useMutation({
    mutationFn: signUpCompany,
    onSuccess: () => {
      // TODO: redirect to the right page
      // push(mainRoutes.auth.verify)
      // TODO: Hacer login automatico
      alert('Empresa registrada exitosamente')
      showToast(t('success.signUpCompany'), 'success')
    },
    onError: (error: any) => {
      showToast(error.message, 'error')
    }
  })

  const { mutateAsync: LoginReq, isLoading: isLoginLoading } = useMutation({
    mutationFn: (params: { email: string, password: string }) =>
      signIn('credentials', { ...params, redirect: false }),
    onSuccess: () => {
      push(mainRoutes.home)
    }
  })

  const SignUpCompany = async (variables: SignUpCompanyDTO, options?: {}) => {
    await SignUpCompanyReq(variables, options)
  }

  const Login = async (variables: { email: string, password: string }, options?: {}) => {
    console.log('Ander Login')
    await LoginReq(variables, options)
  }

  return {
    isSignUpCompanyLoading,
    Login,
    SignUpCompany,
  }
}