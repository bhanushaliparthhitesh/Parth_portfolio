"use client";

import styles from '@/app/grid/grid.module.css';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function GridHero() {
  useGSAP(() => {
    const heroChars = document.querySelectorAll(`.${styles.heroTitle} .char`);
    gsap.to(heroChars, {
      y: '0%',
      duration: 1,
      ease: "power4.out",
      stagger: 0.05,
      delay: 0.2
    });
  }, []);

  return (
    <section className={styles.heroSection}>
      <div>
        <h1 className={styles.heroTitle}>
          <span className="line" style={{ display: 'inline-block', overflow: 'hidden', padding: '0.4em 0', margin: '-0.4em 0' }}>
            <span className="char" style={{ display: 'inline-block', transform: 'translateY(100%)' }}>G</span>
            <span className="char" style={{ display: 'inline-block', transform: 'translateY(100%)' }}>R</span>
            <span className="char" style={{ display: 'inline-block', transform: 'translateY(100%)' }}>I</span>
            <span className="char" style={{ display: 'inline-block', transform: 'translateY(100%)' }}>D</span>
          </span>
        </h1>
      </div>
      <div>
        <p className={styles.heroDescription}>
          This is an exploratory digital archive. A living museum of creative experiments, interactions, motion design, and graphic explorations. There is no guided narrative here—you dictate your own journey through density and visual variety.
        </p>
      </div>
    </section>
  );
}
