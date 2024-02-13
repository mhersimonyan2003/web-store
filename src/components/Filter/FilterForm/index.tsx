import React, { Dispatch, SetStateAction } from 'react';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import clsx from 'clsx';
import { Button } from '@mui/material';
import { Input, Select } from '@/components';
import { FilterItem } from '../types';

import s from './index.module.scss';

interface Props<T> {
  filters: T;
  setFilters: Dispatch<SetStateAction<T>>;
  filterItems: Array<FilterItem>;
  toggleFiltersOpened: () => void;
}

export const FilterForm = <T extends object>({ filters, setFilters, filterItems, toggleFiltersOpened }: Props<T>) => {
  const { register, control, handleSubmit } = useForm<FieldValues>({ defaultValues: filters });

  const onSubmit: SubmitHandler<T> = async (filtersFormData) => {
    setFilters(filtersFormData);
    toggleFiltersOpened();
  };

  return (
    <div className={s.filters__form}>
      <div className={s.filters__form__inputs}>
        {filterItems.map(({ type, name, placeholder, label, options, fullWidth }) => (
          <div
            key={name}
            className={clsx(s.filters__form__inputs__item, { [s['full-width']]: fullWidth })}
            style={type === 'multiselect' ? { flexBasis: '100%' } : {}}
          >
            {type === 'input' ? (
              <Input label={label} placeholder={placeholder} {...register(name)} />
            ) : type === 'select' ? (
              <Controller
                name={name}
                control={control}
                defaultValue=""
                render={({ field }) => <Select {...field} label={label} options={options} />}
              />
            ) : type === 'multiselect' ? (
              <Controller
                name={name}
                control={control}
                defaultValue=""
                render={({ field }) => <Select multiple {...field} label={label} options={options} />}
              />
            ) : null}
          </div>
        ))}
      </div>
      <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
    </div>
  );
};
