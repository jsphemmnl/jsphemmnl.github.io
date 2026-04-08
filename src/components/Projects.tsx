import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

interface Project {
  title: string;
  scope: string;
  outcomes: string;
  techStack: string[];
  demoLink: string;
  githubLink: string;
  isPrivate?: boolean;
}

const projects: Project[] = [
  {
    title: 'E-Rehistro',
    scope: 'Architected a comprehensive voters registry system aiming to drastically reduce manual processing times for local government compliance.',
    outcomes: 'Engineered a highly secure, scalable datastore handling high-volume encrypted traffic with zero data loss.',
    techStack: ['ASP.NET', 'C#', 'SQL'],
    demoLink: '#',
    githubLink: 'https://github.com/cidbrill/E-Rehistro',
  },
  {
    title: 'Streamline',
    scope: 'Led the development of a real-time Water Quality Monitoring dashboard targeting LGUs and environmental agencies.',
    outcomes: 'Built interactive geospatial interfaces enabling immediate hazard detection and analytical reporting.',
    techStack: ['Django', 'PostGIS', 'React', 'Redis', 'MapLibre GL', 'Docker', 'Railway'],
    demoLink: '#',
    githubLink: 'https://github.com/jp-gerona/Streamline',
    isPrivate: true,
  },
  {
    title: 'TaxEase',
    scope: 'Created an automated tax compliance tool integrating RPA to ingest and process unstructured financial forms.',
    outcomes: 'Reduced manual processing latency by over 60% maintaining strict AES-256 encryption on all stored assets.',
    techStack: ['Python', 'SQLite'],
    demoLink: '#',
    githubLink: 'https://github.com/jsphemmnl/taxease',
    isPrivate: true,
  },
  {
    title: 'DNA and Chaos Mapping Cryptosystem',
    scope: 'Researched and implemented a complex cryptographic engine utilizing custom DNA Encoding and Chaotic Mapping algorithms.',
    outcomes: 'Successfully proved high-entropy encryption resistance against standard cryptanalysis attacks in an academic setting.',
    techStack: ['Python', 'Cryptography', 'NumPy'],
    demoLink: '#',
    githubLink: 'https://github.com/jsphemmnl/4P_Cryptosystem',
  },
  {
    title: 'Marine Adventures',
    scope: 'Designed an interactive, educational marine environment experience game targeted toward wildlife preservation awareness.',
    outcomes: 'Delivered a fluid, visually coherent runtime with robust asset management and collision systems.',
    techStack: ['C#', 'Unity', 'Game Design'],
    demoLink: '#',
    githubLink: 'https://github.com/JRADilag/Marine-Adventures/',
  },
  {
    title: 'OneMCL Recreated',
    scope: 'Executed a complete UX/UI overhaul of the OneMCL student portal ensuring rigorous usability and modern aesthetics.',
    outcomes: 'Drafted high-fidelity Figma components that dramatically reduced user flow friction across 10+ core pages.',
    techStack: ['Figma', 'UI/UX', 'Wireframing'],
    demoLink: 'https://www.figma.com/proto/pr4PWxb6iYIYVa8R43YkkJ/',
    githubLink: '#',
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 border-b border-glass-border last-of-type:border-none">
      <h2 className="text-3xl font-extrabold tracking-tight mb-10 text-text-primary">Selected Engineering</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="glass-card flex flex-col p-6 group">
            {/* Image Placeholder Frame */}
            <div className="w-full h-48 bg-gradient-to-tr from-glass-bg to-transparent rounded-lg border border-glass-border mb-6 flex items-center justify-center overflow-hidden relative">
              <span className="text-text-secondary text-sm tracking-widest uppercase opacity-50 group-hover:opacity-100 transition-opacity duration-300">Image Asset Here</span>
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <h3 className="text-xl font-bold mb-3 text-text-primary">{project.title}</h3>

            <div className="mb-6 flex-grow">
              <p className="text-[0.95rem] text-text-secondary mb-3 leading-relaxed">
                <strong className="text-text-primary text-sm uppercase tracking-wider block mb-1">Scope</strong>
                {project.scope}
              </p>
              <p className="text-[0.95rem] text-text-secondary leading-relaxed">
                <strong className="text-text-primary text-sm uppercase tracking-wider block mb-1">Outcomes</strong>
                {project.outcomes}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 border border-accent/20 text-accent">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-4 border-t border-glass-border mt-auto">
              {project.githubLink !== '#' && (
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[0.9rem] font-semibold text-text-primary hover:text-accent transition-colors duration-300">
                  <Code2 size={18} /> Source {project.isPrivate && <span className="opacity-50 text-xs">(Private)</span>}
                </a>
              )}
              {project.demoLink !== '#' && (
                <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[0.9rem] font-semibold text-accent hover:text-white transition-colors duration-300">
                  <ExternalLink size={18} /> Live Demo
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
