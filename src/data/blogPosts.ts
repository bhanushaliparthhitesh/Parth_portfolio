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
  content?: { type: 'paragraph' | 'heading'; text: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    id: 7,
    slug: 'weekly-learnings-1',
    title: 'Weekly Learnings #1: Dashboards, Models, and Turbochargers',
    excerpt: 'Between two BI tools, the first real steps into machine learning, and a random rabbit hole into turbochargers, here\'s what stuck with me this week.',
    category: 'Weekly Update',
    date: 'Aug 15, 2026',
    readTime: '5 min read',
    coverImage: '/blog/cover-dashboards-ml.jpg',
    featured: true,
    content: [
      { type: 'paragraph', text: 'This week was a mix of things I *have* to learn and things I *want* to learn — and honestly, that combination made it one of the more fun weeks in a while. Between two BI tools, the first real steps into machine learning, and a random rabbit hole into turbochargers, here\'s what stuck with me.' },
      { type: 'heading', text: 'Power BI: Getting My Hands Dirty with Dashboards' },
      { type: 'paragraph', text: 'I started building out actual sheets in Power BI this week instead of just watching tutorials. There\'s a real difference between knowing what a dashboard *should* look like and actually wiring up the data model behind it — getting tables to relate to each other properly, figuring out where a measure belongs versus a calculated column, and just spending time in the interface until it stops feeling foreign.' },
      { type: 'paragraph', text: 'The biggest shift for me was realizing that Power BI rewards planning your data structure *before* you touch the visuals. If the underlying model isn\'t clean, no amount of formatting fixes a report that\'s fundamentally confused about how its tables connect.' },
      { type: 'heading', text: 'Tableau: Same Job, Different Philosophy' },
      { type: 'paragraph', text: 'Since Power BI and Tableau are solving the same core problem — turning raw data into something people can actually read and act on — I picked up Tableau in parallel to see how the two compare.' },
      { type: 'paragraph', text: 'What stood out immediately is how different the *feel* is, even though the end goal is identical. Power BI leans more structured and model-first, while Tableau feels more visual and drag-and-drop from the start. Neither is "better" in some absolute sense — they just optimize for slightly different workflows. Having both in the toolkit feels less like redundancy and more like flexibility, since different teams and companies default to one or the other.' },
      { type: 'heading', text: 'Machine Learning Basics: Laying the Foundation' },
      { type: 'paragraph', text: 'This week was about the fundamentals — the stuff that everything else in ML gets built on top of. Nothing flashy yet, just making sure the core ideas (how models learn from data, what "training" actually means under the hood, the basic vocabulary) are solid before moving into anything more complex.' },
      { type: 'paragraph', text: 'It\'s tempting to want to skip ahead to the interesting stuff, but I\'ve learned enough times now that skipping the basics just means backtracking later. So this week was deliberately slow and foundational — building the base I can actually build on.' },
      { type: 'heading', text: 'The Detour: Turbochargers and Intakes' },
      { type: 'paragraph', text: 'And then there\'s the part of this week that had nothing to do with my degree at all: I went down a rabbit hole learning about turbo intakes and filters.' },
      { type: 'paragraph', text: 'This one\'s purely a passion thing. I got curious about how turbocharged engines actually breathe — how air gets pulled in, filtered, compressed, and pushed into the engine to squeeze out more power — and one video turned into an afternoon of reading about intake design and filter types. It\'s not going to show up on a resume, but it was a genuinely fun reminder that not everything you learn needs to have a direct payoff. Sometimes curiosity is the whole point.' },
      { type: 'heading', text: 'Takeaway' },
      { type: 'paragraph', text: 'Looking back at the week, the common thread across all four things — Power BI, Tableau, ML basics, and turbochargers — is that I learned best when I stopped trying to *understand* something and started trying to *build or explain* something with it. Dashboards, models, and even car engines all made more sense once I got hands-on instead of just reading about them.' },
      { type: 'paragraph', text: 'Onto week 2.' }
    ]
  },
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
    featured: false,
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
    coverImage: '/blog/cover-creative-coding.jpg',
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
    coverImage: '/blog/cover-typography.jpg',
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
    coverImage: '/blog/cover-figma-code.jpg',
    featured: false,
  },
];
