import Image from 'next/image';

type Props = {
  name: string;
  image: string;
  price: number;
  id: string;
  imgSize: { w: number; h: number };
};

const PreviewBox = ({ name, image, price, imgSize }: Props) => {
  return (
    <div>
      <div
        className={`relative mx-auto`}
        style={{ width: imgSize.w, height: imgSize.h }}
      >
        <Image src={image} alt={name} fill loading='lazy' />
      </div>
    </div>
  );
};

export default PreviewBox;
