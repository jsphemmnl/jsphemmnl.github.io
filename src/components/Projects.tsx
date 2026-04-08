import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  demoLink: string;
  githubLink: string;
  isPrivate?: boolean;
}

const projects: Project[] = [
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

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 border-b border-glass-border last-of-type:border-none">
      <h2 className="text-2xl font-bold mb-8 text-text-primary">Recent Projects</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
        {projects.map((project, index) => (
          <div key={index} className="glass-card flex flex-col">
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-[0.95rem] text-text-secondary mb-6 flex-grow">{project.description}</p>
            <div className="flex gap-4">
              {project.githubLink !== '#' && (
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[0.9rem] font-semibold text-text-primary hover:text-accent transition-colors duration-300">
                  <Code2 size={16} /> Source {project.isPrivate ? '(Private)' : ''}
                </a>
              )}
              {project.demoLink !== '#' && (
                <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[0.9rem] font-semibold text-text-primary hover:text-accent transition-colors duration-300">
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
