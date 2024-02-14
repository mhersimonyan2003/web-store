import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pagination, CircularProgress } from '@mui/material';
import { refetchProducts, useCategories, useProducts } from '@/hooks';
import { Filter } from '@/components';
import { ProductsFilterData } from './types';
import { getFilterItems } from './constants';
import { ProductsCreate } from './ProductsCreate';
import { ProductsList } from './ProductsList';

import s from './index.module.scss';

export const ProductsSection: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'sections.products.filter' });
  const [pageNumber, setPageNumber] = useState(1);
  const [filters, setFilters] = useState<ProductsFilterData>({ categoryIds: [] });
  const { products, pagesTotal, loading, error } = useProducts({ pageNumber, filters });
  const { categoriesOptions } = useCategories({});

  const handlePageChange = useCallback((_: React.ChangeEvent<unknown>, page: number) => {
    refetchProducts();
    setPageNumber(page);
  }, []);

  const filterItems = useMemo(() => getFilterItems(categoriesOptions, t), [categoriesOptions, t]);

  if (loading) return <CircularProgress />;
  if (error) return <div>{error}</div>;

  return (
    <div className={s.products}>
      <ProductsCreate />
      <Filter filters={filters} setFilters={setFilters} filterItems={filterItems} />
      <ProductsList products={products} />
      {Boolean(pagesTotal) && (
        <div className={s.products__pagination}>
          <Pagination color="primary" count={pagesTotal} page={pageNumber} onChange={handlePageChange} />
        </div>
      )}
    </div>
  );
};
