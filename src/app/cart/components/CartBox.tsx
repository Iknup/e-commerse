'use client';

import { getCookie } from 'cookies-next';
import CartItem from './CartItem';
import { cartItemObject } from '@/utils/interfaces';
import { useEffect, useState } from 'react';

const CartBox = () => {
  const [cartCookie, setCartCookie] = useState<cartItemObject[] | null>(null);

  useEffect(() => {
    const cartDataJSON = getCookie('cart');
    const cartData = JSON.parse(cartDataJSON!);
    setCartCookie(cartData);
  }, []);

  if (Array.isArray(cartCookie)) {
    const cartArray = cartCookie as cartItemObject[];
    const onDelete = (id: string) => {
      const newCartArray = cartArray.filter((item) => {
        return item.id !== id;
      });

      setCartCookie(newCartArray);
    };

    return (
      <>
        <div className='flex'>
          <p>Precio Total</p>
        </div>
        <div className='flex flex-col gap-y-4 px-3'>
          {cartArray.map((item: cartItemObject) => {
            return (
              <CartItem
                key={item.id}
                productId={item.productId}
                size={item.size}
                color={item.color}
                id={item.id}
                quantity={item.quantity}
                onDeleteItem={onDelete}
              />
            );
          })}
        </div>
      </>
    );
  } else {
    return 'Esta vacio!';
  }
};

export default CartBox;
