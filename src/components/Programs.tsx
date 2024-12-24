import React from 'react';
import { BookOpen, Code, TestTube, HeartPulse } from 'lucide-react';

const programs = [
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Liberal Arts",
    description: "Explore diverse perspectives through our comprehensive liberal arts programs."
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Computer Science",
    description: "Learn cutting-edge technology and software development practices."
  },
  {
    icon: <TestTube className="h-8 w-8" />,
    title: "Natural Sciences",
    description: "Conduct research and experiments in state-of-the-art laboratories."
  },
  {
    icon: <HeartPulse className="h-8 w-8" />,
    title: "Health Sciences",
    description: "Prepare for a career in healthcare with hands-on clinical experience."
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
          <p className="text-xl text-gray-600">Discover your passion and pursue excellence</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
              <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}