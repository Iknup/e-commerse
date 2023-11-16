import { useState, useMemo, useEffect } from 'react';

export const useIsInViewport = (ref: any) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        console.log(entry);
        setIsIntersecting(entry.isIntersecting);
      }),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  console.log(observer);

  return isIntersecting;
};
