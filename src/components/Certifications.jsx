import React from 'react';
import { Award } from 'lucide-react';
import styles from './Projects.module.css';

const certifications = [
  {
    title: 'Google Cloud Computing Foundations Certificate',
    provider: 'Google Cloud',
    link: 'https://www.credly.com/badges/9c0d4cab-04c4-4325-b205-c64732a0ef89/linked_in_profile'
  },
  {
    title: 'CompTIA Tech+ Certification',
    provider: 'CompTIA',
    link: 'https://www.credly.com/badges/dbe8a851-b729-4a1c-9ee2-eea7b9cee5c6/linked_in_profile'
  }
];

const Certifications = () => {
  return (
    <section id="certifications">
      <h2 className="section-title">Certifications</h2>
      <div className={styles.grid}>
        {certifications.map((cert, index) => (
          <div key={index} className={`glass-card ${styles.card}`}>
            <h3 className={styles.title}>{cert.title}</h3>
            <p className={styles.desc}>{cert.provider}</p>
            <div className={styles.links}>
              <a href={cert.link} className={styles.link}>
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
