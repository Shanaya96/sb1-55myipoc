import React from 'react';

export default function CampusLife() {
  return (
    <section id="campus" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Campus Life</h2>
          <p className="text-xl text-gray-600">Experience a vibrant community of learning and growth</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
              className="w-full h-full object-cover"
              alt="Student life"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-2xl font-bold text-white">Student Life</h3>
              <p className="text-white">Join clubs, sports teams, and cultural events</p>
            </div>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952"
              className="w-full h-full object-cover"
              alt="Campus facilities"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-2xl font-bold text-white">Modern Facilities</h3>
              <p className="text-white">State-of-the-art libraries, labs, and recreation centers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}