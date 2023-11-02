import Image from 'next/image';

type Props = {
  name: string;
  id: string;
  price: number;
  image: string;
};

const BigPreview = ({ name, id, price, image }: Props) => {
  return (
    <div>
      <Image src={image} width={800} height={1200} alt={name} />
      <div></div>
    </div>
  );
};

export default BigPreview;
