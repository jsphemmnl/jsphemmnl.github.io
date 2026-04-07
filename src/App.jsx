import React, { useState, useEffect, useRef } from 'react';
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
  const [isHovering, setIsHovering] = useState(false);
  const [ripples, setRipples] = useState([]);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Handle Touch Burst Logic
  useEffect(() => {
    const handleClick = (e) => {
       const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
       setRipples(prev => [...prev, newRipple]);
       setTimeout(() => setRipples(prev => prev.filter(r => r.id !== newRipple.id)), 600);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Handle Inertial Skew Scrolling Engine
  useEffect(() => {
    let lastY = window.scrollY;
    let targetSkew = 0;
    let currentSkew = 0;
    let animationFrameId;

    const updatePhysics = () => {
      const currentY = window.scrollY;
      const deltaY = currentY - lastY;
      lastY = currentY;

      // Map scroll speed into a physical boundary (cap at 3 degrees warp)
      targetSkew = Math.min(Math.max(deltaY * 0.05, -3), 3);
      
      // Interpolate smoothly (lerp)
      currentSkew += (targetSkew - currentSkew) * 0.15; 

      if (Math.abs(currentSkew) > 0.01) {
        document.documentElement.style.setProperty('--scroll-skew', `${currentSkew}deg`);
      } else {
        document.documentElement.style.setProperty('--scroll-skew', `0deg`);
      }

      animationFrameId = requestAnimationFrame(updatePhysics);
    };
    
    updatePhysics();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Handle Magnetic Cursor Logic

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      // Update DOM incredibly fast without triggering React component re-renders
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`;
      }
    };
    
    const handleTouchMove = (e) => {
      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isHovering]);

  useEffect(() => {
    const handleMouseOver = (e) => {
      if (e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="container">
      {ripples.map(ripple => (
        <span 
          key={ripple.id} 
          className="ripple" 
          style={{ left: ripple.x, top: ripple.y }} 
        />
      ))}
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${isHovering ? 'hovering' : ''}`} />
      
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
