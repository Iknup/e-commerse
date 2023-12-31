import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
