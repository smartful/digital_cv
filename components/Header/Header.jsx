import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Image
          src="/images/remi.jpg"
          alt="Photo de profil"
          width={100}
          height={100}
        />
      </div>
      <h1 className={styles.title}>Développeur Frontend React JS</h1>
    </div>
  );
};

export default Header;
