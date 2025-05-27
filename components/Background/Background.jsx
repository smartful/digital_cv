import React, { Fragment } from "react";
import styles from "./Background.module.css";
import education from "@/data/education.json";

const Background = () => {
  return (
    <Fragment>
      <h1>Formation</h1>

      {education.map(({ institution, location, degree, period }) => (
        <div key={institution} className={styles.school}>
          <div className={styles.institution}>
            <h2>{institution}</h2>
            <h4>{location}</h4>
          </div>
          <h3>{degree}</h3>
          <h3>{period}</h3>
        </div>
      ))}
    </Fragment>
  );
};

export default Background;
