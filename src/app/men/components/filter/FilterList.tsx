'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FilterOption from './FilterOption';

type Props = {
  categories: string[];
};

const FilterList = ({ categories }: Props) => {
  const [filterState, setFilterState] = useState<number | null>(null);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const router = useRouter();

  const filters = categories.map((category, i) => {
    let buttonStyle = 'w-1/3 text-2xl font-semibold whitespace-nowrap';
    if (filterState === i) {
      buttonStyle = buttonStyle + ' overline';
    }

    return (
      <button
        key={i}
        className={buttonStyle}
        onClick={() => {
          setFilterState(i);
          router.push(`?category=${category}`);
        }}
      >
        {category}
      </button>
    );
  });

  return (
    <div className='flex justify-between relative'>
      <div className='hidden sm:flex space-x-2 gap-x-20 overflow-auto mt-5 mb-8'>
        {filters}
      </div>
      <button
        onClick={() => {
          setShowFilter((current) => !current);
        }}
        className='ml-auto p-2 mt-5 mb-8 rounded-md font-semibold'
      >
        Filtro
      </button>
      {showFilter && (
        <div className='z-50 fixed bottom-0 sm:absolute sm:top-12 sm:right-0'>
          <FilterOption
            turnOff={() => {
              setShowFilter(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default FilterList;
