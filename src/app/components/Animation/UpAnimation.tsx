'use client';

import useMediaQuery from '@/utils/hooks/useMediaQuery';
import { motion } from 'framer-motion';

const UpAnimation = ({ children }: { children: React.ReactNode }) => {
  const isLargeScreen = useMediaQuery('(min-width:640px)');

  const animationsProps = isLargeScreen
    ? {
        initial: { opacity: 0, y: '-10%' },
        animate: { opacity: 1, y: '0%' },
        transition: { duration: 0.5 },
        exit: { y: '-10%', opacity: 0 },
      }
    : {
        initial: { opacity: 0, y: '100%' },
        animate: { opacity: 1, y: '0%' },
        transition: { duration: 1 },
        exit: { y: '100%' },
      };

  return <motion.div {...animationsProps}>{children}</motion.div>;
};

export default UpAnimation;
