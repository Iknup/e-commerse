import Image from 'next/image';
import Link from 'next/link';

type Props = {
  name: string;
  id: string;
  price: number;
  image: string;
};

const BigPreview = ({ name, id, price, image }: Props) => {
  return (
    <div className='relative group'>
      <Image src={image} width={800} height={1200} alt={name} />
      <div
        className='hidden group-hover:flex absolute w-full h-full top-0 justify-center 
       items-center bg-opacity-30 bg-black'
      >
        <Link href={`/men/${id}`} className='text-white text-center'>
          <h3 className='font-bold text-2xl underline decoration-2 underline-offset-8'>
            {name}
          </h3>
          <p>{price}$</p>
        </Link>
      </div>
    </div>
  );
};

export default BigPreview;
