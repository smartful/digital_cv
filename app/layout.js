import '@/styles/variables.css';
import '@/styles/globals.css';
import styles from '@/styles/Home.module.css';
import NavButton from '@/components/Button/NavButton';
import Header from '@/components/Header/Header';
import SideInfos from '@/components/SideInfos/SideInfos';

export const metadata = {
  title: {
    default: 'Rémi Rodrigues - Développeur React & Fullstack',
    template: '%s | Rémi Rodrigues',
  },
  description:
    'CV digital de Rémi Rodrigues, développeur frontend et fullstack spécialisé React, TypeScript, Node.js et applications web.',
  metadataBase: new URL('https://remirodrigues.netlify.app'),
  alternates: {
    canonical: '/',
  },
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-theme="light">
      <body>
        <Header />
        <div className={styles.bodyWrapper}>
          <SideInfos />
          <div className={styles.container}>
            <div className={styles.buttonWrapper}>
              <NavButton href="/">Profil</NavButton>
              <NavButton href="/links">Liens</NavButton>
              <NavButton href="/background">Formation</NavButton>
              <NavButton href="/experiences">Expériences</NavButton>
              <NavButton href="/projects">Projets</NavButton>
            </div>

            <div className={styles.contentWrapper}>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
