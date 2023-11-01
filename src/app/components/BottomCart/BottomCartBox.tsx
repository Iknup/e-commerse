import { useAppSelector } from '@/utils/hooks/reduxHooks';
import BottomCartItem from './BottomCartItem';

const BottomCartBox = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  let content;
  if (cartItems.length > 0) {
    content = (
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
    );
  } else {
    content = 'Esta vacio!';
  }

  return <div className={`z-50 w-80 bg-white `}>{content}</div>;
};

export default BottomCartBox;
