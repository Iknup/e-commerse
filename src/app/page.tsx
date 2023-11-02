import MainSlider from './components/MainSlider';
import NewCollection from './components/NewCollection';
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
          Nueva Colleción
        </h1>
        <NewCollection />
        <div className='text-center mt-3 font-bold '>
          <Link href={'/'}>Ver todo</Link>
        </div>
      </div>
      <div className='flex mt-5 flex-col sm:flex-row sm:justify-evenly px-3 w-full'>
        <Link className='sm:w-[45%] h-44 bg-black relative mb-2' href={'/men'}>
          <p className='bg-white w-28 font-semibold indent-2 absolute bottom-10'>
            Man
          </p>
        </Link>
        <Link className='sm:w-[45%] h-44 bg-black relative mb-2' href={'/'}>
          <p className='bg-white w-28 font-semibold indent-2 absolute bottom-10'>
            Woman
          </p>
        </Link>
      </div>
    </main>
  );
}
