import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import EmptyShopIcon from '@/icons/empty-shop.png';

import s from './index.module.scss';

export const CheckoutEmpty = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'sections.checkout' });

  return (
    <div className={s['checkout-empty']}>
      <img src={EmptyShopIcon} className={s['checkout-empty__icon']} />
      <Typography variant="h6">{t('emptyText')}</Typography>
    </div>
  );
};
