'use client';

import Image from 'next/image';
import styles from './FixedLogo.module.css';

export default function FixedLogo() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.fixedLogo} onClick={scrollToTop}>
      <Image
        src="/ganpati-logo.png"
        alt="Ganpati Logo"
        width={72}
        height={72}
        priority
      />
    </div>
  );
}
