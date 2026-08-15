import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import styles from './article.module.css';

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Generate the drop cap text if it's the first paragraph
  const renderContent = () => {
    if (!post.content) return <p className={styles.articleBody}>{post.excerpt}</p>;

    return post.content.map((block, index) => {
      if (block.type === 'heading') {
        return <h2 key={index}>{block.text}</h2>;
      }
      
      if (block.type === 'paragraph' && index === 0) {
        // Drop cap logic for the first paragraph
        const firstLetter = block.text.charAt(0);
        const restOfText = block.text.slice(1);
        return (
          <p key={index}>
            <span className={styles.dropCap}>{firstLetter}</span>
            {restOfText}
          </p>
        );
      }
      
      return <p key={index}>{block.text}</p>;
    });
  };

  return (
    <main className={styles.articleMain}>
      <Link href="/studies" className={styles.backButton}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back
      </Link>

      <article className={styles.articleContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.coverWrapper}>
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className={styles.coverImage}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.contentWrapper}>
            <header className={styles.articleHeader}>
              <span className={styles.articleCategory}>{post.category}</span>
              <h1 className={styles.articleTitle}>{post.title}</h1>
              <div className={styles.articleMeta}>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </header>

            <div className={styles.articleBody}>
              {renderContent()}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
