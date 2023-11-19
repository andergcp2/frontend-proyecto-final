import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { FormikProvider } from "formik";

import { useAssignTest } from "../context/assignTestContext";
import { SearchCandidateRow } from "@/models";
import { Test } from "@/models/test.model";
import BasicModal from "@/components/modal/Modal";

const AssignTestContainer = () => {
  const {
    candidates,
    formik,
    isLoading,
    open,
    tests,
    handleCandidateChange,
    handleTestChange,
    setOpen,
    t,
  } = useAssignTest();

  return (
    <Box
      component="form"
      id="create-project-form"
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
          modalTitle={t('assignSuccess')}
          modalText=""
        />
        <Typography
          variant="h3"
          py={2}
        >
          {t('assignTestTitle')}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Autocomplete
              loading={isLoading}
              getOptionLabel={(option: SearchCandidateRow) => {
                return option?.name ?? ''
              }}
              id="select-candidate"
              options={candidates}
              onChange={handleCandidateChange}
              renderInput={(params) => (
                <TextField {...params}
                  id="candidateId"
                  name='candidateId'
                  variant="standard"
                  label={t('candidate')}
                  error={formik.touched.candidateId && Boolean(formik.errors.candidateId)}
                  helperText={formik.touched.candidateId && t(formik.errors.candidateId)}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Autocomplete
              loading={isLoading}
              getOptionLabel={(option: Test) => {
                return option?.name ?? ''
              }}
              id="select-test"
              options={tests}
              onChange={handleTestChange}
              renderInput={(params) => (
                <TextField {...params}
                  id="testId"
                  name='testId'
                  variant="standard"
                  label={t('test')}
                  error={formik.touched.testId && Boolean(formik.errors.testId)}
                  helperText={formik.touched.testId && t(formik.errors.testId)}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button type="submit" variant='contained'>{t('assignTestButton')}</Button>
          </Grid>
        </Grid>
      </FormikProvider>
    </Box>
  );
}

export default AssignTestContainer;