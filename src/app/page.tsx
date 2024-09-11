import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RemoveBg from './components/RemoveBg';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <RemoveBg />
      <Footer />
    </main>
  );
}
