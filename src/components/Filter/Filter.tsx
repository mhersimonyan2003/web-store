import React, { Dispatch, SetStateAction, useState } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import { IconButton } from '@mui/material';

import s from './index.module.scss';
import { FilterForm } from './FilterForm';
import { FilterItem } from './types';

interface Props<T> {
  filters: T;
  setFilters: Dispatch<SetStateAction<T>>;
  filterItems: Array<FilterItem>;
}

export const Filter = <T extends object>(props: Props<T>) => {
  const [filtersOpened, setFiltersOpened] = useState(false);

  const toggleFiltersOpened = () => setFiltersOpened(!filtersOpened);

  return (
    <div className={s.filters}>
      <IconButton size="large" color="primary" onClick={toggleFiltersOpened}>
        <FilterListIcon className={s.filters__icon} />
      </IconButton>
      {filtersOpened && <FilterForm {...props} toggleFiltersOpened={toggleFiltersOpened} />}
    </div>
  );
};
