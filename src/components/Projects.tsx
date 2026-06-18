import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "Project Alpha",
      description: "A comprehensive web application built with Next.js and Node.js. Features real-time data synchronization and a responsive dashboard.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      link: "#",
      github: "#"
    },
    {
      title: "Project Beta",
      description: "An e-commerce platform with a custom CMS and seamless payment integration. Designed for high conversion and performance.",
      techStack: ["React", "Express", "MongoDB", "Stripe"],
      link: "#",
      github: "#"
    },
    {
      title: "Project Gamma",
      description: "A machine learning dashboard that visualizes complex datasets in an intuitive and interactive way.",
      techStack: ["Vue.js", "Python", "FastAPI", "D3.js"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="section container" style={{ padding: '8rem 2rem' }}>
      <div className="animate-fade-in delay-200">
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="text-gradient">02.</span> Some Things I've Built
          <div style={{ height: '1px', background: 'var(--border-highlight)', flex: 1, maxWidth: '300px' }}></div>
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {projects.map((project, idx) => (
            <div key={idx} className="glass project-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <span style={{ fontSize: '2.5rem', color: 'var(--accent-primary)' }}>📁</span>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Link href={project.github} className="nav-link" aria-label="GitHub Link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </Link>
                  <Link href={project.link} className="nav-link" aria-label="External Link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </Link>
                </div>
              </div>
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                {project.title}
              </h3>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', flex: 1, marginBottom: '2rem' }}>
                {project.description}
              </p>
              
              <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {project.techStack.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
