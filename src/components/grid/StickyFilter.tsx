'use client';

import styles from '@/app/grid/grid.module.css';
import type { ProjectCategory } from '@/data/projects';

interface Props {
  activeCategory: string;
  categories: ProjectCategory[];
  onSelectCategory: (cat: string) => void;
}

export default function StickyFilter({ activeCategory, categories, onSelectCategory }: Props) {
  return (
    <div className={styles.stickyFilterWrapper}>
      <div className={styles.filterNav} role="group" aria-label="Filter projects by category">
        {['ALL', ...categories].map(category => (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            className={`${styles.filterButton} ${activeCategory === category ? styles.active : ''}`}
            aria-pressed={activeCategory === category}
          >
            {category === 'ALL' ? 'All projects' : category}
          </button>
        ))}
      </div>
    </div>
  );
}
