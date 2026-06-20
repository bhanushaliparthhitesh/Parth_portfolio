'use client';

import { useEffect, useRef } from 'react';
import { ListItem } from '@/data/listData';
import styles from '@/app/list/list.module.css';

interface Props {
  item: ListItem;
  index: number;
}

export default function ListRow({ item, index }: Props) {
  const rowRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && rowRef.current) {
            // Apply delay based on index relative to viewport appearance
            // Using a max of 10 to prevent extremely long delays for lower items
            const delay = (index % 15) * 30;
            
            setTimeout(() => {
              if (rowRef.current) {
                rowRef.current.style.opacity = '1';
                rowRef.current.style.transform = 'translateY(0)';
              }
            }, delay);
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (rowRef.current) {
      observer.observe(rowRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <a 
      ref={rowRef} 
      href={item.col4.url}
      className={styles.tableRow}
    >
      <div className={styles.colTitle}>{item.col1}</div>
      <div className={styles.colCategory}>
        <span>{item.col2}</span>
        {/* Mobile only separator, hidden via CSS normally if not needed */}
        <span className={styles.mobileSeparator} style={{ display: 'none' }}>•</span>
        <span className={styles.mobileYear} style={{ display: 'none' }}>{item.col3}</span>
      </div>
      <div className={styles.colYear}>{item.col3}</div>
      <div className={styles.colLink}>
        {item.col4.label}
        <span className={styles.linkArrow}>↗</span>
      </div>
    </a>
  );
}
