import Image from 'next/image';
import MainSlider from './components/MainSlider';
import NewCollection from './components/NewCollection';
import Link from 'next/link';
import LinkBtn from './components/Animation/LinkBtn';

export default function Home() {
  return (
    <>
      <main className='sm:hidden'>
        <div className='flex justify-center items-center bg-black w-full h-screen'>
          <div className='text-center text-white pb-5'>
            <h1 className='font-extrabold  text-5xl tracking-[0.25em] mb-5'>
              SISLEY
            </h1>
            <p className='text-lg tracking-[0.25em]'>La moda de Santa Cruz</p>
            <div
              className='flex justify-evenly mt-5 tracking-widest 
            text-xl font-bold'
            >
              <LinkBtn
                className='p-3 w-[45%] rounded-lg underline underline-offset-8'
                url={'/men'}
                name='HOMBRE'
              />
              <LinkBtn
                className='p-3 w-[45%] rounded-lg underline underline-offset-8'
                url={'women'}
                name='MUJER'
              />
            </div>
          </div>
        </div>
      </main>
      <main
        className='bg-white hidden sm:flex min-h-screen w-full
       flex-col items-center'
      >
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
    </>
  );
}
