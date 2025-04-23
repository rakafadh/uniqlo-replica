import { useState } from 'react';

const NewsletterSection = () => {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl text-gray-600 md:text-4xl font-bold mb-4">Stay Updated.</h2>
            <p className="text-lg text-gray-600 mb-8">Subscribe to our newsletter for updates on new collections, collaborations, and exclusive offers.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <button 
                type="submit" 
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-sm transition"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };

export default NewsletterSection;
  