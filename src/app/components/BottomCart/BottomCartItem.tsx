import { DUMMY_SHORTS } from '@/dummy_data/shorts';
import { cartAction, cartItemObject } from '@/store/cartSlice';
import { useAppDispatch } from '@/utils/hooks/reduxHooks';
import { Item } from '@/utils/interfaces';
import Image from 'next/image';

const BottomCartItem = ({
  id,
  productId,
  size,
  color,
  quantity,
  price,
}: cartItemObject) => {
  const dispatch = useAppDispatch();
  const item = DUMMY_SHORTS.find((item) => {
    return item.id === productId;
  }) as Item;

  const itemImage = item.images[0];

  return (
    <div
      className='flex justify-evenly mx-3 mt-3 pb-3 border-b-2 
    border-b-[#bfbfbf]'
    >
      <Image width={90} height={120} src={itemImage} alt={item.name} />
      <div className='grow ml-3 flex flex-col justify-between'>
        <h3 className='font-bold'>{item.name}</h3>
        <div className='mt-auto'>
          <p className='font-bold'>{item.price}</p>
          <div className='flex mt-2 w-full justify-around'>
            <button className='bg-[#bfbfbf] text-white w-[45%] rounded-md'>
              Editar
            </button>
            <button
              onClick={() => {
                dispatch(cartAction.removeItem(id));
              }}
              className='bg-black text-white w-[45%] rounded-md'
            >
              Borrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomCartItem;
