import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAppDispatch, useAppSelector } from '@/store';
import { tokenSelectors, tokenThunks } from '@/store/token';

import s from './index.module.scss';

export const AuthControl: React.FC = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(tokenSelectors.get);

  const logoutHandler = () => {
    dispatch(tokenThunks.clearToken());
  };

  return token ? (
    <div className={s.logout} onClick={logoutHandler}>
      <LogoutIcon color="inherit" />
    </div>
  ) : (
    <Link to="/auth/">
      <Button variant="outlined">Login</Button>
    </Link>
  );
};
