import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleWidthSizeChange = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWidthSizeChange);

    return window.removeEventListener('resize', handleWidthSizeChange);
  }, []);

  const isMobile = width < 640;

  return isMobile;
};

export default useIsMobile;
