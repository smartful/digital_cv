import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h3>Informations</h3>
      <ul>
        <li>Nom : Rémi Matthieu RODRIGUES</li>
        <li>Nationnalité : française </li>
      </ul>
    </div>
  );
};

export default Contact;
