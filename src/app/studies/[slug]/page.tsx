import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogPosts';
import styles from './article.module.css';

type ArticlePageProps = { params: Promise<{ slug: string }> };

function getDateTime(date?: string) {
  if (!date) return undefined;
  const value = new Date(date);
  return Number.isNaN(value.getTime()) ? undefined : value.toISOString();
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);
  if (!post) return { title: 'Study not found | Parth Bhanushali' };

  return {
    title: `${post.title} | Studies`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      ...(post.coverImage ? { images: [post.coverImage] } : {}),
      type: 'article',
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const postIndex = blogPosts.findIndex((entry) => entry.slug === slug);
  if (postIndex < 0) notFound();

  const post = blogPosts[postIndex];
  const previousPost = blogPosts[postIndex - 1];
  const nextPost = blogPosts[postIndex + 1];
  const relatedPosts = blogPosts
    .filter((entry) => entry.slug !== post.slug && entry.category === post.category)
    .slice(0, 2);
  const dateTime = getDateTime(post.date);

  return (
    <main className={styles.articleMain}>
      <article className={styles.articleContainer}>
        <Link href="/studies" className={styles.backButton}>
          <span aria-hidden="true">←</span> All studies
        </Link>

        <header className={styles.articleHeader}>
          <p className={styles.articleCategory}>{post.category}</p>
          <h1 className={styles.articleTitle}>{post.title}</h1>
          {post.content && <p className={styles.articleDek}>{post.excerpt}</p>}
          <div className={styles.articleMeta}>
            {dateTime && <time dateTime={dateTime}>{post.date}</time>}
            {post.date && post.readTime && <span aria-hidden="true">·</span>}
            {post.readTime && <span>{post.readTime}</span>}
          </div>
        </header>

        {post.coverImage && (
          <figure className={styles.coverFigure}>
            <div className={styles.coverWrapper}>
              <Image
                src={post.coverImage}
                alt=""
                fill
                priority
                sizes="(max-width: 800px) 100vw, 900px"
                className={styles.coverImage}
              />
            </div>
          </figure>
        )}

        <div className={styles.articleBody}>
          {post.content?.length ? post.content.map((block, index) => {
            if (block.type === 'heading') {
              return <h2 key={`${block.type}-${index}`}>{block.text}</h2>;
            }
            return <p key={`${block.type}-${index}`}>{block.text}</p>;
          }) : (
            <>
              <p>{post.excerpt}</p>
              <p className={styles.previewNote}>This entry is currently available as an excerpt.</p>
            </>
          )}
        </div>

        {(previousPost || nextPost) && (
          <nav className={styles.articleNavigation} aria-label="Article navigation">
            {previousPost ? (
              <Link href={`/studies/${previousPost.slug}`} className={styles.articleNavLink}>
                <span>← Previous study</span><strong>{previousPost.title}</strong>
              </Link>
            ) : <span />}
            {nextPost && (
              <Link href={`/studies/${nextPost.slug}`} className={`${styles.articleNavLink} ${styles.nextLink}`}>
                <span>Next study →</span><strong>{nextPost.title}</strong>
              </Link>
            )}
          </nav>
        )}

        {relatedPosts.length > 0 && (
          <aside className={styles.relatedSection} aria-labelledby="related-heading">
            <h2 id="related-heading">More in {post.category}</h2>
            <ul>
              {relatedPosts.map((related) => (
                <li key={related.slug}>
                  <Link href={`/studies/${related.slug}`}>{related.title}<span aria-hidden="true"> ↗</span></Link>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </article>
    </main>
  );
}
