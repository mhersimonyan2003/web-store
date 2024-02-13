import type { AxiosResponse } from 'axios';
import { apiAuth } from '../api';
import { GetCategoriesResult } from './types';
import { Category } from '@/types';
import { queryFilters } from '@/helpers';
import { CategoriesFormData } from '@/components';
import { CategoriesFilterData } from '@/sections';

export const getCategories = async (filters: CategoriesFilterData): Promise<GetCategoriesResult> => {
  try {
    const response: AxiosResponse<GetCategoriesResult> = await apiAuth.get(
      `/categories/?${queryFilters<CategoriesFilterData>(filters)}`
    );

    return response.data;
  } catch (error) {
    console.error('Error getting categories:', error);
    throw error;
  }
};

export const createCategory = async (categoriesFormData: CategoriesFormData): Promise<Category> => {
  try {
    const response: AxiosResponse<Category> = await apiAuth.post(`/categories/`, categoriesFormData);

    return response.data;
  } catch (error) {
    console.error('Error creating category:', error);
    throw error;
  }
};

export const updateCategory = async (id: string, categoriesFormData: CategoriesFormData): Promise<Category> => {
  try {
    const response: AxiosResponse<Category> = await apiAuth.put(`/categories/${id}`, categoriesFormData);

    return response.data;
  } catch (error) {
    console.error('Error updating category:', error);
    throw error;
  }
};
