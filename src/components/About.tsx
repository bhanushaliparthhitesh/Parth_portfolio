export default function About() {
  const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Next.js", 
    "Node.js", "Express", "HTML & CSS", "Tailwind CSS", 
    "PostgreSQL", "MongoDB", "Git & GitHub", "Figma"
  ];

  return (
    <section id="about" className="section container" style={{ padding: '8rem 2rem' }}>
      <div className="animate-fade-in delay-100">
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="text-gradient">01.</span> About Me
          <div style={{ height: '1px', background: 'var(--border-highlight)', flex: 1, maxWidth: '300px' }}></div>
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.7 }}>
            <p style={{ marginBottom: '1rem' }}>
              Hello! My name is Parth and I enjoy creating things that live on the internet. My interest in web development started back when I decided to build my first website, which taught me a lot about HTML & CSS!
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Fast-forward to today, and I've had the privilege of working on a variety of exciting projects. My main focus these days is building accessible, inclusive products and digital experiences that are both functional and visually stunning.
            </p>
            <p style={{ marginBottom: '2rem' }}>
              Here are a few technologies I've been working with recently:
            </p>
            
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(140px, 1fr))', gap: '0.5rem 1rem' }}>
              {skills.map((skill, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div style={{ position: 'relative', width: '100%', maxWidth: '400px', margin: '0 auto' }}>
            <div className="glass" style={{ width: '100%', aspectRatio: '1/1', position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-md)', zIndex: 10 }}>
              {/* Placeholder for an image */}
              <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, var(--bg-secondary), var(--bg-card))', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--text-secondary)' }}>
                <span>[ Profile Photo ]</span>
              </div>
            </div>
            {/* Decorative border behind */}
            <div style={{ position: 'absolute', top: '20px', left: '20px', right: '-20px', bottom: '-20px', border: '2px solid var(--accent-secondary)', borderRadius: 'var(--radius-md)', zIndex: 1, opacity: 0.5 }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
