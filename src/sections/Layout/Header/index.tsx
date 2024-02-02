import React from 'react';
import { Toolbar } from '@mui/material';
import { MuiAppBar, Logo } from '@/components';
import { Navbar } from './Navbar';
import { HeaderControls } from './HeaderControls';

export const Header: React.FC = () => {
  return (
    <MuiAppBar>
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Logo />
        <Navbar />
        <HeaderControls />
      </Toolbar>
    </MuiAppBar>
  );
};
