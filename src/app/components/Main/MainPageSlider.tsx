'use client';

import { useEffect, useRef, useState } from 'react';
import useIsMobile from '@/utils/hooks/useIsMobile';
import Image from 'next/image';
import Link from 'next/link';

const MainPageSlider = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const slideContainer = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const slideStyle = 'transition-all duration-500 ease-in-out';

  const changeSlide = (direction: string) => {
    let newIndex = direction === 'up' ? slideIndex - 1 : slideIndex + 1;

    if (newIndex < 0) {
      newIndex = isMobile ? 2 : 1;
    } else if ((isMobile && newIndex > 2) || (!isMobile && newIndex > 1)) {
      newIndex = 0;
    }

    setSlideIndex(newIndex);
  };

  useEffect(() => {
    let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

    const containerDiv = slideContainer.current;

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

      console.log(slideIndex);

      lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;

      changeSlide(scrollDirection);
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
          changeSlide('down');
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
        ref={slideContainer}
        className='slide-height w-full transition-all duration-500 ease-in-out'
        style={{ transform: `translateY(-${slideIndex * 100}%)` }}
      >
        {slideOne}
        <div
          className={`slide-height mt-5 w-full grid sm:grid-cols-2 
        transition-all duration-500 ease-in-out`}
        >
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
      </div>
    </div>
  );
};

export default MainPageSlider;
