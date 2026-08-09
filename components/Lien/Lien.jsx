import styles from './Lien.module.css';

const Lien = ({ label, link }) => {
  return (
    <a className={styles.tech} href={link} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
};

export default Lien;
