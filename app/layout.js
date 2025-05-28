import "../styles/variables.css";
import "../styles/globals.css";
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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
