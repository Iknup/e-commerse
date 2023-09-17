const Size = ({ sizes }: { sizes: string[] }) => {
  const sizeBoxes = sizes.map((size, i) => {
    let className = 'w-14 text-center border-[1px] border-black';
    // if (i === 0) {
    //   className = 'w-14 text-center border-[1px] border-black mr-2';
    // } else if (i === sizes.length - 1) {
    //   className = 'w-14 text-center border-[1px] border-black ml-2';
    // }
    return (
      <button className={className} key={size}>
        {size.toUpperCase()}
      </button>
    );
  });
  return (
    <div className='flex flex-wrap mt-2 space-x-2 space-y-1'>{sizeBoxes}</div>
  );
};

export default Size;
