import { useEffect, useState } from 'react';

export const isElementInViewport = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const useIsElementInViewport = (element: HTMLElement) => {
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    const checkIfInViewport = () => {
      setIsInView(isElementInViewport(element));
    };

    window.addEventListener('scroll', checkIfInViewport);

    return window.removeEventListener('scroll', checkIfInViewport);
  }, []);

  return isInView;
};