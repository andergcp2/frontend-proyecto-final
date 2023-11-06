'use client'

import { useTranslations } from 'next-intl'
import { FC } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Autocomplete, Box, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material'

import { useAuth } from '../../../context/AuthContext'
import Button from '@/components/button/Button'
import softskills from '@/data/softskills'
import technicalSkills from '@/data/technicalSkills'


export interface RegisterFormProps { }

const validationSchema = Yup.object({
  name: Yup.string().required('namesRequired'),
  lastName: Yup.string().required('lastNamesRequired'),
  idType: Yup.string().required('identificationTypeRequired'),
  identification: Yup.string().required('identificationNumberRequired'),
  email: Yup.string().required('emailRequired'),
  phone: Yup.string().required('phoneNumberRequired'),
  country: Yup.string().required('countryRequired'),
  city: Yup.string().required('cityRequired'),
  address: Yup.string().required('addressRequired'),
  // photo: Yup.string().required('photoRequired'),
  profession: Yup.string().required('professionRequired'),
  softskills: Yup.array().required('softskillsRequired'),
  technicalSkills: Yup.array().required('technicalSkillsRequired'),
  username: Yup.string().required('usernameRequired'),
  password: Yup.string().required('passwordRequired'),
  passwordConfirmation: Yup.string().required('passwordConfirmationRequired'),
  // termsAndConditions: Yup.boolean().required('termsAndConditionsRequired'),
  // privacyPolicy: Yup.boolean().required('privacyPolicyRequired')
})
const RegisterForm: FC<RegisterFormProps> = () => {
  const t = useTranslations('Auth.SignUp.Candidate')

  const { SignUpCandidate, isSignUpCandidateLoading } = useAuth()

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      idType: '',
      identification: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      address: '',
      // photo: '',
      profession: '',
      softskills: [],
      technicalSkills: [],
      username: '',
      password: '',
      passwordConfirmation: '',
      // termsAndConditions: false,
      // privacyPolicy: false
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
            id="name"
            name="name"
            label={t('names')}
            value={formik.values.name}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && t(formik.errors.name)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            id="lastName"
            name="lastName"
            label={t('lastNames')}
            value={formik.values.lastName}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && t(formik.errors.lastName)}
          />
        </Grid>
        <Grid item xs={12} sm={1}>
          <TextField
            fullWidth
            id="idType"
            name="idType"
            label={t('idType')}
            value={formik.values.idType}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.idType && Boolean(formik.errors.idType)}
            helperText={formik.touched.idType && t(formik.errors.idType)}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            id="identification"
            name="identification"
            label={t('identification')}
            value={formik.values.identification}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.identification && Boolean(formik.errors.identification)}
            helperText={formik.touched.identification && t(formik.errors.identification)}
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
            id="phone"
            name="phone"
            label={t('phone')}
            value={formik.values.phone}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && t(formik.errors.phone)}
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
        {/* <Grid item xs={12} sm={4}>
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
        </Grid> */}
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
          {/* <TextField
            fullWidth
            id="softskills"
            name="softskills"
            label={t('softskills')}
            value={formik.values.softskills}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.softskills && Boolean(formik.errors.softskills)}
            helperText={formik.touched.softskills && t(formik.errors.softskills)}
          /> */}
          <Autocomplete
            multiple
            // id="softskills"
            options={softskills}
            getOptionLabel={(option) => {
              return option
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                id="softskills"
                name='softskills'
                variant="standard"
                label={t('softskills')}
                // placeholder="Favorites"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                error={formik.touched.softskills && Boolean(formik.errors.softskills)}
                helperText={formik.touched.softskills && t(formik.errors.softskills)}
              />
            )}
            value={formik.values.softskills}  // Add this line to set the value
            onChange={(event, newValue) => {
              formik.setFieldValue('softskills', newValue);  // Update the formik state
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Autocomplete
            multiple
            // id="technicalSkills"
            options={technicalSkills}
            getOptionLabel={(option) => {
              return option
            }}
            value={formik.values.technicalSkills}  // Add this line to set the value
            onChange={(event, newValue) => {
              formik.setFieldValue('technicalSkills', newValue);  // Update the formik state
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                id="softskills"
                name='technicalSkills'
                variant="standard"
                label={t('technicalSkills')}
                // placeholder="Favorites"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                error={formik.touched.technicalSkills && Boolean(formik.errors.technicalSkills)}
                helperText={formik.touched.technicalSkills && t(formik.errors.technicalSkills)}
              />
            )}
          />
          {/* <TextField
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
          /> */}
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
        {/* <Grid item xs={12}>
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
        </Grid> */}
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