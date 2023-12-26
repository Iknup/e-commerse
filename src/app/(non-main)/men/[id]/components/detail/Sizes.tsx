import SizeBox from './SizeBox';

const Sizes = ({ sizes }: { sizes: string[] }) => {
  const sizeBoxes = sizes.map((size, i) => {
    return <SizeBox key={i} size={size} />;
  });
  return <div className='flex items-center flex-wrap mt-2'>{sizeBoxes}</div>;
};

export default Sizes;
