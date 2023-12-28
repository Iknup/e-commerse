import { DUMMY_SHORTS } from '@/dummy_data/shorts';
import Image from 'next/image';
import ItemGrid from './components/ItemGrid';
import FilterList from './components/filter/FilterList';

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
          <Image
            alt='main-man01'
            src={'/main-man01.jpg'}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='max-w-5xl absolute bottom-3 left-3 text-3xl font-bold'>
          Men&apos;s <br /> SISLEY
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-2'>
        <FilterList categories={CATEGORIES} />
        <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-y-10 place-items-center'>
          {DUMMY_SHORTS.map((short) => {
            return (
              <ItemGrid
                category={'men'}
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
