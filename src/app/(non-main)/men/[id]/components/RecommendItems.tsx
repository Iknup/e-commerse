import BigPreview from '@/app/components/ItemPreview/BigPreview';
import { DUMMY_SHORTS } from '@/dummy_data/shorts';
import Image from 'next/image';

const RecommendItems = () => {
  // const [imgSize, setImgSize] = useState({ w: 0, h: 0 });
  // const [padding, setPadding] = useState(10);
  // const [yGap, setYGap] = useState(0);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const screenWidth = window.innerWidth;
  //     const desirePadding = screenWidth * 0.03;

  //     let desireWidth: number;
  //     if (screenWidth >= 768) {
  //       desireWidth = 1280 / 4 - screenWidth / 4 / 8;
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

  // return (
  //   <div
  //     className={`grid grid-cols-2 md:grid-cols-4 w-full`}
  //     style={{ paddingLeft: padding, paddingRight: padding, rowGap: yGap }}
  //   >
  //     {content}
  //   </div>
  // );

  const recommendItem = DUMMY_SHORTS.map((item, i) => {
    if (i >= 6) {
      return null;
    } else {
      return (
        <div key={item.id}>
          <BigPreview
            name={item.name}
            id={item.id}
            price={item.price}
            image={item.images[0]}
          />
        </div>
        // <div>
        //   <Image
        //     src={item.images[0]}
        //     alt={item.name}
        //     width={800}
        //     height={800}
        //   />
        //   <div className='absolute'>
        //     <p className='underline'>{item.name}</p>
        //     <p>{item.price}</p>
        //   </div>
        // </div>
      );
    }
  });

  return (
    <>
      <h1 className='text-center text-2xl font-bold'>Tal vez te gusta</h1>
      <div className='mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2'>
        {recommendItem}
      </div>
    </>
  );
};

export default RecommendItems;
