import React from 'react';

const Footer = () => {
  return (
    <div className="bg-teal-800 text-white py-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} Areeba Awan. All Rights Reserved.
        </p>
        <p className="text-sm mb-2">Thank you for visiting my site!</p>
   
      </div>
    </div>
  );
};

export default Footer;