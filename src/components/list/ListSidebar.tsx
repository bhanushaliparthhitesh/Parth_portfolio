'use client';

import { useEffect, useState } from 'react';
import { listData } from '@/data/listData';
import styles from '@/app/list/list.module.css';

export default function ListSidebar() {
  const [activeSection, setActiveSection] = useState<string>(listData[0].id);

  useEffect(() => {
    // Setup Intersection Observer for ScrollSpy
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry that is intersecting most (or just intersecting)
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        // Trigger when the section is about 40% down the screen
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0 
      }
    );

    listData.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className={styles.sidebarContainer}>
      <nav className={styles.sidebarSticky}>
        {listData.map((section) => (
          <button
            key={section.id}
            className={`${styles.sidebarLink} ${activeSection === section.id ? styles.active : ''}`}
            onClick={() => scrollToSection(section.id)}
          >
            <div className={styles.sidebarLinkIndicator} />
            {section.title}
          </button>
        ))}
      </nav>
    </div>
  );
}
