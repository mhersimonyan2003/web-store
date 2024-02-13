import React from 'react';
import { Category } from '@/types';
import CategoryIcon from '@/icons/category.png';
import { CategoryEdit } from './CategoryEdit';

import s from './index.module.scss';

interface Props {
  editable: boolean;
  category: Category;
}

export const CategoryCard: React.FC<Props> = ({ editable, category }) => {
  const { name, photo } = category;

  return (
    <div className={s.category__card}>
      <img className={s.category__card__photo} src={photo || CategoryIcon} alt={name} />
      {editable && <CategoryEdit category={category} />}
      <div className={s.category__card__header}>
        <div className={s.category__card__name}>{name}</div>
      </div>
    </div>
  );
};
