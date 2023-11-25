'use client';

import { cartAction } from '@/store/cartSlice';
import { useAppDispatch } from '@/utils/hooks/reduxHooks';
import { getCookie } from 'cookies-next';
import { useEffect } from 'react';

const getCookieCartData = () => {
  const cartDataJSON = getCookie('cart');
  const cartData = cartDataJSON ? JSON.parse(cartDataJSON) : null;

  return cartData;
};

const CartGetter = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const cartData = getCookieCartData();

    if (cartData) {
      dispatch(cartAction.setCart(cartData));
    }
  }, []);

  return children;
};

export default CartGetter;
