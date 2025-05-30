import "../styles/variables.css";
import "../styles/globals.css";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import SideInfos from "../components/SideInfos/SideInfos";

export const metadata = {
  title: {
    default: "Digital CV",
    template: "%s | Digital CV",
  },
  description: "curriculum vitae numérique",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <div className={styles.bodyWrapper}>
          <SideInfos />
          <div className={styles.container}>
            <div className={styles.buttonWrapper}>
              <Link href={`/background`}>
                <Button>Formation</Button>
              </Link>
              <Link href={`/experiences`}>
                <Button>Expériences</Button>
              </Link>
            </div>

            <div className={styles.contentWrapper}>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
