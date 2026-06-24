'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from '@/app/studies/studies.module.css';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!cursorRef.current) return;

    // Use GSAP quickTo for smooth cursor interpolation
    const xTo = gsap.quickTo(cursorRef.current, 'left', { duration: 0.4, ease: 'power3' });
    const yTo = gsap.quickTo(cursorRef.current, 'top', { duration: 0.4, ease: 'power3' });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(`.${styles.projectImageInner}`)) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div ref={cursorRef} className={`${styles.customCursor} ${isActive ? styles.active : ''}`}>
      <span className={styles.cursorText}>View Project</span>
    </div>
  );
}
