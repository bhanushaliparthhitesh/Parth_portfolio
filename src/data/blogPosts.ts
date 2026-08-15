export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Learning' | 'Experience' | 'Weekly Update' | 'Deep Dive' | 'Insight';
  date: string;
  readTime: string;
  coverImage: string;
  featured: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'mastering-gsap-scroll-animations',
    title: 'Mastering GSAP Scroll Animations in Modern Web Design',
    excerpt:
      'A deep exploration of scroll-triggered animations using GSAP ScrollTrigger — from basic pin-and-scrub techniques to orchestrating complex, multi-layered timelines that feel cinematic.',
    category: 'Deep Dive',
    date: 'Aug 10, 2026',
    readTime: '8 min read',
    coverImage: '/blog/cover-gsap.jpg',
    featured: true,
  },
  {
    id: 2,
    slug: 'design-systems-that-scale',
    title: 'Building Design Systems That Actually Scale',
    excerpt:
      'What I learned from building a component library from scratch — token architecture, variant APIs, and the painful lessons of over-abstracting too early.',
    category: 'Learning',
    date: 'Aug 3, 2026',
    readTime: '6 min read',
    coverImage: '/blog/cover-design-system.jpg',
    featured: false,
  },
  {
    id: 3,
    slug: 'react-server-components-mental-model',
    title: 'React Server Components: A New Mental Model',
    excerpt:
      'Server components changed how I think about data fetching and rendering boundaries. Here\'s the mental model that finally made it click.',
    category: 'Insight',
    date: 'Jul 27, 2026',
    readTime: '7 min read',
    coverImage: '/blog/cover-rsc.jpg',
    featured: false,
  },
  {
    id: 4,
    slug: 'week-in-review-creative-coding',
    title: 'Week in Review: Creative Coding & Shader Experiments',
    excerpt:
      'This week I dove into fragment shaders for the first time. Built a couple of generative visuals, broke my GPU twice, and learned why math matters.',
    category: 'Weekly Update',
    date: 'Jul 20, 2026',
    readTime: '4 min read',
    coverImage: '/shows/madgaon-poster.jpg',
    featured: false,
  },
  {
    id: 5,
    slug: 'typography-on-the-web',
    title: 'Typography on the Web Is Still Broken',
    excerpt:
      'Variable fonts, optical sizing, fluid type scales — the tools are better than ever, yet most websites still get typography wrong. My notes on doing it right.',
    category: 'Experience',
    date: 'Jul 13, 2026',
    readTime: '5 min read',
    coverImage: '/shows/from-poster.jpg',
    featured: false,
  },
  {
    id: 6,
    slug: 'from-figma-to-code-workflow',
    title: 'My Figma-to-Code Workflow in 2026',
    excerpt:
      'How I bridge design and development without losing fidelity — auto-layout patterns, dev mode annotations, and the CSS tricks that make handoff painless.',
    category: 'Learning',
    date: 'Jul 6, 2026',
    readTime: '6 min read',
    coverImage: '/shows/tenet-grid.jpg',
    featured: false,
  },
];
