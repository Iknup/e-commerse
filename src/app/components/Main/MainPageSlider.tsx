'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MainPageSlider = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideHeight = isMobile ? 'h-[100vh]' : 'slide-height';

  // handling slide index changes
  const changeIndex = (direction: string) => {
    let newIndex = direction === 'up' ? slideIndex - 1 : slideIndex + 1;

    console.log('isMobile:', isMobile);

    if (newIndex < 0) {
      newIndex = 0;
    } else if (isMobile && newIndex > 2) {
      console.log('shibal:', newIndex);
      newIndex = 2;
    } else if (!isMobile && newIndex > 1) {
      console.log('eh');
      newIndex = 1;
    }

    console.log('newIndex:', newIndex);

    setSlideIndex(newIndex);
  };

  //change slide index on scroll
  useEffect(() => {
    setIsMobile(window.innerWidth < 640);

    let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

    // handling scroll
    const handleScroll = () => {
      const threshold = 100;
      let scrollDirection: string;
      const scrollTopPosition =
        window.scrollY || document.documentElement.scrollTop;

      if (scrollTopPosition > lastScrollTop + threshold) {
        scrollDirection = 'down';
      } else if (scrollTopPosition < lastScrollTop - threshold) {
        scrollDirection = 'up';
      } else {
        return;
      }

      lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;

      console.log(scrollDirection);

      changeIndex(scrollDirection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let height;
    const slideElement = containerRef.current;
    if (slideElement) {
      const style = window.getComputedStyle(slideElement);
      height = parseInt(style.height);
    }

    let targetScrollPosition = slideIndex * height!;

    const animateScroll = (targetScrollPosition: number) => {
      const startTime = performance.now();
      const endTime = startTime + 700;

      const step = (timestamp: number) => {
        const progress = Math.min(
          (timestamp - startTime) / (endTime - startTime),
          1
        );
        window.scrollTo(
          0,
          (1 - progress) * window.scrollY + progress * targetScrollPosition
        );

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    };

    animateScroll(targetScrollPosition);
  }, [slideIndex]);

  const slideOne = (
    <div
      ref={containerRef}
      className={`flex justify-center w-full ${slideHeight} items-center relative
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
        onClick={() => {
          changeIndex('down');
        }}
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
      <div className='w-full '>
        {slideOne}
        <div
          className={` w-full grid sm:grid-cols-2 
        `}
        >
          <div className={`relative group ${slideHeight}`}>
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
          <div className={`relative group ${slideHeight}`}>
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
