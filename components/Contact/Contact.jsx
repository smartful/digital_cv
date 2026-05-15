import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h3>Informations</h3>
      <ul>
        <li>Nom : Rémi Matthieu RODRIGUES</li>
        <li>Nationalité : française</li>
        <li>
          Email : <a href="mailto:remi_rodrigues@hotmail.com">remi_rodrigues@hotmail.com</a>
        </li>
        <li>
          GitHub : <a href="https://github.com/smartful">smartful</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
