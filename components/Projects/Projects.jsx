import styles from './Projects.module.css';

const Projects = ({ name, type, description, url, tech }) => {
  return (
    <article className={styles.project}>
      <p className={styles.type}>{type}</p>
      <h2>{name}</h2>
      <p>{description}</p>
      <div className={styles.tech}>{tech.join(' · ')}</div>
      {url ? (
        <a className={styles.link} href={url}>
          Voir le dépôt
        </a>
      ) : (
        <span className={styles.pending}>Présentation détaillée à compléter</span>
      )}
    </article>
  );
};

export default Projects;
