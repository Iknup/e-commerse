import Link from 'next/link';
import TopCartButton from './TopCartButton';

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 bg-white'>
      <div className='max-w-screen mx-2 mt-2 flex justify-between items-center '>
        <button>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-8 h-8'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </button>
        <Link
          href={'/'}
          className='font-extrabold text-center text-2xl tracking-widest'
        >
          SISLEY
        </Link>
        <div className='flex'>
          <TopCartButton />
          <Link href={'/account'}>
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
                d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className='max-w-screen-xl flex-wrap hidden lg:flex'></div>
    </nav>
  );
};

export default Navbar;
