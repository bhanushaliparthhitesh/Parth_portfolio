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

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <main className={styles.studiesMain} ref={containerRef}>
      <ScrollTracker total={projects.length} />
      <CustomCursor />

      {projects.map((project, index) => (
        <ProjectSection key={project.id} project={project} index={index} />
      ))}
    </main>
  );
}
