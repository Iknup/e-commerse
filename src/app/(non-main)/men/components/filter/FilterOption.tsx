'use client';

import { useState, Dispatch, ChangeEvent } from 'react';
import { Checkbox } from '@mui/material';
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

  const h1 = 'font-bold text-xl mb-3';
  const sectionStyle = 'border-b-2 border-b-[#d8d8d8] pb-5 mb-2';
  const buttonStyle =
    'bg-black rounded-[5px] text-white text-center font-semibold w-full h-[45px]';

  const orderButtons = orderOptions.map((order, i) => {
    const buttonStyle = `w-4 h-4 rounded-full border-[1px] border-black ${
      selectedOrder === i ? 'bg-black' : ''
    }`;

    const onChange = (
      event: ChangeEvent<HTMLInputElement>,
      checked: boolean
    ) => {
      setSelectedOrder(i);
    };

    return (
      <div
        key={i}
        className='flex w-full items-center justify-between pl-2 pr-1'
      >
        <p>{order}</p>
        <Checkbox
          sx={{
            '&.Mui-checked': {
              color: '#111111',
            },
          }}
          checked={selectedOrder === i}
          onChange={onChange}
        />
      </div>
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
        className='w-full sm:w-[400px] bg-white border-2 
      border-color-greyish p-[10px]'
      >
        <div className='flex justify-between mb-5'>
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
          <div className='flex flex-col gap-y-1'>{orderButtons}</div>
        </div>
        <div className={sectionStyle}>
          <h1 className={h1}>Precio</h1>
          <PriceRange
            setRange={(obj: { min: number; max: number }) => {
              setPriceRange(obj);
            }}
          />
        </div>
        <div className={sectionStyle}>
          <h1 className={h1}>TALLA</h1>
          <div className='flex gap-x-1'>
            {sizes.map((size) => {
              return <SizeBox key={size} size={size} />;
            })}
          </div>
        </div>
        <div className='pb-5 mb-2'>
          <h1 className={h1}>ETIQUETA</h1>
          <HashTags setHtag={setActiveHtags} activeHtags={activeHtags} />
        </div>
        <div className='flex justify-between items-center gap-x-[10px]'>
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
