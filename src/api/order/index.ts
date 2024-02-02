import type { AxiosResponse } from 'axios';
import { apiAuth } from '../api';
import { CheckoutOrder, Product } from '@/types';

export const createOrder = async (orderBody: CheckoutOrder): Promise<Product> => {
  try {
    const response: AxiosResponse<Product> = await apiAuth.post(`/orders/`, orderBody);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};
