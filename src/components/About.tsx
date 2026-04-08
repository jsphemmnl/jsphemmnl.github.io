import React from 'react';
import { FileText } from 'lucide-react';
import resumeFile from '../assets/Resume_EJPSibayan Rev 2.pdf';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-glass-border last-of-type:border-none">
      <h2 className="text-3xl font-extrabold tracking-tight mb-8 text-text-primary">About</h2>
      <div className="max-w-[800px]">
        <p className="text-text-secondary text-[1.05rem] leading-[1.8] mb-10">
          I'm a 4th-year BS Information Technology student at Mapúa Malayan Colleges Laguna specializing in full-stack engineering and software architecture. I focus on bridging robust backend infrastructure with modern frontend interfaces to build scalable, secure enterprise solutions. 
          <br /><br />
          My recent and completed work spans from engineering comprehensive digital registry systems and RPA-driven tax tools, to developing advanced cryptographic applications. Combining my knowledge in cloud infrastructure and DevOps, I am deeply passionate about creating impactful software that solves complex problems.
        </p>
        <a href={resumeFile} download="Resume_EJPSibayan.pdf" className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent/20 text-accent font-semibold rounded-lg transition-all duration-300 hover:bg-accent/20 hover:scale-105 active:scale-95">
          <FileText size={18} /> View My Resume
        </a>
      </div>
    </section>
  );
};

export default About;
