import { hasCookie, setCookie, getCookie } from 'cookies-next';
import { cartItemObject } from '../interfaces';

export const addtoCartCookie = (
  productId: string,
  color: string,
  size: string,
  quantity: number
) => {
  const hasCart = hasCookie('cart');
  let id = '001';
  const item = { productId, color, size, quantity };
  if (!hasCart) {
    const cartData = setCookie('cart', [{ id, ...item }], { maxAge: 2592000 });
  } else {
    const cartDataJSON = getCookie('cart');
    const cartData: cartItemObject[] = JSON.parse(cartDataJSON!);
    id = (cartData.length + 1).toString().padStart(3, '0');
    let newCartData = cartData;
    const sameItem = newCartData.find((cartItem: cartItemObject) => {
      return (
        cartItem.productId === productId &&
        cartItem.color === color &&
        cartItem.size === size
      );
    });

    if (!sameItem) {
      newCartData.push({ id, ...item });
    } else {
      sameItem.quantity++;
    }

    setCookie('cart', newCartData, { maxAge: 2592000 });
  }
};
