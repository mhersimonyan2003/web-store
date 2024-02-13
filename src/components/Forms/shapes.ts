import * as yup from 'yup';

export const authFormShape = {
  email: yup.string().required('Email is required').email('Invalid email address'),
  password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
};

export const operationFormShape = {
  name: yup.string().required('Name is required'),
  amount: yup
    .number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .required('Amount is required'),
  desc: yup.string(),
  categoryId: yup.string().required('Category is required'),
  type: yup.string().required('Type is required'),
};

export const productFormShape = {
  // photo: yup.string(),
  name: yup.string().required('Name is required'),
  oldPrice: yup.number().transform((value) => (Number.isNaN(value) ? null : value)),
  price: yup.number().transform((value) => (Number.isNaN(value) ? null : value)),
  desc: yup.string(),
  categoryId: yup.string().required('Category is required'),
};

export const categoryFormShape = {
  name: yup.string().required('Name is required'),
};

export const profileFormShape = {
  name: yup.string().required('First Name is required').min(7, 'Nickname must be at least 7 characters long'),
};
