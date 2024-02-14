import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { useAppDispatch } from '@/store';
import { orderThunks } from '@/store/order';
import { CheckoutOrder } from '@/types';

import s from './index.module.scss';

interface Props {
  order: CheckoutOrder;
}

export const CheckoutConfirm: React.FC<Props> = ({ order }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'sections.checkout' });
  const dispatch = useAppDispatch();

  const approveCartCheckout = () => {
    dispatch(orderThunks.createOrder(order));
  };

  return (
    <div className={s.checkout_approve}>
      <Button variant="outlined" onClick={approveCartCheckout}>
        {t('checkoutConfirm')}
      </Button>
    </div>
  );
};
