import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducer/cart';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
