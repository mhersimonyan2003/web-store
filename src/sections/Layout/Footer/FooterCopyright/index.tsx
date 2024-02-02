import { Typography } from '@mui/material';
import React from 'react';

export const FooterCopyright: React.FC = () => {
  return (
    <Typography variant="body1" color="text.secondary">
      Copyright © {new Date().getFullYear()} MOIS. All Rights Reserved
    </Typography>
  );
};
