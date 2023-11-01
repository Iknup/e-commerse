'use client';

import CartItem from './CartItem';
import { useAppSelector } from '@/utils/hooks/reduxHooks';

const CartBox = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  if (cartItems.length > 0) {
    const totalPrice = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    return (
      <>
        <div className='flex mb-3'>
          <p>Precio Total:</p>
          <p className='font-bold'>{totalPrice.toFixed(2)}$</p>
        </div>
        <div className='flex flex-col gap-y-4 px-3'>
          {cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                productId={item.productId}
                size={item.size}
                color={item.color}
                id={item.id}
                quantity={item.quantity}
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
