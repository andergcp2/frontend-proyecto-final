'use client'

import { FC } from 'react'
import Business from '@mui/icons-material/Business';
import { Box, TextField, Avatar , Paper, Typography, Grid , Container, Select, MenuItem, Link } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { EmailInput, PasswordInput } from '@/components'
import { useTranslations } from 'next-intl'
import { useAuth } from '../../context/AuthContext'
import Button from '@/components/button/Button'

export interface LoginFormProps { }

const validationSchema = Yup.object({
  username: Yup.string().required('requiredEmail'),
  password: Yup.string().required('requiredPassword'),
  // userrole: Yup.string().required('requiredUserRole'),
})

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Abc Jobs
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const LoginForm: FC<LoginFormProps> = () => {
  const { Login } = useAuth()

  const t = useTranslations('Auth.Login')
  const validationT = useTranslations('ValidationMsgs')

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      // userRole: '',
    },
    validationSchema: validationSchema,
    onSubmit: Login,
  })

  return (
    <Container component="main" maxWidth="xs">
      <Paper sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} elevation={3}>
        <Box component="img" src='/Logo.png' alt='Logo abc' sx={{ height: "auto", width: "100%" }} />
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            id="login-form"
            noValidate
            sx={{ mt: 1 }}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            margin={'auto'}
            maxWidth={'500px'}
          >
            
            <Typography component="h1" variant="h4" align="center" sx={{ mt: 3, mb: 3 }}>
              {t('Title')}
            </Typography>
            <TextField
              id="username"
              name="username"
              label={t('username')}
              fullWidth
              required
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={
                formik.touched.username &&
                Boolean(formik.errors.username) &&
                t(formik.errors.username as string)
              }
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
            
            {/* <FormControl fullWidth>
              <InputLabel id="userrole">Role</InputLabel>
              <Select
                labelId="select-role"
                id="select-role"
                value={formik.values.userRole}
                label={t('userRole')}
                onChange={formik.handleChange}
              >
                <MenuItem value={10}>Candidate</MenuItem>
                <MenuItem value={20}>Company</MenuItem>
                <MenuItem value={30}>ABC</MenuItem>
              </Select>
            </FormControl> */}
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2, fontWeight: 600 }}
            // loading={isLoginLoading}
            >
              {t('signInBtn')}
            </Button>
            <Link href="register/candidate" variant="body2">
                  {t('registerLinkMsg')}
            </Link>
          </Box>
      </Paper>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}

export default LoginForm
