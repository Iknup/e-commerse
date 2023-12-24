import Image from 'next/image';
import MainSlider from './components/MainSlider';
import NewCollection from './components/NewCollection';
import Link from 'next/link';
import LinkBtn from './components/Animation/LinkBtn';
import MainPageSlider from './components/Main/MainPageSlider';

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
      <main className='w-full h-full bg-black '>
        <MainPageSlider />
      </main>
    </>
  );
}
