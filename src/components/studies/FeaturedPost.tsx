'use client';

import Image from 'next/image';
import styles from '@/app/studies/studies.module.css';
import { BlogPost } from '@/data/blogPosts';

export default function FeaturedPost({ post }: { post: BlogPost }) {
  if (!post) return null;

  return (
    <div className={styles.featuredPost}>
      <div className={styles.featuredContent}>
        <span className={styles.categoryTag}>{post.category}</span>
        <h2 className={styles.featuredTitle}>{post.title}</h2>
        <p className={styles.featuredExcerpt}>{post.excerpt}</p>
        <div className={styles.featuredMeta}>
          {post.date} • {post.readTime}
        </div>
      </div>
      <div className={styles.featuredImageWrapper}>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className={styles.featuredImage}
          priority
        />
      </div>
    </div>
  );
}
