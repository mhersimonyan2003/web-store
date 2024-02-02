export enum ProductFormType {
  'create' = 'create',
  'update' = 'update',
}

export interface ProductFormData {
  name: string;
  photo?: string;
  desc?: string;
  oldPrice?: number;
  price: number;
  categoryId?: string;
}
