import styles from '@/styles/Home.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Développeur React, TypeScript et Node.js orienté produit</div>

      <p>
        Ingénieur logiciel fullstack, je prends en charge l'intégration UI à partir de maquettes, la gestion rigoureuse
        de l'état global et la connexion aux services d'API backend. Ma double compétence en développement d'APIs me
        permet de concevoir des architectures complètes et d'assurer une synergie fluide entre le front et le back.
      </p>

      <p>
        Habitué aux contextes clients, aux produits internes et aux bases de code existantes, je peux auditer,
        maintenir, migrer et développer des fonctionnalités avec une attention forte à la qualité de la base de code,
        ainsi qu'à la lisibilité technique.
      </p>

      <p>
        Aujourd'hui, je cherche surtout des sujets fullstack autour de la modernisation d'applications, la conception
        produit et l'intégration d'outils IA lorsque le besoin métier le justifie.
      </p>

      <div className={styles.highlights} aria-label="Points clés du profil">
        <article>
          <strong>12+ ans</strong>
          <span>développement web et logiciel</span>
        </article>
        <article>
          <strong>React / TypeScript</strong>
          <span>interfaces produit et backoffices</span>
        </article>
        <article>
          <strong>Node.js / Express JS</strong>
          <span>base de données, traitement de données, API</span>
        </article>
      </div>
    </div>
  );
}
