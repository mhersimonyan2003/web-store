import { ServerError } from '@/types';
import { UseFormSetError } from 'react-hook-form';

export const handleFormError = (errorData: ServerError, setError: UseFormSetError<unknown>) => {
  if (errorData?.errors) {
    setError('root.serverError', {
      type: 'SERVER_ERROR',
      message: errorData.errors.map(({ message }) => message).join('. '),
    });
  }
};
