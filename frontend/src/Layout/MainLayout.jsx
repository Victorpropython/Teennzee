import React from 'react';
import Navbar from './Navbar';
import Chatbot from '../components/Chatbot'; // Correct import path
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Chatbot /> {/* Chatbot will appear across all pages */}
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
