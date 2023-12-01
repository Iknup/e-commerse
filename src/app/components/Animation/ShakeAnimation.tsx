import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

const ShakeAnimation = ({ children }: PropsWithChildren) => {
  return (
    <motion.div animate={{ translateX: [20, -20, 10, -10, 0] }}>
      {children}
    </motion.div>
  );
};

export default ShakeAnimation;
