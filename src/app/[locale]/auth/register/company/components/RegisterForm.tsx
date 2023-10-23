'use client'

import { FC } from 'react'
import { Box, TextField, Grid, Typography } from '@mui/material'
// import { LinkAuth } from '../../components'
// import { PASSWORD_REGEX, mainRoutes } from '@/models'
import { useTranslations } from 'next-intl'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useAuth } from '../../../context/AuthContext'
import Button from '@/components/button/Button'
import { PASSWORD_REGEX } from '@/models'

export interface RegisterFormProps { }
const lengths = {
  companyNameMin: 3,
  companyNameMax: 50,
  idNumberMin: 0,
  industryMin: 3,
  industryMax: 50,
  legalRepresentativeProfessionMin: 3,
  legalRepresentativeProfessionMax: 100,
  legalRepresentativeUserMin: 3,
  legalRepresentativeUserMax: 100,
  legalRepresentativePasswordMin: 8,
  legalRepresentativePasswordMax: 30,
  legalRepresentativeTypeIdMin: 2,
  legalRepresentativeTypeIdMax: 4,
  legalRepresentativeIdNumberMin: 0,
  emailMin: 3,
  emailMax: 100,
  countryMin: 3,
  countryMax: 50,
  cityMin: 3,
  cityMax: 50,
  addressMin: 3,
  addressMax: 100,
}
const validationSchema = Yup.object({
  companyName: Yup.string().
    min(lengths.companyNameMin, 'companyNameMin').
    max(lengths.companyNameMax, 'companyNameMax').
    required('nameRequired'),
  idType: Yup.string().required('idTypeRequired'),
  idNumber: Yup.number().required('idNumberRequired').
    min(lengths.idNumberMin, 'idNumberMin'),
  industry: Yup.string().
    required('industryRequired').
    min(lengths.industryMin, 'industryMin').
    max(lengths.industryMax, 'industryMax'),
  email: Yup.string().
    email('invalidEmail').
    required('emailRequired').
    min(lengths.emailMin, 'emailMin').
    max(lengths.emailMax, 'emailMax'),
  phone: Yup.number().
    required('phoneRequired').
    min(0, 'phoneMin'),
  country: Yup.string().
    required('countryRequired').
    min(lengths.countryMin, 'countryMin').
    max(lengths.countryMax, 'countryMax'),
  city: Yup.string().
    required('cityRequired').
    min(lengths.cityMin, 'cityMin').
    max(lengths.cityMax, 'cityMax'),
  address: Yup.string().
    required('addressRequired').
    min(lengths.addressMin, 'addressMin').
    max(lengths.addressMax, 'addressMax'),
  logo: Yup.string().required('logoRequired'),
  reprIdType: Yup.string().
    required('legalRepresentativeTypeIdRequired').
    min(lengths.legalRepresentativeTypeIdMin, 'legalRepresentativeTypeIdMin').
    max(lengths.legalRepresentativeTypeIdMax, 'legalRepresentativeTypeIdMax'),
  reprIdNumber: Yup.number().
    required('legalRepresentativeIdNumberRequired').
    min(lengths.legalRepresentativeIdNumberMin, 'legalRepresentativeIdNumberMin'),
  legal_repr_profession: Yup.string().required('legalRepresentativeProfessionRequired'),
  reprName: Yup.string().
    required('legalRepresentativeUserRequired').
    min(lengths.legalRepresentativeUserMin, 'legalRepresentativeUserMin').
    max(lengths.legalRepresentativeUserMax, 'legalRepresentativeUserMax'),
  password: Yup.string().
    required('legalRepresentativePasswordRequired').
    matches(PASSWORD_REGEX, 'invalidPassword'),
  // confirmPassword field which verifies it matches the password field
  confirmPassword: Yup.string().
    required('legalRepresentativeConfirmPasswordRequired').
    oneOf([Yup.ref('password')], 'passwordsMustMatch'),
})

const RegisterForm: FC<RegisterFormProps> = () => {
  const t = useTranslations('Auth.SignUp.Company')

  const { SignUpCompany, isSignUpCompanyLoading } = useAuth()

  const formik = useFormik({
    initialValues: {
      companyName: '',
      idType: '',
      idNumber: 0,
      industry: '',
      email: '',
      phone: 0,
      country: '',
      city: '',
      address: '',
      logo: '',
      reprIdType: '',
      reprIdNumber: 0,
      legal_repr_profession: '',
      reprName: '',
      password: '',
      confirmPassword: '',
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
            id="companyName"
            name="companyName"
            label={t('name')}
            fullWidth
            required
            value={formik.values.companyName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.companyName && Boolean(formik.errors.companyName)}
            helperText={
              formik.touched.companyName &&
              Boolean(formik.errors.companyName) &&
              t(formik.errors.companyName as string)
            }
          />
        </Grid>
        <Grid item xs={12} sm={1}>
          <TextField
            id="idType"
            name="idType"
            label={t('idType')}
            fullWidth
            required
            value={formik.values.idType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.idType && Boolean(formik.errors.idType)}
            helperText={
              formik.touched.idType &&
              Boolean(formik.errors.idType) &&
              t(formik.errors.idType as string)
            }
          />
        </Grid>
        <Grid item xs={12} sm={3} >
          <TextField
            id="idNumber"
            name="idNumber"
            label={t('idNumber')}
            fullWidth
            required
            value={formik.values.idNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.idNumber && Boolean(formik.errors.idNumber)}
            helperText={
              formik.touched.idNumber &&
              Boolean(formik.errors.idNumber) &&
              t(formik.errors.idNumber as string)
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
            id="reprIdType"
            name="reprIdType"
            label={t('legalRepresentativeTypeId')}
            fullWidth
            required
            value={formik.values.reprIdType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.reprIdType && Boolean(formik.errors.reprIdType)}
            helperText={
              formik.touched.reprIdType &&
              Boolean(formik.errors.reprIdType) &&
              t(formik.errors.reprIdType as string)
            }
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="reprIdNumber"
            name="reprIdNumber"
            label={t('legalRepresentativeIdNumber')}
            fullWidth
            required
            value={formik.values.reprIdNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.reprIdNumber && Boolean(formik.errors.reprIdNumber)}
            helperText={
              formik.touched.reprIdNumber &&
              Boolean(formik.errors.reprIdNumber) &&
              t(formik.errors.reprIdNumber as string)
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
            id="reprName"
            name="reprName"
            label={t('legalRepresentativeUser')}
            fullWidth
            required
            value={formik.values.reprName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.reprName && Boolean(formik.errors.reprName)}
            helperText={
              formik.touched.reprName &&
              Boolean(formik.errors.reprName) &&
              t(formik.errors.reprName as string)
            }
          />
        </Grid>
        <Grid item xs={12} sm={4} >
          <TextField
            id="password"
            name="password"
            type='password'
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
            id="confirmPassword"
            name="confirmPassword"
            label={t('legalRepresentativeConfirmPassword')}
            type='password'
            fullWidth
            required
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword) &&
              t(formik.errors.confirmPassword as string)
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
