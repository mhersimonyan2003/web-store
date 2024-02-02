import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CaseReducer } from '@reduxjs/toolkit/src/createReducer';
import { AlertMessage } from '@/types';
import { AppState } from './index';

const add: CaseReducer<Array<AlertMessage>, PayloadAction<Omit<AlertMessage, 'id'>>> = (state, action) => [
  ...state,
  { ...action.payload, id: uuidv4() },
];
const remove: CaseReducer<Array<AlertMessage>, PayloadAction<string>> = (state, action) =>
  state.filter(({ id }) => id !== action.payload);

const alertsSlice = createSlice({
  name: 'alerts',
  initialState: [] as Array<AlertMessage>,
  reducers: {
    add,
    remove,
  },
});
export const alertsActions = alertsSlice.actions;

export const alertsSelectors = {
  get: (state: AppState): AppState['alerts'] => {
    console.log('alertsSelectors get');

    return state.alerts;
  },
};

export const alerts = alertsSlice.reducer;
