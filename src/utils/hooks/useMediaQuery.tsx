import { useEffect, useState } from 'react';

export default function useMediaQuery(query: string) {
  // const [matches, setMatches] = useState<boolean>(false);

  // useEffect(() => {
  //   setMatches(window.innerWidth > 640);
  // }, [matches, query]);

  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = () => {
      setMatches(media.matches);
    };

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', listener);
    } else {
      media.addListener(listener);
    }

    return () => {
      if (typeof media.removeEventListener === 'function') {
        media.removeEventListener('change', listener);
      } else {
        media.removeListener(listener);
      }
    };
  }, [query]);

  return matches;
}
