'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../Icon/Icon';
import { site } from '@/data/site';
import styles from './MobileCallButton.module.scss';

export default function MobileCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.wrap}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href={site.phoneHref} className={styles.callBtn}>
            <span className={styles.iconWrap}>
              <span className={styles.pulse} aria-hidden="true" />
              <Icon name="phone" size={18} stroke={2.4} />
            </span>
            <span className={styles.text}>
              <strong className={styles.specialist}>Call Part Specialist</strong>
              <span className={styles.tap}>Tap to Call</span>
            </span>
            <span className={styles.arrow}>
              <Icon name="arrowRight" size={18} stroke={2.4} />
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
