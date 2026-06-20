'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import styles from '@/app/studies/studies.module.css';
import { Project } from '@/data/projects';

export default function ProjectSection({ project, index }: { project: Project, index: number }) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const imageWrapper = imageWrapperRef.current;
    const image = imageRef.current;
    const title = titleRef.current;
    const meta = metaRef.current;

    if (!section || !imageWrapper || !image || !title || !meta) return;

    // Split text for title
    const splitTitle = new SplitType(title, { types: 'words,chars' });

    // Timeline for section reveal
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
      }
    });

    // Image reveal (clip-path and un-blur)
    tl.to(imageWrapper, {
      clipPath: 'inset(0% 0 0 0)',
      duration: 1.2,
      ease: 'power3.inOut'
    }, 0)
    .to(image, {
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 1.4,
      ease: 'power3.out'
    }, 0.2)
    // Staggered Title words
    .fromTo(splitTitle.words, {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.05,
      ease: 'power3.out'
    }, 0.4)
    // Meta fade in
    .to(meta, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out'
    }, 0.8);

    // Image Parallax Effect (scrubbing)
    gsap.to(image, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // Mouse magnetic effect on image
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = imageWrapper.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) * 0.05; // limit max movement
      const y = (e.clientY - top - height / 2) * 0.05;

      gsap.to(image, {
        x,
        y,
        duration: 1,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(image, {
        x: 0,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      });
    };

    imageWrapper.addEventListener('mousemove', handleMouseMove);
    imageWrapper.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      splitTitle.revert();
      imageWrapper.removeEventListener('mousemove', handleMouseMove);
      imageWrapper.removeEventListener('mouseleave', handleMouseLeave);
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.projectSection}>
      <div className={styles.projectImageWrapper} ref={imageWrapperRef}>
        <div className={styles.projectImageInner} ref={imageInnerRef}>
          <Image 
            ref={imageRef}
            src={project.image}
            alt={project.title}
            fill
            sizes="45vw"
            className={styles.projectImage}
            priority={index === 0}
          />
        </div>
      </div>
      
      <div className={styles.projectContent}>
        <div className={styles.projectLabel}>{project.label}</div>
        <h2 className={styles.projectTitle} ref={titleRef}>
          {project.title}
        </h2>
        
        <div className={styles.projectMeta} ref={metaRef}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Year</span>
            <span className={styles.metaValue}>{project.year}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Category</span>
            <span className={styles.metaValue}>{project.category}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
