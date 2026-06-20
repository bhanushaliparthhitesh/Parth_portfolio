'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from '@/app/grid/grid.module.css';

export default function CursorArrow() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!cursorRef.current) return;

    const xTo = gsap.quickTo(cursorRef.current, 'left', { duration: 0.2, ease: 'power3' });
    const yTo = gsap.quickTo(cursorRef.current, 'top', { duration: 0.2, ease: 'power3' });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Activate custom cursor if hovering over an active filter button
      if (target.classList.contains(styles.filterButton) && target.classList.contains(styles.active)) {
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
    <div ref={cursorRef} className={`${styles.customCursorArrow} ${isActive ? styles.active : ''}`}>
      ↓
    </div>
  );
}
