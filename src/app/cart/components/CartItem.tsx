import { DUMMY_SHORTS } from '@/dummy_data/shorts';
import Image from 'next/image';
import { useAppDispatch } from '@/utils/hooks/reduxHooks';
import { cartAction } from '@/store/cartSlice';

type props = {
  productId: string;
  id: string;
  color: string;
  size: string;
  quantity: number;
};

const CartItem = ({ productId, id, color, size, quantity }: props) => {
  const dispatch = useAppDispatch();
  const item = DUMMY_SHORTS.find((short) => productId === short.id);
  const image = item!.images[0];

  const onIncrement = () => {
    const value = {
      productId,
      id,
      color,
      size,
      price: item!.price,
      quantity: quantity + 1,
    };

    dispatch(cartAction.editItem(value));
  };

  const onDecrement = () => {
    if (quantity === 1) {
      return;
    }
    const value = {
      productId,
      id,
      color,
      size,
      price: item!.price,
      quantity: quantity - 1,
    };

    dispatch(cartAction.editItem(value));
  };

  const onDelete = () => {
    dispatch(cartAction.removeItem(id));
  };

  return (
    <div
      className='w-full h-fit flex justify-between pb-2
    border-b-2 border-b-[#bfbfbf]'
    >
      <Image width={90} height={120} src={image} alt={item!.name} />
      <div className='grow ml-4 h-full'>
        <h3 className='font-bold mb-5'>{item!.name}</h3>
        <p>SIZE: {size.toUpperCase()}</p>
        <p>COLOR: {color}</p>
      </div>
      <div className='flex flex-col self-center'>
        <div className='flex items-center'>
          <div className='font-bold mr-4'>
            {(item!.price * quantity).toFixed(2)} USD
          </div>
          <div className='flex rounded-2xl border-2 items-center border-[#bfbfbf] justify-around'>
            <button onClick={onDecrement} className='mx-2 text-2xl'>
              -
            </button>
            <p className='text-xl'>{quantity}</p>
            <button onClick={onIncrement} className='mx-2 text-2xl'>
              +
            </button>
          </div>
        </div>
        <button onClick={onDelete} className='text-[#bfbfbf] underline'>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
