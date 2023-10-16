import { AlertColor } from '@mui/material'
import { useState } from 'react'

export function useToastCtx() {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const [severity, setSeverity] = useState<AlertColor>('success')
  const [time, setTime] = useState(5000)

  const handleClose = () => {
    setOpen(false)
    setText('')
  }
  const showToast = (text: string, severity: AlertColor, time?: number) => {
    setOpen(true)
    setText(text)
    if (severity) setSeverity(severity)
    if (time) setTime(time)
  }

  return {
    open,
    text,
    severity,
    time,
    handleClose,
    showToast,
  }
}
