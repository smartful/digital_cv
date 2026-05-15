import React from "react";
import styles from "./Langues.module.css";

const Langues = () => {
  return (
    <div className={styles.container}>
      <h3>Langues</h3>
      <ul>
        <li>Anglais : B2, BEC Vantage</li>
        <li>Allemand : A2, BULATS</li>
        <li>Espagnol : bases</li>
      </ul>
    </div>
  );
};

export default Langues;
