'use client';

import { useState, Dispatch } from 'react';
import PriceRange from './PriceRange';
import SizeBox from '../../[id]/components/detail/SizeBox';
import HashTags from './HashTags';

const orderOptions = [
  'Precio ascendente',
  'Precio descendente',
  'Nuevo',
  'Antiguo',
];

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const FilterOption = ({ turnOff }: { turnOff: () => void }) => {
  const [selectedOrder, setSelectedOrder] = useState(0);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });
  const [activeHtags, setActiveHtags] = useState<string[]>([]);

  const h1 = 'font-bold text-xl';
  const sectionStyle = 'border-b-2 border-b-color-greyish pb-5 mb-2';
  const buttonStyle =
    'bg-black rounded-lg text-white text-center font-semibold py-1 px-3 w-[40%]';

  const orderButtons = orderOptions.map((order, i) => {
    const buttonStyle = `w-4 h-4 rounded-full border-[1px] border-black ${
      selectedOrder === i ? 'bg-black' : ''
    }`;

    return (
      <button
        onClick={() => {
          setSelectedOrder(i);
        }}
        className='flex w-full items-center justify-between pl-2 pr-1'
      >
        <p>{order}</p>
        <div className={buttonStyle}></div>
      </button>
    );
  });

  const onClickApply = () => {
    console.log(selectedOrder);
    console.log(priceRange);
    console.log(activeHtags);
  };

  return (
    <div>
      <div
        className='w-0 h-0 ml-auto mr-5
  border-l-[10px] border-l-transparent
  border-b-[15px] border-b-white
  border-r-[10px] border-r-transparent'
      ></div>
      <div
        className='max-w-full min-w-[300px] bg-white border-2 
      border-color-greyish px-4 py-2'
      >
        <div className='flex justify-between '>
          <h1 className='main-title '>FILTRO</h1>
          <button
            onClick={() => {
              turnOff();
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <div className={sectionStyle}>
          <h1 className={h1}>Ordenar por</h1>
          {orderButtons}
        </div>
        <div className={sectionStyle}>
          <h1 className={h1}>Price</h1>
          <PriceRange
            setRange={(obj: { min: number; max: number }) => {
              setPriceRange(obj);
            }}
          />
        </div>
        <div className={sectionStyle}>
          <h1 className={h1}>TALLA</h1>
          <div className='flex gap-x-2'>
            {sizes.map((size) => {
              return <SizeBox size={size} />;
            })}
          </div>
        </div>
        <div className={sectionStyle}>
          <h1 className={h1}>ETIQUETA</h1>
          <HashTags setHtag={setActiveHtags} activeHtags={activeHtags} />
        </div>
        <div className='flex justify-evenly mb-5 items-center'>
          <button onClick={onClickApply} className={buttonStyle}>
            APLICAR
          </button>
          <button className={buttonStyle}>RESETEAR</button>
        </div>
      </div>
    </div>
  );
};

export default FilterOption;
