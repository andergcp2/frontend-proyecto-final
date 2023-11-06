'use client'

import { FC } from 'react'
import { Box, TextField, Grid, Typography, Divider, Modal, Autocomplete, FormHelperText } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { Field, FieldArray, FieldArrayRenderProps, FormikErrors, FormikProvider, useFormik } from 'formik'
import Button from '@/components/button/Button'
import { useProject } from '../context/projectContext'
import softskills from '@/data/softskills'
import { Profile, Project } from '@/models';

export interface ProjectFormProps { }

const ProjectForm: FC<ProjectFormProps> = () => {
  const {
    formik,
    t,
  } = useProject()

  return (
    <Box component="form"
      id="create-project-form"
      onSubmit={formik.handleSubmit}
      sx={{ mt: 3, mx: 'auto', maxWidth: 1000, pt: 10 }}
    >
      <FormikProvider value={formik}>
        <Typography variant="h4" sx={{ mb: 2 }}>{t('projectFormTitle')}</Typography>
        <Grid container spacing={2} pb={5}>
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
              id="leader"
              name="leader"
              label={t('projectLeader')}
              value={formik.values.leader}
              onChange={formik.handleChange}
              error={formik.touched.leader && Boolean(formik.errors.leader)}
              helperText={formik.touched.leader && formik.errors.leader}
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
          <Grid item xs={12} sm={12}>
            <Typography variant="h6" sx={{ mb: 2 }}>{t('profilesList')}</Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <FieldArray
              name="profiles"
              render={(arrayHelpers: FieldArrayRenderProps) => (
                <>
                  {(formik.values.profiles ?? []).map((_, idx) => (
                    <Grid
                      container
                      spacing={2}
                      key={`profile-container-${idx}`}
                      pb={2}
                    >
                      <Grid item xs={12} sm={6}>
                        <TextField
                          key={`name-${idx}`}
                          fullWidth
                          id={`profiles.${idx}.name`}
                          name={`profiles.${idx}.name`}
                          label={t('rolName')}
                          value={formik.values.profiles[idx].name}
                          onChange={formik.handleChange}
                          // error={formik.touched.profiles?.[idx]?.rolName && Boolean(formik.errors.profiles?.[idx])}
                          // helperText={formik.touched.profiles?.[idx]?.rolName && formik.errors.profiles?.[idx]}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          key={`profession-${idx}`}
                          fullWidth
                          id={`profiles.${idx}.profession`}
                          name={`profiles.${idx}.profession`}
                          label={t('profession')}
                          value={formik.values.profiles[idx].profession}
                          onChange={formik.handleChange}
                          // error={formik.touched.profiles?.[idx]?.profession && Boolean(formik.errors.profiles?.[idx]?.profession)}
                          // helperText={formik.touched.profiles?.[idx]?.profession && formik.errors.profiles?.[idx]?.profession}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        {/* <Autocomplete
                          key={`softskills-${idx}`}
                          multiple
                          id={`profiles.${idx}.softskills`}
                          // name={`profiles.${idx}.softskills`}
                          options={softskills}
                          onChange={(_, newValue) => {
                            formik.setFieldValue(`profiles[${idx}].softskills`, newValue);
                          }}
                          value={formik.values.profiles[idx].softskills} // Use formik.values
                          getOptionLabel={(option) => {
                            if (typeof option === 'string') {
                              return option;
                            }
                            return option.name;
                          }}
                          freeSolo
                          renderInput={(params) => (
                            <TextField
                              // key={`softskills-${idx}-input${value}`}
                              {...params}
                              fullWidth
                              label={t('softskills')}
                              variant="outlined"
                            />
                          )}
                        /> */}
                        {/* Field array for adding soft skills */}
                        {/* <FieldArray
                          name={`profiles.${idx}.softskills`}
                          render={(arrayHelpers: FieldArrayRenderProps) => (
                            <>
                              {(formik.values.profiles[idx].softskills ?? []).map((_, idx2) => (
                                <Grid
                                  container
                                  spacing={2}
                                  key={`softskills-container-${idx2}`}
                                  pb={2}
                                >
                                  <Grid item xs={12} sm={6}>
                                    <TextField
                                      key={`softskills-${idx2}`}
                                      fullWidth
                                      id={`profiles.${idx2}.softskills`}
                                      name={`profiles.${idx2}.softskills`}
                                      label={t('softskills')}
                                      value={formik.values.profiles[idx2].softskills}
                                      onChange={formik.handleChange}
                                      // error={formik.touched.profiles?.[idx]?.softskills && Boolean(formik.errors.profiles?.[idx]?.softskills)}
                                      // helperText={formik.touched.profiles?.[idx]?.softskills && formik.errors.profiles?.[idx]?.softskills}
                                      variant="outlined"
                                    />
                                    <Grid item xs={12}>
                                      <Button sx={{ marginRight: '4px' }} variant='contained' onClick={() => arrayHelpers.remove(idx2)}>-</Button>
                                      <Button variant='contained' onClick={() => arrayHelpers.push(idx2)}>+</Button>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              ))}
                            </>
                          )}
                        /> */}
                        <TextField
                          key={`softskills-${idx}`}
                          fullWidth
                          id={`profiles.${idx}.softskills`}
                          name={`profiles.${idx}.softskills`}
                          label={t('softskills')}
                          value={formik.values.profiles[idx].softskills}
                          onChange={formik.handleChange}
                          // error={formik.touched.profiles?.[idx]?.softskills && Boolean(formik.errors.profiles?.[idx]?.softskills)}
                          // helperText={formik.touched.profiles?.[idx]?.softskills && formik.errors.profiles?.[idx]?.softskills}
                          variant="outlined"
                        />
                        {/* {formik.touched.profiles?.[idx].softskills &&
                          !!(formik.errors.profiles as FormikErrors<Profile[]>)?.[
                            idx
                          ]?.softskills &&
                          <FormHelperText error>
                            {t(
                              (
                                formik.errors.profiles as FormikErrors<Project[]>
                              )?.profiles.[idx].softskills as string,
                            )}
                          </FormHelperText>
                        } */}
                        {/* <Grid item xs={12}>
                          <Button sx={{ marginRight: '4px' }} variant='contained' onClick={() => arrayHelpers.remove(idx)}>-</Button>
                          <Button variant='contained' onClick={() => arrayHelpers.push(idx)}>+</Button>
                        </Grid> */}
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          key={`techskills-${idx}`}
                          fullWidth
                          id={`profiles.${idx}.techskills`}
                          name={`profiles.${idx}.techskills`}
                          label={t('techskills')}
                          value={formik.values.profiles[idx].techskills}
                          onChange={formik.handleChange}
                          // error={formik.touched.profiles?.[idx]?.techskills && Boolean(formik.errors.profiles?.[idx]?.techskills)}
                          // helperText={formik.touched.profiles?.[idx]?.techskills && formik.errors.profiles?.[idx]?.techskills}
                          variant="outlined"
                        />
                        {/* {formik.touched.profiles?.[idx].techskills &&
                          !!(formik.errors.profiles as FormikErrors<Profile[]>)?.[
                            idx
                          ]?.techskills &&
                          <FormHelperText error>
                            {t(
                              (
                                formik.errors?.profiles as FormikErrors<Project[]>
                              ).profiles[idx].techskills as string,
                            )}
                          </FormHelperText>
                        } */}
                      </Grid>
                      <Grid item xs={12}>
                        <Button sx={{ marginRight: '4px' }} variant='contained' onClick={() => arrayHelpers.remove(idx)}><DeleteIcon /></Button>
                        {/* <Button variant='contained' onClick={() => arrayHelpers.push(idx)}>+</Button> */}
                      </Grid>
                    </Grid>
                  ))}
                  <Grid item xs={12} py={2}>
                    <Button variant='contained' onClick={() => arrayHelpers.push({ name: '', profession: '', softskills: '', techskills: '' })}>{t('addProfile')}</Button>
                  </Grid>
                </>
              )}
            />
            <Grid item xs={12}>
              <Button type="submit" variant='contained'>{t('projectFormButton')}</Button>
            </Grid>
          </Grid>
        </Grid>
      </FormikProvider>
    </Box>
  )
}

export default ProjectForm

