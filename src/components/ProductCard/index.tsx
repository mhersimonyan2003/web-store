import React from 'react';
import { Product } from '@/types';
import { formatNumber } from '@/helpers';
import ProductIcon from '@/icons/product.png';
import { ProductShoppingCart } from './ProductShoppingCart';
import { ProductEdit } from './ProductEdit';

import s from './index.module.scss';

interface Props {
  product: Product;
  quantity?: number;
}

export const ProductCard: React.FC<Props> = ({ product, quantity }) => {
  const { name, photo, category, desc, oldPrice, price } = product;

  const discount = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : null;

  return (
    <div className={s.product__card}>
      <img className={s.product__card__photo} src={photo || ProductIcon} alt={name} />
      <ProductEdit product={product} />
      <div className={s.product__card__price}>
        <div className={s['product__card__price-current']}>{formatNumber(price)} $</div>
        {oldPrice && <div className={s['product__card__price-old']}>{formatNumber(oldPrice)} $</div>}
        {discount !== null && <div className={s['product__card__price-discount']}>{discount}%</div>}
      </div>
      <div className={s.product__card__header}>
        <div className={s.product__card__name}>{name}</div>
        {category && <div className={s.product__card__category}>{category.name}</div>}
      </div>
      <div className={s.product__card__description}>{desc}</div>
      <div className={s.product__card__buttons}>
        <ProductShoppingCart product={product} quantity={quantity} />
      </div>
    </div>
  );
};