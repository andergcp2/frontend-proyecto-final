'use client'

import { useToast } from '@/context/Toast.context'
import { LoginDTO, SignUpCompanyDTO, mainRoutes } from '@/models'
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
      alert('Empresa registrada exitosamente')
      push(mainRoutes.dashboard)
      // TODO: Hacer login automatico
      showToast(t('success.signUpCompany'), 'success')
    },
    onError: (error: any) => {
      alert('Empresa registrada exitosamente')
      push(mainRoutes.dashboard)
      showToast(error.message, 'error')
    }
  })

  const { mutateAsync: LoginReq, isLoading: isLoginLoading } = useMutation({
    mutationFn: (params: LoginDTO) =>
      signIn('credentials', { ...params, redirect: false }),
    onSuccess: (data) => {
      if (data?.error) {
        return showToast(t('error.login'), 'error')
      }
      showToast(t('success.login'), 'success')
      push(mainRoutes.dashboard)
    },
  })

  const SignUpCompany = async (variables: SignUpCompanyDTO) => {
    await SignUpCompanyReq(variables)
  }

  const Login = async (variables: LoginDTO) => {
    await LoginReq(variables)
  }

  return {
    isSignUpCompanyLoading,
    Login,
    SignUpCompany,
  }
}