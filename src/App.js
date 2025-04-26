import React from 'react';
import './styles/App.css';
import SidebarToggle from './components/SidebarToggle';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <SidebarToggle />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;