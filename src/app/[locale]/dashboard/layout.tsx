'use client'

import { Box } from '@mui/material'
import { FC } from 'react'
import { DashboardProvider } from './context/dashboardContext'
import NavBar from './components/NavBar'

export interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <DashboardProvider>
      <Box sx={{ display: 'flex' }}>
        <NavBar />
            {children}
      </Box>  
    </DashboardProvider>
  )
}

export default DashboardLayout
