'use client';

import Image from 'next/image';
import { useState } from 'react';

type Props = {
  id: string;
  name: string;
  image: string;
  size: string[];
  price: number;
  color: string[];
};

const AddToCart = ({ id, name, size, price, image }: Props) => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setCartOpen(!cartOpen);
        }}
        className='w-full h-14 bg-black rounded-lg mt-4 text-white 
text-center font-semibold text-xl mb-4'
      >
        Add to Cart
      </button>
      {cartOpen && (
        <div
          className='p-2 fixed bottom-[90px] right-0 left-0 z-50 w-full max-w-7xl  mx-auto 
        bg-white h-[400px]'
        >
          <div className='h-full w-full relative'>
            <div className='flex'>
              <Image width={80} height={100} src={image} alt='image' />
              <h3>{name}</h3>
              <p>{price}</p>
            </div>
            <button
              className='absolute right-0 bottom-0 w-96 h-14 bg-black rounded-lg text-white 
text-center font-semibold text-xl mb-4'
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddToCart;
