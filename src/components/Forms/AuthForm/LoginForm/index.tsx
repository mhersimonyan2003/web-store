import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Button, Link, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { ServerError } from '@/types';
import { useAppDispatch } from '@/store';
import { tokenThunks } from '@/store/token';
import { Input } from '@/components';
import validationSchema from '../schema';
import { AuthFormData } from '../types';
import { handleFormError } from '../../constants';

import s from '../../index.module.scss';

interface Props {
  switchForm: () => void;
}

export const LoginForm: React.FC<Props> = ({ switchForm }) => {
  // const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm<AuthFormData>({
    resolver: yupResolver(validationSchema) as Resolver<AuthFormData>,
  });

  const onSubmit: SubmitHandler<AuthFormData> = async (authFormData) => {
    try {
      await dispatch(tokenThunks.login(authFormData));
      navigate('/products');
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
          <LockOutlinedIcon />
        </div>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s['form__input-wrapper']}>
            <Input
              label="Email Address"
              name="email"
              placeholder="Email"
              error={errors.email?.message}
              autoFocus
              {...register('email')}
              type="email"
            />
          </div>
          <div className={s['form__input-wrapper']}>
            <Input
              label="Password"
              name="password"
              placeholder="Password"
              error={errors.password?.message}
              {...register('password')}
              type="password"
            />
          </div>
          {errors.root?.serverError.message && <div className={s.form__error}>{errors.root.serverError.message}</div>}
          <div className={s.form__buttons}>
            <Button type="submit" fullWidth variant="contained">
              Sign In
            </Button>
          </div>
          <ul className={s.form__links}>
            <li className={s.form__links__item} onClick={switchForm}>
              <Link variant="body2">Don&apos;t have an account? Sign Up</Link>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};
