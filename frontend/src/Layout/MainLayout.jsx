import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
