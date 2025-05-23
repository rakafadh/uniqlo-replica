import { useState } from 'react';
import oversized from '../assets/oversized.jpg';
import airism from '../assets/airism.jpg';
import heattech from '../assets/heattech.jpg';
import lifewear from '../assets/lifewear.jpg';

const FeaturedSection = () => {
    const collections = [
      { title: "Oversized Collection", image: oversized, color: "#ff1200" },
      { title: "AIRism Technology", image: airism, color: "#ff4133" },
      { title: "HEATTECH Series", image: heattech, color: "#ff7166" },
      { title: "LifeWear Essentials", image: lifewear, color: "#ffa099" },
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Collections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {collections.map((collection, index) => (
              <div key={index} className="bg-white shadow-lg rounded overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.title} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div 
                  className="p-4 text-center text-white font-medium" 
                  style={{ backgroundColor: collection.color }}
                >
                  <h3 className="text-xl">{collection.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default FeaturedSection;