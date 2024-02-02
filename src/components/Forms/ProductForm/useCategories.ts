import { useEffect, useState } from 'react';
import { getCategories } from '@/api/categories';
import { Category } from '@/types';
import { useAppDispatch } from '@/store';
import { alertsActions } from '@/store/alerts';

export const useCategories = () => {
  const [categories, setCategories] = useState<Array<Category>>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      const { data: categories } = await getCategories();

      setCategories(categories);
    };

    try {
      fetchCategories();
    } catch (err) {
      dispatch(alertsActions.add({ severity: 'error', message: 'Error fetching categories' }));
    }
  }, [dispatch]);

  return { categories, setCategories };
};
