import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CaseReducer } from '@reduxjs/toolkit/src/createReducer';
import { createProduct, updateProduct } from '@/api/products';
import { Product } from '@/types';
import { ProductsFormData } from '@/components';
import { refetchProducts } from '@/hooks';
import { AppState, AppThunk } from './index';

const set: CaseReducer<Array<Product>, PayloadAction<Array<Product>>> = (_, action) => action.payload;

const productsSlice = createSlice({
  name: 'products',
  initialState: null as Array<Product>,
  reducers: {
    set,
  },
});
export const productsActions = productsSlice.actions;

const setProductsThunk =
  (products: Array<Product>): AppThunk =>
  (dispatch) => {
    dispatch(productsActions.set(products));
  };

const updateProductThunk =
  (id: string, productsFormData: ProductsFormData): AppThunk =>
  async () => {
    await updateProduct(id, productsFormData);

    refetchProducts();
  };

const createProductThunk =
  (productsFormData: ProductsFormData): AppThunk =>
  async () => {
    await createProduct(productsFormData);

    refetchProducts();
  };

export const productsThunks = {
  setProducts: setProductsThunk,
  updateProduct: updateProductThunk,
  createProduct: createProductThunk,
};

export const productsSelectors = {
  get: (state: AppState): AppState['products'] => {
    return state.products;
  },
};

export const products = productsSlice.reducer;
