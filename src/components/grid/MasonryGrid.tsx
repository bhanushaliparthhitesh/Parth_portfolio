'use client';

import Masonry from 'react-masonry-css';
import { AnimatePresence, motion } from 'framer-motion';
import { Project } from '@/data/projects';
import ProjectCard from './ProjectCard';

interface Props {
  projects: Project[];
}

export default function MasonryGrid({ projects }: Props) {
  const breakpointColumnsObj = {
    default: 4,
    1024: 2,
    640: 1
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={projects.map(p => p.id).join('-')}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </Masonry>
      </motion.div>
    </AnimatePresence>
  );
}
