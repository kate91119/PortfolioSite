import React from 'react';
import logo from './logo.svg';
import './App.css';
import TitleCard from './pages/TitleCard';
import Skills from './pages/Skills';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <TitleCard />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;

