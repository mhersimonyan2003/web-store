import { useCallback, useEffect, useState } from 'react';
import { getCategories } from '@/api/categories';
import { useAppDispatch, useAppSelector } from '@/store';
import { categoriesActions, categoriesSelectors } from '@/store/categories';
import { Category } from '@/types';
import { CategoriesFilterData } from '@/sections';
import { getFiltersObj } from '@/helpers';

const REFETCH_CATEGORIES_EVENT_KEY = 'REFETCH_CATEGORIES_EVENT';
const REFETCH_CATEGORIES_EVENT = new CustomEvent(REFETCH_CATEGORIES_EVENT_KEY);

export const refetchCategories = () => {
  document.dispatchEvent(REFETCH_CATEGORIES_EVENT);
};

interface Props {
  pageNumber?: number;
  fetch?: boolean;
  filters?: CategoriesFilterData;
}

export const useCategories = ({ pageNumber, fetch = true, filters = null }: Props) => {
  const categories = useAppSelector(categoriesSelectors.get);
  const categoriesOptions = useAppSelector(categoriesSelectors.getOptions);
  const dispatch = useAppDispatch();

  const [pagesTotal, setPagesTotal] = useState(0);
  const [loading, setLoading] = useState(fetch && !categories);
  const [error, setError] = useState(false);

  const setCategories = useCallback(
    (newCategories: Array<Category>) => {
      dispatch(categoriesActions.set(newCategories));
    },
    [dispatch]
  );

  const fetchCategories = useCallback(
    async (_event: Event, page = pageNumber) => {
      setLoading(true);
      const filtersObj = getFiltersObj({ filters, page });

      try {
        const {
          data,
          pagination: { total, pageSize },
        } = await getCategories(filtersObj);

        setError(null);
        setPagesTotal(Math.ceil(total / pageSize));
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [pageNumber, setCategories, filters]
  );

  useEffect(() => {
    if (fetch) {
      fetchCategories(null);

      document.addEventListener(REFETCH_CATEGORIES_EVENT_KEY, fetchCategories);
    }

    return () => {
      setCategories(null);
      document.removeEventListener(REFETCH_CATEGORIES_EVENT_KEY, fetchCategories);
    };
  }, [fetchCategories, fetch, setCategories]);

  return { categories, categoriesOptions, setCategories, pagesTotal, loading, error };
};
