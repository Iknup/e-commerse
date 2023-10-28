import { cartItemObject } from '../interfaces';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';

export const changeCartCookie = (
  id: string,
  action: string,
  value: cartItemObject | null = null
) => {
  const cartDataJSON = getCookie('cart');
  if (!cartDataJSON) {
    return;
  } else {
    const cartData = JSON.parse(cartDataJSON);
    const cartArray = cartData as cartItemObject[];

    if (action === 'quantity') {
      const itemIndex = cartArray.findIndex((item) => {
        return item.id === id;
      });
      cartArray[itemIndex] = value as cartItemObject;

      const newCartArray = cartArray;
      setCookie('cart', newCartArray);
    } else if (action === 'delete') {
      const newCartArray = cartArray.filter((item) => {
        return item.id !== id;
      });
      if (newCartArray.length === 0) {
        deleteCookie('cart');
      } else {
        setCookie('cart', newCartArray);
      }
    }
  }
};
