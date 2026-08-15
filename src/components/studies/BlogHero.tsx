'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import styles from '@/app/studies/studies.module.css';

export default function BlogHero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    const splitTitle = new SplitType(titleRef.current, { types: 'chars' });
    
    const tl = gsap.timeline();

    tl.fromTo(
      splitTitle.chars,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.02, ease: 'power3.out' }
    ).fromTo(
      subtitleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    );

    return () => {
      splitTitle.revert();
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroArc}></div>
      <h1 className={styles.heroTitle} ref={titleRef}>
        Studies & Learnings
      </h1>
      <p className={styles.heroSubtitle} ref={subtitleRef}>
        A weekly deep dive into my creative process, design systems, generative art, and whatever else I'm breaking this week.
      </p>
    </section>
  );
}
