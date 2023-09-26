import { DUMMY_SHORTS } from '@/dummy_data/shorts';
import Image from 'next/image';
import ItemGrid from './ItemGrid';

const CATEGORIES = [
  'T-shirts',
  'Shorts',
  'Pants',
  'Dress shirts',
  'Boxers',
  'Shoes',
];

const Page = () => {
  return (
    <main>
      <div className='w-full relative mb-3'>
        <div className='w-screen h-96'>
          <Image alt='main-man01' src={'/main-man01.jpg'} fill />
        </div>
        <div className='max-w-5xl absolute bottom-3 left-3 text-3xl font-bold'>
          Men&apos;s <br /> Lorem ipsum
        </div>
      </div>
      <div className=' max-w-7xl mx-auto px-2'>
        <div className='flex space-x-2 overflow-auto mt-5 mb-8'>
          {CATEGORIES.map((category) => {
            return (
              <button
                key={category}
                className='bg-filter-button p-2 rounded-md font-semibold whitespace-nowrap'
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-y-10'>
          {DUMMY_SHORTS.map((short) => {
            return (
              <ItemGrid
                key={short.id}
                name={short.name}
                id={short.id}
                price={short.price}
                hashtag={short.hashtag}
                color={short.color.length}
                images={short.images}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Page;
