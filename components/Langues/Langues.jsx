import React from "react";
import styles from "./Langues.module.css";

const Langues = () => {
  return (
    <div className={styles.container}>
      <h3>Langues</h3>
      <ul>
        <li>Anglais : courant</li>
        <li>Allemand : débutant</li>
        <li>Espagnol : scolaire</li>
      </ul>
    </div>
  );
};

export default Langues;
