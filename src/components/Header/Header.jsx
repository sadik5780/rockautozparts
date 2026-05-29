'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../Icon/Icon';
import { primaryNav } from '@/data/navigation';
import { site } from '@/data/site';
import styles from './Header.module.scss';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label={`${site.name} home`}>
          <span className={styles.logoMark} aria-hidden="true">
            <Icon name="gear" size={22} stroke={2.2} />
          </span>
          <span className={styles.logoText}>
            <span className={styles.logoBrand}>ROCKAUTOZ</span>
            <span className={styles.logoSub}>Parts.com</span>
          </span>
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
          <button
            type="button"
            className={styles.hamburger}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Icon name="menu" size={26} stroke={2.4} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className={styles.mobileMenuPanel}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className={styles.mobileMenuHeader}>
                <span className={styles.logoBrand}>ROCKAUTOZ</span>
                <button
                  type="button"
                  className={styles.closeBtn}
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <Icon name="close" size={26} stroke={2.4} />
                </button>
              </div>
              <nav className={styles.mobileNav} aria-label="Mobile">
                {primaryNav.map((item, idx) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.06 }}
                  >
                    {item.label}
                    <Icon name="arrowRight" size={20} stroke={2} />
                  </motion.a>
                ))}
              </nav>
              <div className={styles.mobileMenuFoot}>
                <a href={site.phoneHref} className={styles.mobileCall}>
                  <Icon name="phone" size={18} stroke={2.4} />
                  {site.phone}
                </a>
                <p className={styles.mobileSub}>{site.tagline}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
