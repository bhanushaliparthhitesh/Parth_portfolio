'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './studies.module.css';
import { projects } from '@/data/projects';
import ProjectSection from '@/components/studies/ProjectSection';
import ScrollTracker from '@/components/studies/ScrollTracker';
import CustomCursor from '@/components/studies/CustomCursor';

export default function StudiesPage() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    document.documentElement.style.scrollSnapType = 'y mandatory';
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollSnapType = '';
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <main className={styles.studiesMain} ref={containerRef}>
      <ScrollTracker total={Math.min(projects.length, 5)} />
      <CustomCursor />

      {projects.slice(0, 5).map((project, index) => (
        <ProjectSection key={project.id} project={project} index={index} />
      ))}
    </main>
  );
}
