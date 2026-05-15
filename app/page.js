import styles from '@/styles/Home.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Développeur React, TypeScript et Node.js orienté produit
      </div>

      <p>
        Ingénieur logiciel frontend / fullstack, j'interviens sur des applications web métier, des backoffices,
        des interfaces React complexes et des architectures fullstack. Mon parcours combine presse, streaming,
        santé, industrie, mobilité et projets personnels en intelligence artificielle.
      </p>

      <p>
        Habitué aux contextes clients, aux produits internes et aux bases de code existantes, je peux auditer,
        maintenir, migrer et développer des fonctionnalités avec une attention forte à la qualité d'usage et à la
        lisibilité technique.
      </p>

      <p>
        Aujourd'hui, je cherche surtout des sujets frontend ou fullstack autour de React, TypeScript, Node.js,
        modernisation d'applications, conception produit et intégration d'outils IA lorsque le besoin métier le justifie.
      </p>

      <div className={styles.highlights} aria-label="Points clés du profil">
        <article>
          <strong>10+ ans</strong>
          <span>développement web et logiciel</span>
        </article>
        <article>
          <strong>React / TypeScript</strong>
          <span>interfaces produit et backoffices</span>
        </article>
        <article>
          <strong>IA appliquée</strong>
          <span>PyTorch, LSTM, CNN et veille modèles génératifs</span>
        </article>
      </div>
    </div>
  );
}
