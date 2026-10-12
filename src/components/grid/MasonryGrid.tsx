'use client';

import Masonry from 'react-masonry-css';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { Project } from '@/data/projects';
import styles from '@/app/grid/grid.module.css';
import ProjectCard from './ProjectCard';

interface Props {
  projects: Project[];
  onOpenProject: (project: Project, trigger: HTMLButtonElement) => void;
}

export default function MasonryGrid({ projects, onOpenProject }: Props) {
  const reduceMotion = useReducedMotion();
  const breakpointColumnsObj = {
    default: 4,
    1024: 2,
    640: 1
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {projects.length > 0 ? (
        <motion.div
          key={projects.map((project) => project.id).join('-')}
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : -20 }}
          transition={{ duration: reduceMotion ? 0 : 0.35, ease: 'easeInOut' }}
        >
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenProject={onOpenProject}
              />
            ))}
          </Masonry>
        </motion.div>
      ) : (
        <motion.p
          className={styles.emptyState}
          role="status"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
        >
          No projects are listed in this category yet.
        </motion.p>
      )}
    </AnimatePresence>
  );
}
