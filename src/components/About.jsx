import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">About</h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', fontSize: '1.05rem', lineHeight: '1.8' }}>
        I'm a 4th-year BS Information Technology student at Mapúa Malayan Colleges Laguna specializing in full-stack engineering and software architecture. I focus on bridging robust backend infrastructure with modern frontend interfaces to build scalable, secure enterprise solutions. 
        <br /><br />
        My recent and completed work spans from engineering comprehensive digital registry systems and RPA-driven tax tools, to developing advanced cryptographic applications. Combining my knowledge in cloud infrastructure and DevOps, I am deeply passionate about creating impactful software that solves complex problems.
      </p>
    </section>
  );
};

export default About;
