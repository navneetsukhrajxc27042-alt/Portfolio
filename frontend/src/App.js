import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Skills from './components/Skills';
import Software from './components/Software';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Portfolio />
      <About />
      <Skills />
      <Software />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;