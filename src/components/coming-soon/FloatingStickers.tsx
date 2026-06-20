'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '@/app/coming-soon/coming.module.css';

export default function FloatingStickers() {
  // Animation config for floating
  const floatAnimation = (delay: number, duration: number, yOffset: number): any => ({
    y: [0, yOffset, 0],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      delay: delay,
    }
  });

  return (
    <div className={styles.stickersContainer}>
      
      {/* Lemata Logo Sticker (Text removed) */}
      <motion.div 
        className={`${styles.sticker} ${styles.stickerLemata}`}
        animate={floatAnimation(0, 4, -15)}
      >
        {/* Placeholder geometric logo */}
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10 L90 40 L50 90 L10 40 Z" fill="#000" />
          <path d="M50 10 L50 90 M10 40 L90 40 M30 25 L70 65 M70 25 L30 65" stroke="#FFF" strokeWidth="4" />
        </svg>
      </motion.div>

      {/* Pink Striped Sticker */}
      <motion.div 
        className={`${styles.sticker} ${styles.stickerStriped}`}
        animate={floatAnimation(1, 5, -20)}
        style={{ transform: 'rotate(-25deg)' }}
      />

      {/* Red Circle Sticker */}
      <motion.div 
        className={`${styles.sticker} ${styles.stickerRedCircle}`}
        animate={floatAnimation(0.5, 4.5, 15)}
      >
        <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          {/* Stick figure */}
          <circle cx="40" cy="25" r="8" />
          <path d="M40 35 L40 60 M25 45 L55 45 M30 85 L40 60 L50 85" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          {/* Exclamation */}
          <path d="M75 20 L70 60 M75 20 L80 60 Z" />
          <circle cx="75" cy="75" r="6" />
        </svg>
      </motion.div>

      {/* Yellow Post-it Note */}
      <motion.div 
        className={`${styles.sticker} ${styles.stickerYellowNote}`}
        animate={floatAnimation(1.5, 6, -10)}
      >
        <h2 className={styles.yellowNoteText}>Our New<br />Site Is<br />Coming<br />Soon</h2>
      </motion.div>

      {/* Pink Pill Under Construction */}
      <motion.div 
        className={`${styles.sticker} ${styles.stickerPinkPill}`}
        animate={floatAnimation(0.2, 3.5, 10)}
      >
        Under<br />Construction
      </motion.div>

      {/* White Triangle */}
      <motion.div 
        className={`${styles.sticker} ${styles.stickerWhiteTriangle}`}
        animate={floatAnimation(2, 5, -12)}
      >
        <div className={styles.triangleText}>Be<br/>The First<br/>to Know!</div>
      </motion.div>

      {/* Navigation Link Stickers */}
      <motion.div animate={floatAnimation(0.5, 4, 15)} className={`${styles.sticker} ${styles.navStickerGrid}`}>
        <Link href="/grid" className={styles.navSticker}>Grid Archive</Link>
      </motion.div>

      <motion.div animate={floatAnimation(1.2, 5.5, -15)} className={`${styles.sticker} ${styles.navStickerList}`}>
        <Link href="/list" className={styles.navSticker}>List Index</Link>
      </motion.div>

      <motion.div animate={floatAnimation(0.8, 4.5, 20)} className={`${styles.sticker} ${styles.navStickerStudies}`}>
        <Link href="/studies" className={styles.navSticker}>View Studies</Link>
      </motion.div>

      {/* Yellow Warning */}
      <motion.div 
        className={`${styles.sticker} ${styles.stickerWarning}`}
        animate={floatAnimation(2.5, 5, 10)}
      >
        <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="30" r="10" fill="#000" />
          <path d="M50 45 L50 80 M35 60 L65 60 M35 95 L50 80 L65 95" stroke="#000" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>

    </div>
  );
}
