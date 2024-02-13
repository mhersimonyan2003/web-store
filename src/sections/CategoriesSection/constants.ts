import { FilterItem, FilterItemType } from '@/components/Filter/types';
import { SortDirection } from '@/types';

const sortDirectionOptions = [
  {
    key: 'ASC',
    value: SortDirection.ASC,
  },
  {
    key: 'DESC',
    value: SortDirection.DESC,
  },
];
const sortFieldOptions = [
  {
    key: 'Name',
    value: 'name',
  },
  {
    key: 'Date',
    value: 'date',
  },
];

export const filterItems: Array<FilterItem> = [
  {
    type: FilterItemType.input,
    name: 'name',
    placeholder: 'Name',
    label: 'Name',
  },
  {
    type: FilterItemType.select,
    name: 'sorting.field',
    label: 'Sort Field',
    options: sortFieldOptions,
  },
  {
    type: FilterItemType.select,
    name: 'sorting.type',
    label: 'Sort Direction',
    options: sortDirectionOptions,
  },
];
