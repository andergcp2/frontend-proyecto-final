import { FC } from 'react'
import { RegisterForm } from '@/app/[locale]/auth/register/company/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register Company'
}

export interface RegisterProps { }

const Register: FC<RegisterProps> = () => {
  return <RegisterForm />
}

export default Register
