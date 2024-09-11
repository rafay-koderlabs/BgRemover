import React from 'react';
import Navbar from '../src/app/components/Navbar';
import Hero from '../src/app/components/Hero';
import RemoveBg from '../src/app/components/RemoveBg';
import Footer from '../src/app/components/Footer';

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