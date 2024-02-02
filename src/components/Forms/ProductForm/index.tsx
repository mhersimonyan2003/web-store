import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { useAppDispatch } from '@/store';
import { productsThunks } from '@/store/products';
import { ServerError } from '@/types';
import { FileUplaod, Input, Textarea, Select } from '@/components';
import { handleFormError } from '../constants';
import { useCategories } from './useCategories';
import validationSchema from './schema';
import { ProductFormData, ProductFormType } from './types';

import s from '../index.module.scss';

interface Props {
  data?: ProductFormData;
  id?: string;
  onSubmitHandler?: () => void;
}

export const ProductForm: React.FC<Props> = ({ data, id, onSubmitHandler }) => {
  const { categories } = useCategories();
  const formType = data ? ProductFormType.update : ProductFormType.create;
  const dispatch = useAppDispatch();

  const {
    register,
    setValue,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm<ProductFormData>({
    resolver: yupResolver(validationSchema) as Resolver<ProductFormData>,
    defaultValues: data,
  });

  const setPhotoValue = (photoSrc: string) => {
    setValue('photo', photoSrc);
  };

  const onSubmit: SubmitHandler<ProductFormData> = async (productFormData) => {
    try {
      if (formType === ProductFormType.create) {
        await dispatch(productsThunks.createProduct(productFormData));
      } else {
        await dispatch(productsThunks.updateProduct(id, productFormData));
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

  const categoriesOptions = categories.map(({ id, name }) => ({ key: name, value: id }));

  return (
    <div className={s.form__block}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <FileUplaod {...register('photo')} setValue={setPhotoValue} />
        <Input
          label="Name"
          name="name"
          placeholder="Name"
          error={errors.name?.message}
          autoFocus
          {...register('name')}
        />
        <Select
          label="Category"
          name="category"
          placeholder="Category"
          options={categoriesOptions}
          error={errors.categoryId?.message}
          key={categories.length}
          {...register('categoryId')}
        />
        <Input
          label="Old Price"
          name="oldPrice"
          placeholder="Old Price"
          error={errors.oldPrice?.message}
          {...register('oldPrice')}
          type="number"
        />
        <Input
          label="Price"
          name="price"
          placeholder="Price"
          error={errors.price?.message}
          {...register('price')}
          type="number"
        />
        <Textarea
          label="Description"
          name="desc"
          placeholder="Description"
          error={errors.desc?.message}
          {...register('desc')}
        />
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
