'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '../Icon/Icon';
import { primaryNav } from '@/data/navigation';
import { site } from '@/data/site';
import styles from './Header.module.scss';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label={`${site.name} home`}>
          <Image
            src="/logo2.png"
            alt={site.name}
            width={866}
            height={288}
            className={styles.logoImg}
            priority
          />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={site.phoneHref} className={styles.callBtn}>
            <span className={styles.callIcon} aria-hidden="true">
              <Icon name="phone" size={16} stroke={2.4} />
            </span>
            <span className={styles.callText}>
              <span className={styles.callLabel}>Call Now</span>
              <span className={styles.callNumber}>{site.phone}</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
