'use client';

import { motion } from 'framer-motion';

type Props = {
  width: number;
};

const FilterOverline = ({ width }: Props) => {
  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.svg
      height='16'
      width={width}
      viewBox={`0 0 ${width} 16`}
      initial='hidden'
      animate='visible'
    >
      <motion.line
        x1={0}
        y1={8}
        x2={width}
        y2={8}
        stroke={'#111111'}
        strokeWidth={2}
        variants={pathVariants}
      />
    </motion.svg>
  );
};

export default FilterOverline;
