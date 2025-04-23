import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header.jsx';
import Hero from './Components/Hero.jsx';
import CategoriesSection from './Components/CategoriesSection.jsx';
import FeaturedSection from './Components/FeaturedSection.jsx';
import NewsletterSection from './Components/NewsletterSection.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CategoriesSection />
        <FeaturedSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;