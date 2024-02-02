import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CaseReducer } from '@reduxjs/toolkit/src/createReducer';
import { AppState, AppThunk } from './index';
import { profileActions } from './profile';
import { Profile } from '@/types';
import { AuthBody } from '@/api/auth/types';
import { login, register } from '@/api/auth';

const set: CaseReducer<string, PayloadAction<string>> = (_, action) => action.payload;

const tokenSlice = createSlice({
  name: 'token',
  initialState: localStorage.getItem('token'),
  reducers: {
    set,
    clear: () => null,
  },
});
export const tokenActions = tokenSlice.actions;

const setTokenThunk =
  (token: string, profile: Profile): AppThunk =>
  (dispatch) => {
    dispatch(tokenActions.set(token));
    dispatch(profileActions.set(profile));

    localStorage.setItem('token', token || '');
  };

const loginThunk =
  (authBody: AuthBody): AppThunk =>
  async (dispatch) => {
    const { token, profile } = await login(authBody);

    dispatch(tokenThunks.setToken(token, profile));
  };

const registerThunk =
  (authBody: AuthBody): AppThunk =>
  async (dispatch) => {
    const { token, profile } = await register(authBody);

    dispatch(tokenThunks.setToken(token, profile));
  };

const clearTokenThunk = (): AppThunk => (dispatch) => {
  dispatch(tokenActions.clear());
  dispatch(profileActions.clear());
  localStorage.setItem('token', '');
};

export const tokenThunks = {
  setToken: setTokenThunk,
  clearToken: clearTokenThunk,
  login: loginThunk,
  register: registerThunk,
};

export const tokenSelectors = {
  get: (state: AppState): AppState['token'] => {
    console.log('tokenSelectors get');

    return state.token;
  },
};

export const token = tokenSlice.reducer;
