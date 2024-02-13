import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CaseReducer } from '@reduxjs/toolkit/src/createReducer';
import { createCategory, updateCategory } from '@/api/categories';
import { Category } from '@/types';
import { refetchCategories } from '@/hooks';
import { CategoriesFormData, Option } from '@/components';
import { AppState, AppThunk } from './index';

const set: CaseReducer<Array<Category>, PayloadAction<Array<Category>>> = (_, action) => action.payload;

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: null as Array<Category>,
  reducers: {
    set,
  },
});
export const categoriesActions = categoriesSlice.actions;

const setCategorysThunk =
  (categories: Array<Category>): AppThunk =>
  (dispatch) => {
    dispatch(categoriesActions.set(categories));
  };

const updateCategoryThunk =
  (id: string, categoriesFormData: CategoriesFormData): AppThunk =>
  async () => {
    await updateCategory(id, categoriesFormData);

    refetchCategories();
  };

const createCategoryThunk =
  (categoriesFormData: CategoriesFormData): AppThunk =>
  async () => {
    await createCategory(categoriesFormData);

    refetchCategories();
  };

export const categoriesThunks = {
  setCategorys: setCategorysThunk,
  updateCategory: updateCategoryThunk,
  createCategory: createCategoryThunk,
};

export const categoriesSelectors = {
  get: (state: AppState): AppState['categories'] => {
    return state.categories;
  },
  getOptions: (state: AppState): Array<Option> => {
    return state.categories?.map(({ id, name }) => ({ key: name, value: id }));
  },
};

export const categories = categoriesSlice.reducer;
