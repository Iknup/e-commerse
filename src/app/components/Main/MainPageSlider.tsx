'use client';

import { useEffect, useRef, useState } from 'react';
import categoryManPic from '@/../public/home_crop_01.jpg';
import categoryWomanPic from '@/../public/home_crop_02.jpg';
import Image from 'next/image';
import Link from 'next/link';

const MainPageSlider = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const slideTwo = useRef<HTMLDivElement>(null);
  const slideHeight = isMobile ? 'h-[100vh]' : 'slide-height';
  const slideStyle =
    'transform transition duration-1000 ease-in-out' + ' ' + slideHeight;

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
  }, []);

  const handleButtonClick = () => {
    if (slideTwo.current) {
      slideTwo.current.scrollIntoView({ behavior: 'instant' });
    }
  };

  const slideOne = (
    <div
      className={`snap-center flex justify-center w-full ${slideStyle} items-center relative
      `}
    >
      <h1
        className='
        text-5xl tracking-[0.25em] mb-5
        font-extrabold indent-[0.6em] text-center  
sm:text-[9rem] text-white sm:tracking-[0.8em] '
      >
        SISLEY
      </h1>
      <button
        onClick={handleButtonClick}
        className='absolute bottom-32 left-1/2 -translate-x-[50%]'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-12 h-12 text-white'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m19.5 8.25-7.5 7.5-7.5-7.5'
          />
        </svg>
      </button>
    </div>
  );

  return (
    <div className={'w-full '}>
      <div
        className={`scroll-smooth w-full ${slideHeight} snap-y snap-mandatory 
        overflow-auto no-scrollbar`}
      >
        {slideOne}
        <div
          ref={slideTwo}
          className={` w-full grid sm:grid-cols-2 
        `}
        >
          <div className={`snap-center  group ${slideStyle}`}>
            <Image src={categoryManPic} fill alt='home_man' />
            <div
              className='absolute top-0 w-full h-full bg-opacity-50 bg-black 
              flex sm:hidden items-center sm:justify-center sm:group-hover:flex
    sm:group-hover:bg-black sm:group-hover:bg-opacity-50 text-white '
            >
              <Link
                href={'/men'}
                className='ml-[3rem] sm:ml-0 tracking-widest text-center text-3xl 
                 font-bold'
              >
                <p>HOMBRE</p>
                <p className='text-xl font-normal sm:overline'>SISLEY</p>
              </Link>
            </div>
          </div>
          <div className={` group ${slideStyle} snap-center sm:snap-none`}>
            <Image src={categoryWomanPic} fill alt='home_woman' />
            <div
              className='absolute top-0 w-full h-full bg-opacity-50 bg-black
               flex sm:hidden items-center justify-end sm:justify-center sm:group-hover:flex
    sm:group-hover:bg-black sm:group-hover:bg-opacity-50 text-white '
            >
              <Link
                href={'/'}
                className='mr-[3rem] sm:mr-0 tracking-widest text-center text-3xl 
                 font-bold'
              >
                <p>MUJER</p>
                <p className='text-xl font-normal sm:overline'>SISLEY</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageSlider;
