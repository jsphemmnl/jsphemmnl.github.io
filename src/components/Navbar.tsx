import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-[990] transition-all duration-300 ${scrolled ? 'w-[90%] md:w-[600px] py-3' : 'w-[95%] md:w-[700px] py-4'}`}>
      <div className="glass-card !py-3 !px-6 flex items-center justify-between shadow-[0_8px_32px_0_var(--glass-shadow)] backdrop-blur-md">
        <a href="#" className="font-bold text-lg tracking-tight text-text-primary hover:text-accent transition-colors duration-200">
          E.S
        </a>
        
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors duration-200 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
