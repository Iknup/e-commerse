import Image from 'next/image';
import ColorBox from './components/ColorBox';
import MobileDetail from './components/MobileDetail';
import ItemGrid from '@/app/components/ItemGrid';
import RecommendItem from './components/RecommendItem';

const ITEM_DATA: {
  name: string;
  description: string;
  detail: string;
  price: number;
  color: string[];
  reviews: [{ id: string; rating: number; review: string }];
  size: string[];
} = {
  name: 'lorem blue short pants',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non.',
  price: 19.95,
  color: [
    '#F20813',
    '#0508CF',
    '#05C9CF',
    '#05CF30',
    '#FF10C9',
    '#DAF7A6',
    '#FF5733',
    '#663300',
    '#FFFFFF',
    '#000000',
    '#aed184',
    '#669976',
  ],
  reviews: [
    {
      id: '01',
      rating: 5,
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius, lectus imperdiet finibus placerat, arcu velit convallis ipsum, vel vehicula urna elit sed nisl. Curabitur ac placerat arcu. Maecenas turpis tortor, pharetra vitae ultrices sit amet, scelerisque sed urna. Aliquam sit amet sapien auctor, euismod orci eu, efficitur ante. Aliquam ac aliquam nulla. Aenean a consectetur augue. Integer aliquet risus id neque ullamcorper cursus. Sed lacus orci, accumsan at finibus ut, dignissim eget diam. Praesent vitae sollicitudin dolor, sed sodales risus. Phasellus lobortis est tempus ex vestibulum pulvinar.',
    },
  ],
  size: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
  detail:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur rem id rerum cumque, labore, reiciendis at aliquam totam consequuntur nostrum itaque magni dignissimos ad mollitia officiis praesentium quidem molestiae voluptatum!',
};

const Page = () => {
  const colorBoxes: JSX.Element[] = ITEM_DATA.color.map((color) => {
    return <ColorBox key={color} color={color} />;
  });

  const sizeBoxes = ITEM_DATA.size.map((size) => {
    return (
      <button className='border-2 border-black'>{size.toUpperCase()}</button>
    );
  });

  return (
    <main className='max-w-7xl mx-auto px-4'>
      <div className=' mt-5 sm:flex'>
        <div className=' mb-3'>
          <Image src='/01.jpg' width={500} height={500} alt='00123DE' />
        </div>
        <div className='sm:px-8'>
          <h1 className='font-bold text-xl mb-1 sm:text-2xl sm:h-16'>
            {ITEM_DATA.name}
          </h1>
          <p className='w-2/3 mb-5 text-sm sm:h-32'>{ITEM_DATA.description}</p>
          <p className='font-bold text-xl sm:text-2xl mb-5'>
            {ITEM_DATA.price}$
          </p>
          <div className='color-boxes-container'>{colorBoxes}</div>
          <div className='grid grid-cols-4 gap-2'>{sizeBoxes}</div>
          <button
            className='w-full h-14 bg-black rounded-lg mt-4 text-white 
      text-center font-semibold text-xl mb-4'
          >
            Add to Cart
          </button>
        </div>
        <MobileDetail sizes={ITEM_DATA.size} />
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
              5/5
            </div>
          </div>
          <p className='pl-3'>
            Total Review:1 <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            praesentium quas repellendus facilis recusandae illo nihil
            consectetur rem magni. Repellendus magnam pariatur necessitatibus
            reprehenderit! Voluptates reiciendis labore dignissimos? Ex, maxime.
          </p>
        </div>
        <div className='mb-10'>
          {ITEM_DATA.reviews.map((review) => {
            return (
              <div key={review.id} className='flex px-2'>
                <p className='mr-3'>{review.rating}/5</p>
                <p>{review.review}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='w-full'>
        <RecommendItem />
      </div>
    </main>
  );
};

export default Page;
