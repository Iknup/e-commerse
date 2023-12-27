import React from 'react';

function TraingleArrow({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0'
      y='0'
      version='1.1'
      viewBox='0 0 24 24'
      xmlSpace='preserve'
      className={`w-3 h-3 ${className}`}
    >
      <path fill='#CCC' d='M24 22.393L12.002 1.607 0 22.393z'></path>
    </svg>
  );
}

export default TraingleArrow;
