import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Project, SearchCandidateRow } from '@/models';
import { Autocomplete, Avatar, Divider, Grid, Paper } from '@mui/material';
import { TextFields } from '@mui/icons-material';

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
  open: boolean,
  handleOpen: () => void,
  handleClose: () => void
}

export default function CandidateModal({ candidate, projects, open, handleClose, handleOpen }: BasicModalProps) {
  console.log(projects)
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
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
                {/* <Autocomplete
                  loading={isLoading}
                  getOptionLabel={(option: Test) => {
                    return option?.name ?? ''
                  }}
                  id="select-test"
                  options={projects}
                  onChange={handleTestChange}
                  renderInput={(params) => (
                    <TextFields {...params}
                      id="companyId"
                      name='companyId'
                      variant="standard"
                      label={t('test')}
                      error={formik.touched.testId && Boolean(formik.errors.testId)}
                      helperText={formik.touched.testId && t(formik.errors.testId)}
                    />
                  )}
                /> */}
              </Grid>
            </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
