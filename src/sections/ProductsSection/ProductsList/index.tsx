import React from 'react';
import { useAppSelector } from '@/store';
import { tokenSelectors } from '@/store/token';
import { Product } from '@/types';
import { ProductCard } from '@/components';

import s from './index.module.scss';

interface Props {
  products: Array<Product>;
}

export const ProductsList: React.FC<Props> = ({ products }) => {
  const token = useAppSelector(tokenSelectors.get);

  return (
    <div className={s.products__list}>
      {products?.map((product) => <ProductCard editable={Boolean(token)} product={product} key={product.id} />)}
    </div>
  );
};
