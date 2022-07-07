import React from "react";
import Contact from "../Contact/Contact";
import Langues from "../Langues/Langues";
import styles from "./SideInfos.module.css";

const SideInfos = () => {
  return (
    <div className={styles.container}>
      <Contact />
      <Langues />
    </div>
  );
};

export default SideInfos;
