'use client';

import TraingleArrow from '@/icons/TriangleArrow';
import { useEffect, useRef, useState } from 'react';

type Props = {
  id: string;
  rating: number;
  user: string;
  review: string;
};

const ReviewBox = ({ id, rating, user, review }: Props) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [isTextLong, setIsTextLong] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsHidden((current) => !current);
  };

  useEffect(() => {
    const textHeight = textRef.current!.getBoundingClientRect().height;

    if (textHeight > 80) {
      setIsHidden(true);
      setIsTextLong(true);
    }
  }, []);

  return (
    <div id={id} className={`flex`}>
      <div className='text-lg mr-5 text-center'>{rating}/5</div>
      <div className={`relative ${isHidden ? 'min-h-[100px]' : 'mb-6'}`}>
        <div className={isHidden ? 'max-h-20 overflow-hidden' : 'h-fit'}>
          <h1 className='text-lg mb-2 font-semibold'>{user}</h1>
          <p ref={textRef} className='long-description '>
            {review}
          </p>
          {isHidden && (
            <button
              onClick={handleButtonClick}
              className='absolute -bottom-3 left-0 flex items-center text-[#cccccc]'
            >
              <TraingleArrow className='rotate-180' />
              <p>mas...</p>
            </button>
          )}
          {!isHidden && isTextLong && (
            <button
              onClick={handleButtonClick}
              className='absolute -bottom-6 left-0 flex items-center text-[#cccccc]'
            >
              <TraingleArrow />
              <p>cerrar...</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;
