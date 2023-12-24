'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MainPageSlider = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // handling slide index changes
  const changeSlide = (direction: string, isMobile: boolean) => {
    let newIndex = direction === 'up' ? slideIndex - 1 : slideIndex + 1;

    if (newIndex < 0) {
      newIndex = 0;
    } else if (isMobile && newIndex > 2) {
      newIndex = 2;
    } else if (!isMobile && newIndex > 1) {
      newIndex = 1;
    }

    setSlideIndex(newIndex);
  };

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);

    let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

    // handling scroll
    const handleScroll = () => {
      let scrollDirection: string;
      const scrollTopPosition =
        window.scrollY || document.documentElement.scrollTop;

      if (scrollTopPosition > lastScrollTop) {
        scrollDirection = 'down';
      } else if (scrollTopPosition < lastScrollTop) {
        scrollDirection = 'up';
      } else {
        return;
      }

      lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;

      changeSlide(scrollDirection, isMobile);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const slideOne = (
    <div
      className={`flex justify-center w-full slide-height items-center 
      `}
    >
      <h1
        className='font-extrabold indent-[0.6em] text-center  
text-[9rem] text-white tracking-[0.8em]'
      >
        SISLEY
      </h1>
      <button
        onClick={() => {
          changeSlide('down', isMobile);
        }}
        className='absolute bottom-32 left-1/2'
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
    <div className={'w-full overflow-hidden slide-height relative'}>
      <div
        className='slide-height w-full transition-all duration-500 ease-in-out'
        style={{ transform: `translateY(-${slideIndex * 100}%)` }}
      >
        {slideOne}
        <div
          className={`slide-height w-full grid sm:grid-cols-2 
        transition-all duration-500 ease-in-out`}
        >
          <div className='relative group'>
            <Image src={'/home_crop_01.jpg'} fill alt='home_man' />
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
            <Image src={'/home_crop_02.jpg'} fill alt='home_woman' />
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
      </div>
    </div>
  );
};

export default MainPageSlider;
