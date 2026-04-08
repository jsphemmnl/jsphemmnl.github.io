import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 border-b border-glass-border last-of-type:border-none">
      <h2 className="text-2xl font-bold mb-8 text-text-primary">About</h2>
      <p className="text-text-secondary max-w-[800px] text-[1.05rem] leading-[1.8]">
        I'm a 4th-year BS Information Technology student at Mapúa Malayan Colleges Laguna specializing in full-stack engineering and software architecture. I focus on bridging robust backend infrastructure with modern frontend interfaces to build scalable, secure enterprise solutions. 
        <br /><br />
        My recent and completed work spans from engineering comprehensive digital registry systems and RPA-driven tax tools, to developing advanced cryptographic applications. Combining my knowledge in cloud infrastructure and DevOps, I am deeply passionate about creating impactful software that solves complex problems.
      </p>
    </section>
  );
};

export default About;
