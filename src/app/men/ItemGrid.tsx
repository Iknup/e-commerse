import Image from 'next/image';
import Link from 'next/link';

type Props = {
  name: string;
  id: string;
  images: string[];
  price: number;
  color: number;
  hashtag?: string[];
};

const ItemGrid = ({ name, id, images, price, color, hashtag }: Props) => {
  return (
    <Link href={'#'}>
      <div className='w-[170px] sm:w-[300px]'>
        <div className='w-[170px] h-[200px] mx-auto sm:w-[300px] sm:h-[350px] relative mb-3'>
          <Image src={images[0]} alt={images[0]} fill />
        </div>
        <div className=' text-sm sm:text-base'>
          <h1 className='font-bold capitalize'>{name}</h1>
          <p className='text-[#727272]'>men-shorts</p>
          <p className='font-bold mb-1'>{price}</p>
          <div className='flex text-xs sm:text-sm'>
            <p className='text-[#727272] mr-2 whitespace-nowrap'>
              {color} colors
            </p>
            <div className='flex font-bold text-[#995555]'>
              {hashtag?.map((hashtag) => {
                return (
                  <p key={hashtag} className='mr-2 whitespace-nowrap'>
                    #{hashtag}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemGrid;
