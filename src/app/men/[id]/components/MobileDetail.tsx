'use client';

import { useState } from 'react';
import Review from './detail/Review';
import Description from './detail/Description';
import Sizes from './detail/Sizes';

const MobileDetail = ({ sizes }: { sizes: string[] }) => {
  const [showReview, setShowReview] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showSize, setShowSize] = useState(false);

  return (
    <div className='flex flex-col text-lg font-semibold sm:hidden'>
      <div className='border-b-[2px]'>
        <button
          onClick={() => {
            setShowReview(!showReview);
          }}
          className='detail-button'
        >
          <span>REVIEW</span>
          <span>{showReview ? '-' : '+'}</span>
        </button>
        {showReview && <Review />}
      </div>
      <div className='border-b-[2px]'>
        <button
          onClick={() => {
            setShowDescription(!showDescription);
          }}
          className='detail-button'
        >
          <span>DESCRIPCION</span>
          <span>{showDescription ? '-' : '+'}</span>
        </button>
        {showDescription && <Description />}
      </div>
      <div className='border-b-[2px]'>
        <button
          onClick={() => {
            setShowSize(!showSize);
          }}
          className='detail-button'
        >
          <span>TAMAÑO</span>
          <span>{showSize ? '-' : '+'}</span>
        </button>
        {showSize && <Sizes sizes={sizes} />}
      </div>
    </div>
  );
};

export default MobileDetail;
