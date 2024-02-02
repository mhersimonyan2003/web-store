import React, { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useAppDispatch } from '@/store';
import { orderActions } from '@/store/order';
import { Product } from '@/types';

import s from './index.module.scss';

interface Props {
  product: Product;
  quantity?: number;
}

export const ProductShoppingCart: React.FC<Props> = ({ product, quantity }) => {
  const [count, setCount] = useState(quantity || 0);
  const dispatch = useAppDispatch();

  const increaseCount = () => {
    dispatch(orderActions.increaseProduct(product));
    setCount(count + 1);
  };

  const decreaseCount = () => {
    dispatch(orderActions.decreaseProduct(product));
    setCount(count - 1);
  };

  return (
    <div className={s['product-shopping-cart']}>
      {count === 0 ? (
        <Button variant="contained" color="info" onClick={increaseCount}>
          <ShoppingCartIcon />В корзину
        </Button>
      ) : (
        <div className={s['product-shopping-cart__controls']}>
          <IconButton size="large" color="primary" onClick={decreaseCount}>
            <RemoveIcon />
          </IconButton>
          {count}
          <IconButton size="large" color="primary" onClick={increaseCount}>
            <AddIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
};
