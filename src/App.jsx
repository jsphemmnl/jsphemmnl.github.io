import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="container">
      <button 
        onClick={toggleTheme} 
        style={{
          position: 'fixed', top: '1.5rem', right: '1.5rem', zIndex: 1000,
          width: '48px', height: '48px', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', border: '1px solid var(--glass-border)',
          background: 'var(--glass-bg)', color: 'var(--text-primary)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          boxShadow: '0 8px 32px 0 var(--glass-shadow)',
          transition: 'all 0.3s ease'
        }}
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
