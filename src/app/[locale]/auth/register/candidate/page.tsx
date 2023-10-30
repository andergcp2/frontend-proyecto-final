// 'use client'

import { FC } from 'react'
import { RegisterForm } from '@/app/[locale]/auth/register/candidate/components'
import { Metadata } from 'next'
import { Box } from '@mui/material'

export const metadata: Metadata = {
  title: 'Register Company'
}

export interface RegisterProps { }

const Register: FC<RegisterProps> = () => {
  return (
    <Box marginX={4}>
      <RegisterForm />
    </Box>
  )
}

export default Register
