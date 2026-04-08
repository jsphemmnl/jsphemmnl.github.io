import React from 'react';
import { Code2, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="pt-16 pb-8">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left flex-wrap gap-8 mb-12">
        <div>
          <h3 className="text-xl font-bold mb-1 text-text-primary">Emmanuel Joseph Sibayan</h3>
          <p className="text-text-secondary text-sm">Information Technology Student</p>
        </div>
        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com/jsphemmnl/" target="_blank" rel="noreferrer" className="text-text-secondary transition-all duration-200 hover:text-accent hover:scale-110">
            <Code2 size={24} />
          </a>
          <a href="mailto:jsphemmnl@gmail.com" className="text-text-secondary transition-all duration-200 hover:text-accent hover:scale-110">
            <Mail size={24} />
          </a>
        </div>
      </div>
      <div className="text-center text-text-secondary text-sm pt-8 border-t border-border">
        © {new Date().getFullYear()} Emmanuel Joseph Sibayan. All rights reserved.
      </div>
    </section>
  );
};

export default Contact;
