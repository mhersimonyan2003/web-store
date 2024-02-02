import React, { ReactNode } from 'react';
import { Toolbar } from '@mui/material';

interface Props {
  children: ReactNode;
}

export const MuiToolbar: React.FC<Props> = ({ children }) => {
  return <Toolbar sx={{ flexWrap: 'wrap' }}>{children}</Toolbar>;
};
