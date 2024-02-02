import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CaseReducer } from '@reduxjs/toolkit/src/createReducer';
import { createOrder } from '@/api/order';
import { CheckoutOrder, Product } from '@/types';
import { AppState, AppThunk } from './index';
import { alertsActions } from './alerts';

const set: CaseReducer<CheckoutOrder, PayloadAction<CheckoutOrder>> = (_, action) => action.payload;
const decreaseProduct: CaseReducer<CheckoutOrder, PayloadAction<Product>> = (state, action) => {
  const product = state?.products.find(({ id }) => id === action.payload.id);
  if (product) {
    product.quantity--;
  } else {
    state.products.push({ ...action.payload, quantity: 1 });
  }
};
const increaseProduct: CaseReducer<CheckoutOrder, PayloadAction<Product>> = (state, action) => {
  const product = state?.products.find(({ id }) => id === action.payload.id);
  if (product) {
    product.quantity++;
  } else {
    state.products.push({ ...action.payload, quantity: 1 });
  }
};

const orderSlice = createSlice({
  name: 'order',
  initialState: { products: [] } as CheckoutOrder,
  reducers: {
    set,
    decreaseProduct,
    increaseProduct,
  },
});
export const orderActions = orderSlice.actions;

const createOrderThunk =
  (orderBody: CheckoutOrder): AppThunk =>
  async (dispatch) => {
    try {
      await createOrder(orderBody);
      dispatch(alertsActions.add({ severity: 'success', message: 'Order created successfully' }));
    } catch (err) {
      dispatch(alertsActions.add({ severity: 'error', message: 'Order creation was unsuccessfull' }));
    }
  };

export const orderThunks = {
  createOrder: createOrderThunk,
};

export const orderSelectors = {
  get: (state: AppState): AppState['order'] => {
    console.log('orderSelectors get');

    return state.order;
  },
  getProducts: (state: AppState): AppState['order']['products'] => {
    console.log('orderProductsSelectors get');

    return state.order?.products;
  },
  getQuantity: (state: AppState): number => {
    console.log('orderProductsQuantitySelectors get');

    if (state.order?.products) {
      return state.order.products.reduce((acc, res) => acc + res.quantity, 0);
    } else {
      return 0;
    }
  },
};

export const order = orderSlice.reducer;
