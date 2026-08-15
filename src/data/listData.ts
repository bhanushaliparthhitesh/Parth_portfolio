export type ListColumn = string;

export type ListItem = {
  id: string;
  col1: string; // e.g. Title / Restaurant
  col2: string; // e.g. Genre / Cuisine
  col3: string; // e.g. Year / Location
  col4: { label: string; url: string }; // e.g. Trailer / Map link
};

export type ListSectionData = {
  id: string;
  title: string;
  columns: [ListColumn, ListColumn, ListColumn, ListColumn];
  items: ListItem[];
};

export const listData: ListSectionData[] = [
  {
    id: 'projects',
    title: 'Projects',
    columns: ['Title', 'Tech Stack', 'Year', 'Link'],
    items: [
      { id: 'proj1', col1: 'Parth_portfolio', col2: 'TypeScript, Next.js', col3: '2026', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj2', col1: 'webapp', col2: 'HTML', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj3', col1: 'bhanushaliparth.github.io', col2: 'HTML', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj4', col1: 'vercel', col2: 'HTML', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj5', col1: 'Girnariexports', col2: 'HTML, CSS, JS, GSAP', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj6', col1: 'Edushare', col2: 'HTML', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj7', col1: 'Zooologia', col2: 'HTML', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj8', col1: 'wt', col2: 'HTML', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj9', col1: 'os', col2: 'HTML', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj10', col1: 'Big4india', col2: 'HTML (Private)', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj11', col1: 'podman.io', col2: 'TypeScript', col3: '2026', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj12', col1: 'Bharatdashboard', col2: 'JavaScript', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj13', col1: 'Forest_land_Sdg_project', col2: 'Python', col3: '2026', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj14', col1: 'kaizen_ai', col2: 'AI chatbot', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj15', col1: 'LoveMarkdown', col2: 'PDF/DOCX to Markdown for LLMs', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj16', col1: 'markitdown_backend', col2: 'HTML', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj17', col1: 'panel', col2: 'Python', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj18', col1: 'Day_management', col2: 'TypeScript', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj19', col1: 'Voice-notes', col2: 'HTML, voice-to-text', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj20', col1: 'Watch_party', col2: 'TypeScript', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj21', col1: 'Watch_party_frontend', col2: 'TypeScript', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj22', col1: 'Watch_party_backend', col2: 'JavaScript', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj23', col1: 'python-cookiecutter', col2: 'Python', col3: '2026', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj24', col1: 'NLP_CIA', col2: 'HTML', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj25', col1: 'NLP_CCE-2', col2: '—', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj26', col1: 'Animal_encyclopedia', col2: 'HTML, Python', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj27', col1: 'Projectile-Motion-Virtual-Lab', col2: 'JavaScript, HTML5 Canvas', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj28', col1: 'neuroinformatics-unit.github.io', col2: 'HTML', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj29', col1: 'Python_journey', col2: 'Python', col3: '2026', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } },
      { id: 'proj30', col1: 'bhanushaliparthhitesh', col2: 'Profile repo', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me' } }
    ]
  },
  {
    id: 'contributions',
    title: 'Contributions',
    columns: ['Title', 'Context', 'Year', 'Link'],
    items: [
      { id: 'cont1', col1: 'neuroinformatics-unit.github.io', col2: 'Neuroinformatics Unit', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me+fork%3Atrue' } },
      { id: 'cont2', col1: 'python-cookiecutter', col2: 'Neuroinformatics Unit', col3: '2026', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me+fork%3Atrue' } },
      { id: 'cont3', col1: 'movement', col2: 'Neuroinformatics Unit — animal movement toolbox', col3: '2026', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me+fork%3Atrue' } },
      { id: 'cont4', col1: 'datashuttle', col2: 'Neuroinformatics Unit — project folder tool', col3: '2026', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me+fork%3Atrue' } },
      { id: 'cont5', col1: 'blog-website', col2: 'Keploy', col3: '2026', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me+fork%3Atrue' } },
      { id: 'cont6', col1: 'keploy', col2: 'Keploy — API/E2E testing platform', col3: '2026', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me+fork%3Atrue' } },
      { id: 'cont7', col1: 'homepage', col2: 'Kaizen-ml', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me+fork%3Atrue' } },
      { id: 'cont8', col1: 'New_frontend', col2: 'Kaizen-ml (Private)', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me+fork%3Atrue' } },
      { id: 'cont9', col1: 'Dashboard_ml', col2: 'Kaizen-ml', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me+fork%3Atrue' } },
      { id: 'cont10', col1: 'Practice_rounds', col2: 'CodeBharatog (Private) — hackathon practice', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me+fork%3Atrue' } },
      { id: 'cont11', col1: 'demo-repository', col2: 'CodeBharatog (Private)', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me+fork%3Atrue' } },
      { id: 'cont12', col1: 'solana-com', col2: 'Solana Foundation — solana.com website', col3: '2026', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me+fork%3Atrue' } },
      { id: 'cont13', col1: 'openfoodfacts-server', col2: 'Open Food Facts', col3: '2025', col4: { label: 'GitHub ↗', url: 'https://github.com/repos?q=owner%3A%40me+fork%3Atrue' } }
    ]
  },
  {
    id: 'films',
    title: 'Films',
    columns: ['Title', 'Genre', 'Year', 'Trailer'],
    items: [
      { id: 'f1', col1: 'Dune: Part Two', col2: 'Sci-Fi', col3: '2024', col4: { label: 'Trailer ↗', url: '#' } },
      { id: 'f2', col1: 'Past Lives', col2: 'Drama', col3: '2023', col4: { label: 'Trailer ↗', url: '#' } },
      { id: 'f3', col1: 'Blade Runner 2049', col2: 'Sci-Fi', col3: '2017', col4: { label: 'Trailer ↗', url: '#' } },
      { id: 'f4', col1: 'Parasite', col2: 'Thriller', col3: '2019', col4: { label: 'Trailer ↗', url: '#' } },
      { id: 'f5', col1: 'Interstellar', col2: 'Sci-Fi', col3: '2014', col4: { label: 'Trailer ↗', url: '#' } },
      { id: 'f6', col1: 'Whiplash', col2: 'Drama', col3: '2014', col4: { label: 'Trailer ↗', url: '#' } },
    ]
  },
  {
    id: 'tv',
    title: 'TV Series',
    columns: ['Title', 'Genre', 'Years', 'Watch'],
    items: [
      { id: 't1', col1: 'Succession', col2: 'Drama', col3: '2018–2023', col4: { label: 'HBO Max ↗', url: '#' } },
      { id: 't2', col1: 'Severance', col2: 'Sci-Fi', col3: '2022–', col4: { label: 'Apple TV+ ↗', url: '#' } },
      { id: 't3', col1: 'The Bear', col2: 'Drama', col3: '2022–', col4: { label: 'Hulu ↗', url: '#' } },
      { id: 't4', col1: 'Dark', col2: 'Sci-Fi', col3: '2017–2020', col4: { label: 'Netflix ↗', url: '#' } },
    ]
  },
  {
    id: 'performances',
    title: 'Performances',
    columns: ['Performance', 'Type', 'Year', 'Site'],
    items: [
      { id: 'p1', col1: 'Daft Punk: Alive', col2: 'Concert', col3: '2007', col4: { label: 'Archive ↗', url: '#' } },
      { id: 'p2', col1: 'Sleep No More', col2: 'Immersive', col3: '2023', col4: { label: 'Website ↗', url: '#' } },
      { id: 'p3', col1: 'Hans Zimmer Live', col2: 'Orchestral', col3: '2022', col4: { label: 'Tickets ↗', url: '#' } },
    ]
  },
  {
    id: 'dining',
    title: 'Dining',
    columns: ['Restaurant', 'Cuisine', 'Location', 'Maps'],
    items: [
      { id: 'd1', col1: 'Noma', col2: 'Nordic', col3: 'Copenhagen, DK', col4: { label: 'Google Maps ↗', url: '#' } },
      { id: 'd2', col1: 'Pujol', col2: 'Mexican', col3: 'Mexico City, MX', col4: { label: 'Google Maps ↗', url: '#' } },
      { id: 'd3', col1: 'Gaggan Anand', col2: 'Progressive Indian', col3: 'Bangkok, TH', col4: { label: 'Google Maps ↗', url: '#' } },
      { id: 'd4', col1: 'Atomix', col2: 'Korean', col3: 'New York, USA', col4: { label: 'Google Maps ↗', url: '#' } },
      { id: 'd5', col1: 'Osteria Francescana', col2: 'Italian', col3: 'Modena, IT', col4: { label: 'Google Maps ↗', url: '#' } },
    ]
  },
  {
    id: 'dwelling',
    title: 'Dwelling',
    columns: ['Property', 'Type', 'Location', 'Booking'],
    items: [
      { id: 'w1', col1: 'Aman Tokyo', col2: 'Hotel', col3: 'Tokyo, JP', col4: { label: 'Website ↗', url: '#' } },
      { id: 'w2', col1: 'Juvet Landscape Hotel', col2: 'Hotel', col3: 'Valldal, NO', col4: { label: 'Website ↗', url: '#' } },
      { id: 'w3', col1: 'The Krane', col2: 'Unique Stay', col3: 'Copenhagen, DK', col4: { label: 'Website ↗', url: '#' } },
    ]
  },
  {
    id: 'places',
    title: 'Places',
    columns: ['Place', 'Coordinates', 'Region', 'Map'],
    items: [
      { id: 'pl1', col1: 'Naoshima Art Island', col2: '34.455° N, 133.987° E', col3: 'Kagawa, JP', col4: { label: 'Google Maps ↗', url: '#' } },
      { id: 'pl2', col1: 'Salar de Uyuni', col2: '20.133° S, 67.625° W', col3: 'Daniel Campos, BO', col4: { label: 'Google Maps ↗', url: '#' } },
      { id: 'pl3', col1: 'Mount Bromo', col2: '7.942° S, 112.953° E', col3: 'East Java, ID', col4: { label: 'Google Maps ↗', url: '#' } },
      { id: 'pl4', col1: 'Zion Narrows', col2: '37.306° N, 112.947° W', col3: 'Utah, USA', col4: { label: 'Google Maps ↗', url: '#' } },
    ]
  }
];
