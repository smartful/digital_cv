import Link from 'next/link';
import '@/styles/variables.css';
import '@/styles/globals.css';
import styles from '@/styles/Home.module.css';
import NavButton from '@/components/Button/NavButton';
import Header from '@/components/Header/Header';
import SideInfos from '@/components/SideInfos/SideInfos';

export const metadata = {
  title: {
    default: 'Digital CV',
    template: '%s | Digital CV',
  },
  description: 'curriculum vitae numérique',
  icons: { icon: '/favicon.ico' },
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
              <NavButton href="/background">Formation</NavButton>
              <NavButton href="/experiences">Expériences</NavButton>
            </div>

            <div className={styles.contentWrapper}>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
