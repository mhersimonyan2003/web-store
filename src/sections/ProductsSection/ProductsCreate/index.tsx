import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useAppSelector } from '@/store';
import { tokenSelectors } from '@/store/token';
import { Modal, ProductForm } from '@/components';

import s from './index.module.scss';

export const ProductsCreate: React.FC = () => {
  const token = useAppSelector(tokenSelectors.get);
  const [formVisible, setFormVisible] = useState(false);

  if (!token) return;

  const openFormModal = () => {
    setFormVisible(true);
  };

  const closeFormModal = () => {
    setFormVisible(false);
  };

  return (
    <React.Fragment>
      <div className={s['products-create']} onClick={openFormModal}>
        <Button size="large" variant="outlined">
          Create
        </Button>
      </div>
      <Modal visible={formVisible} setVisible={setFormVisible} title="Product create">
        <ProductForm onSubmitHandler={closeFormModal} />
      </Modal>
    </React.Fragment>
  );
};
