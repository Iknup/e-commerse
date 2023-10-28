import { cartItemObject } from '../interfaces';
import { getCookie, setCookie } from 'cookies-next';

export const useChangeCart = (
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

    let newCartArray;
    if (action === 'quantity') {
      const itemIndex = cartArray.findIndex((item) => {
        return item.id === id;
      });
      cartArray[itemIndex] = value as cartItemObject;

      newCartArray = cartArray;
    } else if (action === 'delete') {
      newCartArray = cartArray.filter((item) => {
        return item.id !== id;
      });
    }

    setCookie('cart', newCartArray);
  }
};
