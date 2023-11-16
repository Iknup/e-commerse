import Image from 'next/image';
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
      <div className='mt-10 w-full'>
        <h1 className='text-2xl mb-4 font-semibold text-center'>
          Nueva Colleción
        </h1>
        <NewCollection />
        <div className='text-center mt-3 font-bold '>
          <Link href={'/'}>Ver todo</Link>
        </div>
      </div>
      <div className='mt-5 w-full grid sm:grid-cols-2'>
        <div className='relative group'>
          <Image
            src={'/home_crop_01.jpg'}
            width={1600}
            height={1600}
            alt='home_man'
          />
          <div
            className='absolute top-0 w-full h-full bg-opacity-50 bg-black flex sm:hidden items-center 
            justify-center 
            sm:group-hover:flex
            sm:group-hover:bg-black sm:group-hover:bg-opacity-50 text-white '
          >
            <Link href={'/men'} className='text-center text-xl font-bold'>
              <p>SISLEY</p>
              <p className='overline'>HOMBRE</p>
            </Link>
          </div>
        </div>
        <div className='relative group'>
          <Image
            src={'/home_crop_02.jpg'}
            width={1600}
            height={1600}
            alt='home_woman'
          />
          <div
            className='absolute top-0 w-full h-full bg-opacity-50 bg-black flex sm:hidden items-center 
            justify-center 
            sm:group-hover:flex
            sm:group-hover:bg-black sm:group-hover:bg-opacity-50 text-white '
          >
            <Link href={'/'} className='text-center text-xl font-bold'>
              <p>SISLEY</p>
              <p className='overline'>MUJER</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
