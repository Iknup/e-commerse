'use client';

import { PropsWithChildren, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }: PropsWithChildren) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? createPortal(<>{children}</>, document.body) : null;
};

export default Modal;
