import { useState } from 'react';
import women from '../assets/women.jpg';
import men from "../assets/men.jpg";
import kids from "../assets/kids.jpg";
import baby from "../assets/baby.jpg";

const CategoriesSection = () => {
    const categories = [
      { name: "Women", image: women },
      { name: "Men", image: men  },
      { name: "Kids", image: kids  },
      { name: "Baby", image: baby },
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Shop By Category</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {categories.map((category, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-64 md:h-96 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-opacity group-hover:bg-opacity-50">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default CategoriesSection;