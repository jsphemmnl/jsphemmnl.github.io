import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'E-Rehistro',
    description: 'A Comprehensive Voters Registry System.',
    demoLink: '#',
    githubLink: 'https://github.com/cidbrill/E-Rehistro',
  },
  {
    title: 'Streamline',
    description: 'A Water Quality Monitoring System for LGUs and Government Agencies.',
    demoLink: '#',
    githubLink: 'https://github.com/jp-gerona/Streamline',
    isPrivate: true,
  },
  {
    title: 'TaxEase',
    description: 'A Tax Compliance and Automated Processing Tool.',
    demoLink: '#',
    githubLink: 'https://github.com/jsphemmnl/taxease',
    isPrivate: true,
  },
  {
    title: 'DNA Encryption and Chaos Mapping Cryptosystem',
    description: 'A Cryptographic System utilizing DNA Encoding and Chaotic Mapping.',
    demoLink: '#',
    githubLink: 'https://github.com/jsphemmnl/4P_Cryptosystem',
  },
  {
    title: 'Marine Adventures',
    description: 'An Interactive Marine Environment Experience Game.',
    demoLink: '#',
    githubLink: 'https://github.com/JRADilag/Marine-Adventures/',
  },
  {
    title: 'OneMCL Recreated',
    description: 'A Figma design restructuring of the OneMCL User Experience.',
    demoLink: 'https://www.figma.com/proto/pr4PWxb6iYIYVa8R43YkkJ/',
    githubLink: '#',
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Recent Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={`glass-card ${styles.card}`}>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.desc}>{project.description}</p>
            <div className={styles.links}>
              {project.githubLink !== '#' && (
                <a href={project.githubLink} target="_blank" rel="noreferrer" className={styles.link}>
                  <Code2 size={16} /> Source {project.isPrivate ? '(Private)' : ''}
                </a>
              )}
              {project.demoLink !== '#' && (
                <a href={project.demoLink} target="_blank" rel="noreferrer" className={styles.link}>
                  <ExternalLink size={16} /> Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
