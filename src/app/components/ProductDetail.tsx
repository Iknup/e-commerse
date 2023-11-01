'use client';

import Image from 'next/image';
import { useState } from 'react';
import Modal from './Modal';
import { cartAction } from '@/store/cartSlice';
import { useAppDispatch } from '@/utils/hooks/reduxHooks';
import Link from 'next/link';
import { useOnclickOutside } from '@/utils/hooks/useOnClickOutside';

type Props = {
  id: string;
  name: string;
  image: string;
  size: string[];
  detail: string;
  price: number;
  color: string[];
};

const ProductDetail = ({
  id,
  name,
  size,
  price,
  image,
  color,
  detail,
}: Props) => {
  const [confirmedBoxOpened, setConfirmedBoxOpened] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const modalBox = useOnclickOutside(() => {
    setConfirmedBoxOpened(false);
  });
  const dispatch = useAppDispatch();

  const colors = color.map((color, i) => {
    let buttonStyle = 'border-[1px] border-[#d8d8d8] min-w-[32px] h-8 mr-3';
    if (selectedColor === i) {
      buttonStyle = buttonStyle + ' shadow-color-box -translate-y-[1px]';
    }
    return (
      <button
        key={color}
        className={buttonStyle}
        style={{ backgroundColor: color }}
        onClick={() => {
          setSelectedColor(i);
        }}
      ></button>
    );
  });

  const sizes = size.map((size, i) => {
    let sizeButtonStyle =
      'text-center h-7 border-[1px] border-black font-semibold';
    if (selectedSize === i) {
      sizeButtonStyle =
        sizeButtonStyle + 'scale-1.2 shadow-color-box border-black';
    }

    return (
      <button
        key={size}
        onClick={() => {
          setSelectedSize(i);
        }}
        className={sizeButtonStyle}
      >
        {size.toUpperCase()}
      </button>
    );
  });

  const addToCart = () => {
    if (!selectedSize) {
    }
    const item = {
      productId: id,
      color: color[selectedColor],
      size: size[selectedSize as number],
      quantity: 1,
      price,
    };
    dispatch(cartAction.addItem(item));
  };

  return (
    <>
      <h1 className='font-bold text-xl mb-1 sm:text-2xl sm:h-16'>{name}</h1>
      <p className='w-full mb-5 text-sm h-32 overflow-hidden'>{detail}</p>
      <p className='font-bold text-xl sm:text-2xl mb-5'>{price}$</p>
      <div className='color-boxes-container'>{colors}</div>
      <div className='grid grid-cols-4 gap-2'>{sizes}</div>
      <button
        onClick={() => {
          setConfirmedBoxOpened(!confirmedBoxOpened);
          addToCart();
        }}
        className='w-full h-14 bg-black rounded-lg mt-4 text-white 
text-center font-semibold text-xl mb-4'
      >
        Add to Cart
      </button>
      {confirmedBoxOpened && (
        <Modal>
          <div
            ref={modalBox}
            className='w-96 max-h-30 p-3 bg-white rounded-sm border-[#bfbfbf] border-2 fixed bottom-[100px] left-1/2 
        z-50 -translate-x-1/2 shadow-modal-box'
          >
            <div className='flex'>
              <div className='w-1/4'>
                <Image width={900} height={1200} src={image} alt={image} />
              </div>
              <div className='ml-2'>
                <h3 className='text-2xl font-bold'>{name}</h3>
                <p className='text-1xl mt-1'>{price}$</p>
                <span>
                  {size[!selectedSize ? 0 : selectedSize].toUpperCase()}/
                  {color[selectedColor]}
                </span>
              </div>
            </div>
            <Link href={'/cart'}>
              <div
                className='w-full h-14 bg-black rounded-lg mt-4 text-white 
text-center flex items-center justify-center font-semibold text-xl mb-4'
              >
                View Cart
              </div>
            </Link>
            <div className='text-[#bfbfbf] text-center'>
              Click outside to close
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ProductDetail;
