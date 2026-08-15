import styles from './studies.module.css';
import { blogPosts } from '@/data/blogPosts';
import BlogHero from '@/components/studies/BlogHero';
import FeaturedPost from '@/components/studies/FeaturedPost';
import BlogCard from '@/components/studies/BlogCard';
import NewsletterSection from '@/components/studies/NewsletterSection';

export default function StudiesPage() {
  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];
  const gridPosts = blogPosts.filter(post => post.id !== featuredPost.id);

  return (
    <main className={styles.studiesMain}>
      <div className={styles.blogContainer}>
        <BlogHero />
        
        <FeaturedPost post={featuredPost} />
        
        <NewsletterSection />
        
        <div className={styles.blogGrid}>
          {gridPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
