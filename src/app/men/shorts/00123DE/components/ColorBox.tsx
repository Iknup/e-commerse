'use client';
import { useState } from 'react';

const ColorBox = ({ color }: { color: string }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const buttonStyle =
    'border-[1px] border-[#d8d8d8] min-w-[32px] h-8 mr-3 ' +
    (isChecked ? 'shadow-color-box' : '');
  return (
    <button
      onClick={() => {
        setIsChecked(!isChecked);
      }}
      className={buttonStyle}
      style={{ backgroundColor: color }}
    ></button>
  );
};

export default ColorBox;
