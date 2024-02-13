import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Product } from '@/types';
import { Modal, ProductForm, ProductsFormData } from '@/components';

import s from './index.module.scss';

interface Props {
  product: Product;
}

export const ProductEdit: React.FC<Props> = ({ product }) => {
  const { id, name, photo, oldPrice, price, desc, category } = product;
  const [formVisible, setFormVisible] = useState(false);

  const openFormModal = () => {
    setFormVisible(true);
  };

  const closeFormModal = () => {
    setFormVisible(false);
  };

  const productsFormData: ProductsFormData = {
    name: name,
    photo: photo,
    oldPrice: oldPrice,
    price: price,
    desc: desc,
    categoryId: category.id,
  };

  return (
    <React.Fragment>
      <div className={s['product-edit']} onClick={openFormModal}>
        <IconButton color="primary">
          <EditIcon />
        </IconButton>
      </div>
      <Modal visible={formVisible} setVisible={setFormVisible} title={product.name}>
        <ProductForm id={id} data={productsFormData} onSubmitHandler={closeFormModal} />
      </Modal>
    </React.Fragment>
  );
};
