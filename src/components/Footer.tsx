export default function Footer() {
  return (
    <footer className="footer container">
      <div className="socials">
        <a href="https://www.instagram.com/parthhhhhh_06" target="_blank" rel="noreferrer" aria-label="Instagram">
          <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <a href="https://substack.com/@bhanushaliparth" target="_blank" rel="noreferrer" aria-label="Substack">
          <svg viewBox="0 0 24 24"><path d="M22.54 8.24H1.46V5.4h21.08v2.84zM1.46 10.81V24L12 18.11 22.54 24V10.81H1.46zM22.54 0H1.46v2.84h21.08V0z"></path></svg>
        </a>
        <a href="https://www.linkedin.com/in/parth-bhanushali06/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a href="/Final-resume.pdf" target="_blank" rel="noreferrer" aria-label="Resume" className="doc-icon">
          <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        </a>
      </div>
      <div className="copyright">&copy; 2025-2026 Parth Bhanushali.</div>
    </footer>
  );
}
