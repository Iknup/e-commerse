'use client';

import changeStringOrder from '@/utils/hooks/changeStringOrder';
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

  const onMouseEnter = () => {
    changeStringOrder(name, textChange);
  };

  const onClick = () => {
    changeStringOrder(name, textChange);
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
