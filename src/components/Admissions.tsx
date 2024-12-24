import React from 'react';
import { Calendar, GraduationCap, Users } from 'lucide-react';

export default function Admissions() {
  return (
    <section id="admissions" className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl text-blue-200">Take the first step towards your future</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Calendar className="h-12 w-12 mx-auto mb-4 text-blue-300" />
            <h3 className="text-xl font-semibold mb-2">Application Deadlines</h3>
            <p className="text-blue-200">Early Decision: Nov 1<br />Regular Decision: Jan 15</p>
          </div>
          
          <div className="text-center">
            <GraduationCap className="h-12 w-12 mx-auto mb-4 text-blue-300" />
            <h3 className="text-xl font-semibold mb-2">Requirements</h3>
            <p className="text-blue-200">High School Transcript<br />SAT/ACT Scores<br />Letters of Recommendation</p>
          </div>
          
          <div className="text-center">
            <Users className="h-12 w-12 mx-auto mb-4 text-blue-300" />
            <h3 className="text-xl font-semibold mb-2">Connect With Us</h3>
            <p className="text-blue-200">Schedule a campus tour<br />Meet with admissions counselors</p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-white text-blue-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-100">
            Start Your Application
          </button>
        </div>
      </div>
    </section>
  );
}