import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { Logo } from '@/components';
import { Navbar } from './Navbar';
import { HeaderControls } from './HeaderControls';

export const Header: React.FC = () => {
  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Logo />
        <Navbar />
        <HeaderControls />
      </Toolbar>
    </AppBar>
  );
};
