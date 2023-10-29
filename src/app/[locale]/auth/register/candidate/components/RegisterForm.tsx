'use client'

import { useTranslations } from 'next-intl'
import { FC } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Box, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material'

import { useAuth } from '../../../context/AuthContext'
import Button from '@/components/button/Button'


export interface RegisterFormProps { }

const validationSchema = Yup.object({
  names: Yup.string().required('namesRequired'),
  lastNames: Yup.string().required('lastNamesRequired'),
  identificationType: Yup.string().required('identificationTypeRequired'),
  identificationNumber: Yup.string().required('identificationNumberRequired'),
  email: Yup.string().required('emailRequired'),
  phoneNumber: Yup.string().required('phoneNumberRequired'),
  country: Yup.string().required('countryRequired'),
  city: Yup.string().required('cityRequired'),
  address: Yup.string().required('addressRequired'),
  photo: Yup.string().required('photoRequired'),
  profession: Yup.string().required('professionRequired'),
  softSkills: Yup.array().required('softSkillsRequired'),
  technicalSkills: Yup.array().required('technicalSkillsRequired'),
  username: Yup.string().required('usernameRequired'),
  password: Yup.string().required('passwordRequired'),
  passwordConfirmation: Yup.string().required('passwordConfirmationRequired'),
  termsAndConditions: Yup.boolean().required('termsAndConditionsRequired'),
  privacyPolicy: Yup.boolean().required('privacyPolicyRequired')
})
const RegisterForm: FC<RegisterFormProps> = () => {
  const t = useTranslations('Auth.SignUp.Candidate')

  const { SignUpCandidate, isSignUpCandidateLoading } = useAuth()

  const formik = useFormik({
    initialValues: {
      names: '',
      lastNames: '',
      identificationType: '',
      identificationNumber: '',
      email: '',
      phoneNumber: '',
      country: '',
      city: '',
      address: '',
      photo: '',
      profession: '',
      softSkills: [],
      technicalSkills: [],
      username: '',
      password: '',
      passwordConfirmation: '',
      termsAndConditions: false,
      privacyPolicy: false
    },
    validationSchema,
    onSubmit: async (values) => {
      await SignUpCandidate(values)
    }
  })

  return (
    <Box
      component="form"
      id="signup-candidate-form"
      onSubmit={formik.handleSubmit}
      sx={{ mt: 2, mx: 'auto', maxWidth: 1000 }}
    >
      <Typography variant="h3" sx={{ my: 2, fontWeight: 600 }}>
        {t('personalInformation')}
      </Typography>
      <Grid container spacing={1} margin={1}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            id="names"
            name="names"
            label={t('names')}
            value={formik.values.names}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.names && Boolean(formik.errors.names)}
            helperText={formik.touched.names && t(formik.errors.names)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            id="lastNames"
            name="lastNames"
            label={t('lastNames')}
            value={formik.values.lastNames}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.lastNames && Boolean(formik.errors.lastNames)}
            helperText={formik.touched.lastNames && t(formik.errors.lastNames)}
          />
        </Grid>
        <Grid item xs={12} sm={1}>
          <TextField
            fullWidth
            id="identificationType"
            name="identificationType"
            label={t('identificationType')}
            value={formik.values.identificationType}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.identificationType && Boolean(formik.errors.identificationType)}
            helperText={formik.touched.identificationType && t(formik.errors.identificationType)}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            id="identificationNumber"
            name="identificationNumber"
            label={t('identificationNumber')}
            value={formik.values.identificationNumber}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.identificationNumber && Boolean(formik.errors.identificationNumber)}
            helperText={formik.touched.identificationNumber && t(formik.errors.identificationNumber)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} margin={1}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label={t('email')}
            value={formik.values.email}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && t(formik.errors.email)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            id="phoneNumber"
            name="phoneNumber"
            label={t('phoneNumber')}
            value={formik.values.phoneNumber}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && t(formik.errors.phoneNumber)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            id="country"
            name="country"
            label={t('country')}
            value={formik.values.country}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && t(formik.errors.country)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} margin={1}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            id="city"
            name="city"
            label={t('city')}
            value={formik.values.city}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && t(formik.errors.city)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            id="address"
            name="address"
            label={t('address')}
            value={formik.values.address}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && t(formik.errors.address)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            id="photo"
            name="photo"
            label={t('photo')}
            value={formik.values.photo}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.photo && Boolean(formik.errors.photo)}
            helperText={formik.touched.photo && t(formik.errors.photo)}
          />
        </Grid>
      </Grid>
      <Typography variant="h3" sx={{ my: 2, fontWeight: 600 }}>
        {t('professionalInformation')}
      </Typography>
      <Grid container spacing={1} margin={1}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            id="profession"
            name="profession"
            label={t('profession')}
            value={formik.values.profession}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.profession && Boolean(formik.errors.profession)}
            helperText={formik.touched.profession && t(formik.errors.profession)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            id="softSkills"
            name="softSkills"
            label={t('softSkills')}
            value={formik.values.softSkills}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.softSkills && Boolean(formik.errors.softSkills)}
            helperText={formik.touched.softSkills && t(formik.errors.softSkills)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            id="technicalSkills"
            name="technicalSkills"
            label={t('technicalSkills')}
            value={formik.values.technicalSkills}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.technicalSkills && Boolean(formik.errors.technicalSkills)}
            helperText={formik.touched.technicalSkills && t(formik.errors.technicalSkills)}
          />
        </Grid>
      </Grid>
      <Typography variant="h3" sx={{ my: 2, fontWeight: 600 }}>
        {t('accountInformation')}
      </Typography>
      <Grid container spacing={1} margin={1}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            id="username"
            name="username"
            label={t('username')}
            value={formik.values.username}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && t(formik.errors.username)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            id="password"
            name="password"
            label={t('password')}
            value={formik.values.password}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && t(formik.errors.password)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            id="passwordConfirmation"
            name="passwordConfirmation"
            label={t('passwordConfirmation')}
            value={formik.values.passwordConfirmation}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
            helperText={formik.touched.passwordConfirmation && t(formik.errors.passwordConfirmation)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormGroup>
            <FormControlLabel
              id="termsAndConditions"
              name="termsAndConditions"
              required
              control={<Checkbox />}
              label={t('termsAndConditions')}
              value={formik.values.termsAndConditions}
            />
            <FormControlLabel
              id="privacyPolicy"
              name="privacyPolicy"
              required
              control={<Checkbox />}
              label={t('privacyPolicy')}
              value={formik.values.privacyPolicy}
            />
          </FormGroup>
        </Grid>
      </Grid>
      <Button
        type="submit"
        variant="contained"
        disabled={isSignUpCandidateLoading}
        loading={isSignUpCandidateLoading}
        sx={{ mt: 1, mb: 2, fontWeight: 600 }}
      >
        {t('submit')}
      </Button>
    </Box >

  )
}

export default RegisterForm