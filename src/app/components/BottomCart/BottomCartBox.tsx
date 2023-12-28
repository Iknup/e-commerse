import { useAppSelector } from '@/utils/hooks/reduxHooks';
import BottomCartItem from './BottomCartItem';
import Link from 'next/link';

const BottomCartBox = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems.reduce((acc, current) => {
    return (acc = acc + current.price);
  }, 0);

  let content;
  if (cartItems.length > 0) {
    content = (
      <>
        <div className='w-full flex flex-col'>
          {cartItems.map((item) => {
            const { id, productId, color, price, size, quantity } = item;
            return (
              <BottomCartItem
                key={id}
                id={id}
                productId={productId}
                color={color}
                size={size}
                quantity={quantity}
                price={price}
              />
            );
          })}
        </div>
        <p className='flex justify-center'>
          Precio total:<p className='font-bold'>{totalPrice.toFixed(2)}$</p>
        </p>
      </>
    );
  } else {
    content = 'Esta vacio!';
  }

  return (
    <div className={`z-50 w-80 bg-[#ffffff] flex flex-col`}>
      {content}
      <Link
        href={'/cart'}
        className='button-bg-black h-10 flex items-center justify-center mx-2 my-2'
      >
        Ir al Carrito
      </Link>
    </div>
  );
};

export default BottomCartBox;
