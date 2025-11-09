import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Studios from './components/Studios';
import Approach from './components/Approach';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <NavBar />
      <Hero />
      <Studios />
      <Approach />
      <Footer />
    </div>
  );
}

export default App;
