export type ProjectCategory = 'EXPERIENCE' | 'INTERACTION' | 'GRAPHIC' | 'MOTION' | 'DOODLE';

export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectDetails = {
  motivation?: string;
  approach?: string;
  technologies?: string[];
  keyFeatures?: string[];
  challenges?: string;
  learnings?: string;
  outcomes?: string;
  repositoryUrl?: string;
  liveDemoUrl?: string;
  images?: ProjectImage[];
};

export type Project = {
  id: number;
  label: string;
  title: string;
  image?: string;
  year: string;
  category: ProjectCategory;
  description?: string;
  date?: string;
  classification?: 'Concept' | 'Weekend experiment' | 'Study';
  details?: ProjectDetails;
};

export const projects: Project[] = [
  {
    id: 1,
    label: "L'OR BARISTA",
    title: "Make a coffee maker personal.",
    image: "/grid/cover-coffee.jpg",
    year: "2025",
    category: "EXPERIENCE",
    date: "Jan 2025",
    description: "An immersive digital showroom created to highlight the nuances of the Barista coffee machine. The experience allows users to virtually interact with the product through webGL."
  },
  {
    id: 2,
    label: "NATIVE",
    title: "The future of sustainable footwear.",
    image: "/grid/cover-footwear.jpg",
    year: "2024",
    category: "INTERACTION",
    date: "Nov 2024",
    description: "A complete redesign of the Native e-commerce platform focusing on micro-interactions and a highly fluid checkout flow."
  },
  {
    id: 3,
    label: "MODERN",
    title: "Reimagining the luxury retail space.",
    image: "/grid/cover-luxury.jpg",
    year: "2024",
    category: "GRAPHIC",
    date: "Aug 2024",
    description: "Typography-heavy posters and digital out-of-home campaigns for a modern luxury brand."
  },
  {
    id: 4,
    label: "AESTHETICA",
    title: "Beauty driven by artificial intelligence.",
    image: "/grid/cover-ai.jpg",
    year: "2023",
    category: "MOTION",
    date: "Dec 2023",
    description: "A series of procedural animations generated in Houdini and rendered in real-time, designed to mimic cellular structures."
  },
  {
    id: 5,
    label: "CHRONOS",
    title: "A timeless approach to time tracking.",
    image: "/blog/cover-dashboards-ml.jpg",
    year: "2023",
    category: "INTERACTION",
    date: "May 2023",
    description: "A conceptual productivity tool interface that uses spatial organization rather than lists.",
    classification: "Concept"
  },
  {
    id: 6,
    label: "EXPERIMENTAL 01",
    title: "Fluid Dynamics UI",
    year: "2025",
    category: "DOODLE",
    date: "Feb 2025",
    description: "A quick weekend experiment seeing if nav bars can behave like water.",
    classification: "Weekend experiment"
  },
  {
    id: 7,
    label: "BRAND REFRESH",
    title: "Minimalist Identity",
    year: "2022",
    category: "GRAPHIC",
    date: "Jan 2022",
    description: "Stripping away all color to rely entirely on stark black and white contrasts and brutalist typography."
  },
  {
    id: 8,
    label: "KINETIC",
    title: "Scroll-triggered typography",
    year: "2024",
    category: "MOTION",
    date: "Jul 2024",
    description: "Pushing the limits of GSAP ScrollTrigger to create an endless feeling typography loop."
  },
  {
    id: 9,
    label: "ARCHIVE 404",
    title: "Lost in the museum",
    year: "2023",
    category: "EXPERIENCE",
    date: "Mar 2023",
    description: "A 404 page that is actually a fully playable mini-game."
  },
  {
    id: 10,
    label: "SKETCH",
    title: "Daily UI 042",
    year: "2021",
    category: "DOODLE",
    date: "Oct 2021",
    description: "Just a quick sketch of a weather app interface.",
    classification: "Study"
  }
];

export const projectCategories = Array.from(
  new Set(projects.map((project) => project.category))
);
