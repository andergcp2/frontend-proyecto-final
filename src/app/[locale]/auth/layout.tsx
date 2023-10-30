'use client'

import { Box } from "@mui/material"
import Header from "./components/Header"

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Box marginX={4}>
      <Header />
      {children}
    </Box>
  )
}

export default AuthLayout