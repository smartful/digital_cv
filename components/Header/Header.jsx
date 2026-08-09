import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const Header = () => {
  return (
    <div className={styles.container}>
      <Link href={`/`}>
        <div className={styles.avatar}>
          <Image src="/images/photo_moi_cv.jpg" alt="Photo de profil" width={100} height={100} unoptimized />
        </div>
      </Link>

      <div className={styles.meta}>
        <h1 className={styles.title}>Ingénieur Logiciel Fullstack</h1>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
