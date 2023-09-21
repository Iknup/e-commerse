'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type ImgType = {
  imgSrc: string;
  imgAlt: string;
  ratio: { sm: number; md: number };
  className: string | undefined;
};

const ResponsiveImg = ({ imgSrc, imgAlt, ratio, className }: ImgType) => {
  const [imgHeight, setImgHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const isMediaSmall = screenWidth <= 768;
      const desireHeight = screenWidth / (isMediaSmall ? ratio.sm : ratio.md);

      setImgHeight(desireHeight);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`w-screen relative`} style={{ height: imgHeight }}>
      <Image
        src={imgSrc}
        alt={imgAlt}
        fill
        loading='lazy'
        className={className}
      />
    </div>
  );
};

export default ResponsiveImg;
