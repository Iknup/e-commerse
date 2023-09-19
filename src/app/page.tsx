import Image from 'next/image';
import Link from 'next/link';
import ResponsiveImg from './components/ResponsiveImg';
import MainSlider from './components/MainSlider';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <div className='mt-5'>
        <MainSlider
          src={['/main-man01.jpg', '/main-man02.jpg']}
          alt='main-man'
          ratio={{ sm: 2, md: 2 }}
          className=''
        />
      </div>
    </main>
  );
}
