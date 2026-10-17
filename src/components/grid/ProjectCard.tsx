'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useReducedMotion } from 'framer-motion';
import styles from '@/app/grid/grid.module.css';
import type { Project } from '@/data/projects';

interface Props {
  project: Project;
  index: number;
  onOpenProject: (project: Project, trigger: HTMLButtonElement) => void;
}

export default function ProjectCard({ project, index, onOpenProject }: Props) {
  const cardRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const card = cardRef.current;
    if (!card || reduceMotion || !('IntersectionObserver' in window)) return;

    let timeoutId: number | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = (index % 10) * 60;

            timeoutId = window.setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0) scale(1)';
            }, delay);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    card.style.opacity = '0';
    card.style.transform = 'translateY(40px) scale(0.98)';
    observer.observe(card);

    return () => {
      observer.disconnect();
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      card.style.opacity = '1';
      card.style.transform = 'none';
    };
  }, [index, reduceMotion]);

  return (
    <button
      ref={cardRef}
      type="button"
      className={styles.projectCard}
      onClick={(event) => onOpenProject(project, event.currentTarget)}
      aria-label={`Open project details for ${project.label}`}
    >
      <span className={styles.mediaContainer} aria-hidden="true">
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={styles.mediaImage}
            quality={60}
            loading="lazy"
          />
        ) : (
          <span className={styles.textPreview}>
            <span className={styles.previewCategory}>{project.category}</span>
            <span className={styles.previewLabel}>{project.label}</span>
          </span>
        )}
      </span>
      <span className={styles.metadataContainer}>
        <span className={styles.metaHeader}>
          <span className={styles.projectTitle}>{project.label}</span>
          <span className={styles.projectTag}>{project.category}</span>
        </span>
        <span className={styles.projectDescriptor}>{project.title}</span>
        {(project.date || project.year || project.status) && (
          <span className={styles.projectDate}>
            {(project.date || project.year) && (
              <time dateTime={project.year}>{project.date || project.year}</time>
            )}
            {project.status && <span>{project.status}</span>}
          </span>
        )}
        {project.shortDescription && <span className={styles.projectDescription}>{project.shortDescription}</span>}
        <span className={styles.detailsLink}>
          View project details <span aria-hidden="true">↗</span>
        </span>
      </span>
    </button>
  );
}
