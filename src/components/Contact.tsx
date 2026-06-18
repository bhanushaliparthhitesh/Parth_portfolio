import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="section container" style={{ padding: '8rem 2rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <div className="animate-fade-in delay-300">
        <p style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '1rem' }}>
          03. What's Next?
        </p>
        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem' }}>
          Get In Touch
        </h2>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '3rem', lineHeight: 1.6 }}>
          My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you! I'm currently exploring new opportunities and open to exciting projects.
        </p>
        
        <Link href="mailto:hello@example.com" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
          Say Hello
        </Link>
      </div>
      
      <footer style={{ marginTop: '8rem', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link href="https://github.com" className="nav-link" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </Link>
          <Link href="https://linkedin.com" className="nav-link" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </Link>
          <Link href="https://twitter.com" className="nav-link" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </Link>
        </div>
        <p>Built with Next.js by Parth Bhanushali</p>
      </footer>
    </section>
  );
}
