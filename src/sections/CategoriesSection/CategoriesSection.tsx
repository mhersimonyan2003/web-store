import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CircularProgress, Pagination } from '@mui/material';
import { refetchCategories, useCategories } from '@/hooks';
import { Filter } from '@/components';
import { CategoriesFilterData } from './types';
import { getFilterItems } from './constants';
import { CategoriesCreate } from './CategoriesCreate';
import { CategoriesList } from './CategoriesList';

import s from './index.module.scss';

export const CategoriesSection: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'sections.categories.filter' });
  const [pageNumber, setPageNumber] = useState(1);
  const [filters, setFilters] = useState<CategoriesFilterData>(null);
  const { categories, pagesTotal, loading, error } = useCategories({ pageNumber, filters });

  const filterItems = useMemo(() => getFilterItems(t), [t]);

  if (loading) return <CircularProgress />;
  if (error) return <div>{error}</div>;

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    refetchCategories();
    setPageNumber(page);
  };

  return (
    <div className={s.categories}>
      <CategoriesCreate />
      <Filter filters={filters} setFilters={setFilters} filterItems={filterItems} />
      <CategoriesList categories={categories} />
      {Boolean(pagesTotal) && (
        <div className={s.categories__pagination}>
          <Pagination color="primary" count={pagesTotal} page={pageNumber} onChange={handlePageChange} />
        </div>
      )}
    </div>
  );
};
