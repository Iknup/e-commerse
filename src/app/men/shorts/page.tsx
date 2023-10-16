import Image from 'next/image';

const Page = () => {
  return (
    <div>
      {/* <img src='/main-man01.jpg' alt='01' /> */}
      <Image
        src={'/main-man01.jpg'}
        alt='01'
        width={560}
        height={746}
      />
      <p>강경훈이 대충 뛰어다니는 글</p>
    </div>
  );
};

export default Page;
