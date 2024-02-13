import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Category } from '@/types';
import { Modal, CategoryForm, CategoriesFormData } from '@/components';

import s from './index.module.scss';

interface Props {
  category: Category;
}

export const CategoryEdit: React.FC<Props> = ({ category }) => {
  const { id, name, photo } = category;
  const [formVisible, setFormVisible] = useState(false);

  const openFormModal = () => {
    setFormVisible(true);
  };

  const closeFormModal = () => {
    setFormVisible(false);
  };

  const categoriesFormData: CategoriesFormData = {
    name: name,
    photo: photo,
  };

  return (
    <React.Fragment>
      <div className={s['category-edit']} onClick={openFormModal}>
        <IconButton color="primary">
          <EditIcon />
        </IconButton>
      </div>
      <Modal visible={formVisible} setVisible={setFormVisible} title={category.name}>
        <CategoryForm id={id} data={categoriesFormData} onSubmitHandler={closeFormModal} />
      </Modal>
    </React.Fragment>
  );
};
