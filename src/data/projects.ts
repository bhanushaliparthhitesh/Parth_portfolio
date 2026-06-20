export type Project = {
  id: number;
  label: string;
  title: string;
  image: string;
  year: string;
  category: string;
};

export const projects: Project[] = [
  {
    id: 1,
    label: "L'OR BARISTA",
    title: "Make a coffee maker personal.",
    image: "/shows/tenet-grid.jpg",
    year: "2025",
    category: "Product Experience"
  },
  {
    id: 2,
    label: "NATIVE",
    title: "The future of sustainable footwear.",
    image: "/shows/hailmary-poster.jpg",
    year: "2024",
    category: "E-Commerce"
  },
  {
    id: 3,
    label: "MODERN",
    title: "Reimagining the luxury retail space.",
    image: "/shows/from-poster-v2.jpg",
    year: "2024",
    category: "Brand Identity"
  },
  {
    id: 4,
    label: "AESTHETICA",
    title: "Beauty driven by artificial intelligence.",
    image: "/shows/madgaon-poster.jpg",
    year: "2023",
    category: "Web Application"
  },
  {
    id: 5,
    label: "CHRONOS",
    title: "A timeless approach to time tracking.",
    image: "/shows/from-poster.jpg",
    year: "2023",
    category: "Productivity Tool"
  }
];
