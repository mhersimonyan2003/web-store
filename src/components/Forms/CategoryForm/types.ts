export enum CategoryFormType {
  'create' = 'create',
  'update' = 'update',
}

export interface CategoriesFormData {
  name: string;
  photo?: string;
}
