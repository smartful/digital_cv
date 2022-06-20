import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>Name : Mike Field</li>
        <li>E-Mail : mike_field@machin.com</li>
        <li>Tel : 06 38 69 69 69</li>
      </ul>
    </div>
  );
};

export default Contact;
