'use client';

import { DUMMY_SHORTS } from '@/dummy_data/shorts';
import PreviewBox from './PreviewBox';
import { useEffect, useState } from 'react';
import BigPreview from './ItemPreview/BigPreview';

const NewCollection = () => {
  const previews = DUMMY_SHORTS.map((short, i) => {
    if (i >= 4) {
      return null;
    }
    return (
      <BigPreview
        name={short.name}
        key={short.id}
        price={short.price}
        id={short.id}
        image={short.images[0]}
      />
    );
  });

  return (
    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-5 px-3'>
      {previews}
    </div>

    // <div
    //   className={`grid grid-cols-2 md:grid-cols-4 w-full`}
    //   style={{ paddingLeft: padding, paddingRight: padding, rowGap: yGap }}
    // >
    //   {content}
    // </div>
  );
};

export default NewCollection;
