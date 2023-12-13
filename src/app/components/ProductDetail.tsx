'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import Modal from './Modal';
import { cartAction } from '@/store/cartSlice';
import { useAppDispatch } from '@/utils/hooks/reduxHooks';
import Link from 'next/link';
import { useOnclickOutside } from '@/utils/hooks/useOnClickOutside';
import { AnimatePresence, motion } from 'framer-motion';
import ShakeAnimation from './Animation/ShakeAnimation';

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
  const [scrollPos, setScrollPos] = useState<number>(0);
  const [cartButtonFixed, setCartButtonFixed] = useState(false);
  const [showSizeAlert, setShowSizeAlert] = useState(false);
  const productNameRef = useRef<HTMLDivElement>(null);
  const cartButtonRef = useRef<HTMLButtonElement>(null);
  const modalBox = useOnclickOutside(() => {
    setConfirmedBoxOpened(false);
  });
  const dispatch = useAppDispatch();

  const onClickAdd = () => {
    if (typeof selectedSize === 'number') {
      setConfirmedBoxOpened(!confirmedBoxOpened);
      setShowSizeAlert(false);
      addToCart();
      setTimeout(() => {
        setConfirmedBoxOpened(false);
      }, 3000);
    } else {
      if (window.innerWidth < 640) {
        window.scrollTo(0, scrollPos);
      } else {
        window.scrollTo(0, 0);
      }
      setShowSizeAlert(true);
    }
  };

  useEffect(() => {
    const nameRefTop = productNameRef.current!.offsetTop;
    setScrollPos(nameRefTop);
  });

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.innerWidth < 640) {
        setCartButtonFixed(window.scrollY > cartButtonRef.current!.offsetTop);
      } else return;
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

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
      <h1
        ref={productNameRef}
        className='font-bold text-xl mb-1 sm:text-2xl sm:h-16'
      >
        {name}
      </h1>
      <p className='w-full mb-5 text-sm h-32 overflow-hidden long-description'>
        {detail}
      </p>
      <p className='font-bold text-xl sm:text-2xl mb-5'>{price}$</p>
      <div className='color-boxes-container'>{colors}</div>
      <div className='grid grid-cols-4 gap-2'>{sizes}</div>
      {showSizeAlert && (
        <ShakeAnimation>
          <p className=' text-red-500'>*Porfavor, seleccione la talla</p>
        </ShakeAnimation>
      )}
      <button
        ref={cartButtonRef}
        onClick={onClickAdd}
        className={` h-14 button-bg-black mt-4  mb-4 ${
          cartButtonFixed ? 'fixed bottom-3 z-50 w-[90%]' : 'w-full'
        }`}
      >
        Add to Cart
      </button>
      <AnimatePresence>
        {confirmedBoxOpened && (
          <Modal>
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ duration: 0.5, stiffness: 80 }}
              ref={modalBox}
              className='w-3/4 sm:w-96 max-h-30 p-3 bg-white rounded-sm 
            border-[#bfbfbf] border-2 fixed bottom-5 sm:bottom-[100px]  right-3
        z-50 shadow-modal-box'
            >
              <div className='flex'>
                <div className='w-1/4 relative '>
                  <Image
                    fill
                    style={{ objectFit: 'cover', borderRadius: '9999px' }}
                    src={image}
                    alt={image}
                  />
                </div>
                <div className='ml-2'>
                  <h3 className='text-2xl font-bold'>{name}</h3>
                  <p className='text-1xl mt-1 font-semibold'>{price}$</p>
                  <span className='text-[#bfbfbf]'>
                    {size[!selectedSize ? 0 : selectedSize].toUpperCase()}/
                    {color[selectedColor]}
                  </span>
                </div>
                <Link
                  href={'/cart'}
                  className='flex ml-auto items-center text-[#bfbfbf]'
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
                      d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                    />
                  </svg>
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
                      d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5'
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductDetail;
