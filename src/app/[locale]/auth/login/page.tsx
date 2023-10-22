import { FC } from 'react'
import { LoginForm } from './components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ABC - Login'
}

export interface LoginProps { }

const Login: FC<LoginProps> = () => {
  return <LoginForm />
}

export default Login
