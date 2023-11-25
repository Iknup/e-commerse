'use client';
import { useState } from 'react';

const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setShowSideBar(true);
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={`w-8 h-8 ${!showSideBar ? 'block' : 'hidden'}`}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </button>
      <div
        className={`w-2/3 sm:w-1/10 sm:min-w-[300px] bg-white flex-col 
        h-full fixed left-0 top-0 ${showSideBar ? 'flex z-50' : 'hidden'}`}
      >
        <div className='flex items-center'>
          <button
            onClick={() => {
              setShowSideBar(false);
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          <h1 className='grow main-title'>SISLEY</h1>
        </div>
      </div>
    </>
  );
};

export default SideBar;
