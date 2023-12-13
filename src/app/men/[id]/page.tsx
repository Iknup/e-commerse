import Image from 'next/image';

import MobileDetail from './components/MobileDetail';
import RecommendItem from './components/RecommendItems';
import { DUMMY_SHORTS } from '@/dummy_data/shorts';
import ProductDetail from '@/app/components/ProductDetail';
import Review from './components/detail/Review';

const getProductDetail = (id: string) => {
  const product = DUMMY_SHORTS.find((short) => short.id === id);

  return product;
};

const Page = ({ params }: { params: { id: string } }) => {
  const productData = getProductDetail(params.id);

  return (
    <main className='max-w-7xl mx-auto px-4'>
      <div className='mt-5 sm:flex sm:justify-center'>
        <div className='sm:w-[60%] mb-3'>
          <Image
            src={productData!.images[0]}
            width={900}
            height={1200}
            alt='00123DE'
          />
        </div>
        <div className='sm:px-8 sm:w-1/3 h-full sm:sticky top-10'>
          <ProductDetail
            id={productData!.id}
            image={productData!.images[0]}
            size={productData!.size}
            detail={productData!.detail}
            name={productData!.name}
            price={productData!.price}
            color={productData!.color}
          />
        </div>
      </div>
      <div className='border-t-2 mt-10'>
        {productData?.review && (
          <Review reviews={productData?.review} prodId={params.id} />
        )}
      </div>
      <div className='w-full mt-10'>
        <RecommendItem />
      </div>
    </main>
  );
};

export default Page;
