import type { Metadata } from 'next';
import ProjectIndex from '@/components/list/ProjectIndex';
import styles from './list.module.css';

export const metadata: Metadata = {
  title: 'Project Index | Parth Bhanushali',
  description: 'A searchable index of Parth Bhanushali’s projects, experiments, and open-source contributions.',
};

export default function ListPage() {
  return (
    <main className={styles.listMain}>
      <ProjectIndex />
      <footer className={styles.listFooter}>
        <p>Project Index</p>
        <p>© {new Date().getFullYear()} Parth Bhanushali</p>
      </footer>
    </main>
  );
}
