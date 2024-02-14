import type { TFunction } from 'i18next';
import { Option, FilterItem, FilterItemType } from '@/components';
import { SortDirection } from '@/types';

const getSortDirectionOptions = (t: TFunction) => [
  {
    key: t('sortDirection.asc'),
    value: SortDirection.ASC,
  },
  {
    key: t('sortDirection.desc'),
    value: SortDirection.DESC,
  },
];
const getSortFieldOptions = (t: TFunction) => [
  {
    key: t('sortField.name'),
    value: 'name',
  },
  {
    key: t('sortField.date'),
    value: 'date',
  },
];

export const getFilterItems = (categoriesOptions: Array<Option>, t: TFunction): Array<FilterItem> => {
  return [
    {
      type: FilterItemType.input,
      name: 'name',
      placeholder: t('inputs.name'),
      label: t('inputs.name'),
    },
    {
      type: FilterItemType.select,
      name: 'sorting.field',
      label: t('inputs.sortField'),
      options: getSortFieldOptions(t),
    },
    {
      type: FilterItemType.select,
      name: 'sorting.type',
      label: t('inputs.sortDirection'),
      options: getSortDirectionOptions(t),
    },
    {
      type: FilterItemType.multiselect,
      name: 'categoryIds',
      label: t('inputs.categories'),
      options: categoriesOptions,
      fullWidth: true,
    },
  ];
};
