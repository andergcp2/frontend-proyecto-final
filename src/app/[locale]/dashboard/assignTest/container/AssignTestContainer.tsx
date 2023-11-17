import Box from "@mui/material/Box";
import { useAssignTest } from "../context/assignTestContext";
import { FormikProvider } from "formik";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useMemo } from "react";
import { SearchCandidateRow } from "@/models";
import { Test } from "@/models/test.model";
import { candidatesCreated } from "@/data/candidates";

const AssignTestContainer = () => {
  const { formik, t, candidates, tests, isLoading } = useAssignTest();
  // console.log('Ander candi', candidates)
  // console.log('Ander tests', tests)
  // const candidateNames = useMemo(
  //   () =>
  //     candidates.map((candidate) => {
  //       return candidate.names
  //     }
  //     ),
  //   [candidates]
  // )
  // const testNames = useMemo(
  //   () =>
  //     Array.isArray(tests) ?
  //       tests.map((test) => {
  //         return test.name
  //       }
  //       ) : [],
  //   [tests]
  // )
  return (
    <Box
      width={{
        xs: '90%', md: '80%', lg: '60%', xl: '50%'
      }}
      marginX={'auto'}
      marginY={5}
    >
      <FormikProvider value={formik}>
        <Typography variant="h3">{t('assignTestTitle')}</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Autocomplete
              getOptionLabel={(option: SearchCandidateRow) => {
                return option?.names ?? ''
              }}
              id="select-candidate"
              options={candidatesCreated}
              renderInput={(params) => <TextField {...params} label="Candidate" />}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Autocomplete
              getOptionLabel={(option: Test) => {
                return option?.name ?? ''
              }}
              id="select-test"
              options={tests}
              renderInput={(params) => <TextField {...params} label="Test" />}
            />
          </Grid>
        </Grid>
      </FormikProvider>
    </Box>
  );
}

export default AssignTestContainer;