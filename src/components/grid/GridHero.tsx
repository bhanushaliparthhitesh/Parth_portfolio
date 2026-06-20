import styles from '@/app/grid/grid.module.css';

export default function GridHero() {
  return (
    <section className={styles.heroSection}>
      <div>
        <h1 className={styles.heroTitle}>GRID</h1>
      </div>
      <div>
        <p className={styles.heroDescription}>
          This is an exploratory digital archive. A living museum of creative experiments, interactions, motion design, and graphic explorations. There is no guided narrative here—you dictate your own journey through density and visual variety.
        </p>
      </div>
    </section>
  );
}
