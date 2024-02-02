import React, { ReactNode } from 'react';
import { AppBar } from '@mui/material';

interface Props {
  children: ReactNode;
}

export const MuiAppBar: React.FC<Props> = ({ children }) => {
  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      {children}
    </AppBar>
  );
};
