import React from 'react';
import { Typography } from '@mui/material';
import LogoImg from '@/icons/logo.png';

import s from './index.module.scss';

export const Logo: React.FC = () => {
  return (
    <div className={s.logo}>
      <img className={s.logo__image} src={LogoImg} />
      <Typography variant="body1" fontWeight="700">
        MOIS
      </Typography>
    </div>
  );
};
