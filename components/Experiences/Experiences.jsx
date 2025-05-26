import React, { Fragment } from "react";
import styles from "./Experiences.module.css";

const Experiences = () => {
  return (
    <Fragment>
      <h1>Expériences professionnelles</h1>
      <div className={styles.experience}>
        <div className={styles.company}>
          <h2>Believe</h2>
          <h4>Saint Ouen, Île-de-France, France</h4>
        </div>
        <h3>Développeur front-end</h3>
        <div className={styles.date}>
          <h3>février 2022 - juillet 2022</h3>{" "}
          <div className={styles.badge}>6 mois</div>
        </div>
        <p>
          Believe est une entreprise française spécialisée dans l’accompagnement
          des artistes et labels.
          <br />
          Tribe Supply Chain `{'=>'}` Squad Content Ingestion
          <br />
          Refonte de l'outil interne VOOL utilisé par les Content Managers pour
          valider les albums.
        </p>
        <h5>Environnement technique</h5>
        <div className={styles.tech}>
          Javascript, React JS, Redux, Redux Saga, Storybook
        </div>
      </div>

      <div className={styles.experience}>
        <div className={styles.company}>
          <h2>Le Parisien</h2>
          <h4>Paris, Île-de-France, France</h4>
        </div>
        <h3>Développeur front-end</h3>
        <div className={styles.date}>
          <h3>janvier 2020 - novembre 2021</h3>{" "}
          <div className={styles.badge}>1 an et 6 mois</div>
        </div>
        <div>
          Direction Numérique
          <br />
          Tribe Edito `{'=>'}` Squad Acquisition
          <br />
          <details>
            <summary>Activités</summary>
            <ul>
              <li>
                Mise en œuvre de composant et plugins sur l'outil Arc Publishing
                (CMS pour les acteurs de la presse).
              </li>
              <ul>
                <li>
                  Pré-footer contextuel affichant les annonces légales, offres
                  d'emplois, annonces autos, ...
                </li>
                <li>
                  Logo de partenariat sur les articles (ex : Ligue 1 Uber Eats).
                </li>
                <li>
                  Bar de sous-navigation contextuelle (ex : Régionales, Euro
                  2020, JO 2020, ...)
                </li>
              </ul>
              <li>
                Migration des flux RSS et des sitemaps de Arc IO vers Arc
                Publishing.
              </li>
            </ul>
          </details>
        </div>
        <h5>Environnement technique</h5>
        <div className={styles.tech}>JavaScript, React.js, Node.js</div>
      </div>
    </Fragment>
  );
};

export default Experiences;
