import type { AxiosResponse } from 'axios';
import { apiAuth } from '../api';
import { UploadFileResult } from './types';

export const uploadFile = async (file: File): Promise<UploadFileResult> => {
  try {
    const body = new FormData();
    body.append('file', file);
    const response: AxiosResponse<UploadFileResult> = await apiAuth.post('/upload/', body);

    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};
