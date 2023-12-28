'use client';

import useMediaQuery from '@/utils/hooks/useMediaQuery';
import { motion } from 'framer-motion';

const UpAnimation = ({ children }: { children: React.ReactNode }) => {
  const isLargeScreen = useMediaQuery('(min-width:640px)');

  const animationsProps = isLargeScreen
    ? {
        variants: {
          initial: { opacity: 0, y: '-10%' },
          animate: { opacity: 1, y: '0%' },
          exit: { y: '-10%', opacity: 0 },
        },
        initial: 'initial',
        animate: 'animate',
        exit: 'exit',
        transition: { duration: 0.5 },
      }
    : {
        variants: {
          initial: { opacity: 0, y: '100%' },
          animate: { opacity: 1, y: '0%' },
          exit: { y: '100%' },
        },
        initial: 'initial',
        animate: 'animate',
        exit: 'exit',
        transition: { duration: 1 },
      };

  return (
    <motion.div key={JSON.stringify(animationsProps)} {...animationsProps}>
      {children}
    </motion.div>
  );
};

export default UpAnimation;
