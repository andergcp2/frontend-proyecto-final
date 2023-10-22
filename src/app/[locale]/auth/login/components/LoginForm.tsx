'use client'

import { FC } from 'react'
import { Box, FormControlLabel, Checkbox, Grid } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { EmailInput, PasswordInput } from '@/components'
// import { LinkAuth } from '../../components'
import { mainRoutes } from '@/models'
import { useTranslations } from 'next-intl'
import { useAuth } from '../../context/AuthContext'
import Button from '@/components/button/Button'

export interface LoginFormProps { }

const validationSchema = Yup.object({
  email: Yup.string().email('invalidEmail').required('requiredEmail'),
  password: Yup.string().required('requiredPassword'),
})

const LoginForm: FC<LoginFormProps> = () => {
  const { Login } = useAuth()

  const t = useTranslations('Auth.Login')
  const validationT = useTranslations('ValidationMsgs')

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember_me: false,
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
      sx={{ mt: 1 }}
    >
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

      <Button
        variant="contained"
        type="submit"
        sx={{ mt: 3, mb: 2, fontWeight: 600 }}
      // loading={isLoginLoading}
      >
        {t('signInBtn')}
      </Button>
    </Box>
  )
}

export default LoginForm
