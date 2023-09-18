'use client';

import { useState } from 'react';

const SizeBox = ({ size }: { size: string }) => {
  const [isClicked, setIsClicked] = useState(false);
  const boxStyle =
    'w-14 text-center h-7 border-[1px] m-[3px] border-black' +
    (isClicked ? 'scale-1.2 shadow-color-box border-black' : '');

  return (
    <button
      onClick={() => {
        setIsClicked(!isClicked);
      }}
      className={boxStyle}
      key={size}
    >
      {size.toUpperCase()}
    </button>
  );
};

export default SizeBox;
