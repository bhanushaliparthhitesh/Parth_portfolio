import styles from "./Skills.module.css";

const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend Development",
    skills: ["React", "Next.js", "HTML", "CSS"],
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "FastAPI"],
  },
  {
    category: "Databases & Developer Tools",
    skills: ["MongoDB", "PostgreSQL", "Docker", "Railway", "Git", "GitHub"],
  },
  {
    category: "Machine Learning & Data",
    skills: ["PyTorch", "Scikit-learn", "Stable-Baselines3", "MLflow", "NumPy", "Pandas"],
  },
  {
    category: "AI & Agent Systems",
    skills: ["LangChain", "OpenAI API", "Sarvam AI", "MCP", "RAG"],
  },
];

export default function Skills() {
  return (
    <section className={styles.skills} aria-labelledby="skills-heading">
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Tools &amp; systems</p>
          <h2 className={styles.title} id="skills-heading">Skills</h2>
        </div>
        <p className={styles.intro}>
          From shipping full-stack products to building machine learning systems
          and autonomous agents.
        </p>
      </div>

      <ul className={styles.groups}>
        {skillGroups.map(({ category, skills }) => (
          <li className={styles.group} key={category}>
            <h3 className={styles.category}>{category}</h3>
            <ul className={styles.skillList} aria-label={category}>
              {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
