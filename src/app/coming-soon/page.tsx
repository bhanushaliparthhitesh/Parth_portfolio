'use client';

import styles from './coming.module.css';
import CloudBackground from '@/components/coming-soon/CloudBackground';
import FloatingStickers from '@/components/coming-soon/FloatingStickers';
import NewsletterForm from '@/components/coming-soon/NewsletterForm';

export default function ComingSoonPage() {
  return (
    <main className={styles.comingMain}>
      <CloudBackground />
      <FloatingStickers />
      <NewsletterForm />
    </main>
  );
}
