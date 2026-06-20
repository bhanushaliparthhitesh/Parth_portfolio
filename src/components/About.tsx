export default function About() {
  return (
    <section className="about container">
      <p className="about-text">
        I'm a Computer Engineer from Mumbai who grew up curious about how things work, now building things nobody asked for yet. I ship ML systems, full-stack products, and hardware firmware — I care just as much about the problem as I do about the solution. I'm a total obsessive: always asking why it exists, always shipping before I'm ready.
      </p>
      <div className="about-ctas">
        <a href="#projects" className="btn btn-dark">Projects</a>
        <a href="/Final-resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Resume</a>
      </div>
    </section>
  );
}
