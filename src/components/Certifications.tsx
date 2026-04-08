import React from 'react';
import { Award } from 'lucide-react';

interface Certification {
  title: string;
  provider: string;
  date: string;
  link: string;
}

const certifications: Certification[] = [
  {
    title: 'Google Cloud Computing Foundations Certificate',
    provider: 'Google Cloud',
    date: 'March 2025',
    link: 'https://www.credly.com/badges/9c0d4cab-04c4-4325-b205-c64732a0ef89/linked_in_profile'
  },
  {
    title: 'CompTIA Tech+ Certification',
    provider: 'CompTIA',
    date: 'December 2025',
    link: 'https://www.credly.com/badges/dbe8a851-b729-4a1c-9ee2-eea7b9cee5c6/linked_in_profile'
  }
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 border-b border-glass-border last-of-type:border-none">
      <h2 className="text-3xl font-extrabold tracking-tight mb-10 text-text-primary">Certifications</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
        {certifications.map((cert, index) => (
          <div key={index} className="glass-card flex flex-col p-6">
            <div className="flex justify-between items-start gap-4 mb-2">
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <span className="text-xs font-medium text-accent whitespace-nowrap bg-accent/10 px-2 py-1 rounded-md">{cert.date}</span>
            </div>
            <p className="text-[0.95rem] text-text-secondary mb-6 flex-grow">{cert.provider}</p>
            <div className="flex gap-4">
              <a href={cert.link} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[0.9rem] font-semibold text-text-primary hover:text-accent transition-colors duration-300">
                <Award size={16} /> View Credential
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
