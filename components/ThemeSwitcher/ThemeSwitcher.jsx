'use client';

import { useEffect, useMemo, useState } from 'react';
import styles from './ThemeSwitcher.module.css';

const AVAILABLE_THEMES = [
  { id: 'light', label: 'Clair' },
  { id: 'dark', label: 'Sombre' },
];

const STORAGE_KEY = 'cv-theme';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  const safeTheme = useMemo(() => {
    return AVAILABLE_THEMES.some(({ id }) => id === theme) ? theme : 'light';
  }, [theme]);

  useEffect(() => {
    const storedTheme = localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = storedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-theme', safeTheme);
    localStorage.setItem(STORAGE_KEY, safeTheme);
  }, [mounted, safeTheme]);

  return (
    <div className={styles.wrapper} role="group" aria-label="Choisir un thème">
      {AVAILABLE_THEMES.map(({ id, label }) => (
        <button
          type="button"
          key={id}
          onClick={() => setTheme(id)}
          className={styles.option}
          data-active={safeTheme === id}
          aria-pressed={safeTheme === id}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
