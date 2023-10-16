import { FC } from 'react'
import { RegisterForm } from '@/app/[locale]/auth/register/company/components'
import { Metadata } from 'next'
import { Box } from '@mui/material'
import Header from './components/Header'

export const metadata: Metadata = {
  title: 'Register Company'
}

export interface RegisterProps { }

const Register: FC<RegisterProps> = () => {
  return (
    <Box marginX={4}>
      <Header />
      <RegisterForm />
    </Box>
  )
}

export default Register
