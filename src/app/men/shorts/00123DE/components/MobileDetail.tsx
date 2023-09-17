'use client';

import { useState } from 'react';
import Review from './detail/Review';
import Description from './detail/Description';
import Size from './detail/Size';

const MobileDetail = ({ sizes }: { sizes: string[] }) => {
  const [showReview, setShowReview] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showSize, setShowSize] = useState(false);

  return (
    <div className='flex flex-col text-lg font-semibold lg:hidden'>
      <div>
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
      <div>
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
      <div>
        <button
          onClick={() => {
            setShowSize(!showSize);
          }}
          className='detail-button'
        >
          <span>TAMAÑO</span>
          <span>{showSize ? '-' : '+'}</span>
        </button>
        {showSize && <Size sizes={sizes} />}
      </div>
    </div>
  );
};

export default MobileDetail;
