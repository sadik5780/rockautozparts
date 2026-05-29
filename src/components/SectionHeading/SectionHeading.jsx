'use client';

import { motion } from 'framer-motion';
import styles from './SectionHeading.module.scss';

export default function SectionHeading({ eyebrow, title, accent, sub, align = 'center' }) {
  return (
    <div className={`${styles.head} ${styles[align]}`}>
      {eyebrow && (
        <motion.span
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.eyebrowBar} aria-hidden="true" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        {title} {accent && <span className={styles.accent}>{accent}</span>}
      </motion.h2>
      {sub && (
        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
