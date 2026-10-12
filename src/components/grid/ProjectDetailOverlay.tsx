'use client';

import { useEffect, useId, useRef, type RefObject } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import type { Project } from '@/data/projects';
import styles from '@/app/grid/grid.module.css';

interface Props {
  project: Project;
  returnFocusTo: RefObject<HTMLButtonElement | null>;
  onClose: () => void;
}

function safeExternalUrl(value?: string) {
  if (!value) return undefined;

  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : undefined;
  } catch {
    return undefined;
  }
}

export default function ProjectDetailOverlay({ project, returnFocusTo, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const overviewId = useId();
  const reduceMotion = useReducedMotion();
  const details = project.details;

  useEffect(() => {
    const body = document.body;
    const root = document.documentElement;
    const triggerElement = returnFocusTo.current;
    const previousBodyOverflow = body.style.overflow;
    const previousRootOverflow = root.style.overflow;

    body.style.overflow = 'hidden';
    root.style.overflow = 'hidden';

    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        event.preventDefault();
        dialogRef.current.focus();
      } else if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener('keydown', handleKeyDown);
      body.style.overflow = previousBodyOverflow;
      root.style.overflow = previousRootOverflow;
      triggerElement?.focus({ preventScroll: true });
    };
  }, [onClose, returnFocusTo]);

  const repositoryUrl = safeExternalUrl(details?.repositoryUrl);
  const liveDemoUrl = safeExternalUrl(details?.liveDemoUrl);
  const motionDuration = reduceMotion ? 0 : 0.25;
  const storySections: { heading: string; text?: string }[] = [
    { heading: 'Motivation', text: details?.motivation },
    { heading: 'Approach', text: details?.approach },
    { heading: 'Challenges', text: details?.challenges },
    { heading: 'What I learned', text: details?.learnings },
    { heading: 'Outcomes', text: details?.outcomes },
  ];

  return (
    <motion.div
      className={styles.overlayBackdrop}
      role="presentation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: motionDuration }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={dialogRef}
        className={styles.projectDialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={project.description ? overviewId : undefined}
        tabIndex={-1}
        initial={{ y: reduceMotion ? 0 : 20, scale: reduceMotion ? 1 : 0.985 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: reduceMotion ? 0 : 12, scale: reduceMotion ? 1 : 0.99 }}
        transition={{ duration: motionDuration, ease: 'easeOut' }}
      >
        <header className={styles.dialogHeader}>
          <div className={styles.dialogKicker}>
            <span>{project.category}</span>
            <span aria-hidden="true">/</span>
            <time dateTime={project.year}>{project.date || project.year}</time>
            {project.classification && <span className={styles.classification}>{project.classification}</span>}
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label={`Close details for ${project.label}`}
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className={styles.dialogContent}>
          <div className={styles.dialogTitleBlock}>
            <h2 className={styles.dialogTitle} id={titleId}>{project.label}</h2>
            <p className={styles.dialogSubtitle}>{project.title}</p>
          </div>

          {project.image && (
            <div className={styles.dialogImage}>
              <Image
                src={project.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                className={styles.dialogImageAsset}
                quality={75}
              />
            </div>
          )}

          {project.description && (
            <section className={styles.detailSection} aria-labelledby={overviewId}>
              <h3 id={overviewId}>Overview</h3>
              <p>{project.description}</p>
            </section>
          )}

          {storySections.map(({ heading, text }) => text && (
            <section className={styles.detailSection} key={heading}>
              <h3>{heading}</h3>
              <p>{text}</p>
            </section>
          ))}

          {details?.keyFeatures && details.keyFeatures.length > 0 && (
            <section className={styles.detailSection}>
              <h3>Key features</h3>
              <ul className={styles.detailList}>
                {details.keyFeatures.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </section>
          )}

          {details?.technologies && details.technologies.length > 0 && (
            <section className={styles.detailSection}>
              <h3>Technologies</h3>
              <ul className={styles.technologyList}>
                {details.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </section>
          )}

          {details?.images && details.images.length > 0 && (
            <div className={styles.detailGallery} role="group" aria-label="Project images">
              {details.images.map((image) => (
                <div className={styles.galleryImage} key={image.src}>
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 700px" />
                </div>
              ))}
            </div>
          )}

          {(repositoryUrl || liveDemoUrl) && (
            <div className={styles.projectLinks}>
              {repositoryUrl && <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">Repository <span aria-hidden="true">↗</span></a>}
              {liveDemoUrl && <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer">Live project <span aria-hidden="true">↗</span></a>}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
