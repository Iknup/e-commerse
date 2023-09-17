import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Link href={'/men/shorts/00123DE'}>
        <p>Click me!</p>
      </Link>
    </main>
  );
}
