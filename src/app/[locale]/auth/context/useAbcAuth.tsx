'use client'

import { useToast } from '@/context/Toast.context'
import { LoginDTO, SignUpCandidateDTO, SignUpCompanyDTO, mainRoutes } from '@/models'
import { signUpCompany, signUpCandidate } from '@/services/auth'
import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'

export default function useQanttoAuth() {
  const [signUpCompanyDTO, setSignUpCompanyDTO] = useState<SignUpCompanyDTO>()
  const { data: session, update } = useSession();
  const { showToast } = useToast()
  const t = useTranslations('Auth.ToastMsg')

  const { push } = useRouter()

  const { mutateAsync: SignUpCompanyReq, isLoading: isSignUpCompanyLoading } = useMutation({
    mutationFn: signUpCompany,
    onSuccess: () => {
      // TODO: redirect to the right page
      alert('Empresa registrada exitosamente')
      push(mainRoutes.dashboard.root)
      // TODO: Hacer login automatico
      showToast(t('success.signUpCompany'), 'success')
    },
    onError: (error: any) => {
      alert('Hubo un error registrando la empresa')
      push(mainRoutes.auth.companyRegister)
      showToast(error.message, 'error')
    }
  })

  const { mutateAsync: SignUpCandidateReq, isLoading: isSignUpCandidateLoading } = useMutation({
    mutationFn: signUpCandidate,
    onSuccess: () => {
      alert('Candidato registrado exitosamente')
      push(mainRoutes.dashboard.root)
      showToast(t('success.signUpCandidate'), 'success')
    },
    onError: (error: any) => {
      alert('Hubo un error registrando el candidato')
      push(mainRoutes.auth.candidateRegister)
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
      push(mainRoutes.dashboard.root)
    },
  })

  const SignUpCompany = async (variables: SignUpCompanyDTO) => {
    await SignUpCompanyReq(variables)
  }

  const Login = async (variables: LoginDTO) => {
    const res = await LoginReq(variables)
    if (res && !res.ok) {
      alert('Hubo un error iniciando sesión')
    }
  }

  const SignUpCandidate = async (variables: SignUpCandidateDTO) => {
    await SignUpCandidateReq(variables)
  }

  return {
    isSignUpCandidateLoading,
    isSignUpCompanyLoading,
    Login,
    SignUpCandidate,
    SignUpCompany,
  }
}