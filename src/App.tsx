import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import CampusLife from './components/CampusLife';
import Admissions from './components/Admissions';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Programs />
      <CampusLife />
      <Admissions />
    </div>
  );
}

export default App;