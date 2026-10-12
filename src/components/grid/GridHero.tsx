"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import styles from '@/app/grid/grid.module.css';

interface Props {
  projectCount: number;
  categoryCount: number;
}

export default function GridHero({ projectCount, categoryCount }: Props) {
  useGSAP(() => {
    const heroChars = document.querySelectorAll(`.${styles.heroTitle} .char`);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(heroChars, { y: '0%' });
      return;
    }

    gsap.fromTo(heroChars, { y: '100%' }, {
      y: '0%',
      duration: 1,
      ease: "power4.out",
      stagger: 0.05,
      delay: 0.2
    });
  }, []);

  return (
    <section className={styles.heroSection} aria-labelledby="projects-heading">
      <div>
        <p className={styles.heroEyebrow}>
          {projectCount} projects <span aria-hidden="true">/</span> {categoryCount} categories
        </p>
        <h1 className={styles.heroTitle} id="projects-heading">
          <span className={styles.heroLine}>
            {Array.from("PROJECTS").map((character, index) => (
              <span
                className="char"
                key={`${character}-${index}`}
                style={{ display: 'inline-block' }}
              >
                {character}
              </span>
            ))}
          </span>
        </h1>
      </div>
      <div className={styles.heroCopy}>
        <p className={styles.heroDescription}>
          A collection of selected projects, design studies, and experiments. Open a project to explore its brief and the notes available so far.
        </p>
      </div>
    </section>
  );
}
