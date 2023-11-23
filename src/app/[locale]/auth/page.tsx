'use client'

import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

export interface AuthProps { }

const Auth: FC<AuthProps> = () => {
  const t = useTranslations("Auth.Register") 

  return (
      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 2 }} columns={{ xs: 1, sm: 6, md: 12 }}
             >
        <Grid item xs={1} sm={3}>
        <Card>
          <CardActionArea href='/auth/register/candidate'>
            <CardMedia
              component="img"
              height="200"
              image="/Empleado.png"
              alt="Empleado image"
            />
            <CardContent >
              <Typography gutterBottom variant="h5" component="div">
                {t('candidateRegister')}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {t('candidateText')}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" href='/auth/register/candidate'>
              {t('buttonLabel')}
            </Button>
          </CardActions>
        </Card>
        </Grid>
        <Grid item xs={1} sm={3}>
          <Card >
            <CardActionArea href='/auth/register/company'>
              <CardMedia
                component="img"
                height="200"
                image="/Empresa.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {t('companyRegister')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {t('companyText')}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href='/auth/register/company'>
                {t('buttonLabel')}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
  )
}

export default Auth;