import React, { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import clsx from 'clsx';
import { Button } from '@mui/material';
import { Input, Select } from '@/components';
import { FilterItem, FilterItemType } from '../types';

import s from './index.module.scss';

interface Props<T> {
  filters: T;
  setFilters: Dispatch<SetStateAction<T>>;
  filterItems: Array<FilterItem>;
  toggleFiltersOpened: () => void;
}

export const FilterForm = <T extends object>({ filters, setFilters, filterItems, toggleFiltersOpened }: Props<T>) => {
  const { t: tGlobal } = useTranslation('translation', { keyPrefix: 'global' });
  const { register, control, handleSubmit } = useForm<FieldValues>({ defaultValues: filters });

  const onSubmit: SubmitHandler<T> = async (filtersFormData) => {
    setFilters(filtersFormData);
    toggleFiltersOpened();
  };

  return (
    <div className={s.filters__form}>
      <div className={s.filters__form__inputs}>
        {filterItems.map(({ type, name, placeholder, label, options, fullWidth }) => (
          <div key={name} className={clsx(s.filters__form__inputs__item, { [s['full-width']]: fullWidth })}>
            {type === FilterItemType.input ? (
              <Input label={label} placeholder={placeholder} {...register(name)} />
            ) : type === FilterItemType.select || type === FilterItemType.multiselect ? (
              <Controller
                name={name}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select {...field} multiple={type === FilterItemType.multiselect} label={label} options={options} />
                )}
              />
            ) : null}
          </div>
        ))}
      </div>
      <Button onClick={handleSubmit(onSubmit)}>{tGlobal('submit')}</Button>
    </div>
  );
};
