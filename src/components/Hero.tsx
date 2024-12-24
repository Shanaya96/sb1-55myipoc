import React from 'react';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f"
          className="w-full h-full object-cover"
          alt="College campus"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Shape Your Future at Evergreen College</h1>
          <p className="text-xl md:text-2xl mb-8">Discover a world-class education that prepares you for success</p>
          <div className="space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md text-lg font-semibold">
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-md text-lg font-semibold transition-colors">
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}