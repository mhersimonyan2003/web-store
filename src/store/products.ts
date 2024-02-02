import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CaseReducer } from '@reduxjs/toolkit/src/createReducer';
import { AppState, AppThunk } from './index';
import { Product } from '@/types';
import { ProductFormData } from '@/components/Forms/ProductForm/types';
import { refetchProducts } from '@/hooks';
import { createProduct, updateProduct } from '@/api/products';

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
  (id: string, productFormData: ProductFormData): AppThunk =>
  async () => {
    await updateProduct(id, productFormData);

    refetchProducts();
  };

const createProductThunk =
  (productFormData: ProductFormData): AppThunk =>
  async () => {
    await createProduct(productFormData);

    refetchProducts();
  };

export const productsThunks = {
  setProducts: setProductsThunk,
  updateProduct: updateProductThunk,
  createProduct: createProductThunk,
};

export const productsSelectors = {
  get: (state: AppState): AppState['products'] => {
    console.log('productSelectors get');

    return state.products;
  },
};

export const products = productsSlice.reducer;
