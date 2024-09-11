import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">About This Project</h3>
            <p className="text-sm max-w-2xl">
              This full-stack project was built entirely by AI using Next.js for the frontend and FastAPI for the backend. It&apos;s a demonstration of how artificial intelligence can create powerful, functional tools that deliver real-world value. Welcome to the future of tech innovation!
            </p>
          </div>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
        <p className="text-sm mt-4 text-center">&copy; 2023 Bg Removal AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;