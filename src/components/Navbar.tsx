import Link from 'next/link';

export default function Navbar() {
  return (
    <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50 }} className="glass-nav">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 2rem' }}>
        <Link href="/" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800 }}>
          Parth<span className="text-gradient">.</span>
        </Link>
        <nav>

          <ul style={{ display: 'flex', gap: '2rem', fontWeight: 500 }}>
            <li>
              <Link href="#about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
