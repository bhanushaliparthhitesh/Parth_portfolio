'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './SideNav.module.css';

export default function SideNav() {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const isStudiesPage = pathname?.startsWith('/studies');

  const links = isStudiesPage 
    ? [
        { name: 'Me', id: 'me' },
        { name: 'Grid', id: 'projects' },
        { name: 'List', id: 'qa' },
      ]
    : [
        { name: 'Studies', id: 'studies' },
        { name: 'Grid', id: 'projects' },
        { name: 'List', id: 'qa' },
      ];

  const scrollTo = (id: string) => {
    if (id === 'studies') {
      window.location.href = '/studies';
      return;
    }
    if (id === 'me') {
      window.location.href = '/';
      return;
    }
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`${styles.sideNav} ${isStudiesPage ? styles.studiesTheme : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ width: 72, height: 72 }}
      animate={{ 
        width: isHovered ? 150 : 72, 
        height: isHovered ? 'auto' : 72 
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      <div className={styles.logoRow} onClick={() => {
        if (typeof window !== 'undefined' && window.innerWidth <= 768) {
          setIsHovered(!isHovered);
        } else {
          scrollTo('top');
        }
      }}>
        {/* Geometric Sun SVG */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ flexShrink: 0, color: isStudiesPage ? '#1A0A00' : '#F2A96B' }}
        >
          {/* Inner circle */}
          <circle cx="20" cy="20" r="8" fill="currentColor" />
          
          {/* Cardinal rays */}
          <rect x="18" y="2" width="4" height="6" rx="2" fill="currentColor" />
          <rect x="18" y="32" width="4" height="6" rx="2" fill="currentColor" />
          <rect x="2" y="18" width="6" height="4" rx="2" fill="currentColor" />
          <rect x="32" y="18" width="6" height="4" rx="2" fill="currentColor" />
          
          {/* Diagonal rays */}
          <rect x="8.5" y="6.5" width="4" height="6" rx="2" transform="rotate(-45 10.5 9.5)" fill="currentColor" />
          <rect x="27.5" y="27.5" width="4" height="6" rx="2" transform="rotate(-45 29.5 30.5)" fill="currentColor" />
          <rect x="27.5" y="6.5" width="4" height="6" rx="2" transform="rotate(45 29.5 9.5)" fill="currentColor" />
          <rect x="8.5" y="27.5" width="4" height="6" rx="2" transform="rotate(45 10.5 30.5)" fill="currentColor" />
        </svg>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className={styles.navLinks}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.1 }}
          >
            {links.map((link, i) => (
              <motion.div
                key={link.id}
                className={styles.navLink}
                onClick={() => {
                  scrollTo(link.id);
                  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
                    setIsHovered(false);
                  }
                }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -5 }}
                transition={{ delay: i * 0.04 }}
              >
                {link.name}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
