import { Option } from '@/components';

export enum FilterItemType {
  'input' = 'input',
  'select' = 'select',
  'multiselect' = 'multiselect',
}

export interface FilterItem {
  type: FilterItemType;
  name: string;
  placeholder?: string;
  label: string;
  options?: Array<Option>;
  fullWidth?: boolean;
}
