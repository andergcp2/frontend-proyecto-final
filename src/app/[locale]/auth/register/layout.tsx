'use client'

import Header from "./components/Header"

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Header>
      {children}
    </Header>
  )
}

export default AuthLayout