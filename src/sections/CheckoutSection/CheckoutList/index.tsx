import React from 'react';
import { ProductCard } from '@/components';

import s from './index.module.scss';
import { CheckoutOrderProduct } from '@/types';

interface Props {
  orderProducts: Array<CheckoutOrderProduct>;
}

export const CheckoutList: React.FC<Props> = ({ orderProducts }) => {
  return (
    <div className={s.checkout__list}>
      {orderProducts.map((product) => (
        <ProductCard product={product} quantity={product.quantity} key={product.id} />
      ))}
    </div>
  );
};
