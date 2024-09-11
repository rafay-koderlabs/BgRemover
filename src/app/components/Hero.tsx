import React from 'react';
import Image from 'next/image';
import heroImage from '@/assets/heroimg.jpg';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Image
        src={heroImage}
        alt="AI Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <h2 className="text-4xl font-bold mb-4">Welcome to the Future of Image Editing</h2>
          <p className="max-w-2xl mx-auto">
            Our background removal tool is not just another editor—it&apos;s a full-stack solution developed from start to finish by artificial intelligence. With a frontend built on Next.js and a powerful backend API powered by FastAPI, this project represents the next wave of automation in software development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;