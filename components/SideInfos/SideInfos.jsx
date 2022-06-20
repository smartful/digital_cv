import React from "react";
import Contact from "../Contact/Contact";
import styles from "./SideInfos.module.css";

const SideInfos = () => {
  return (
    <div className={styles.container}>
      <Contact />
    </div>
  );
};

export default SideInfos;
