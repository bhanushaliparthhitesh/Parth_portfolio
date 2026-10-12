'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import styles from '@/app/studies/studies.module.css';

export default function BlogHero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const splitTitle = new SplitType(titleRef.current, { types: 'chars' });

    gsap.timeline()
      .fromTo(
      splitTitle.chars,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.02, ease: 'power3.out' }
      ).fromTo(
      subtitleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    );

    return () => splitTitle.revert();
  }, { scope: titleRef });

  return (
    <section className={styles.hero}>
      <div className={styles.heroArc} aria-hidden="true" />
      <p className={styles.heroEyebrow}>A journal of curiosity and practice</p>
      <h1 className={styles.heroTitle} ref={titleRef}>
        Studies & Learnings
      </h1>
      <p className={styles.heroSubtitle} ref={subtitleRef}>
        Notes from things I’m learning, experiments I’m trying, and ideas worth documenting along the way.
      </p>
    </section>
  );
}
