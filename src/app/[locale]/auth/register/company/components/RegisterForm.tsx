'use client'

import { FC } from 'react'
import { Box, TextField, Grid, Typography } from '@mui/material'
import { EmailInput, PasswordInput } from '@/components'
// import { LinkAuth } from '../../components'
// import { PASSWORD_REGEX, mainRoutes } from '@/models'
import { useTranslations } from 'next-intl'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useAuth } from '../../../context/AuthContext'
import Button from '@/components/button/Button'

export interface RegisterFormProps { }

const validationSchema = Yup.object({
  company_name: Yup.string().required('nameRequired'),
  id_type: Yup.string().required('idTypeRequired'),
  id_number: Yup.string().required('idNumberRequired'),
  industry: Yup.string().required('industryRequired'),
  email: Yup.string().email('invalidEmail').required('emailRequired'),
  phone: Yup.string().required('phoneRequired'),
  country: Yup.string().required('countryRequired'),
  city: Yup.string().required('cityRequired'),
  address: Yup.string().required('addressRequired'),
  logo: Yup.string().required('logoRequired'),
  legal_repr_type_id: Yup.string().required('legalRepresentativeTypeIdRequired'),
  legal_repr_id: Yup.string().required('legalRepresentativeIdNumberRequired'),
  legal_repr_profession: Yup.string().required('legalRepresentativeProfessionRequired'),
  username: Yup.string().required('legalRepresentativeUserRequired'),
  password: Yup.string().required('legalRepresentativePasswordRequired'),
})

const RegisterForm: FC<RegisterFormProps> = () => {
  const t = useTranslations('Auth.SignUp.Company')
  // const validationT = useTranslations('ValidationMsgs')

  const { SignUpCompany, isSignUpCompanyLoading } = useAuth()

  const formik = useFormik({
    initialValues: {
      company_name: '',
      id_type: '',
      id_number: '',
      industry: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      address: '',
      logo: '',
      legal_repr_type_id: '',
      legal_repr_id: '',
      legal_repr_profession: '',
      username: '',
      password: '',
      confirm_password: '',
    },
    validationSchema: validationSchema,
    onSubmit: SignUpCompany,
  })

  return (
    <Box
      component="form"
      id="signup-company-form"
      onSubmit={formik.handleSubmit}
      sx={{ mt: 3, mx: 'auto', maxWidth: 1000 }}
    >
      <Typography variant='h3' sx={{ mb: 3, fontWeight: 600 }}>
        {t('companySubtitle')}
      </Typography>
      <Grid container spacing={1} marginX={2}>
        <Grid item xs={12} sm={4} >
          <TextField
            id="company_name"
            name="company_name"
            label={t('name')}
            fullWidth
            required
            value={formik.values.company_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.company_name && Boolean(formik.errors.company_name)}
            helperText={
              formik.touched.company_name &&
              Boolean(formik.errors.company_name) &&
              t(formik.errors.company_name as string)
            }
          />
        </Grid>
        <Grid item xs={12} sm={1}>
          <TextField
            id="id_type"
            name="id_type"
            label={t('idType')}
            fullWidth
            required
            value={formik.values.id_type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.id_type && Boolean(formik.errors.id_type)}
            helperText={
              formik.touched.id_type &&
              Boolean(formik.errors.id_type) &&
              t(formik.errors.id_type as string)
            }
          />
        </Grid>
        <Grid item xs={12} sm={3} >
          <TextField
            id="id_number"
            name="id_number"
            label={t('idNumber')}
            fullWidth
            required
            value={formik.values.id_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.id_number && Boolean(formik.errors.id_number)}
            helperText={
              formik.touched.id_number &&
              Boolean(formik.errors.id_number) &&
              t(formik.errors.id_number as string)
            }
          />
        </Grid>
        <Grid item xs={12} sm={4} >
          <TextField
            id="industry"
            name="industry"
            label={t('industry')}
            fullWidth
            required
            value={formik.values.industry}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.industry && Boolean(formik.errors.industry)}
            helperText={
              formik.touched.industry &&
              Boolean(formik.errors.industry) &&
              t(formik.errors.industry as string)
            }
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} marginY={3} marginX={2}>
        <Grid item xs={12} sm={4} >
          <TextField
            id="email"
            name="email"
            label={t('email')}
            fullWidth
            required
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={
              formik.touched.email &&
              Boolean(formik.errors.email) &&
              t(formik.errors.email as string)
            }
          />
        </Grid>
        <Grid item xs={12} sm={4} >
          <TextField
            id="phone"
            name="phone"
            label={t('phone')}
            fullWidth
            required
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={
              formik.touched.phone &&
              Boolean(formik.errors.phone) &&
              t(formik.errors.phone as string)
            }
          />
        </Grid>
        <Grid item xs={12} sm={4} >
          <TextField
            id="country"
            name="country"
            label={t('country')}
            fullWidth
            required
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={
              formik.touched.country &&
              Boolean(formik.errors.country) &&
              t(formik.errors.country as string)
            }
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} marginY={3} marginX={2}>
        <Grid item xs={12} sm={4} >
          <TextField
            id="city"
            name="city"
            label={t('city')}
            fullWidth
            required
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={
              formik.touched.city &&
              Boolean(formik.errors.city) &&
              t(formik.errors.city as string)
            }
          />
        </Grid>
        <Grid item xs={12} sm={4} >
          <TextField
            id="address"
            name="address"
            label={t('address')}
            fullWidth
            required
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={
              formik.touched.address &&
              Boolean(formik.errors.address) &&
              t(formik.errors.address as string)
            }
          />
        </Grid>
        <Grid item xs={12} sm={4} >
          <TextField
            id="logo"
            name="logo"
            label={t('logo')}
            fullWidth
            required
            value={formik.values.logo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.logo && Boolean(formik.errors.logo)}
            helperText={
              formik.touched.logo &&
              Boolean(formik.errors.logo) &&
              t(formik.errors.logo as string)
            }
          />
        </Grid>
      </Grid>

      <Typography variant='h3' sx={{ my: 3, fontWeight: 600 }}>
        {t('legalRepresentativeSubtitle')}
      </Typography>
      <Grid container spacing={1} marginX={2}>
        <Grid item xs={12} sm={1} >
          <TextField
            id="legal_repr_type_id"
            name="legal_repr_type_id"
            label={t('legalRepresentativeTypeId')}
            fullWidth
            required
            value={formik.values.legal_repr_type_id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.legal_repr_type_id && Boolean(formik.errors.legal_repr_type_id)}
            helperText={
              formik.touched.legal_repr_type_id &&
              Boolean(formik.errors.legal_repr_type_id) &&
              t(formik.errors.legal_repr_type_id as string)
            }
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="legal_repr_id"
            name="legal_repr_id"
            label={t('legalRepresentativeIdNumber')}
            fullWidth
            required
            value={formik.values.legal_repr_id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.legal_repr_id && Boolean(formik.errors.legal_repr_id)}
            helperText={
              formik.touched.legal_repr_id &&
              Boolean(formik.errors.legal_repr_id) &&
              t(formik.errors.legal_repr_id as string)
            }
          />
        </Grid>
        <Grid item xs={12} sm={4} >
          <TextField
            id="legal_repr_profession"
            name="legal_repr_profession"
            label={t('legalRepresentativeProfession')}
            fullWidth
            required
            value={formik.values.legal_repr_profession}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.legal_repr_profession && Boolean(formik.errors.legal_repr_profession)}
            helperText={
              formik.touched.legal_repr_profession &&
              Boolean(formik.errors.legal_repr_profession) &&
              t(formik.errors.legal_repr_profession as string)
            }
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} marginY={3} marginX={2}>
        <Grid item xs={12} sm={4} >
          <TextField
            id="username"
            name="username"
            label={t('legalRepresentativeUser')}
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
        </Grid>
        <Grid item xs={12} sm={4} >
          <TextField
            id="password"
            name="password"
            label={t('legalRepresentativePassword')}
            fullWidth
            required
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={
              formik.touched.password &&
              Boolean(formik.errors.password) &&
              t(formik.errors.password as string)
            }
          />
        </Grid>
        <Grid item xs={12} sm={4} >
          <TextField
            id="confirm_password"
            name="confirm_password"
            label={t('legalRepresentativeConfirmPassword')}
            fullWidth
            required
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
            helperText={
              formik.touched.confirm_password &&
              Boolean(formik.errors.confirm_password) &&
              t(formik.errors.confirm_password as string)
            }
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        variant="contained"
        disabled={isSignUpCompanyLoading}
        loading={isSignUpCompanyLoading}
        sx={{ mt: 3, mb: 2, fontWeight: 600 }}
      >
        {t('submit')}
      </Button>
    </Box>
  )
}

export default RegisterForm
