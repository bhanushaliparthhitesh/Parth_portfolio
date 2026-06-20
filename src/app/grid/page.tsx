'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './grid.module.css';
import { projects } from '@/data/projects';
import GridHero from '@/components/grid/GridHero';
import StickyFilter from '@/components/grid/StickyFilter';
import MasonryGrid from '@/components/grid/MasonryGrid';
import CursorArrow from '@/components/grid/CursorArrow';

export default function GridPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredProjects = activeCategory === 'ALL' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <main className={styles.gridMain}>
      <CursorArrow />

      <div className={styles.contentWrapper}>
        <GridHero />
        <StickyFilter 
          activeCategory={activeCategory} 
          onSelectCategory={setActiveCategory} 
        />
        <MasonryGrid projects={filteredProjects} />
      </div>
    </main>
  );
}
