import type { AxiosResponse } from 'axios';
import { Product } from '@/types';
import { queryFilters } from '@/helpers';
import { ProductsFormData } from '@/components';
import { apiAuth } from '../api';
import { GetProductsResult } from './types';
import { ProductsFilterData } from '@/sections';

export const getProducts = async (filters: ProductsFilterData): Promise<GetProductsResult> => {
  try {
    const response: AxiosResponse<GetProductsResult> = await apiAuth.get(
      `/products/?${queryFilters<ProductsFilterData>(filters)}`
    );

    return response.data;
  } catch (error) {
    console.error('Error getting products:', error);
    throw error;
  }
};

export const createProduct = async (productsFormData: ProductsFormData): Promise<Product> => {
  try {
    const response: AxiosResponse<Product> = await apiAuth.post(`/products/`, productsFormData);

    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

export const updateProduct = async (id: string, productsFormData: ProductsFormData): Promise<Product> => {
  try {
    const response: AxiosResponse<Product> = await apiAuth.put(`/products/${id}`, productsFormData);

    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};
