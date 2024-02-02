import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { IconButton } from '@mui/material';
import { useAppSelector } from '@/store';
import { orderSelectors } from '@/store/order';

import s from './index.module.scss';

export const FooterCheckout: React.FC = () => {
  const orderProductsQuantity = useAppSelector(orderSelectors.getQuantity);

  return (
    <Link to="checkout" className={s.checkout}>
      <IconButton color="primary" size="large">
        <ShoppingBasketIcon />
      </IconButton>
      {Boolean(orderProductsQuantity) && <div className={s.checkout__number}>{orderProductsQuantity}</div>}
    </Link>
  );
};
