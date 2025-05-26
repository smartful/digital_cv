import styles from "../styles/Home.module.css";
import SideInfos from "../components/SideInfos/SideInfos";
import Content from "../components/Content/Content";

export default function HomePage() {
  return (
    <div className={styles.bodyWrapper}>
      <SideInfos />
      <Content />
    </div>
  );
}
