import styles from '@/app/list/list.module.css';

export default function ListHero() {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.heroTitle}>LIST</h1>
      <p className={styles.heroIntro}>
        A personal archive system. A curated digital garden where every recommendation, memory, restaurant, film, and place has been cataloged with obsessive attention to detail.
      </p>
    </section>
  );
}
