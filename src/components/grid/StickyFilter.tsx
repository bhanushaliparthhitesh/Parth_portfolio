'use client';

import styles from '@/app/grid/grid.module.css';

const CATEGORIES = ['ALL', 'GRAPHIC', 'INTERACTION', 'MOTION', 'EXPERIENCE', 'DOODLE'];

interface Props {
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
}

export default function StickyFilter({ activeCategory, onSelectCategory }: Props) {
  return (
    <div className={styles.stickyFilterWrapper}>
      <nav className={styles.filterNav}>
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`${styles.filterButton} ${activeCategory === category ? styles.active : ''}`}
          >
            {category}
          </button>
        ))}
      </nav>
    </div>
  );
}
