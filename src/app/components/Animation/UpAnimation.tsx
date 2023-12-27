'use client';

import useMediaQuery from '@/utils/hooks/useMediaQuery';
import { animate, motion } from 'framer-motion';
import { useEffect } from 'react';

const UpAnimation = ({ children }: { children: React.ReactNode }) => {
  const isLargeScreen = useMediaQuery('(min-width:640px)');

  const animationsProps = isLargeScreen
    ? {
        initial: { opacity: 0 },
        animate: { opacity: [10, 50, 100], y: [-30, -20, 0] },
        transition: { duration: 0.5 },
      }
    : {
        initial: { y: '100%' },
        animate: { y: '0%' },
        transition: { duration: 1 },
      };

  return <motion.div {...animationsProps}>{children}</motion.div>;
};

export default UpAnimation;
