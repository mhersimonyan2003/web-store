import React, { useState } from 'react';
import { refetchProducts, useProducts } from '@/hooks';
import { Pagination, CircularProgress } from '@mui/material';
import { ProductsCreate } from './ProductsCreate';
import { ProductsList } from './ProductsList';

import s from './index.module.scss';

export const ProductsSection: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { products, pagesTotal, loading, error } = useProducts({ pageNumber });

  if (loading) return <CircularProgress />;
  if (error) return <div>{error}</div>;

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    refetchProducts();
    setPageNumber(page);
  };

  return (
    <div className={s.products}>
      <ProductsCreate />
      <ProductsList products={products} />
      {Boolean(pagesTotal) && (
        <Pagination color="primary" count={pagesTotal} page={pageNumber} onChange={handlePageChange} />
      )}
    </div>
  );
};
