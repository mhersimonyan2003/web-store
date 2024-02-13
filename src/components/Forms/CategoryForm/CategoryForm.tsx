import React, { useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { useAppDispatch } from '@/store';
import { categoriesThunks } from '@/store/categories';
import { ServerError } from '@/types';
import { FileUplaod, Input } from '@/components';
import { handleFormError } from '../constants';
import validationSchema from './schema';
import { CategoriesFormData, CategoryFormType } from './types';
import { defaultValues } from './constants';

import s from '../index.module.scss';

interface Props {
  data?: CategoriesFormData;
  id?: string;
  onSubmitHandler?: () => void;
}

export const CategoryForm: React.FC<Props> = ({ data, id, onSubmitHandler }) => {
  const formType = data ? CategoryFormType.update : CategoryFormType.create;
  const dispatch = useAppDispatch();

  const {
    register,
    setValue,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm<CategoriesFormData>({
    resolver: yupResolver(validationSchema) as Resolver<CategoriesFormData>,
    defaultValues: data || defaultValues,
  });

  const setPhotoValue = useCallback(
    (photoSrc: string) => {
      setValue('photo', photoSrc);
    },
    [setValue]
  );

  const onSubmit: SubmitHandler<CategoriesFormData> = async (categoriesFormData) => {
    try {
      if (formType === CategoryFormType.create) {
        await dispatch(categoriesThunks.createCategory(categoriesFormData));
      } else {
        await dispatch(categoriesThunks.updateCategory(id, categoriesFormData));
      }

      if (onSubmitHandler) onSubmitHandler();
    } catch (err) {
      const data = err?.response?.data as ServerError;

      if (data?.errors) {
        handleFormError(data, setError);
      } else {
        throw err;
      }
    }
  };

  return (
    <div className={s.form__block}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <FileUplaod {...register('photo')} setValue={setPhotoValue} />
        <div className={s['form__input-wrapper']}>
          <Input
            label="Name"
            name="name"
            placeholder="Name"
            error={errors.name?.message}
            autoFocus
            {...register('name')}
          />
        </div>
        {errors.root?.serverError.message && <div className={s.form__error}>{errors.root.serverError.message}</div>}
        <div className={s.form__buttons}>
          <Button type="submit" fullWidth variant="contained">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
