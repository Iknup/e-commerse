import Image from 'next/image';
import ColorBox from './components/ColorBox';
import MobileDetail from './components/MobileDetail';
import RecommendItem from './components/RecommendItem';
import { DUMMY_SHORTS } from '@/dummy_data/shorts';
import AddToCart from '@/app/components/AddToCart';

const getProductDetail = (id: string) => {
  const product = DUMMY_SHORTS.find((short) => short.id === id);

  return product;
};

const Page = ({ params }: { params: { id: string } }) => {
  const productData = getProductDetail(params.id);

  const colorBoxes: JSX.Element[] = productData!.color.map((color) => {
    return <ColorBox key={color} color={color} />;
  });

  const sizeBoxes = productData!.size.map((size) => {
    return (
      <button key={size} className='border-2 border-black'>
        {size.toUpperCase()}
      </button>
    );
  });

  return (
    <main className='max-w-7xl mx-auto px-4'>
      <div className='mt-5 sm:flex sm:justify-center'>
        <div className='w-[60%] mb-3'>
          <Image
            src={productData!.images[0]}
            width={900}
            height={1200}
            alt='00123DE'
          />
        </div>
        <div className='sm:px-8 w-1/3 h-full'>
          <h1 className='font-bold text-xl mb-1 sm:text-2xl sm:h-16'>
            {productData!.name}
          </h1>
          <p className='w-full mb-5 text-sm sm:h-32 overflow-hidden'>
            {productData!.description}
          </p>
          <p className='font-bold text-xl sm:text-2xl mb-5'>
            {productData!.price}$
          </p>
          <div className='color-boxes-container'>{colorBoxes}</div>
          <div className='grid grid-cols-4 gap-2'>{sizeBoxes}</div>
          <AddToCart
            id={productData!.id}
            image={productData!.images[0]}
            size={productData!.size}
            name={productData!.name}
            price={productData!.price}
            color={productData!.color}
          />
        </div>
        <MobileDetail sizes={productData!.size} />
      </div>
      <div className=''>
        <div className='sm:flex border-b-2 pb-3'>
          <button className='w-1/3 text-2xl font-semibold overline'>
            REVIEW
          </button>
          <button className='w-2/3 text-center text-2xl font-semibold'>
            DESCRIPCIÓN
          </button>
        </div>
        <div className='flex items-center'>
          <div className='sm:flex text-3xl'>
            <div className='w-40 h-32 pl-8 flex items-center border-r-2'>
              {productData!.review
                ? (
                    productData!.review.reduce(
                      (acc, review) => acc + review.rating,
                      0
                    ) / productData!.review.length
                  ).toFixed(1) + '/5'
                : '0/0'}
            </div>
          </div>
          <p className='pl-3'>
            Total Review:{productData!.review?.length} <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            praesentium quas repellendus facilis recusandae illo nihil
            consectetur rem magni. Repellendus magnam pariatur necessitatibus
            reprehenderit! Voluptates reiciendis labore dignissimos? Ex, maxime.
          </p>
        </div>
        <div className='mb-10'>
          {productData!.review
            ? productData!.review.map((review) => {
                return (
                  <div key={review.id} className='flex px-2'>
                    <p className='mr-3'>{review.rating}/5</p>
                    <div>
                      <p className='font-bold '>{review.user}</p>
                      <p>{review.review}</p>
                    </div>
                  </div>
                );
              })
            : 'No hay review'}
        </div>
      </div>
      <div className='w-full'>
        <RecommendItem />
      </div>
    </main>
  );
};

export default Page;
