import MainSlider from './components/MainSlider';
import ItemGrid from './components/ItemGrid';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen w-full flex-col items-center'>
      <div className='mt-5'>
        <MainSlider
          src={['/main-man01.jpg', '/main-man02.jpg']}
          alt='main-man'
          ratio={{ sm: 2, md: 2 }}
          className=''
        />
      </div>
      <div className='mt-10  w-full'>
        <h1 className='text-2xl mb-4 font-semibold text-center'>
          New Collection
        </h1>
        <ItemGrid />
        <div className='text-center mt-3 font-bold '>
          <Link href={'/'}>See All</Link>
        </div>
      </div>
    </main>
  );
}
