'use client';

import { useMemo, useState } from 'react';
import BlogCard from '@/components/studies/BlogCard';
import type { BlogPost } from '@/data/blogPosts';
import styles from '@/app/studies/studies.module.css';

export default function ArticleList({ posts }: { posts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = useMemo(() => Array.from(new Set(posts.map((post) => post.category))), [posts]);
  const visiblePosts = activeCategory === 'All'
    ? posts
    : posts.filter((post) => post.category === activeCategory);

  return (
    <section className={styles.articleSection} aria-labelledby="recent-studies-heading">
      <div className={styles.articleSectionHeader}>
        <h2 id="recent-studies-heading">The notebook</h2>
        <p className={styles.articleCount} aria-live="polite">
          {visiblePosts.length} {visiblePosts.length === 1 ? 'entry' : 'entries'}
        </p>
      </div>
      <div className={styles.categoryNav} role="group" aria-label="Filter studies by category">
        {['All', ...categories].map((category) => (
          <button
            className={styles.categoryButton}
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {visiblePosts.length > 0 ? (
        <div className={styles.blogGrid}>
          {visiblePosts.map((post) => <BlogCard key={post.slug} post={post} />)}
        </div>
      ) : (
        <p className={styles.emptyState}>There are no entries in this category yet.</p>
      )}
    </section>
  );
}
