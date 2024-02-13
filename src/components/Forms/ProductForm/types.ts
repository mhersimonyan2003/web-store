export enum ProductFormType {
  'create' = 'create',
  'update' = 'update',
}

export interface ProductsFormData {
  name: string;
  photo?: string;
  desc?: string;
  oldPrice?: number;
  price: number;
  categoryId?: string;
}
