import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'Auth',
}

export interface AuthProps { }

const Auth: FC<AuthProps> = () => {

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
                Regístrese como candidato
              </Typography>
              <Typography variant="body1" color="text.secondary">
              ¡Descubre tu próximo desafío profesional con nosotros! En AbcJobs, 
              buscamos mentes creativas y apasionadas para unirse a nuestro equipo. 
              Explora emocionantes oportunidades de carrera en nuestra página de reclutamiento en línea. 
              Tu futuro te espera.¡Únete a nosotros y haz avanzar tu carrera hoy! 
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" href='/auth/register/candidate'>
              Registrarse
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
                  Registrarse como empresa
                </Typography>
                <Typography variant="body1" color="text.secondary">
                ¡Optimiza tu éxito empresarial con nuestro servicio de vanguardia! En AbcJobs, 
                ofrecemos soluciones innovadoras diseñadas para potenciar tu eficiencia y rendimiento. 
                Descubre cómo podemos transformar tu negocio y llevarte al siguiente nivel. 
                  ¡Aprovecha hoy mismo nuestro servicio y desata tu potencial!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href='/auth/register/company'>
                Registrarse
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
  )
}

export default Auth;