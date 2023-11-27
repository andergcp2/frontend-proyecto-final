'use client'

import { Avatar, Divider, Grid, Paper, Typography } from "@mui/material";
import { FC } from "react";
import useCandidateContext from "../context/useCandidateContext";

interface CandidateContainerProps { }

const CandidateContainer: FC<CandidateContainerProps> = () => {
  const { t } = useCandidateContext()


  return (
      <Grid container 
      direction="column"
      alignItems="center"
      justifyContent="center"
      mt={12}
      spacing={2}>
          <Paper>
            <Grid item xs={12}>
              <Typography textAlign="center" >{t('welcome')}</Typography>
            </Grid>
            <Grid item xs={12} p={2} textAlign="center" alignItems={"center"} alignContent={"center"}>
              <Avatar 
              alt="Avatar" 
              src="/Avatar.png"
              sx={{ width: 200, height: 200, m: "10px"}}
              ></Avatar>
              <Divider/>
              <Grid item xs={12}>
                  <Typography>Nombre</Typography>
              </Grid>
              <Grid item xs={12}>
                  <Typography>Apellido</Typography>
              </Grid>
              <Grid item xs={12}>
                  <Typography>Apellido</Typography>
              </Grid>
              <Grid item xs={12}>
                  <Typography>Apellido</Typography>
              </Grid>
              <Grid item xs={12}>
                  <Typography>Apellido</Typography>
              </Grid>
              <Grid item xs={12}>
                  <Typography>Apellido</Typography>
              </Grid>
            </Grid>
          </Paper>
      </Grid>
  )
}

export default CandidateContainer