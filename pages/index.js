import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Header from "../components/Header/Header";
import SideInfos from "../components/SideInfos/SideInfos";
import Content from "../components/Content/Content";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Digital CV</title>
        <meta name="description" content="curriculum vitae numérique" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className={styles.bodyWrapper}>
        <SideInfos />
        <Content />
      </div>
    </div>
  );
}
