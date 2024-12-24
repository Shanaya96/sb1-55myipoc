import React from 'react';
import { BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-300" />
            <span className="ml-2 text-xl font-bold">Evergreen College</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:bg-blue-800 px-3 py-2 rounded-md">Home</a>
              <a href="#programs" className="hover:bg-blue-800 px-3 py-2 rounded-md">Programs</a>
              <a href="#campus" className="hover:bg-blue-800 px-3 py-2 rounded-md">Campus Life</a>
              <a href="#admissions" className="hover:bg-blue-800 px-3 py-2 rounded-md">Admissions</a>
              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">Apply Now</button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block hover:bg-blue-800 px-3 py-2 rounded-md">Home</a>
            <a href="#programs" className="block hover:bg-blue-800 px-3 py-2 rounded-md">Programs</a>
            <a href="#campus" className="block hover:bg-blue-800 px-3 py-2 rounded-md">Campus Life</a>
            <a href="#admissions" className="block hover:bg-blue-800 px-3 py-2 rounded-md">Admissions</a>
            <button className="w-full text-left bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">Apply Now</button>
          </div>
        </div>
      )}
    </nav>
  );
}