import React, { useState } from 'react';
import { 
  Server, Box, Database, HardDrive, Cpu, Code, 
  LayoutTemplate, PlayCircle, TestTube, CheckCircle, 
  Globe, FileCode2, Code2, Terminal, Braces, 
  Smartphone, GitBranch, GitPullRequest, Workflow, Wifi,
  Wind, Component, Zap, Key, Lock, Map, Layers, Atom
} from 'lucide-react';

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

interface TechCategory {
  title: string;
  skills: TechItem[];
}

const skillCategories: TechCategory[] = [
  {
    title: 'Frontend & Mobile',
    skills: [
      { name: 'React', icon: <LayoutTemplate size={20} /> },
      { name: 'Tailwind', icon: <Wind size={20} /> },
      { name: 'shadcn', icon: <Component size={20} /> },
      { name: 'Vite', icon: <Zap size={20} /> },
      { name: 'HTML', icon: <Globe size={20} /> },
      { name: 'CSS', icon: <LayoutTemplate size={20} /> },
      { name: 'Jotai', icon: <Atom size={20} /> },
      { name: 'Xamarin', icon: <Smartphone size={20} /> },
    ]
  },
  {
    title: 'Backend & Languages',
    skills: [
      { name: 'Django', icon: <Code size={20} /> },
      { name: 'DRF', icon: <Code2 size={20} /> },
      { name: 'Python', icon: <Terminal size={20} /> },
      { name: 'GeoDjango', icon: <Globe size={20} /> },
      { name: 'SimpleJWT', icon: <Lock size={20} /> },
      { name: 'TypeScript', icon: <Code2 size={20} /> },
      { name: 'JavaScript', icon: <Code2 size={20} /> },
      { name: 'PHP', icon: <FileCode2 size={20} /> },
      { name: 'Java', icon: <Terminal size={20} /> },
      { name: 'C', icon: <Braces size={20} /> },
      { name: 'C++', icon: <Braces size={20} /> },
      { name: 'C#', icon: <Braces size={20} /> },
    ]
  },
  {
    title: 'Databases & Storage',
    skills: [
      { name: 'SQL', icon: <Database size={20} /> },
      { name: 'PostgreSQL', icon: <Database size={20} /> },
      { name: 'PostGIS', icon: <Map size={20} /> },
      { name: 'SQLite', icon: <Database size={20} /> },
      { name: 'Redis', icon: <Database size={20} /> },
      { name: 'MinIO', icon: <HardDrive size={20} /> },
    ]
  },
  {
    title: 'Maps & GIS',
    skills: [
      { name: 'MapLibre GL', icon: <Map size={20} /> },
      { name: 'deck.gl', icon: <Layers size={20} /> },
    ]
  },
  {
    title: 'Version Control & DevOps',
    skills: [
      { name: 'Git', icon: <GitBranch size={20} /> },
      { name: 'GitHub', icon: <GitPullRequest size={20} /> },
      { name: 'GitHub Actions', icon: <Workflow size={20} /> },
      { name: 'Docker', icon: <Box size={20} /> },
      { name: 'Railway', icon: <Server size={20} /> },
    ]
  },
  {
    title: 'Testing & Automation',
    skills: [
      { name: 'Playwright', icon: <PlayCircle size={20} /> },
      { name: 'Pytest', icon: <TestTube size={20} /> },
      { name: 'Vitest', icon: <CheckCircle size={20} /> },
    ]
  },
  {
    title: 'Hardware & IoT',
    skills: [
      { name: 'Arduino', icon: <Cpu size={20} /> },
      { name: 'ESP Microcontrollers', icon: <Cpu size={20} /> },
      { name: 'Wemos', icon: <Wifi size={20} /> },
    ]
  }
];

const TechStack: React.FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const displayedCategories = showAll ? skillCategories : skillCategories.slice(0, 2);

  return (
    <section id="tech-stack" className="py-16 border-b border-glass-border last-of-type:border-none">
      <h2 className="text-2xl font-bold mb-8 text-text-primary flex justify-between items-center">
        Tech Stack
        <button 
          onClick={() => setShowAll(!showAll)} 
          className="bg-transparent border-none text-accent text-base font-semibold cursor-pointer transition-colors duration-200 hover:underline hover:text-text-primary"
        >
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </h2>
      <div className="flex flex-col gap-10">
        {displayedCategories.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold mb-5 text-text-secondary">{category.title}</h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
              {(showAll ? category.skills : category.skills.slice(0, 3)).map((skill, index) => (
                <div key={index} className="glass-card flex items-center gap-4 px-6 py-4">
                  <div className="flex items-center justify-center text-accent">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{skill.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
