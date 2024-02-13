import { Category, Pagination, Sorting } from '@/types';

export interface GetCategoriesResult {
  data: Array<Category>;
  pagination: Pagination;
  sorting: Sorting<keyof Category>;
}

export interface GetCategoriesFilters {
  name?: string;
  pagination?: Omit<Pagination, 'total'>;
  sorting?: Sorting<keyof Category>;
}
