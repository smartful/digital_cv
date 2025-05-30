import styles from "./Experiences.module.css";

const Experiences = ({ company, period, location, role, duration, summary, missions, tech}) => {
  return (
        <article className={styles.experience}>
          <header className={styles.company}>
            <h2>{company}</h2>
            <h4>{location}</h4>
          </header>

          <h3>{role}</h3>

          <div className={styles.date}>
            <time>{period}</time>
            <div className={styles.badge}>{duration}</div>
          </div>

          <p>{summary}</p>

          <ul className={styles.missions}>
            {missions.map(item => <li key={item}>{item}</li>)}
          </ul>

          <h5>Environnement technique</h5>
          <div className={styles.tech}>{tech.join(" · ")}</div>
        </article>
  );
};

export default Experiences;
