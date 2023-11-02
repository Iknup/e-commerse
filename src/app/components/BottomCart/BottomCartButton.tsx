'use client';

import IconCart from '@/icons/navbar/IconCart';
import { useAppSelector } from '@/utils/hooks/reduxHooks';
import { useEffect, useRef, useState } from 'react';
import Modal from '../Modal';
import BottomCartBox from './BottomCartBox';
import CartQuantityNoti from '@/app/cart/components/CartQuantityNoti';

const BottomCartButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [rectLeft, setRectLeft] = useState<number>(0);

  const ref = useRef<HTMLButtonElement>(null);
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  useEffect(() => {
    if (cartItems.length > 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [cartItems]);

  const setPosition = () => {
    if (ref.current) {
      const rectLeft = ref.current.getBoundingClientRect().left;
      setRectLeft(rectLeft);
    }
  };

  return (
    <>
      <div className='relative'>
        <button
          ref={ref}
          onMouseEnter={() => {
            setShowCart(true);
            setPosition();
          }}
          onClick={() => {
            setShowCart((prev) => !prev);
            setPosition();
          }}
          className={
            'w-14 h-14 mx-4 text-center ' + (showButton ? 'block' : 'hidden')
          }
        >
          <IconCart />
        </button>
        <div className={`absolute -top-2 left-2`}>
          <CartQuantityNoti quantity={cartItems.length} />
        </div>
      </div>
      {showCart && (
        <Modal>
          <div
            className='fixed z-50 shadow-modal-box'
            style={{ bottom: 100, left: rectLeft }}
          >
            <button
              onClick={() => {
                setShowCart(false);
              }}
              className='w-full text-center bg-gray-100 text-[#bfbfbf]             '
            >
              ▼
            </button>
            <BottomCartBox />
          </div>
        </Modal>
      )}
    </>
  );
};

export default BottomCartButton;
