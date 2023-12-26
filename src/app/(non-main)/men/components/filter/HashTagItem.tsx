'use client';

import { useState } from 'react';

type Props = {
  hashTag: string;
  setActiveTag: (hashTag: string) => void;
};

const HashTagItem = ({ hashTag, setActiveTag }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const onClick = () => {
    setIsActive((current) => !current);
    setActiveTag(hashTag);
  };

  return (
    <button
      onClick={onClick}
      className={`font-semibold ${isActive ? 'text-black' : 'text-[#bfbfbf]'}`}
    >
      #{hashTag}
    </button>
  );
};

export default HashTagItem;
