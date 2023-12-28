'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FilterOption from './FilterOption';
import UpAnimation from '@/app/components/Animation/UpAnimation';
import { AnimatePresence } from 'framer-motion';
import FilterOverline from './FilterOverline';
import Category from './Category';

type Props = {
  categories: string[];
};

const FilterList = ({ categories }: Props) => {
  const [filterState, setFilterState] = useState<number | null>(null);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const router = useRouter();

  const filters = categories.map((category, i) => {
    return (
      <Category
        isActive={filterState === i}
        key={i}
        category={category}
        onClick={() => {
          setFilterState(i);
          router.push(`?category=${category}`);
        }}
      />
    );
  });

  return (
    <div className='flex justify-between relative items-center'>
      <div className='flex space-x-2  gap-x-4 sm:gap-x-20 no-scrollbar overflow-auto mt-3 mb-8'>
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
      <AnimatePresence>
        {showFilter && (
          <div
            className='z-50 fixed right-1/2 translate-x-1/2 bottom-0 sm:absolute 
        sm:top-12 sm:right-0 sm:translate-x-0'
          >
            <UpAnimation>
              <FilterOption
                turnOff={() => {
                  setShowFilter(false);
                }}
              />
            </UpAnimation>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterList;
