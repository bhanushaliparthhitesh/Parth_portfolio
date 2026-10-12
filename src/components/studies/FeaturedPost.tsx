import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/studies/studies.module.css';
import type { BlogPost } from '@/data/blogPosts';

export default function FeaturedPost({ post }: { post: BlogPost }) {
  if (!post) return null;
  const dateTime = post.date ? new Date(post.date).toISOString() : undefined;

  return (
    <Link href={`/studies/${post.slug}`} className={styles.featuredPost}>
      <div className={styles.featuredContent}>
        <span className={styles.categoryTag}>{post.category}</span>
        <h2 className={styles.featuredTitle}>{post.title}</h2>
        <p className={styles.featuredExcerpt}>{post.excerpt}</p>
        <div className={styles.featuredMeta}>
          {dateTime && <time dateTime={dateTime}>{post.date}</time>}
          {post.date && post.readTime && <span aria-hidden="true">·</span>}
          {post.readTime && <span>{post.readTime}</span>}
        </div>
        <span className={styles.readLink}>Read the study <span className={styles.readArrow} aria-hidden="true">→</span></span>
      </div>
      {post.coverImage && <div className={styles.featuredImageWrapper}>
        <Image
          src={post.coverImage}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 55vw"
          className={styles.featuredImage}
          priority
        />
      </div>}
    </Link>
  );
}
