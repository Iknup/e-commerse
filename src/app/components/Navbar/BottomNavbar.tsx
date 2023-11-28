import Link from 'next/link';
import BottomCartButton from '../BottomCart/BottomCartButton';
import LinkBtn from '../Animation/LinkBtn';

const BottomNavbar = () => {
  const buttonStyle = 'h-14 mx-4 text-center flex items-center';

  return (
    <nav className='z-50 sticky bottom-0 bg-white hidden md:flex h-[90px]'>
      <div className='flex mx-auto items-center pb-2 font-gmarket'>
        <LinkBtn name='HOME' url='/' className={buttonStyle} />/
        <LinkBtn name='HOMBRE' url='/men' className={buttonStyle} />
        /<LinkBtn name='MUJER' url='/women' className={buttonStyle} />/
        <LinkBtn name='NUEVA' url='/new' className={buttonStyle} />/
        <LinkBtn name='SALE' url='/sale' className={buttonStyle} />
        /
        <BottomCartButton />
      </div>
    </nav>
  );
};

export default BottomNavbar;
