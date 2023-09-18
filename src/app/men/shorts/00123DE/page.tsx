import Image from 'next/image';
import ColorBox from './components/ColorBox';
import MobileDetail from './components/MobileDetail';

const ITEM_DATA: {
  name: string;
  description: string;
  detail: string;
  price: number;
  color: string[];
  review: [{}];
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
  review: [
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

  return (
    <main className='mx-3'>
      <div className='mt-5 mb-3'>
        <Image src='/01.jpg' width={500} height={500} alt='00123DE' />
      </div>
      <div className=''>
        <h1 className='font-bold text-xl mb-1'>{ITEM_DATA.name}</h1>
        <p className='w-2/3 mb-5 text-sm'>{ITEM_DATA.description}</p>
        <p className='font-bold text-xl mb-5'>{ITEM_DATA.price}$</p>
        <div className='color-boxes-container'>{colorBoxes}</div>
      </div>
      <button
        className='w-full h-14 bg-black rounded-lg mt-4 text-white 
      text-center font-semibold text-xl mb-4'
      >
        Add to Cart
      </button>
      <MobileDetail sizes={ITEM_DATA.size} />
    </main>
  );
};

export default Page;
