'use client'

import { FC } from 'react'
import { Box, TextField, Grid, Typography, Divider } from '@mui/material'
import { useTranslations } from 'next-intl'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '@/components/button/Button'
import { useProject } from '../context/projectContext'

export interface ProjectFormProps { }

const validationSchema = Yup.object({
  name: Yup.string().required('required'),
  type: Yup.string().required('required'),
  responsibleName: Yup.string().required('required'),
  role: Yup.string().required('required'),
  phone: Yup.string().required('required'),
  email: Yup.string().required('required'),
  country: Yup.string().required('required'),
  city: Yup.string().required('required'),
  address: Yup.string().required('required'),
})

const ProjectForm: FC<ProjectFormProps> = () => {
  const t = useTranslations('Project')

  const { CreateProject } = useProject()

  const formik = useFormik({
    initialValues: {
      name: '',
      type: '',
      responsibleName: '',
      role: '',
      phone: 0,
      email: '',
      country: '',
      city: '',
      address: '',
    },
    validationSchema,
    onSubmit: CreateProject
  })
  return (
    <Box component="form"
      id="create-project-form"
      onSubmit={formik.handleSubmit}
      sx={{ mt: 3, mx: 'auto', maxWidth: 1000, pt: 10 }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>{t('projectFormTitle')}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label={t('projectName')}
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="type"
            name="type"
            label={t('projectType')}
            value={formik.values.type}
            onChange={formik.handleChange}
            error={formik.touched.type && Boolean(formik.errors.type)}
            helperText={formik.touched.type && formik.errors.type}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" sx={{ mb: 2 }}>{t('responsible')}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="responsibleName"
            name="responsibleName"
            label={t('projectResponsibleName')}
            value={formik.values.responsibleName}
            onChange={formik.handleChange}
            error={formik.touched.responsibleName && Boolean(formik.errors.responsibleName)}
            helperText={formik.touched.responsibleName && formik.errors.responsibleName}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="role"
            name="role"
            label={t('role')}
            value={formik.values.role}
            onChange={formik.handleChange}
            error={formik.touched.role && Boolean(formik.errors.role)}
            helperText={formik.touched.role && formik.errors.role}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="phone"
            name="phone"
            label={t('phone')}
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label={t('email')}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" sx={{ mb: 2 }}>{t('location')}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="country"
            name="country"
            label={t('country')}
            value={formik.values.country}
            onChange={formik.handleChange}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="city"
            name="city"
            label={t('city')}
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="address"
            name="address"
            label={t('address')}
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant='contained'>{t('projectFormButton')}</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProjectForm

