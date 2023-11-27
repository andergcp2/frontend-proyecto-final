'use client';

import { Box, Button, CssBaseline, Toolbar, Typography, Grid, CardContent, Card, CardActionArea, AppBar } from '@mui/material';
import { useTranslations } from 'next-intl';
import LanguageSelector from '@/components/lang/LanguageSelector';
import { Height } from '@mui/icons-material';

export default function Home() {
  const t = useTranslations('Index');

  const navItems: string[] = [];
  return (
    <>
      <Box>
        <CssBaseline />
        <AppBar position="sticky">
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
        </AppBar>

      </Box>
      <Grid container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        {/* Primera fila */}
        <Grid
          item
          xs={12}
          maxHeight={500}
          overflow={'hidden'}
          width={'100%'}
        >
          <img src="/Landing.png"
            alt="Descripción de la imagen"
            style={{ width: '100%', minWidth: '100%', height: 'auto' }} />
        </Grid>
        <Grid container
          item
          xs={12}
          spacing={1}
          alignItems="center"
          justifyContent="center"
          mt={2}
        >
          <Grid item xs={9} sm={3} mx={{ lg: 2 }}>
            <Card>
              <CardActionArea href='/auth'>
                <CardContent >
                  <Typography gutterBottom variant="h3" component="div" align="center">
                    {t('registerTitle')}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Box textAlign='center' pb={2}>
                <Button variant='contained' size="large" color="primary" href='/auth'>
                  {t('registerButton')}
                </Button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={9} sm={3} mx={{ lg: 2 }}>
            <Card >
              <CardActionArea href='/auth/login'>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div" align="center">
                    {t('loginTitle')}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Box textAlign='center' pb={2}>
                <Button variant='contained' size="large" color="primary" href='/auth/login'>
                  {t('loginButton')}
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Grid >
    </>
  )
}
