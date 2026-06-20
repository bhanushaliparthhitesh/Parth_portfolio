'use client';

import Link from 'next/link';
import { listData } from '@/data/listData';
import styles from './list.module.css';
import ListHero from '@/components/list/ListHero';
import ListSidebar from '@/components/list/ListSidebar';
import ListSection from '@/components/list/ListSection';

export default function ListPage() {
  return (
    <main className={styles.listMain}>
      <div className={styles.contentWrapper}>
        <ListHero />
        
        <ListSidebar />
        
        <div className={styles.sectionsContainer}>
          {listData.map((section) => (
            <ListSection key={section.id} section={section} />
          ))}
        </div>
      </div>

      <footer className={styles.listFooter}>
        <div className={styles.footerSocials}>
          <a href="#" className={styles.socialLink}>Instagram</a>
          <a href="#" className={styles.socialLink}>LinkedIn</a>
          <a href="#" className={styles.socialLink}>Behance</a>
        </div>
        <div className={styles.footerCopy}>
          © {new Date().getFullYear()} Parth. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
