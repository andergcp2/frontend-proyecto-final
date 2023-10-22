'use client'

import { Box } from '@mui/material'
import { FC } from 'react'
import { DashboardProvider } from './context/dashboardContext'
import Sidebar from './components/Sidebar'

export interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <DashboardProvider>
      <Box sx={{ display: 'flex' }}>
        <Sidebar>
          {children}
        </Sidebar>
      </Box>
    </DashboardProvider>
  )
}

export default DashboardLayout
