import React, { useState } from 'react';
import { 
  Server, Box, Database, HardDrive, Cpu, Code, 
  LayoutTemplate, PlayCircle, TestTube, CheckCircle, 
  Globe, FileCode2, Code2, Terminal, Braces, 
  Smartphone, GitBranch, GitPullRequest, Workflow, Wifi,
  Wind, Component, Zap, Key, Lock, Map, Layers, Atom
} from 'lucide-react';
import styles from './TechStack.module.css';

const skillCategories = [
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

const TechStack = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCategories = showAll ? skillCategories : skillCategories.slice(0, 2);

  return (
    <section id="tech-stack">
      <h2 className="section-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        Tech Stack
        <button onClick={() => setShowAll(!showAll)} className={styles.showAllBtn}>
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </h2>
      <div className={styles.categories}>
        {displayedCategories.map((category, idx) => (
          <div key={idx} className={styles.categoryBlock}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.grid}>
              {(showAll ? category.skills : category.skills.slice(0, 3)).map((skill, index) => (
                <div key={index} className={`glass-card ${styles.card}`}>
                  <div className={styles.iconWrapper}>
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className={styles.name}>{skill.name}</h3>
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
