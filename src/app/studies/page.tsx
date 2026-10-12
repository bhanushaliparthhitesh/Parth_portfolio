import type { Metadata } from 'next';
import styles from './studies.module.css';
import { blogPosts } from '@/data/blogPosts';
import BlogHero from '@/components/studies/BlogHero';
import FeaturedPost from '@/components/studies/FeaturedPost';
import ArticleList from '@/components/studies/ArticleList';
import NewsletterSection from '@/components/studies/NewsletterSection';

export const metadata: Metadata = {
  title: 'Studies | Parth Bhanushali',
  description: 'Notes on learning, experiments, technical explorations, and ideas worth documenting.',
};

export default function StudiesPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const gridPosts = blogPosts.filter((post) => post.slug !== featuredPost?.slug);

  return (
    <main className={styles.studiesMain}>
      <div className={styles.blogContainer}>
        <BlogHero />
        {featuredPost && (
          <section className={styles.featuredSection} aria-labelledby="featured-study-heading">
            <p className={styles.sectionEyebrow} id="featured-study-heading">Featured study</p>
            <FeaturedPost post={featuredPost} />
          </section>
        )}
        <ArticleList posts={gridPosts} />
        <NewsletterSection />
      </div>
    </main>
  );
}
