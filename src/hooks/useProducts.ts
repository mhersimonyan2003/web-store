import { useAppDispatch, useAppSelector } from '@/store';
import { useCallback, useEffect, useState } from 'react';
import { getProducts } from '@/api/products';
import { productsActions, productsSelectors } from '@/store/products';
import { Product } from '@/types';

const REFETCH_PRODUCTS_EVENT_KEY = 'REFETCH_PRODUCTS_EVENT';
const REFETCH_PRODUCTS_EVENT = new CustomEvent('REFETCH_PRODUCTS_EVENT');

export const refetchProducts = () => {
  document.dispatchEvent(REFETCH_PRODUCTS_EVENT);
};

interface Props {
  pageNumber: number;
  fetch?: boolean;
}

export const useProducts = ({ pageNumber, fetch = true }: Props) => {
  const products = useAppSelector(productsSelectors.get);
  const dispatch = useAppDispatch();

  const [pagesTotal, setPagesTotal] = useState(0);
  const [loading, setLoading] = useState(fetch && !products);
  const [error, setError] = useState(false);

  const setProducts = useCallback(
    (newProducts: Array<Product>) => {
      dispatch(productsActions.set(newProducts));
    },
    [dispatch]
  );

  const fetchProducts = useCallback(
    async (_event: Event, page = pageNumber) => {
      setLoading(true);

      try {
        const {
          data,
          pagination: { total, pageSize },
        } = await getProducts(page);

        setError(null);
        setPagesTotal(Math.ceil(total / pageSize));
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [pageNumber, setProducts]
  );

  useEffect(() => {
    if (fetch) {
      fetchProducts(null);

      document.addEventListener(REFETCH_PRODUCTS_EVENT_KEY, fetchProducts);
    }

    return () => {
      setProducts(null);
      document.removeEventListener(REFETCH_PRODUCTS_EVENT_KEY, fetchProducts);
    };
  }, [fetchProducts, fetch, setProducts]);

  return { products, setProducts, pagesTotal, loading, error };
};
