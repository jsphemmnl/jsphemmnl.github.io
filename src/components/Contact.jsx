import React from 'react';
import { Code2, Mail } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.branding}>
          <h3>Emmanuel Joseph Sibayan</h3>
          <p>Information Technology Student</p>
        </div>
        <div className={styles.socials}>
          <a href="https://github.com/jsphemmnl/" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <Code2 size={24} />
          </a>
          <a href="mailto:jsphemmnl@gmail.com" className={styles.socialLink}>
            <Mail size={24} />
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Emmanuel Joseph Sibayan. All rights reserved.
      </div>
    </section>
  );
};

export default Contact;
