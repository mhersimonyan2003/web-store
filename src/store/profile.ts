import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CaseReducer } from '@reduxjs/toolkit/src/createReducer';
import { updateProfile } from '@/api/profile';
import { Profile } from '@/types';
import { ProfileFormData } from '@/components';
import { AppState, AppThunk } from './index';
import { alertsActions } from './alerts';

const set: CaseReducer<Profile, PayloadAction<Profile>> = (_, action) => action.payload;

const profileSlice = createSlice({
  name: 'profile',
  initialState: null as Profile,
  reducers: {
    set,
    clear: () => null,
  },
});
export const profileActions = profileSlice.actions;

const updateProfileThunk =
  (profileFormData: ProfileFormData): AppThunk =>
  async (dispatch) => {
    const profile = await updateProfile(profileFormData);
    dispatch(profileActions.set(profile));
    dispatch(alertsActions.add({ severity: 'success', message: 'profileUpdateSuccess' }));
  };

export const profileThunks = {
  updateProfile: updateProfileThunk,
};

export const profileSelectors = {
  get: (state: AppState): AppState['profile'] => {
    return state.profile;
  },
  getName: (state: AppState): AppState['profile']['name'] => {
    return state.profile?.name;
  },
};

export const profile = profileSlice.reducer;
