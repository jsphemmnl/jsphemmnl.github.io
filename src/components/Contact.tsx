import React from 'react';
import { Code2, Mail, FileText } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import resumeFile from '../assets/Resume_EJPSibayan Rev 2.pdf';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="pt-16 pb-8">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left flex-wrap gap-8 mb-12">
        <div>
          <h3 className="text-xl font-bold mb-1 text-text-primary">Emmanuel Joseph Sibayan</h3>
          <p className="text-text-secondary text-sm">Full-Stack Engineer</p>
        </div>
        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com/jsphemmnl/" target="_blank" rel="noreferrer" aria-label="Github Profile" className="text-text-secondary transition-all duration-200 hover:text-accent hover:scale-110">
            <Code2 size={24} />
          </a>
          <a href="https://www.linkedin.com/in/jsphemmnl/" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="text-text-secondary transition-all duration-200 hover:text-accent hover:scale-110">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:jsphemmnl@gmail.com" aria-label="Email" className="text-text-secondary transition-all duration-200 hover:text-accent hover:scale-110">
            <Mail size={24} />
          </a>
          <a href={resumeFile} download="Resume_EJPSibayan.pdf" aria-label="Resume" className="text-text-secondary transition-all duration-200 hover:text-accent hover:scale-110">
            <FileText size={24} />
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
