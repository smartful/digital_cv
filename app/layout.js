import "../styles/variables.css";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";

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
      <body className={styles.container}>
        <Header />
        {children}
      </body>
    </html>
  );
}
