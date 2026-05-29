'use client';

import { motion } from 'framer-motion';
import Icon from '../Icon/Icon';
import { site } from '@/data/site';
import styles from './FinalCTA.module.scss';

export default function FinalCTA() {
  return (
    <section className={styles.section} id="warranty" aria-label="Get help finding the right part">
      <div className={styles.inner}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.accentBar} aria-hidden="true" />
          <div className={styles.content}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} /> Live Specialists Standing By
            </span>
            <h2 className={styles.headline}>
              Need Help Finding <br />
              <span className={styles.accent}>The Right Part?</span>
            </h2>
            <p className={styles.sub}>
              Talk to a US-based parts specialist or submit your vehicle details — most
              quotes come back within one business day.
            </p>

            <div className={styles.ctas}>
              <a href={site.phoneHref} className={styles.primary}>
                <Icon name="phone" size={18} stroke={2.4} />
                Call Now — {site.phone}
              </a>
              <a href="#enquiry" className={styles.secondary}>
                Request Quote
                <Icon name="arrowRight" size={18} stroke={2.4} />
              </a>
            </div>

            <div className={styles.trust}>
              <div className={styles.trustItem}>
                <Icon name="check" size={16} stroke={2.6} />
                Warranty backed
              </div>
              <div className={styles.trustItem}>
                <Icon name="check" size={16} stroke={2.6} />
                Fast shipping
              </div>
              <div className={styles.trustItem}>
                <Icon name="check" size={16} stroke={2.6} />
                No high-pressure sales
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
