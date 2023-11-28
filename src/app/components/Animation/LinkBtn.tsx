'use client';

import useChangeStringOrder from '@/utils/hooks/useChangeStringOrder';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {
  name: string;
  url?: string;
  className?: string;
};

const LinkBtn = ({ name, url, className }: Props) => {
  const [text, setText] = useState(name);
  const router = useRouter();

  const textChange = (text: string) => {
    setText(text);
  };

  // const generateRandomString = (length: number) => {
  //   let text = '';
  //   const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ%$&#!';

  //   for (let i = 0; i < length; i++) {
  //     text += possibleChars.charAt(
  //       Math.floor(Math.random() * possibleChars.length)
  //     );
  //   }
  //   return text;
  // };

  // const stringOrderChange = () => {
  //   const intervals: any[] = [];
  //   for (let i = 0; i < 3; i++) {
  //     intervals.push(
  //       setTimeout(
  //         () => setText(() => generateRandomString(name.length)),
  //         100 * i
  //       )
  //     );
  //   }

  //   setTimeout(() => {
  //     intervals.forEach((interval) => clearInterval(interval));
  //     setText(name);
  //   }, 100 * 3);
  // };

  const onMouseEnter = () => {
    useChangeStringOrder(name, textChange);
  };

  const onClick = () => {
    useChangeStringOrder(name, textChange);
    if (url) {
      setTimeout(() => {
        router.push(url);
      }, 400);
    }
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={className ? className : ''}
    >
      {text}
    </button>
  );
};

export default LinkBtn;
