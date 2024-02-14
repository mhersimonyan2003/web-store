import * as yup from 'yup';
import i18n from '@/localization';

const t = i18n.getFixedT(null, null, 'components.forms.validationMessages');

export const authFormShape = {
  email: yup.string().required(t('emailRequired')).email(t('emailInvalid')),
  password: yup.string().required(t('passwordRequired')).min(8, t('passwordInvalid')),
};

export const productFormShape = {
  // photo: yup.string(),
  name: yup.string().required(t('nameRequired')),
  oldPrice: yup.number().transform((value) => (Number.isNaN(value) ? null : value)),
  price: yup
    .number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .required(t('priceRequired')),
  desc: yup.string(),
  categoryId: yup.string().required(t('categoryRequired')),
};

export const categoryFormShape = {
  name: yup.string().required(t('nameRequired')),
};

export const profileFormShape = {
  name: yup.string().required(t('nameRequired')).min(7, t('nameInvalid')),
};
