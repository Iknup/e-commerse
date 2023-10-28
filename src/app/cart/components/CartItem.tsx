import { DUMMY_SHORTS } from '@/dummy_data/shorts';
import Image from 'next/image';
import { useChangeCart } from '@/utils/hooks/useChangeCart';
import { useState } from 'react';

type props = {
  productId: string;
  id: string;
  color: string;
  size: string;
  quantity: number;
  onDeleteItem: (id: string) => void;
};

const CartItem = ({
  productId,
  id,
  color,
  size,
  quantity,
  onDeleteItem,
}: props) => {
  const item = DUMMY_SHORTS.find((short) => productId === short.id);
  const [itemState, setItemState] = useState<{
    productId: string;
    id: string;
    color: string;
    size: string;
    quantity: number;
  }>({
    productId,
    id,
    color,
    size,
    quantity,
  });

  const image = item!.images[0];

  const onIncrement = () => {
    const value = {
      productId,
      id,
      color,
      size,
      quantity: itemState.quantity + 1,
    };
    setItemState(value);
    useChangeCart(id, 'quantity', value);
  };

  const onDecrement = () => {
    if (itemState.quantity === 1) {
      return;
    }
    const value = {
      productId,
      id,
      color,
      size,
      quantity: itemState.quantity - 1,
    };
    setItemState(value);
    useChangeCart(id, 'quantity', value);
  };

  const onDelete = () => {
    useChangeCart(id, 'delete');
    onDeleteItem(id);
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
            {(item!.price * itemState.quantity).toFixed(2)} USD
          </div>
          <div className='flex rounded-2xl border-2 items-center border-[#bfbfbf] justify-around'>
            <button onClick={onDecrement} className='mx-2 text-2xl'>
              -
            </button>
            <p className='text-xl'>{itemState.quantity}</p>
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
