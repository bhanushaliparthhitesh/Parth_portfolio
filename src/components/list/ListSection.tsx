'use client';

import { ListSectionData } from '@/data/listData';
import ListRow from './ListRow';
import styles from '@/app/list/list.module.css';

interface Props {
  section: ListSectionData;
}

export default function ListSection({ section }: Props) {
  return (
    <section id={section.id} className={styles.sectionWrapper}>
      <div className={styles.sectionDivider} />
      <h2 className={styles.sectionHeading}>{section.title}</h2>
      
      {/* We don't render the column headers as requested, just the rows */}
      <div className={styles.tableContainer}>
        {section.items.map((item, index) => (
          <ListRow key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
