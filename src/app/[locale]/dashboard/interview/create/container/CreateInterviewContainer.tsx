import { FC } from "react";
import { useCreateInterview } from "../context/createInterviewContext";
import Box from "@mui/material/Box";
import { FormikProvider } from "formik";
import BasicModal from "@/components/modal/Modal";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Button from "@mui/material/Button";

export interface CreateInterviewContainerProps { }

const CreateInterviewContainer: FC<CreateInterviewContainerProps> = () => {
  const {
    candidates,
    formik,
    isLoading,
    open,
    projects,
    handleDateTimeChange,
    setOpen,
    t
  } = useCreateInterview()

  return (
    <Box
      component="form"
      id="create-interview-form"
      onSubmit={formik.handleSubmit}
      width={{
        xs: '90%', md: '80%', lg: '60%', xl: '50%'
      }}
      marginX={'auto'}
      marginTop={20}
    >
      <FormikProvider value={formik}>
        <BasicModal
          open={open}
          handleClose={() => setOpen(false)}
          handleOpen={() => setOpen(true)}
          modalTitle={t('interviewCreatedSuccess')}
          modalText=""
        />
        <Typography
          variant="h3"
          py={2}
          gutterBottom
        >
          {t('assignInterviewTitle')}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Autocomplete
              loading={isLoading}
              options={candidates ?? []}
              getOptionLabel={(option) => {
                return option?.name ?? ''
              }}
              id='select-candidate'
              onChange={formik.handleChange}
              renderInput={(params) => (
                <TextField {...params}
                  id="candidateId"
                  name="candidateId"
                  variant="standard"
                  label={t('candidate')}
                  error={formik.touched.candidateId && Boolean(formik.errors.candidateId)}
                  helperText={formik.touched.candidateId && formik.errors.candidateId}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Autocomplete
              loading={isLoading}
              options={projects ?? []}
              getOptionLabel={(option) => {
                return option?.name ?? ''
              }}
              id='select-project'
              onChange={formik.handleChange}
              renderInput={(params) => (
                <TextField {...params}
                  id="projectId"
                  name="projectId"
                  variant="standard"
                  label={t('project')}
                  error={formik.touched.projectId && Boolean(formik.errors.projectId)}
                  helperText={formik.touched.projectId && formik.errors.projectId}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label={t('interviewDate')}
                value={formik.values.interviewDate}
                onChange={handleDateTimeChange}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="topic"
              name="topic"
              label={t('topic')}
              value={formik.values.topic}
              onChange={formik.handleChange}
              variant="standard"
              error={formik.touched.topic && Boolean(formik.errors.topic)}
              helperText={formik.touched.topic && formik.errors.topic}
            />
          </Grid>
          <Grid item xs={12} md={6} mx={'auto'}>
            <Button
              variant="contained"
              type="submit"
            >
              {t('submit')}
            </Button>
          </Grid>
        </Grid>
      </FormikProvider>
    </Box>
  );
}

export default CreateInterviewContainer;