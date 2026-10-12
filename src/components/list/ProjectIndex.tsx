'use client';

import { useCallback, useEffect, useMemo, useRef, useState, type RefObject } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { projectIndex, projectIndexCategories } from '@/data/projectIndex';
import type { ProjectIndexRecord } from '@/data/projectIndex';
import styles from '@/app/list/list.module.css';

type SortOrder = 'original' | 'title' | 'newest' | 'oldest';

function safeExternalUrl(value?: string) {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : undefined;
  } catch {
    return undefined;
  }
}

function ProjectDialog({
  project,
  onClose,
  triggerRef,
}: {
  project: ProjectIndexRecord;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const repositoryUrl = safeExternalUrl(project.repositoryUrl);
  const liveDemoUrl = safeExternalUrl(project.liveDemoUrl);

  useEffect(() => {
    const body = document.body;
    const root = document.documentElement;
    const trigger = triggerRef.current;
    const previousOverflow = body.style.overflow;
    const previousRootOverflow = root.style.overflow;
    body.style.overflow = 'hidden';
    root.style.overflow = 'hidden';
    const frame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      ));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) {
        event.preventDefault();
        dialogRef.current.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('keydown', handleKeyDown);
      body.style.overflow = previousOverflow;
      root.style.overflow = previousRootOverflow;
      trigger?.focus({ preventScroll: true });
    };
  }, [onClose, triggerRef]);

  return (
    <motion.div
      className={styles.dialogBackdrop}
      role="presentation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.2 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={dialogRef}
        className={styles.projectDialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        tabIndex={-1}
        initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
        transition={{ duration: reduceMotion ? 0 : 0.24 }}
      >
        <header className={styles.dialogHeader}>
          <div className={styles.dialogMeta}>
            <span>{project.categories.join(' · ')}</span>
            {project.dateLabel && <time dateTime={project.year?.toString()}>{project.dateLabel}</time>}
            {project.status && <span>{project.status}</span>}
          </div>
          <button
            ref={closeButtonRef}
            className={styles.dialogClose}
            type="button"
            onClick={onClose}
            aria-label={`Close ${project.name} details`}
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className={styles.dialogContent}>
          <h2 id="project-dialog-title">{project.name}</h2>
          {project.description && <p className={styles.dialogDescription}>{project.description}</p>}

          {project.secondaryInfo && (
            <section className={styles.dialogSection}>
              <h3>{project.secondaryLabel || 'Details'}</h3>
              <p>{project.secondaryInfo}</p>
            </section>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <section className={styles.dialogSection}>
              <h3>Technologies</h3>
              <p>{project.technologies.join(' · ')}</p>
            </section>
          )}

          {project.image && (
            <div className={styles.dialogImage}>
              <Image src={project.image} alt="" fill sizes="(max-width: 700px) 100vw, 680px" />
            </div>
          )}

          {(repositoryUrl || liveDemoUrl) ? (
            <div className={styles.dialogActions}>
              {repositoryUrl && <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">↗</span></a>}
              {liveDemoUrl && <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer">View live project <span aria-hidden="true">↗</span></a>}
            </div>
          ) : (
            <p className={styles.unavailableNote}>No public repository or live project link is recorded for this entry.</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectIndex() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All projects');
  const [sortOrder, setSortOrder] = useState<SortOrder>('original');
  const [selectedProject, setSelectedProject] = useState<ProjectIndexRecord | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeDialog = useCallback(() => setSelectedProject(null), []);

  const visibleProjects = useMemo(() => {
    const query = search.trim().toLowerCase();
    const filtered = projectIndex.filter((project) => {
      const matchesCategory = activeCategory === 'All projects' || project.categories.includes(activeCategory);
      const searchable = [
        project.name,
        project.description,
        project.secondaryInfo,
        project.secondaryLabel,
        project.status,
        ...project.categories,
        ...project.collection,
        ...(project.technologies || []),
      ].filter(Boolean).join(' ').toLowerCase();
      return matchesCategory && (!query || searchable.includes(query));
    });

    if (sortOrder === 'title') return filtered.sort((a, b) => a.name.localeCompare(b.name));
    if (sortOrder === 'newest') return filtered.sort((a, b) => (b.year ?? -Infinity) - (a.year ?? -Infinity));
    if (sortOrder === 'oldest') return filtered.sort((a, b) => (a.year ?? Infinity) - (b.year ?? Infinity));
    return filtered;
  }, [activeCategory, search, sortOrder]);

  const hasFilters = Boolean(search) || activeCategory !== 'All projects' || sortOrder !== 'original';

  const resetFilters = () => {
    setSearch('');
    setActiveCategory('All projects');
    setSortOrder('original');
  };

  return (
    <>
      <div className={styles.indexContent} aria-hidden={Boolean(selectedProject)} inert={Boolean(selectedProject)}>
        <section className={styles.heroSection} aria-labelledby="list-title">
          <div>
            <p className={styles.heroEyebrow}>A working archive</p>
            <h1 className={styles.heroTitle} id="list-title">Project Index</h1>
          </div>
          <div className={styles.heroIntroBlock}>
            <p className={styles.heroIntro}>A broader directory of projects, experiments, and open-source contributions. Browse the collection or search by name, category, or stack.</p>
            <p className={styles.projectCount}><strong>{projectIndex.length}</strong> entries in the index</p>
          </div>
        </section>

        <section className={styles.directory} aria-label="Project directory">
          <div className={styles.toolbar}>
            <div className={styles.searchWrap}>
              <label htmlFor="project-search">Search the index</label>
              <div className={styles.searchControl}>
                <input
                  id="project-search"
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Project, technology, or category"
                  autoComplete="off"
                />
                {search && <button type="button" onClick={() => setSearch('')} aria-label="Clear search">×</button>}
              </div>
            </div>
            <div className={styles.sortWrap}>
              <label htmlFor="project-sort">Sort</label>
              <select id="project-sort" value={sortOrder} onChange={(event) => setSortOrder(event.target.value as SortOrder)}>
                <option value="original">Original order</option>
                <option value="title">Title A–Z</option>
                <option value="newest">Newest year</option>
                <option value="oldest">Oldest year</option>
              </select>
            </div>
          </div>

          <div className={styles.filterBar} role="group" aria-label="Filter projects by category">
            {['All projects', ...projectIndexCategories].map((category) => (
              <button
                type="button"
                key={category}
                aria-pressed={activeCategory === category}
                className={`${styles.categoryFilter} ${activeCategory === category ? styles.categoryActive : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className={styles.resultBar} aria-live="polite">
            <p><strong>{visibleProjects.length}</strong> {visibleProjects.length === 1 ? 'result' : 'results'}</p>
            {hasFilters && <button type="button" onClick={resetFilters}>Clear filters</button>}
          </div>

          {visibleProjects.length ? (
            <div className={styles.projectRows}>
              {visibleProjects.map((project) => (
                <article className={styles.projectRow} key={project.id}>
                  <button
                    className={styles.rowDetailsButton}
                    type="button"
                    onClick={(event) => {
                      triggerRef.current = event.currentTarget;
                      setSelectedProject(project);
                    }}
                    aria-label={`Open details for ${project.name}`}
                  >
                    <span className={styles.rowTitle}>{project.name}</span>
                    {(project.description || project.secondaryInfo) && (
                      <span className={styles.rowSummary}>{project.description || project.secondaryInfo}</span>
                    )}
                  </button>
                  <div className={styles.rowMeta}>
                    <span className={styles.rowCategory}>{project.categories.join(' · ')}</span>
                    {project.dateLabel && <time dateTime={project.year?.toString()}>{project.dateLabel}</time>}
                  </div>
                  <div className={styles.rowAction}>
                    {safeExternalUrl(project.repositoryUrl) ? (
                      <a href={safeExternalUrl(project.repositoryUrl)} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name} repository in a new tab`}>
                        Repository <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <button type="button" onClick={(event) => {
                        triggerRef.current = event.currentTarget;
                        setSelectedProject(project);
                      }}>
                        Details <span aria-hidden="true">→</span>
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState} role="status">
              <h2>No matching projects</h2>
              <p>Try a different search or clear the selected filters.</p>
              <button type="button" onClick={resetFilters}>Reset index</button>
            </div>
          )}
        </section>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDialog
            key={selectedProject.id}
            project={selectedProject}
            onClose={closeDialog}
            triggerRef={triggerRef}
          />
        )}
      </AnimatePresence>
    </>
  );
}
