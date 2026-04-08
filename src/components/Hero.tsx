import React from 'react';
import { Mail, MapPin, FileText } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import heroImage from '../assets/profile_transparent.png';
import resumeFile from '../assets/Resume_EJPSibayan Rev 2.pdf';

const Hero: React.FC = () => {
  return (
    <section className="pt-20 md:pt-24 pb-16 border-b border-glass-border">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12 text-center md:text-left">
        <div className="flex-1 min-w-[300px]">
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.1] mb-2 tracking-[tight] text-text-primary">Emmanuel Joseph Sibayan</h1>
          <p className="text-xl text-accent mb-6 font-semibold">Full-Stack Engineer bridging robust backend infrastructure with modern, scalable interfaces.</p>

          <div className="flex items-center justify-center md:justify-start gap-2 text-text-secondary text-sm mb-8">
            <MapPin size={16} /> <span>Laguna, Philippines</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
            <a href="mailto:jsphemmnl@gmail.com" className="flex items-center gap-2 font-semibold text-text-primary border-b border-transparent transition-colors duration-300 hover:border-accent hover:text-accent">
              <Mail size={16} /> <span>Email</span>
            </a>
            <a href="https://www.linkedin.com/in/jsphemmnl/" target="_blank" rel="noreferrer" className="flex items-center gap-2 font-semibold text-text-primary border-b border-transparent transition-colors duration-300 hover:border-accent hover:text-accent">
              <FaLinkedin size={16} /> <span>LinkedIn</span>
            </a>
            <a href={resumeFile} download="Resume_EJPSibayan.pdf" className="flex items-center gap-2 font-semibold text-text-primary border-b border-transparent transition-colors duration-300 hover:border-accent hover:text-accent">
              <FileText size={16} /> <span>Resume (PDF)</span>
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center shrink-0">
          <div className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] rounded-full flex items-center justify-center bg-glass-bg border-[4px] border-glass-border shadow-[0_20px_40px_var(--glass-shadow),inset_0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-105 hover:rotate-3 hover:border-accent overflow-hidden group">
            <img src={heroImage} alt="Emmanuel Joseph Sibayan" className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
