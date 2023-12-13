'use client';

import { motion } from 'framer-motion';

type Props = {
  percentage: number;
  rate: string;
  timesRated: number;
};

const ReviewPercentageBar = ({ percentage, rate, timesRated }: Props) => {
  const backgroundBar = 'relative w-full bg-[#f7f7f7] h-4 rounded-r-lg group';
  const percentageBar = `absolute left-0 top-0 h-full rounded-r-lg bg-[#e5e5e5]`;
  const ratingText =
    'absolute -top-[2px] w-[100%] font-bold text-center text-sm scale-0 transition ease-in-out duration-300 transform group-hover:scale-100';

  return (
    <div key={rate} className={backgroundBar}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        className={percentageBar}
        style={{ width: percentage + '%', originX: 0 }}
      />
      <p className={ratingText}>
        {rate}:{timesRated}
      </p>
    </div>
  );
};

export default ReviewPercentageBar;
