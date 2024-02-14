import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import s from './index.module.scss';

export const CheckoutEmpty = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'sections.checkout' });

  return (
    <div className={s['checkout-empty']}>
      <AddShoppingCartIcon className={s['checkout-empty__icon']} />
      <Typography variant="h6">{t('emptyText')}</Typography>
    </div>
  );
};
