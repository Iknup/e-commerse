import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { cartItemObject } from '@/store/cartSlice';
import { setCookie } from 'cookies-next';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  setCookie('cart', state.cart.cartItems);
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
