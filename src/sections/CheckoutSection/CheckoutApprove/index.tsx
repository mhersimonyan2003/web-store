import React from 'react';
import { Button } from '@mui/material';
import { useAppDispatch } from '@/store';
import { orderThunks } from '@/store/order';
import { CheckoutOrder } from '@/types';

import s from './index.module.scss';

interface Props {
  order: CheckoutOrder;
}

export const CheckoutApprove: React.FC<Props> = ({ order }) => {
  const dispatch = useAppDispatch();

  const approveCartCheckout = () => {
    dispatch(orderThunks.createOrder(order));
  };

  return (
    <div className={s.checkout_approve}>
      <Button variant="outlined" onClick={approveCartCheckout}>
        CHECKOUT
      </Button>
    </div>
  );
};
