import { useState, useEffect, useRef } from 'react';
import { Moon, Sun } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Handle Inertial Skew Scrolling Engine
  useEffect(() => {
    let lastY = window.scrollY;
    let targetSkew = 0;
    let currentSkew = 0;
    let animationFrameId: number;

    const updatePhysics = () => {
      const currentY = window.scrollY;
      const deltaY = currentY - lastY;
      lastY = currentY;

      // Check OS-level motion sickness boundaries
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Cap at 1.5 degrees warp instead of 3 for less intense dizziness 
      targetSkew = Math.min(Math.max(deltaY * 0.05, -1.5), 1.5);
      
      // Zero out structural warp if user disabled motion
      if (prefersReducedMotion) targetSkew = 0;
      
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
    const handleMouseMove = (e: MouseEvent) => {
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
    
    const handleTouchMove = (e: TouchEvent) => {
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
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.closest('a') || target.closest('button'))) {
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
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[9999] px-4 py-2 bg-accent text-white font-bold rounded">
        Skip to content
      </a>

      <Navbar />

      <main id="main-content" className="max-w-[900px] mx-auto px-5 md:px-8 pt-24">
        <div ref={dotRef} className="cursor-dot hidden md:block" />
        <div ref={ringRef} className={`cursor-ring hidden md:block ${isHovering ? 'hovering' : ''}`} />
        
        <button 
          onClick={toggleTheme} 
          aria-label="Toggle theme"
          className="fixed bottom-6 right-6 md:top-6 md:bottom-auto z-[1000] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer border border-glass-border bg-glass-bg text-text-primary shadow-[0_8px_32px_0_var(--glass-shadow)] transition-all duration-300 hover:scale-110"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <Hero />
      <About />
      <TechStack />
      <Projects />
      <Certifications />
      <Contact />
      </main>
    </>
  );
}

export default App;
