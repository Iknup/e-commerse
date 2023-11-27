'use client';
import { useEffect, useState } from 'react';
import SideBarMain from './SideBarMain';
import SideBarMan from './SideBarMan';

export enum MenuState {
  Main = 'main',
  Men = 'men',
  Women = 'women',
}

const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [menuState, setMenuState] = useState(MenuState.Main);

  const changeMenuState = (state: MenuState) => {
    setMenuState(state);
  };

  const closeSideBar = () => {
    setShowSideBar(false);
  };

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
        className={`w-2/3 sm:max-w-[300px] bg-white flex-col 
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
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          <h1 className='grow main-title'>SISLEY</h1>
        </div>
        {menuState === MenuState.Main && (
          <SideBarMain changeState={changeMenuState} />
        )}
        {menuState === MenuState.Men && (
          <SideBarMan backToMenu={changeMenuState} closeMenu={closeSideBar} />
        )}
        <button
          className='flex justify-between mx-3 mt-10 font-extrabold 
        text-xl'
        >
          <h1>SOBRE NOSOTROS</h1>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default SideBar;
