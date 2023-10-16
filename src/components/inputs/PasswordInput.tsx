'use client'

import { FC, use, useEffect, useState } from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useTranslations } from 'next-intl'

export interface PasswordInputProps {
  id: string
  name: string
  value: string
  label: string
  margin?: 'none' | 'dense' | 'normal' | undefined
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  error: boolean
  errorText: string
  helperText?: boolean
}

const PasswordInput: FC<PasswordInputProps> = ({
  id,
  name,
  value,
  margin,
  label,
  onChange,
  onBlur,
  error,
  errorText,
  helperText,
}) => {
  const [showPassword, setShowPassword] = useState(false)
  // show help text only the first time
  const [showHelperText, setShowHelperText] = useState(true)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const validationT = useTranslations('ValidationMsgs')

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }

  useEffect(() => {
    if (error && showHelperText) {
      setShowHelperText(false)
    }
  }, [error, showHelperText])

  return (
    <TextField
      id={id}
      name={name}
      label={label}
      margin={margin}
      required
      fullWidth
      type={showPassword ? 'text' : 'password'}
      autoComplete="off"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={
        error
          ? errorText
          : helperText && showHelperText
            ? validationT('helperPassword')
            : ''
      }
      InputProps={{
        startAdornment: (
          <InputAdornment
            position="end"
            sx={{ cursor: 'pointer', order: 2, mr: 2 }}
          >
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default PasswordInput
