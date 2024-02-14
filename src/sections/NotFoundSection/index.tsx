import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

import s from './index.module.scss';

export const NotFoundSection: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'sections.notFound' });

  return (
    <div className={s['not-found']}>
      <Typography variant="h2">{t('title')}</Typography>
      <Typography variant="h6">{t('text')}</Typography>
      <Link to="/">
        <Button variant="contained">{t('homeLink')}</Button>
      </Link>
    </div>
  );
};
