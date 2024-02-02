import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { alerts } from './alerts';
import { token } from './token';
import { products } from './products';
import { profile } from './profile';
import { order } from './order';

export const store = configureStore({
  reducer: {
    alerts,
    token,
    products,
    profile,
    order,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ExtraParams = { url: string; version: string };
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, ExtraParams, AnyAction>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
