'use client';

import { DUMMY_SHORTS } from '@/dummy_data/shorts';
import PreviewBox from './PreviewBox';
import { useEffect, useState } from 'react';
import BigPreview from './ItemPreview/BigPreview';

const NewCollection = () => {
  const [imgSize, setImgSize] = useState({ w: 0, h: 0 });
  const [padding, setPadding] = useState(10);
  const [yGap, setYGap] = useState(0);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const screenWidth = window.innerWidth;
  //     const desirePadding = screenWidth * 0.03;

  //     let desireWidth: number;
  //     if (screenWidth >= 768) {
  //       desireWidth = screenWidth / 4 - screenWidth / 4 / 8;
  //     } else {
  //       desireWidth = screenWidth / 2 - screenWidth / 2 / 8;
  //       setYGap(screenWidth / 32);
  //     }

  //     const desireHeight = (desireWidth * 4) / 3;
  //     setImgSize({ w: desireWidth, h: desireHeight });
  //     setPadding(+desirePadding.toFixed(2));
  //   };

  //   handleResize();

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // const content = DUMMY_SHORTS.map((short, i) => {
  //   if (i >= 4) {
  //     return null;
  //   }
  //   return (
  //     <PreviewBox
  //       name={short.name}
  //       key={short.id}
  //       price={short.price}
  //       image={short.images[0]}
  //       id={short.id}
  //       imgSize={{ w: imgSize.w, h: imgSize.h }}
  //     />
  //   );
  // });

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
