import { listData } from '@/data/listData';
import { projects } from '@/data/projects';

export type ProjectIndexCollection = 'Projects' | 'Contributions' | 'Portfolio';

export type ProjectIndexRecord = {
  id: string;
  name: string;
  collection: ProjectIndexCollection[];
  categories: string[];
  year?: number;
  dateLabel?: string;
  secondaryInfo?: string;
  secondaryLabel?: string;
  description?: string;
  status?: string;
  technologies?: string[];
  repositoryUrl?: string;
  liveDemoUrl?: string;
  image?: string;
};

// These URLs are populated only for exact repository names found in the account's
// public GitHub repository list. Private, misspelled, and unmatched names stay unlinked.
const verifiedRepositories: Record<string, string> = {
  parth_portfolio: 'https://github.com/bhanushaliparthhitesh/Parth_portfolio',
  webapp: 'https://github.com/bhanushaliparthhitesh/webapp',
  'bhanushaliparth.github.io': 'https://github.com/bhanushaliparthhitesh/bhanushaliparth.github.io',
  vercel: 'https://github.com/bhanushaliparthhitesh/vercel',
  girnariexports: 'https://github.com/bhanushaliparthhitesh/Girnariexports',
  edushare: 'https://github.com/bhanushaliparthhitesh/Edushare',
  wt: 'https://github.com/bhanushaliparthhitesh/wt',
  os: 'https://github.com/bhanushaliparthhitesh/os',
  'podman.io': 'https://github.com/bhanushaliparthhitesh/podman.io',
  bharatdashboard: 'https://github.com/bhanushaliparthhitesh/Bharatdashboard',
  forest_land_sdg_project: 'https://github.com/bhanushaliparthhitesh/Forest_land_Sdg_project',
  kaizen_ai: 'https://github.com/bhanushaliparthhitesh/kaizen_ai',
  lovemarkdown: 'https://github.com/bhanushaliparthhitesh/LoveMarkdown',
  markitdown_backend: 'https://github.com/bhanushaliparthhitesh/markitdown_backend',
  panel: 'https://github.com/bhanushaliparthhitesh/panel',
  day_management: 'https://github.com/bhanushaliparthhitesh/Day_management',
  'voice-notes': 'https://github.com/bhanushaliparthhitesh/Voice-notes',
  watch_party: 'https://github.com/bhanushaliparthhitesh/Watch_party',
  watch_party_frontend: 'https://github.com/bhanushaliparthhitesh/Watch_party_frontend',
  watch_party_backend: 'https://github.com/bhanushaliparthhitesh/Watch_party_backend',
  'python-cookiecutter': 'https://github.com/bhanushaliparthhitesh/python-cookiecutter',
  nlp_cia: 'https://github.com/bhanushaliparthhitesh/NLP_CIA',
  'nlp_cce-2': 'https://github.com/bhanushaliparthhitesh/NLP_CCE-2',
  animal_encyclopedia: 'https://github.com/bhanushaliparthhitesh/Animal_encyclopedia',
  'projectile-motion-virtual-lab': 'https://github.com/bhanushaliparthhitesh/Projectile-Motion-Virtual-Lab',
  'neuroinformatics-unit.github.io': 'https://github.com/bhanushaliparthhitesh/neuroinformatics-unit.github.io',
  python_journey: 'https://github.com/bhanushaliparthhitesh/Python_journey',
  bhanushaliparthhitesh: 'https://github.com/bhanushaliparthhitesh/bhanushaliparthhitesh',
  movement: 'https://github.com/bhanushaliparthhitesh/movement',
  datashuttle: 'https://github.com/bhanushaliparthhitesh/datashuttle',
  'blog-website': 'https://github.com/bhanushaliparthhitesh/blog-website',
  keploy: 'https://github.com/bhanushaliparthhitesh/keploy',
  'solana-com': 'https://github.com/bhanushaliparthhitesh/solana-com',
  'openfoodfacts-server': 'https://github.com/bhanushaliparthhitesh/openfoodfacts-server',
};

function repositoryFor(name: string) {
  return verifiedRepositories[name.trim().toLowerCase()];
}

function yearFrom(value?: string) {
  if (!value) return undefined;
  const match = value.match(/\b(19|20)\d{2}\b/);
  return match ? Number(match[0]) : undefined;
}

const projectSections = listData.filter((section) => (
  section.id === 'projects' || section.id === 'contributions'
));
const entries = new Map<string, ProjectIndexRecord>();

for (const section of projectSections) {
  const collection: ProjectIndexCollection = section.id === 'projects' ? 'Projects' : 'Contributions';

  for (const item of section.items) {
    const key = item.col1.trim().toLowerCase();
    const existing = entries.get(key);
    if (existing) {
      if (!existing.collection.includes(collection)) existing.collection.push(collection);
      if (!existing.categories.includes(collection)) existing.categories.push(collection);
      const context = item.col2.trim();
      if (context && !existing.secondaryInfo?.split(' · ').includes(context)) {
        existing.secondaryInfo = [existing.secondaryInfo, context].filter(Boolean).join(' · ');
        existing.secondaryLabel = 'Stack / context';
      }
      existing.repositoryUrl ||= repositoryFor(item.col1);
      continue;
    }

    entries.set(key, {
      id: `repo-${item.id}`,
      name: item.col1,
      collection: [collection],
      categories: [collection],
      year: yearFrom(item.col3),
      dateLabel: item.col3,
      secondaryInfo: item.col2.trim() || undefined,
      secondaryLabel: collection === 'Contributions' ? 'Contribution context' : 'Stack / note',
      repositoryUrl: repositoryFor(item.col1),
    });
  }
}

for (const project of projects) {
  const key = project.label.trim().toLowerCase();
  entries.set(key, {
    id: `portfolio-${project.id}`,
    name: project.label,
    collection: ['Portfolio'],
    categories: ['Portfolio', project.category],
    year: yearFrom(project.year),
    dateLabel: project.date || project.year,
    secondaryInfo: project.title,
    secondaryLabel: 'Project focus',
    description: project.shortDescription,
    status: project.status,
    technologies: project.details?.technologies,
    repositoryUrl: project.details?.repositoryUrl,
    liveDemoUrl: project.details?.liveDemoUrl,
    image: project.image,
  });
}

export const projectIndex: ProjectIndexRecord[] = Array.from(entries.values());

export const projectIndexCategories = Array.from(
  new Set(projectIndex.flatMap((entry) => entry.categories))
);
