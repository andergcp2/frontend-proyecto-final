'use client'

import { createContext, useContext } from 'react'
import { useToastCtx } from './useToastCtx'
import { AlertColor } from '@mui/material'

export interface ISnackbarContext {
  open: boolean
  text: string
  severity: AlertColor
  time: number
  handleClose: () => void
  showToast: (text: string, severity: AlertColor, time?: number) => void
}

const SnackbarContext = createContext<ISnackbarContext>({
  open: false,
  text: '',
  severity: 'success',
  time: 3000,
  handleClose: () => ({}),
  showToast: () => ({}),
})

export const SnackbarProvider = ({ children }: any) => {
  const snackbar = useToastCtx()

  return (
    <SnackbarContext.Provider value={snackbar}>
      {children}
    </SnackbarContext.Provider>
  )
}

export const useToast = () => useContext(SnackbarContext)
