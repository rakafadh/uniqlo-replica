import { useState } from 'react';
import Logo from '../assets/Logo.png';

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center ">
        {/* Logo */}
        <div className="h-12 w-28">
          <img src={Logo} alt="Uniqlo Logo" className="h-full object-contain" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="font-medium text-gray-800 hover:text-red-500 transition">Women</a>
          <a href="#" className="font-medium text-gray-800 hover:text-red-500 transition">Men</a>
          <a href="#" className="font-medium text-gray-800 hover:text-red-500 transition">Kids</a>
          <a href="#" className="font-medium text-gray-800 hover:text-red-500 transition">Baby</a>
          <a href="#" className="font-medium text-gray-800 hover:text-red-500 transition">UT</a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden bg-gray-800 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden">
            <div className="flex flex-col p-4 space-y-3">
              <a href="#" className="font-medium text-gray-800 hover:text-red-500 transition">Women</a>
              <a href="#" className="font-medium text-gray-800 hover:text-red-500 transition">Men</a>
              <a href="#" className="font-medium text-gray-800 hover:text-red-500 transition">Kids</a>
              <a href="#" className="font-medium text-gray-800 hover:text-red-500 transition">Baby</a>
              <a href="#" className="font-medium text-gray-800 hover:text-red-500 transition">UT</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;