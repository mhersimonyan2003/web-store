import type { AxiosResponse } from 'axios';
import { apiAuth } from '../api';
import { GetProductsResult } from './types';
import { ProductFormData } from '@/components/Forms/ProductForm/types';
import { Product } from '@/types';

export const getProducts = async (pageNumber: number): Promise<GetProductsResult> => {
  try {
    const response: AxiosResponse<GetProductsResult> = await apiAuth.get(
      `/products/?${new URLSearchParams({
        pagination: JSON.stringify({
          pageSize: 16,
          pageNumber,
        }),
      }).toString()}`
    );
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error('Error getting products:', error);
    throw error;
  }
};

export const createProduct = async (productFormData: ProductFormData): Promise<Product> => {
  try {
    const response: AxiosResponse<Product> = await apiAuth.post(`/products/`, productFormData);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

export const updateProduct = async (id: string, productFormData: ProductFormData): Promise<Product> => {
  try {
    const response: AxiosResponse<Product> = await apiAuth.put(`/products/${id}`, productFormData);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};
