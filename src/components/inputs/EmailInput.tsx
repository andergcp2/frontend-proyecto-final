import { FC } from 'react'
import { TextField } from '@mui/material'

export interface EmailInputProps {
  autoFocus?: boolean;
  label: string;
  value: string;
  margin?: 'none' | 'dense' | 'normal'
  onChange: (...args0: any) => void
  onBlur: (...args0: any) => void
  error: boolean
  errorText: string
}

const EmailInput: FC<EmailInputProps> = ({ autoFocus, margin, label, value, onChange, onBlur, error, errorText }) => {
  return (
    <TextField
      id="email"
      name="email"
      label={label}
      margin={margin}
      required
      fullWidth
      autoComplete="email"
      autoFocus={autoFocus}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={error && errorText}
    />
  )
}

export default EmailInput
