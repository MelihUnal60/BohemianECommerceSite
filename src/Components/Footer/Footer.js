import styles from './Footer.module.scss';
import React from 'react';

export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <div className={styles.footer}>
        Copyrigth {year} - BOHEMIAN SHOP ONLINE
    </div>
  )
}

