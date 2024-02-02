export interface AuthFormData {
  email: string;
  password: string;
}

export enum AuthFormType {
  'login' = 'login',
  'register' = 'register',
}
