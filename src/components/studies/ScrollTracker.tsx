'use client';

import { useEffect, useState } from 'react';
import styles from '@/app/studies/studies.module.css';

export default function ScrollTracker({ total }: { total: number }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressHeight, setProgressHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.body.clientHeight;
      
      const scrollPercent = scrollY / (docHeight - winHeight);
      setProgressHeight(scrollPercent * 100);

      // Determine active section based on scroll
      const active = Math.min(
        Math.max(0, Math.floor((scrollY + winHeight / 2) / winHeight)),
        total - 1
      );
      setActiveIndex(active);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init

    return () => window.removeEventListener('scroll', handleScroll);
  }, [total]);

  return (
    <div className={styles.scrollTracker}>
      <div className={styles.trackerNumber}>
        <div 
          className={styles.trackerNumberInner} 
          style={{ transform: `translateY(-${activeIndex * 20}px)`, transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)' }}
        >
          {Array.from({ length: total }).map((_, i) => (
            <span key={i} style={{ height: '20px', lineHeight: '20px' }}>
              0{i + 1}
            </span>
          ))}
        </div>
      </div>
      
      <div className={styles.progressLine}>
        <div className={styles.progressIndicator} style={{ height: `${progressHeight}%` }}></div>
      </div>

      <div className={styles.totalNumber}>0{total}</div>
    </div>
  );
}
