'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SideBarMain from './SideBarMain';
import SideBarMan from './SideBarMan';
import { useOnclickOutside } from '@/utils/hooks/useOnClickOutside';
import { usePathname, useRouter } from 'next/navigation';

export enum MenuState {
  Main = 'main',
  Men = 'men',
  Women = 'women',
}

const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [menuState, setMenuState] = useState(MenuState.Main);

  const router = useRouter();
  const pathname = usePathname();

  const changeMenuState = (state: MenuState) => {
    setMenuState(state);
  };

  const closeSideBar = () => {
    setShowSideBar(false);
  };

  const sideBar = useOnclickOutside(() => {
    setShowSideBar(false);
  });

  return (
    <div ref={sideBar}>
      <button
        className={pathname === '/' ? 'text-white' : 'text-black'}
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
      <AnimatePresence>
        {showSideBar && (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{
              ease: 'easeInOut',
              stiffness: 80,
              duration: 0.5,
            }}
            exit={{ x: -300 }}
            className={`w-2/3 sm:max-w-[300px] bg-white flex-col 
        h-full fixed left-0 top-0 flex z-50`}
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
            <AnimatePresence mode='wait' initial={false}>
              {menuState === MenuState.Main && (
                <motion.div
                  key={MenuState.Main}
                  initial={{ x: -200 }}
                  animate={{ x: 0 }}
                  exit={{ x: -300 }}
                  transition={{
                    ease: 'easeInOut',
                    stiffness: 80,
                    duration: 0.5,
                  }}
                >
                  <SideBarMain changeState={changeMenuState} />
                </motion.div>
              )}
              {menuState === MenuState.Men && (
                <motion.div
                  key={MenuState.Men}
                  initial={{ x: -200 }}
                  animate={{ x: 0 }}
                  exit={{ x: -300 }}
                  transition={{
                    ease: 'easeInOut',
                    stiffness: 80,
                    duration: 0.5,
                  }}
                >
                  <SideBarMan
                    backToMenu={changeMenuState}
                    closeMenu={closeSideBar}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <button
              onClick={() => {
                router.push('/about');
                setShowSideBar(false);
              }}
              className='flex justify-between mx-3 mt-10 font-extrabold text-xl'
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideBar;
