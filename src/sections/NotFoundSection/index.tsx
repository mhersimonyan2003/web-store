import React from 'react';
import { Button, Typography } from '@mui/material';

import s from './index.module.scss';
import { Link } from 'react-router-dom';

export const NotFoundSection: React.FC = () => {
  return (
    <div className={s['not-found']}>
      <Typography variant="h2">Not Found</Typography>
      <Typography variant="h6">The page you’re looking for doesn’t exist.</Typography>
      <Link to="/">
        <Button variant="contained">Back Home</Button>
      </Link>
    </div>
  );
};
