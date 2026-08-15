'use client';

import Image from 'next/image';
import styles from '@/app/studies/studies.module.css';
import { BlogPost } from '@/data/blogPosts';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className={styles.blogCard}>
      <div className={styles.cardImageWrapper}>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardMeta}>
          <span className={styles.categoryTag} style={{ marginBottom: 0 }}>
            {post.category}
          </span>
          <span className={styles.cardDate}>• {post.date}</span>
        </div>
        <h3 className={styles.cardTitle}>{post.title}</h3>
        <p className={styles.cardExcerpt}>{post.excerpt}</p>
      </div>
    </div>
  );
}
