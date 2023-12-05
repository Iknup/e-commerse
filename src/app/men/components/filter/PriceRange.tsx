'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useLayoutEffect, useEffect } from 'react';

const PriceRange = ({
  setRange,
}: {
  setRange: ({}: { min: number; max: number }) => void;
}) => {
  const [leftDot, setLeftDot] = useState(0);
  const [rightDot, setRightDot] = useState(0);
  const [priceRange, setPriceRange] = useState(0);
  const [lineLeftPos, setLineLeftPos] = useState(0);

  const priceLineRef = useRef<HTMLDivElement>(null);

  const [minPrice, maxPrice] = [
    leftDot > 0 ? (200 * (leftDot / priceRange)).toFixed(2) : 0,
    rightDot > priceRange - 10
      ? 200
      : (200 - 200 * ((priceRange - rightDot) / priceRange)).toFixed(2),
  ];

  useEffect(() => {
    setRange({ min: +minPrice, max: +maxPrice });
  }, [minPrice, maxPrice]);

  useLayoutEffect(() => {
    if (priceLineRef.current) {
      setPriceRange(priceLineRef.current.offsetWidth);
      setRightDot(priceLineRef.current.offsetWidth);
      setLineLeftPos(priceLineRef.current.getBoundingClientRect().left);
    }
  }, []);

  return (
    <>
      <div className='text-center font-semibold'>
        <p>
          {minPrice}~{maxPrice}$
        </p>
      </div>
      <div className='h-3 relative mx-5'>
        <motion.div
          drag='x'
          onDrag={(event, info) => {
            setLeftDot(info.point.x - lineLeftPos);
          }}
          whileDrag={{ scale: 1.2 }}
          dragConstraints={{ left: 0, right: rightDot - 25 }}
          dragElastic={0}
          dragMomentum={false}
          className='w-2 h-2 bg-black rounded-full absolute left-0 -top-[3px]'
        />
        <div ref={priceLineRef} className='w-full h-[1px] bg-black' />
        <motion.div
          drag='x'
          onDrag={(event, info) => {
            setRightDot(info.point.x - lineLeftPos);
          }}
          whileDrag={{ scale: 1.2 }}
          dragConstraints={{ left: -(priceRange - leftDot) + 25, right: 0 }}
          dragElastic={0}
          dragMomentum={false}
          className='w-2 h-2 bg-black rounded-full absolute right-0 -top-[3px]'
        />
      </div>
    </>
  );
};

export default PriceRange;
