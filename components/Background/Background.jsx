import styles from "./Background.module.css";
import education from "@/data/education.json";

const Background = ({ institution, location, degree, period }) => {
  return (
    <div className={styles.school}>
      <div className={styles.institution}>
        <h2>{institution}</h2>
        <h4>{location}</h4>
      </div>
      <h3>{degree}</h3>
      <h3>{period}</h3>
    </div>
  );
};

export default Background;
