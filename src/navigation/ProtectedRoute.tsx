import React, { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { tokenSelectors } from '@/store/token';
import { useAppSelector } from '@/store';
import { NavigationState } from './types';

export const ProtectedRoute: FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = useAppSelector(tokenSelectors.get);
  const location = useLocation();
  if (token) return <>{children}</>;
  return <Navigate to="/" state={{ from: location } as NavigationState} replace />;
};
