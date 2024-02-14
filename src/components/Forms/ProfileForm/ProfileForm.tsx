import React from 'react';
import { useTranslation } from 'react-i18next';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '@/store';
import { profileThunks } from '@/store/profile';
import { ServerError } from '@/types';
import { Input } from '@/components';
import { handleFormError } from '../constants';
import validationSchema from './schema';
import { ProfileFormData } from './types';

import s from '../index.module.scss';

interface Props {
  data: ProfileFormData;
}

export const ProfileForm: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'components.forms.profileForm' });
  const { t: tGlobal } = useTranslation('translation', { keyPrefix: 'global' });
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm<ProfileFormData>({
    resolver: yupResolver(validationSchema) as Resolver<ProfileFormData>,
    defaultValues: data,
  });

  const onSubmit: SubmitHandler<ProfileFormData> = async (profileFormData) => {
    try {
      dispatch(profileThunks.updateProfile(profileFormData));
    } catch (err) {
      const data = err?.response?.data as ServerError;

      if (data?.errors) {
        handleFormError(data, setError);
      } else {
        throw err;
      }
    }
  };

  return (
    <div className={s.form__wrapper}>
      <div className={s.form__block}>
        <div className={s.form__avatar}>
          <PersonOutlineIcon />
        </div>
        <div className={s.form__title}>{t('title')}</div>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s['form__input-wrapper']}>
            <Input
              label={t('name')}
              name="name"
              placeholder={t('name')}
              error={errors.name?.message}
              autoFocus
              {...register('name')}
            />
          </div>
          {errors.root?.serverError.message && <div className={s.form__error}>{errors.root.serverError.message}</div>}
          <div className={s.form__buttons}>
            <Button type="submit" fullWidth variant="contained">
              {tGlobal('submit')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
