'use client';

import MuiAppBar from '@mui/material/AppBar';
import { Box, Button, CssBaseline, Toolbar, Typography, Grid, CardContent, Card, CardActionArea } from '@mui/material';
import { useTranslations } from 'next-intl';
import LanguageSelector from '@/components/lang/LanguageSelector';

export default function Home() {
  const t = useTranslations('Index');

  const navItems: string[] = [];
  return (
    <>
      <Box>
        <CssBaseline />
        <MuiAppBar position="sticky">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h3" noWrap component="div">
              ABC Jobs
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff' }}>
                  {item}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <LanguageSelector />
            </Box>
          </Toolbar>
        </MuiAppBar>

      </Box>
      <Grid container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        {/* Primera fila */}
        <Grid item xs={12} >
          <img src="/Landing.png"
            alt="Descripción de la imagen"
            style={{ width: '100%', height: 'auto', maxWidth: '100%' }} />
        </Grid>

        <Grid container
          item
          xs={12}
          spacing={1}
          alignItems="center"
          justifyContent="center">
          <Grid item xs={12} sm={3}>
            <Card>
              <CardActionArea href='/auth'>
                <CardContent >
                  <Typography gutterBottom variant="h5" component="div" align="center">
                    {t('registerTitle')}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Box textAlign='center'>
                <Button variant='contained' size="large" color="primary" href='/auth'>
                  {t('registerButton')}
                </Button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card >
              <CardActionArea href='/auth/login'>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" align="center">
                    {t('loginTitle')}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Box textAlign='center'>
                <Button variant='contained' size="large" color="primary" href='/auth/login'>
                  {t('loginButton')}
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
