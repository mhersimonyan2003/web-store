import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { ProductForm } from '@/components';
import { Product } from '@/types';
import { Modal } from '@/components/Modal';

import s from './index.module.scss';
import { ProductFormData } from '@/components/Forms/ProductForm/types';

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

  const productFormData: ProductFormData = {
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
        <ProductForm id={id} data={productFormData} onSubmitHandler={closeFormModal} />
      </Modal>
    </React.Fragment>
  );
};
