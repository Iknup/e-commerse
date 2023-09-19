'use client';

import { useEffect, useState } from 'react';
import ResponsiveImg from './ResponsiveImg';

type SliderType = {
  src: string[];
  alt: string;
  ratio: { sm: number; md: number };
  className: string | undefined;
};

const MainSlider = ({ src, alt, ratio, className }: SliderType) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const index = prevIndex === src.length - 1 ? 0 : prevIndex + 1;
        return index;
      });
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const style = 'image-transition';

  return (
    <ResponsiveImg
      imgSrc={src[currentImageIndex]}
      imgAlt={alt + `Slide ${currentImageIndex + 1}`}
      ratio={{ sm: ratio.sm, md: ratio.md }}
      className={style}
    />
  );
};

export default MainSlider;
