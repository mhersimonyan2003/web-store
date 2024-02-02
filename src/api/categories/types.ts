import { Category, Pagination, Sorting } from '@/types';

export interface GetCategoriesResult {
  data: Array<Category>;
  pagination: Pagination;
  sorting: Sorting<keyof Category>;
}
