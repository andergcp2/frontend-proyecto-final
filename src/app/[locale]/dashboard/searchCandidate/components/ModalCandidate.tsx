
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AssignProjectProps, Project, SearchCandidateRow } from '@/models';
import { Autocomplete, Avatar, Divider, Grid, IconButton, Paper } from '@mui/material';
import TextField from "@mui/material/TextField";
import { FormikProps, FormikProvider } from 'formik';
import { Close } from '@mui/icons-material';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

interface BasicModalProps {
  candidate: SearchCandidateRow,
  projects: Project[],
  formik: FormikProps<AssignProjectProps>,
  t: (...args0: any) => string,
  open: boolean,
  handleProjectChange: () => void,
  isLoading: boolean,
  handleOpen: () => void,
  handleClose: () => void
}

export default function CandidateModal({ handleProjectChange, isLoading, t, candidate, projects, open, formik, handleClose }: BasicModalProps) {

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
      <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
        >
          <Close />
        </IconButton>
      <Grid container 
      direction="column"
      alignItems="center"
      justifyContent="center">
            <Grid item xs={12}>
              <Typography textAlign="center" variant="h3">{candidate.name} {candidate.lastName}</Typography>
            </Grid>
            <Grid item xs={12} p={2} textAlign="center" alignItems={"center"} alignContent={"center"}>
              <Avatar
              alt="Avatar" 
              src="/Empty.png"
              sx={{ width: 200, height: 200, m: "10px"}}
              ></Avatar>
              <Divider/>
              <Grid item xs={12}>
                  <Typography>{candidate.email}</Typography>
              </Grid>
              <Grid item xs={12}>
                  <Typography>{candidate.profession}</Typography>
              </Grid>
              <Grid item xs={12}>
                  <Typography>{candidate.country}</Typography>
              </Grid>
              <Grid item xs={12}>
                  <Typography>{candidate.city}</Typography>
              </Grid>
              <Grid item xs={12}>
              <Divider/>
              <Box
                component="form"
                id="create-project-form"
                onSubmit={formik.handleSubmit}
                mt={1}
              >
              <Typography variant="h4">{t('assingToProject')}</Typography>
              <FormikProvider value={formik}>
                <Autocomplete
                    loading={isLoading}
                    getOptionLabel={(option: Project) => {
                      return option?.name ?? ''
                    }}
                    id="select-project"
                    options={projects}
                    onChange={handleProjectChange}
                    renderInput={(params) => (
                      <TextField {...params}
                        id={params.id}
                        name='projectId'
                        variant="standard"
                        label={t('project')}
                        error={formik.touched.projectId && Boolean(formik.errors.projectId)}
                        helperText={formik.touched.projectId && formik.errors.projectId}
                      />
                  )}
                />
                <Button type="submit" variant='contained' sx={{ mt: 1 }}>{t('assignProjectButton')}</Button>
                </FormikProvider>
                </Box>
              </Grid>
            </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
