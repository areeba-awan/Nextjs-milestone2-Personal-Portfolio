import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} Areeba Awan. All Rights Reserved.
        </p>
        <p className="text-sm mb-2">Thank you for visiting my site!</p>
        <p className="text-sm">Contact me at: <a href="awanareeba40@gmail.com" className="text-emerald-300 hover:text-blue-400">awanareeba40@gmail.com</a></p>
      </div>
    </div>
  );
};

export default Footer;