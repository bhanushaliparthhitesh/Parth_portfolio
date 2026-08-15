'use client';

import styles from '@/app/studies/studies.module.css';

export default function NewsletterSection() {
  return (
    <section className={styles.newsletterSection}>
      <div>
        <div className={styles.newsletterContent}>
          <h3>Subscribe to my newsletter for weekly insights</h3>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter Your Email" 
              className={styles.newsletterInput}
              required
            />
            <button type="submit" className={styles.newsletterButton}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div>
        <div className={styles.socialFollow}>
          <h4>Follow me</h4>
          <p className={styles.socialDesc}>
            Get the latest updates on my creative coding and design experiments.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <span>•</span>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span>•</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
