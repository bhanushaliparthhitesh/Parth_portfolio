import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Parth Bhanushali',
  description: 'Selected projects, design studies, and experiments by Parth Bhanushali.',
};

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
