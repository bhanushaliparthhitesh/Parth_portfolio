'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '@/app/grid/grid.module.css';
import { Project } from '@/data/projects';

export default function ProjectCard({ project, index }: { project: Project, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && cardRef.current) {
            // Calculate stagger delay based on index (waterfall effect)
            // Use modulo so the delay doesn't get infinitely long for lower items
            const delay = (index % 10) * 60;
            
            setTimeout(() => {
              if (cardRef.current) {
                cardRef.current.style.opacity = '1';
                cardRef.current.style.transform = 'translateY(0) scale(1)';
              }
            }, delay);
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      ref={cardRef} 
      className={styles.projectCard}
      style={{
        opacity: 0,
        transform: 'translateY(40px) scale(0.98)',
        transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
      }}
    >
      <div className={styles.mediaContainer}>
        {/* If the project had a video, we would render a <video autoPlay muted loop playsInline> here instead */}
        <Image 
          src={project.image}
          alt={project.title}
          width={800}
          height={600}
          className={styles.mediaImage}
          loading="lazy"
        />
      </div>
      <div className={styles.metadataContainer}>
        <div className={styles.metaHeader}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <div className={styles.projectTag}>{project.category}</div>
        </div>
        <div className={styles.projectDate}>{project.date || project.year}</div>
        {project.description && (
          <p className={styles.projectDescription}>{project.description}</p>
        )}
      </div>
    </div>
  );
}
