import React from 'react';
import { useAppSelector } from '@/store';
import { tokenSelectors } from '@/store/token';
import { ProductCard } from '@/components';

import s from './index.module.scss';
import { CheckoutOrderProduct } from '@/types';

interface Props {
  orderProducts: Array<CheckoutOrderProduct>;
}

export const CheckoutList: React.FC<Props> = ({ orderProducts }) => {
  const token = useAppSelector(tokenSelectors.get);

  return (
    <div className={s.checkout__list}>
      {orderProducts.map((product) => (
        <ProductCard editable={Boolean(token)} product={product} quantity={product.quantity} key={product.id} />
      ))}
    </div>
  );
};
