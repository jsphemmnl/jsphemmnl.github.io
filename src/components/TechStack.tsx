import React, { useState } from 'react';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaPython, FaJava, FaGitAlt, FaGithub, FaDocker, FaMapMarkedAlt, FaMicrochip, FaWifi, FaMobileAlt, FaCode, FaFlask, FaLinkedin 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiVite, SiDjango, SiTypescript, SiJavascript, SiPhp, SiC, SiCplusplus,
  SiPostgresql, SiSqlite, SiRedis, SiMinio, SiGithubactions, SiRailway, SiPytest, SiVitest, SiMapbox
} from 'react-icons/si';
import { TbAtom } from 'react-icons/tb';

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
      { name: 'React', icon: <FaReact size={24} /> },
      { name: 'Tailwind', icon: <SiTailwindcss size={24} /> },
      { name: 'Vite', icon: <SiVite size={24} /> },
      { name: 'HTML', icon: <FaHtml5 size={24} /> },
      { name: 'CSS', icon: <FaCss3Alt size={24} /> },
      { name: 'Jotai', icon: <TbAtom size={24} /> },
      { name: 'Xamarin', icon: <FaMobileAlt size={24} /> },
    ]
  },
  {
    title: 'Backend & Languages',
    skills: [
      { name: 'Django', icon: <SiDjango size={24} /> },
      { name: 'DRF', icon: <SiDjango size={24} /> },
      { name: 'Python', icon: <FaPython size={24} /> },
      { name: 'GeoDjango', icon: <SiDjango size={24} /> },
      { name: 'TypeScript', icon: <SiTypescript size={24} /> },
      { name: 'JavaScript', icon: <SiJavascript size={24} /> },
      { name: 'PHP', icon: <SiPhp size={24} /> },
      { name: 'Java', icon: <FaJava size={24} /> },
      { name: 'C', icon: <SiC size={24} /> },
      { name: 'C++', icon: <SiCplusplus size={24} /> },
      { name: 'C#', icon: <FaCode size={24} /> },
    ]
  },
  {
    title: 'Databases & Storage',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql size={24} /> },
      { name: 'PostGIS', icon: <SiPostgresql size={24} /> },
      { name: 'SQLite', icon: <SiSqlite size={24} /> },
      { name: 'Redis', icon: <SiRedis size={24} /> },
      { name: 'MinIO', icon: <SiMinio size={24} /> },
    ]
  },
  {
    title: 'Maps & GIS',
    skills: [
      { name: 'MapLibre GL', icon: <FaMapMarkedAlt size={24} /> },
      { name: 'deck.gl', icon: <SiMapbox size={24} /> },
    ]
  },
  {
    title: 'Version Control & DevOps',
    skills: [
      { name: 'Git', icon: <FaGitAlt size={24} /> },
      { name: 'GitHub', icon: <FaGithub size={24} /> },
      { name: 'GitHub Actions', icon: <SiGithubactions size={24} /> },
      { name: 'Docker', icon: <FaDocker size={24} /> },
      { name: 'Railway', icon: <SiRailway size={24} /> },
    ]
  },
  {
    title: 'Testing & Automation',
    skills: [
      { name: 'Playwright', icon: <FaFlask size={24} /> },
      { name: 'Pytest', icon: <SiPytest size={24} /> },
      { name: 'Vitest', icon: <SiVitest size={24} /> },
    ]
  },
  {
    title: 'Hardware & IoT',
    skills: [
      { name: 'Arduino', icon: <FaMicrochip size={24} /> },
      { name: 'ESP Microcontrollers', icon: <FaMicrochip size={24} /> },
      { name: 'Wemos', icon: <FaWifi size={24} /> },
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
