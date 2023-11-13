
import { useSearchCandidate } from '../context/searchCandidateContext';
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import { Autocomplete, Grid, TextField } from '@mui/material';
import softskills from '@/data/softSkills'
import technicalSkills from '@/data/technicalSkills'
import { FC } from 'react';
import Button from '@/components/button/Button';
import { searchCandidateParams } from '@/models';

export interface SearchCandidateFormProps { }

const SearchCandidateForm: FC<SearchCandidateFormProps> = () => {
  const {
    isFetchingCandidatesData,
    validationSchema,
    buildParams,
    getCandidatesData,
    setQueryParams,
    t }
    = useSearchCandidate()

  const formik = useFormik({
    initialValues: {
      role: '',
      softSkills: [],
      technicalSkills: [],
    },
    validationSchema,
    onSubmit: (values: searchCandidateParams) => {
      const params = buildParams(values)
      setQueryParams(params)
      getCandidatesData()
    }
  })

  return (
    <Box
      component="form"
      id="search-candidate-form"
      onSubmit={formik.handleSubmit}
      sx={{ mx: 'auto' }}
      width={{ xs: '100%', sm: '50%' }}
    >
      <Grid container width={'100%'}>
        <Grid item xs={12} my={1}>
          <TextField
            fullWidth
            id="role"
            name='role'
            label={t('role')}
            placeholder={t('role')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.role && Boolean(formik.errors.role)}
            helperText={formik.touched.role && t(formik.errors.role)}
          />
        </Grid>
        <Grid item xs={12} my={1}>
          <Autocomplete
            multiple
            id="softSkillsComplete"
            options={softskills}
            getOptionLabel={(option) => {
              return option
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                id="softSkills"
                name='softSkills'
                variant="standard"
                label={t('softskills')}
                // placeholder="Favorites"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                error={formik.touched.softSkills && Boolean(formik.errors.softSkills)}
                helperText={formik.touched.softSkills && t(formik.errors.softSkills)}
              />
            )}
            value={formik.values.softSkills}  // Add this line to set the value
            onChange={(event, newValue) => {
              formik.setFieldValue('softSkills', newValue);  // Update the formik state
            }}
          />
        </Grid>
        <Grid item xs={12} my={1}>
          <Autocomplete
            multiple
            id="technicalSkillsComplete"
            options={technicalSkills}
            getOptionLabel={(option) => {
              return option
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                id="technicalSkills"
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
            value={formik.values.technicalSkills}  // Add this line to set the value
            onChange={(event, newValue) => {
              formik.setFieldValue('technicalSkills', newValue);  // Update the formik state
            }}
          />
        </Grid>
        <Button
          type="submit"
          variant="contained"
          disabled={isFetchingCandidatesData}
          loading={isFetchingCandidatesData}
          sx={{ mt: 1, mb: 2, fontWeight: 600 }}
        >
          {t('submit')}
        </Button>
      </Grid>
    </Box >
  )
};

export default SearchCandidateForm;