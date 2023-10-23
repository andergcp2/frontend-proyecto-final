'use client'

import { FC } from 'react'
import { Box, FormControlLabel, Checkbox, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { EmailInput, PasswordInput } from '@/components'
import { useTranslations } from 'next-intl'
import { useAuth } from '../../context/AuthContext'
import Button from '@/components/button/Button'

export interface LoginFormProps { }

const validationSchema = Yup.object({
  email: Yup.string().email('invalidEmail').required('requiredEmail'),
  password: Yup.string().required('requiredPassword'),
  userRole: Yup.string().required('requiredUserRole'),
})

const LoginForm: FC<LoginFormProps> = () => {
  const { Login } = useAuth()

  const t = useTranslations('Auth.Login')
  const validationT = useTranslations('ValidationMsgs')

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      userRole: '',
    },
    validationSchema: validationSchema,
    onSubmit: Login,
  })

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      id="login-form"
      noValidate
      sx={{ mt: 1, width: '50%' }}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      margin={'auto'}
      pt={5}
      maxWidth={'500px'}
    >
      <Typography variant="h1" py={5}>Iniciar sesión</Typography>
      <EmailInput
        margin="normal"
        autoFocus
        label={t('emailAddress')}
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(formik.touched.email) && Boolean(formik.errors.email)}
        errorText={formik.errors.email ? validationT(formik.errors.email) : ''}
      />

      <PasswordInput
        id="password"
        name="password"
        label={t('password')}
        margin="normal"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          Boolean(formik.touched.password) && Boolean(formik.errors.password)
        }
        errorText={
          formik.errors.password ? validationT(formik.errors.password) : ''
        }
      />

      <FormControl fullWidth>
        <InputLabel id="user-role">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formik.values.userRole}
          label={t('userRole')}
          onChange={formik.handleChange}
        >
          <MenuItem value={10}>Candidate</MenuItem>
          <MenuItem value={20}>Company</MenuItem>
          <MenuItem value={30}>ABC</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        type="submit"
        sx={{ mt: 3, mb: 2, fontWeight: 600, maxWidth: '50%' }}
      // loading={isLoginLoading}
      >
        {t('signInBtn')}
      </Button>
    </Box>
  )
}

export default LoginForm
