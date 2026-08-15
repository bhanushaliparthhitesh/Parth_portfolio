'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/studies/studies.module.css';
import { BlogPost } from '@/data/blogPosts';

export default function FeaturedPost({ post }: { post: BlogPost }) {
  if (!post) return null;

  return (
    <Link href={`/studies/${post.slug}`} className={styles.featuredPost} style={{ display: 'grid' }}>
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
    </Link>
  );
}
