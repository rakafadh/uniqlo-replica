import { useState } from 'react';

const Hero = () => {
    return (
      <section className="relative h-screen">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">UNIQLO UT</h1>
          <p className="text-xl md:text-2xl mb-8">Express Yourself Through Fashion</p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-sm transition">
            SHOP NOW
          </button>
        </div>
      </section>
    );
  };
export default Hero;