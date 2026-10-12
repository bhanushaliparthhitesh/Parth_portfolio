'use client';

import { useCallback, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import styles from './grid.module.css';
import { projectCategories, projects } from '@/data/projects';
import type { Project, ProjectCategory } from '@/data/projects';
import GridHero from '@/components/grid/GridHero';
import StickyFilter from '@/components/grid/StickyFilter';
import MasonryGrid from '@/components/grid/MasonryGrid';
import CursorArrow from '@/components/grid/CursorArrow';
import ProjectDetailOverlay from '@/components/grid/ProjectDetailOverlay';

type ActiveCategory = ProjectCategory | 'ALL';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const returnFocusTo = useRef<HTMLButtonElement | null>(null);

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  const openProject = useCallback((project: Project, trigger: HTMLButtonElement) => {
    returnFocusTo.current = trigger;
    setSelectedProject(project);
  }, []);

  const closeProject = useCallback(() => setSelectedProject(null), []);

  return (
    <main className={styles.gridMain}>
      {!selectedProject && <CursorArrow />}

      <div
        className={styles.contentWrapper}
        aria-hidden={Boolean(selectedProject)}
        inert={Boolean(selectedProject)}
      >
        <GridHero projectCount={projects.length} categoryCount={projectCategories.length} />
        <StickyFilter
          activeCategory={activeCategory}
          categories={projectCategories}
          onSelectCategory={(category) => setActiveCategory(category as ActiveCategory)}
        />
        <MasonryGrid projects={filteredProjects} onOpenProject={openProject} />
      </div>

      <AnimatePresence initial={false}>
        {selectedProject && (
          <ProjectDetailOverlay
            key={selectedProject.id}
            project={selectedProject}
            returnFocusTo={returnFocusTo}
            onClose={closeProject}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
