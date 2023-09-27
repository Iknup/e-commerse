import Image from 'next/image';

const Page = () => {
  return (
    <div>
      {/* <img src='/01.jpg' alt='01' /> */}
      <Image src={'/01.jpg'} alt='01' width={560} height={746} />
      
    </div>
  );
};

export default Page;
