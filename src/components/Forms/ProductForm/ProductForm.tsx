import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Controller, Resolver, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/store';
import { productsThunks } from '@/store/products';
import { categoriesSelectors } from '@/store/categories';
import { ServerError } from '@/types';
import { FileUplaod, Input, Textarea, Select } from '@/components';
import { handleFormError } from '../constants';
import validationSchema from './schema';
import { ProductsFormData, ProductFormType } from './types';
import { defaultValues } from './constants';

import s from '../index.module.scss';

interface Props {
  data?: ProductsFormData;
  id?: string;
  onSubmitHandler?: () => void;
}

export const ProductForm: React.FC<Props> = ({ data, id, onSubmitHandler }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'components.forms.productForm' });
  const { t: tGlobal } = useTranslation('translation', { keyPrefix: 'global' });
  const formType = data ? ProductFormType.update : ProductFormType.create;
  const categoriesOptions = useAppSelector(categoriesSelectors.getOptions);
  const dispatch = useAppDispatch();

  const {
    register,
    setValue,
    control,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm<ProductsFormData>({
    resolver: yupResolver(validationSchema) as Resolver<ProductsFormData>,
    defaultValues: data || defaultValues,
  });

  const setPhotoValue = useCallback(
    (photoSrc: string) => {
      setValue('photo', photoSrc);
    },
    [setValue]
  );

  const onSubmit: SubmitHandler<ProductsFormData> = async (productsFormData) => {
    try {
      if (formType === ProductFormType.create) {
        await dispatch(productsThunks.createProduct(productsFormData));
      } else {
        await dispatch(productsThunks.updateProduct(id, productsFormData));
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
            label={t('name')}
            name="name"
            placeholder={t('name')}
            error={errors.name?.message}
            autoFocus
            {...register('name')}
          />
        </div>
        <div className={s['form__input-wrapper']}>
          <Controller
            name="categoryId"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                {...field}
                label={t('category')}
                options={categoriesOptions}
                error={Boolean(errors.categoryId?.message)}
                helperText={errors.categoryId?.message}
              />
            )}
          />
        </div>
        <div className={s['form__input-wrapper']}>
          <Input
            label={t('oldPrice')}
            name="oldPrice"
            placeholder={t('oldPrice')}
            error={errors.oldPrice?.message}
            {...register('oldPrice')}
            type="number"
          />
        </div>
        <div className={s['form__input-wrapper']}>
          <Input
            label={t('price')}
            name="price"
            placeholder={t('price')}
            error={errors.price?.message}
            {...register('price')}
            type="number"
          />
        </div>
        <div className={s['form__input-wrapper']}>
          <Textarea
            label={t('desc')}
            name="desc"
            placeholder={t('desc')}
            error={errors.desc?.message}
            {...register('desc')}
          />
        </div>
        {errors.root?.serverError.message && <div className={s.form__error}>{errors.root.serverError.message}</div>}
        <div className={s.form__buttons}>
          <Button type="submit" fullWidth variant="contained">
            {tGlobal('submit')}
          </Button>
        </div>
      </form>
    </div>
  );
};
