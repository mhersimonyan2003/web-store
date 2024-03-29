import React from 'react';
import { useAppSelector } from '@/store';
import { orderSelectors } from '@/store/order';
import { CheckoutList } from './CheckoutList';
import { CheckoutConfirm } from './CheckoutConfirm';
import { CheckoutEmpty } from './CheckoutEmpty';

import s from './index.module.scss';

export const CheckoutSection: React.FC = () => {
  const order = useAppSelector(orderSelectors.get);
  const orderProducts = order?.products;

  return (
    <div className={s.checkout}>
      {orderProducts.length ? (
        <React.Fragment>
          <CheckoutList orderProducts={orderProducts} />
          <CheckoutConfirm order={order} />
        </React.Fragment>
      ) : (
        <CheckoutEmpty />
      )}
    </div>
  );
};
