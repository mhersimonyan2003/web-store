import React from 'react';
import { Product } from '@/types';
import { ProductCard } from '@/components';

import s from './index.module.scss';

interface Props {
  products: Array<Product>;
}

export const ProductsList: React.FC<Props> = ({ products }) => {
  return (
    <div className={s.products__list}>
      {products?.map((product) => <ProductCard product={product} key={product.id} />)}
    </div>
  );
};
