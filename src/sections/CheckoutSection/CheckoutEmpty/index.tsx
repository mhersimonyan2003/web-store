import React from 'react';
import { Typography } from '@mui/material';
import EmptyShopIcon from '@/icons/empty-shop.png';

import s from './index.module.scss';

export const CheckoutEmpty = () => {
  return (
    <div className={s['checkout-empty']}>
      <img src={EmptyShopIcon} className={s['checkout-empty__icon']} />
      {/* </div> */}
      <Typography variant="h6">Your Shopping Cart is Empty</Typography>
    </div>
  );
};
