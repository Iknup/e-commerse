'use client';

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

  const handleMoreButtonClick = () => {
    setIsHidden(false);
  };

  useEffect(() => {
    const textHeight = textRef.current!.getBoundingClientRect().height;

    if (textHeight > 80) {
      setIsHidden(true);
    }
  }, []);

  return (
    <div id={id} className={`flex`}>
      <div className='text-lg mr-5 text-center'>{rating}/5</div>
      <div className={`relative ${isHidden && 'min-h-[100px]'}`}>
        <div className={isHidden ? 'max-h-20 overflow-hidden' : 'h-fit'}>
          <h1 className='text-lg mb-2 font-semibold'>{user}</h1>
          <p ref={textRef} className='long-description '>
            {review}
          </p>
          {isHidden && (
            <button
              onClick={handleMoreButtonClick}
              className='absolute -bottom-3 left-0'
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
                  d='M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;
