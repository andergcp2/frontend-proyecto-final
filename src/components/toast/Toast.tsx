'use client'

import { useToast } from '@/context/Toast.context'
import { Alert, Snackbar } from '@mui/material'
import React from 'react'

const Toast = () => {
  const props = useToast()

  return (
    <Snackbar open={props.open} autoHideDuration={props.time} onClose={props.handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <Alert onClose={props.handleClose} severity={props.severity} sx={{ width: '100%' }}>
        {props.text}
      </Alert>
    </Snackbar>
  )
}

export default Toast
