'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';
import styles from './ThemeSwitcher.module.css';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={styles.placeholder} />;
  }

  const themes = [
    { name: 'System', value: 'system' },
    { name: 'Dark', value: 'dark' },
    { name: 'Light', value: 'light' },
    { name: 'Neon', value: 'neon' },
    { name: 'Ocean', value: 'ocean' },
    { name: 'Yellow', value: 'yellow' },
    { name: 'Gold', value: 'gold' },
  ];

  return (
    <div className={styles.container}>
      <button 
        className={styles.toggleBtn} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme menu"
      >
        <Palette size={20} />
      </button>
      
      {isOpen && (
        <div className={styles.dropdown}>
          {themes.map((t) => (
            <button
              key={t.value}
              className={`${styles.option} ${theme === t.value ? styles.active : ''}`}
              onClick={() => {
                setTheme(t.value);
                setIsOpen(false);
              }}
            >
              {t.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
