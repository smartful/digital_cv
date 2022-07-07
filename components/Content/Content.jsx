import React, { useState } from "react";
import styles from "./Content.module.css";

const content = {
  background: 1,
  experiences: 2,
};

const Content = () => {
  const [display, setDisplay] = useState(content.background);

  const showBackground = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <button
          onClick={() => setDisplay(content.background)}
          disabled={display === content.background ? true : false}
        >
          Formation
        </button>
        <button
          onClick={() => setDisplay(content.experiences)}
          disabled={display === content.experiences ? true : false}
        >
          Expériences
        </button>
      </div>
    </div>
  );
};

export default Content;
