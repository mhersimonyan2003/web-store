import type { AxiosResponse } from 'axios';
import { api } from '../api';
import { AuthResult, AuthBody } from './types';
import { COMMAND_ID } from '@/constants';

export const login = async (credentials: AuthBody): Promise<AuthResult> => {
  try {
    const response: AxiosResponse<AuthResult> = await api.post('/signin/', credentials);

    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const register = async (credentials: AuthBody): Promise<AuthResult> => {
  try {
    const response: AxiosResponse<AuthResult> = await api.post('/signup/', { ...credentials, commandId: COMMAND_ID });

    return response.data;
  } catch (error) {
    console.error('Error register:', error);
    throw error;
  }
};
