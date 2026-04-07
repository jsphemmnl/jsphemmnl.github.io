import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import heroImage from '../assets/profile_transparent.png';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <h1 className={styles.name}>Emmanuel Joseph Sibayan</h1>
          <p className={styles.title}>Information Technology Student \ Developer</p>

          <div className={styles.location}>
            <MapPin size={16} /> <span>Laguna, Philippines</span>
          </div>

          <div className={styles.links}>
            <a href="mailto:jsphemmnl@gmail.com" className={styles.link}>
              <Mail size={16} /> <span>Send Email</span>
            </a>
          </div>
        </div>

        <div className={styles.avatarWrapper}>
          <div className={styles.avatarGlass} style={{ padding: 0 }}>
            <img src={heroImage} alt="Emmanuel Joseph Sibayan" className={styles.avatarImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
