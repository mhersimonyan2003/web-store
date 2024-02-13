import React from 'react';
import { useAppSelector } from '@/store';
import { tokenSelectors } from '@/store/token';
import { Category } from '@/types';
import { CategoryCard } from '@/components';

import s from './index.module.scss';

interface Props {
  categories: Array<Category>;
}

export const CategoriesList: React.FC<Props> = ({ categories }) => {
  const token = useAppSelector(tokenSelectors.get);

  return (
    <div className={s.categories__list}>
      {categories?.map((category) => <CategoryCard editable={Boolean(token)} category={category} key={category.id} />)}
    </div>
  );
};
