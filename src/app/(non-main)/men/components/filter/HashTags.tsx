'use client';

import { Dispatch, useEffect, useState } from 'react';
import HashTagItem from './HashTagItem';

const hashtagLists = ['NEW', 'BESTSELLER', 'DISCOUNT', '30%', '50%', '70%'];

const HashTags = ({
  setHtag,
  activeHtags,
}: {
  setHtag: Dispatch<React.SetStateAction<string[]>>;
  activeHtags: string[];
}) => {
  const onHtagClick = (htag: string) => {
    const isActive = activeHtags.includes(htag);
    let newActiveHtags = activeHtags;
    if (isActive) {
      newActiveHtags = newActiveHtags.filter((activeTag) => {
        return activeTag !== htag;
      });
    } else {
      newActiveHtags.push(htag);
    }
    console.log(newActiveHtags);
    setHtag(newActiveHtags);
  };

  const hashTags = hashtagLists.map((hashtag, i) => {
    return <HashTagItem key={i} hashTag={hashtag} setActiveTag={onHtagClick} />;
  });
  return <div className='flex flex-wrap gap-x-2'>{hashTags}</div>;
};

export default HashTags;
