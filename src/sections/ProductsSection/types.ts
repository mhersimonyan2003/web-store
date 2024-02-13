export interface ProductsFilterData {
  name?: string;
  categoryIds?: Array<string>;
  sorting?: {
    type?: string;
    field: string;
  };
}
