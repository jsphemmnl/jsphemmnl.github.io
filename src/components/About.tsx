import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-glass-border last-of-type:border-none">
      <h2 className="text-3xl font-extrabold tracking-tight mb-8 text-text-primary">About</h2>
      <div className="max-w-[800px]">
        <p className="text-text-secondary text-[1.05rem] leading-[1.8] mb-6">
          I'm a 4th-year BS Information Technology student at Mapúa Malayan Colleges Laguna with a deep interest in software architecture and high-performance computing. I thrive in environments where I can dissect complex data models, automate repetitive workflows, and design systems that natively scale.
          <br /><br />
          My recent and completed work spans from engineering comprehensive digital registry systems and RPA-driven tax tools, to developing advanced cryptographic applications. Combining my knowledge in cloud infrastructure and DevOps, I am deeply passionate about creating impactful software that solves complex problems.
        </p>
      </div>
    </section>
  );
};

export default About;
