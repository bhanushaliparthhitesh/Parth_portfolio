import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/studies/studies.module.css';
import type { BlogPost } from '@/data/blogPosts';

export default function BlogCard({ post }: { post: BlogPost }) {
  const dateTime = post.date ? new Date(post.date).toISOString() : undefined;

  return (
    <Link href={`/studies/${post.slug}`} className={styles.blogCard}>
      {post.coverImage && <div className={styles.cardImageWrapper}>
        <Image
          src={post.coverImage}
          alt=""
          fill
          sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={styles.cardImage}
        />
      </div>}
      <div className={styles.cardContent}>
        <div className={styles.cardMeta}>
          <span>{post.category}</span>
          {dateTime && <time dateTime={dateTime}>{post.date}</time>}
          {post.readTime && <span>{post.readTime}</span>}
        </div>
        <h3 className={styles.cardTitle}>{post.title}</h3>
        <p className={styles.cardExcerpt}>{post.excerpt}</p>
        <span className={styles.cardReadLink}>Read article <span className={styles.readArrow} aria-hidden="true">→</span></span>
      </div>
    </Link>
  );
}
