'use client';

import { useRef, useEffect, useState } from 'react';
import FilterOverline from './FilterOverline';

type Props = {
  onClick: () => void;
  category: string;
  isActive: boolean;
};

const Category = ({ onClick, category, isActive }: Props) => {
  const buttonStyle = 'text-xl sm:text-2xl font-semibold whitespace-nowrap';
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(containerRef.current!.offsetWidth);
  }, []);

  return (
    <div ref={containerRef} className='w-full relative pt-2 text-black'>
      {isActive && (
        <div className='absolute top-0'>
          <FilterOverline width={width} />
        </div>
      )}
      <button className={buttonStyle} onClick={onClick}>
        {category}
      </button>
    </div>
  );
};

export default Category;
