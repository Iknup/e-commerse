'use client';

import React, { useRef, useState } from 'react';

type Props = {
  prodId: string;
  hasReview: boolean;
};

const ReviewInput = ({ prodId, hasReview }: Props) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [rating, setRating] = useState(0);
  const [showInput, setShowInput] = useState(hasReview);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleHover = (index: number) => {
    setActiveIndex(index);
  };

  const handleLeave = () => {
    if (rating === 0) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(rating - 1);
    }
  };

  const handleClick = (index: number) => {
    setActiveIndex(index);
    setRating(index + 1);

    if (!hasReview) {
      setShowInput(!hasReview);
    }
  };

  const onSubmit = () => {
    const review = textAreaRef!.current!.value;
  };

  const starArray = [...Array(5)].map((star, index) => {
    return (
      <button
        key={index}
        onMouseEnter={() => handleHover(index)}
        onMouseLeave={handleLeave}
        onClick={() => {
          handleClick(index);
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill={index <= activeIndex ? 'black' : '#e5e5e5'}
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='none'
          className={showInput ? 'w-8 h-8' : 'w-16 h-16'}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
          />
        </svg>
      </button>
    );
  });

  const reviewInput = (
    <>
      <div className='flex items-center gap-x-2'>
        <h3 className='font-semibold text-xl'>Que opinas?</h3>
        <div className='flex'>{starArray}</div>
      </div>
      <div className='flex flex-col gap-y-1'>
        <textarea
          ref={textAreaRef}
          className='w-full border-2 p-1'
          name='review'
          id='review'
          cols={30}
          rows={5}
          placeholder='Ofrecenos tu opinión'
        ></textarea>
        <div className='self-end'>
          {!hasReview && (
            <button
              type='button'
              onClick={() => {
                setShowInput((current) => !current);
                setActiveIndex(-1);
                setRating(0);
              }}
              className='text-white bg-black rounded-md p-1 mr-2'
            >
              Cancelar
            </button>
          )}
          <button
            type='button'
            onClick={onSubmit}
            className='text-white bg-black rounded-md p-1'
          >
            Enviar
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div>
      {showInput ? (
        reviewInput
      ) : (
        <div className='text-center'>
          <p>"Aun tenemos review para el producto"</p>
          <h1 className='text-3xl mt-5 '>Podrás escribir el primer review?</h1>
          <div className='flex justify-center my-16'>{starArray}</div>
        </div>
      )}
    </div>
  );
};

export default ReviewInput;
