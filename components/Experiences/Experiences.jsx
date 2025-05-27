import React, { Fragment } from "react";
import styles from "./Experiences.module.css";
import experiences from "@/data/experiences.json";

const Experiences = () => {
  return (
    <Fragment>
      <h1>Expériences professionnelles</h1>
      {experiences.map(experience => (
        <article key={`${experience.company}-${experience.period}`} className={styles.experience}>
          <header className={styles.company}>
            <h2>{experience.company}</h2>
            <h4>{experience.location}</h4>
          </header>

          <h3>{experience.role}</h3>

          <div className={styles.date}>
            <time>{experience.period}</time>
            <div className={styles.badge}>{experience.duration}</div>
          </div>

          <p>{experience.summary}</p>

          <ul className={styles.missions}>
            {experience.missions.map(item => <li key={item}>{item}</li>)}
          </ul>

          <h5>Environnement technique</h5>
          <div className={styles.tech}>{experience.tech.join(" · ")}</div>
        </article>
      ))}
    </Fragment>
  );
};

export default Experiences;
