import { useState } from 'react';

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Help</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-red-300 transition">FAQ</a></li>
                <li><a href="#" className="hover:text-red-300 transition">Returns & Exchanges</a></li>
                <li><a href="#" className="hover:text-red-300 transition">Shipping Information</a></li>
                <li><a href="#" className="hover:text-red-300 transition">Order Status</a></li>
                <li><a href="#" className="hover:text-red-300 transition">Size Guide</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">About Uniqlo</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-red-300 transition">Our Story</a></li>
                <li><a href="#" className="hover:text-red-300 transition">LifeWear Philosophy</a></li>
                <li><a href="#" className="hover:text-red-300 transition">Sustainability</a></li>
                <li><a href="#" className="hover:text-red-300 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Store Locations</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-red-300 transition">Store Finder</a></li>
                <li><a href="#" className="hover:text-red-300 transition">Store Hours</a></li>
                <li><a href="#" className="hover:text-red-300 transition">Events</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect (bisa diklik hehe)</h3>
              <ul className="space-y-2">
                <li><a href="https://www.instagram.com/rakaafadh/" className="hover:text-red-300 transition">Instagram</a></li>
                <li><a href="https://www.uniqlo.com/id/id/special-feature/ut" className="hover:text-red-300 transition">Reference</a></li>
                <li><a href="https://open.spotify.com/user/oyc6gi3rptwkmw1rfwxa1q56u?si=3680793be950454e" className="hover:text-red-300 transition">Spotify</a></li>
                <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" className="hover:text-red-300 transition">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 ulil geming Co., Ltd. gaada rights apa-apa cuma tugas.</p>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;