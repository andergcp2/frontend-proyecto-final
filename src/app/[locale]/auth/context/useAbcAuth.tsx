import { useToast } from '@/context/Toast.context'
import { SignUpCompanyDTO } from '@/models'
import { signUpCompany } from '@/services/auth'
import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function useQanttoAuth() {
  const [signUpCompanyDTO, setSignUpCompanyDTO] = useState<SignUpCompanyDTO>()

  const { showToast } = useToast()
  const t = useTranslations('Auth.ToastMsg')

  const { mutateAsync: SignUpCompanyReq, isLoading: isSignUpCompanyLoading } = useMutation({
    mutationFn: signUpCompany,
    onSuccess: () => {
      // TODO: redirect to the right page
      // push(mainRoutes.auth.verify)
      // TODO: Hacer login automatico
      showToast(t('success.signUpCompany'), 'success')
    },
    onError: (error: any) => {
      showToast(error.message, 'error')
    }
  })

  const SignUpCompany = async (variables: SignUpCompanyDTO, options?: {}) => {
    await SignUpCompanyReq(variables, options)
  }

  return {
    isSignUpCompanyLoading,
    SignUpCompany,
  }
}