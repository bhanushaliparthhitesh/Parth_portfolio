import styles from '@/app/studies/studies.module.css';

export default function NewsletterSection() {
  return (
    <section className={styles.newsletterSection} aria-labelledby="newsletter-heading">
      <div>
        <p className={styles.sectionEyebrow}>Occasional notes</p>
        <h2 id="newsletter-heading">A letter from the notebook</h2>
        <p>Studies is where I collect ideas, experiments, and things I’m learning. A newsletter is not available yet.</p>
      </div>
      <p className={styles.newsletterStatus}>There’s no subscription form until email delivery is set up.</p>
    </section>
  );
}
