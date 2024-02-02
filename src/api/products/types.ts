import { Pagination, Product, Sorting } from '@/types';

export interface GetProductsResult {
  data: Array<Product>;
  pagination: Pagination;
  sorting: Sorting<keyof Product>;
}
