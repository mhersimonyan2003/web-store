import type { AxiosResponse } from 'axios';
import { apiAuth } from '../api';
import { Profile } from '@/types';
import { ProfileFormData } from '@/components/Forms/ProfileForm/types';

export const getProfile = async (): Promise<Profile> => {
  try {
    const response: AxiosResponse<Profile> = await apiAuth.get('/profile/');

    return response.data;
  } catch (error) {
    console.error('Error getting profile:', error);
    throw error;
  }
};

export const updateProfile = async (profileFormData: ProfileFormData): Promise<Profile> => {
  try {
    const response: AxiosResponse<Profile> = await apiAuth.patch('/profile/', profileFormData);

    return response.data;
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
};
