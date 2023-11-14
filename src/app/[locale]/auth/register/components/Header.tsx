'use client'

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FC } from "react";
import Button from '@/components/button/Button';
import LanguageSelector from '@/components/lang/LanguageSelector';

// const navItems = ['Candidate', 'Companies', 'Sign In'];
const navItems: string[] = [];

const Sidebar: FC<MuiAppBarProps> = ({ children }) => {
  return (
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
      <Box width={'100%'}>
        {children}
      </Box>
    </Box>
  )
}

export default Sidebar;