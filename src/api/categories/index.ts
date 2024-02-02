import type { AxiosResponse } from 'axios';
import { api } from '../api';
import { GetCategoriesResult } from './types';

export const getCategories = async (): Promise<GetCategoriesResult> => {
  try {
    const response: AxiosResponse<GetCategoriesResult> = await api.get(`/categories/`);

    return response.data;
  } catch (error) {
    console.error('Error getting categories:', error);
    throw error;
  }
};
