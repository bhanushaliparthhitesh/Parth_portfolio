import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="section container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
      <div className="animate-fade-in" style={{ maxWidth: '800px', marginTop: '4rem' }}>
        <p style={{ color: 'var(--accent-secondary)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '1rem' }}>
          Hi, my name is
        </p>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', marginBottom: '0.5rem', lineHeight: 1.1 }}>
          Parth Bhanushali.
        </h1>
        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.1 }}>
          I build <span className="text-gradient">digital experiences.</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px', marginBottom: '3rem', lineHeight: 1.6 }}>
          I'm a software developer specializing in building exceptional web applications and digital products. I combine clean code with premium design to create engaging user experiences.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="#projects" className="btn btn-primary">
            View My Work
          </Link>
          <Link href="#contact" className="btn btn-secondary">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
