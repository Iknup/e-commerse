'use client';

import { useAppSelector } from '@/utils/hooks/reduxHooks';
import { useRef, useState } from 'react';
import Modal from '../Modal';
import BottomCartBox from './BottomCartBox';
import changeStringOrder from '@/utils/hooks/changeStringOrder';

const BottomCartButton = () => {
  const [showCart, setShowCart] = useState(false);
  const [rectLeft, setRectLeft] = useState<number>(0);
  const [text, setText] = useState('CARRITO');

  const ref = useRef<HTMLButtonElement>(null);
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const setPosition = () => {
    if (ref.current) {
      const rectLeft = ref.current.getBoundingClientRect().left;
      setRectLeft(rectLeft);
    }
  };

  return (
    <>
      <div className='flex items-center relative'>
        <button
          ref={ref}
          onMouseEnter={() => {
            setShowCart(true);
            setPosition();
            changeStringOrder('CARRITO', setText);
          }}
          onClick={() => {
            setShowCart((prev) => !prev);
            setPosition();
          }}
          className={
            'flex w-14 h-14 mx-4 text-center items-center font-gmarket'
          }
        >
          {text}
          {cartItems.length > 0 && <p>({cartItems.length})</p>}
        </button>
      </div>
      {showCart && cartItems.length > 0 && (
        <Modal>
          <div
            className='fixed z-50 shadow-modal-box '
            style={{ bottom: 100, left: rectLeft }}
          >
            <button
              onClick={() => {
                setShowCart(false);
              }}
              className='w-full bg-white text-center 
              text-[#bfbfbf] '
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
