import IconMen from '@/icons/navbar/IconMen';
import IconNewCollection from '@/icons/navbar/IconNewCollection';
import IconSale from '@/icons/navbar/IconSale';
import IconWomen from '@/icons/navbar/IconWomen';
import Link from 'next/link';

const BottomNavbar = () => {
  const buttonStyle = 'w-14 h-14 mx-4 text-center';
  return (
    <nav className='z-50 sticky bottom-0 bg-white hidden md:flex h-[90px]'>
      <div className='flex mx-auto items-center gap-2 pb-2'>
        <Link href={'/'} className={buttonStyle}>
          Home
        </Link>
        <Link href={'/men'} className={buttonStyle}>
          <IconMen />
        </Link>
        <button className={buttonStyle}>
          <IconWomen />
        </button>
        <button className={buttonStyle}>
          <IconNewCollection />
        </button>
        <button className={buttonStyle}>
          <IconSale />
        </button>
      </div>
    </nav>
  );
};

export default BottomNavbar;
