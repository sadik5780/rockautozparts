'use client';

import { motion } from 'framer-motion';
import Icon from '../Icon/Icon';
import EnquiryForm from '../EnquiryForm/EnquiryForm';
import { site } from '@/data/site';
import styles from './Hero.module.scss';

const badges = [
  { icon: 'check', label: 'Tested Parts' },
  { icon: 'truck', label: 'Fast Shipping' },
  { icon: 'shield', label: 'Warranty Included' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className={styles.hero} id="hero" aria-label="Hero">
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.bgImage} />
        <div className={styles.bgGradient} />
        <div className={styles.bgGrid} />
      </div>

      <div className={styles.inner}>
        <div className={styles.content}>
          <motion.span
            className={styles.eyebrow}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
          >
            <span className={styles.eyebrowDot} /> Trusted by 12,000+ drivers &amp; shops
          </motion.span>

          <motion.h1
            className={styles.headline}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={1}
          >
            Reliable <span className={styles.accent}>OEM &amp; Aftermarket</span>
            <br />
            Car &amp; Truck Parts.
          </motion.h1>

          <motion.p
            className={styles.subhead}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={2}
          >
            We help drivers and shops across the USA source tested engines, transmissions,
            suspension, and more for cars and trucks — VIN matched, warrantied, and ready to ship.
          </motion.p>

          <motion.ul
            className={styles.badges}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={3}
            aria-label="Trust badges"
          >
            {badges.map((b) => (
              <li key={b.label} className={styles.badge}>
                <span className={styles.badgeIcon}>
                  <Icon name={b.icon} size={16} stroke={2.6} />
                </span>
                {b.label}
              </li>
            ))}
          </motion.ul>

          <motion.div
            className={styles.ctas}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={4}
          >
            <a href="#enquiry" className={styles.primary}>
              Request a Part
              <Icon name="arrowRight" size={18} stroke={2.4} />
            </a>
            <a href={site.phoneHref} className={styles.secondary}>
              <Icon name="phone" size={18} stroke={2.4} />
              Call Now
            </a>
          </motion.div>

          <motion.div
            className={styles.stats}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={5}
          >
            <div className={styles.stat}>
              <span className={styles.statValue}>500K+</span>
              <span className={styles.statLabel}>Parts in Network</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statValue}>5 min</span>
              <span className={styles.statLabel}>Response Time</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statValue}>4.9★</span>
              <span className={styles.statLabel}>Customer Rating</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.formWrap}
          id="enquiry"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <EnquiryForm />
        </motion.div>
      </div>
    </section>
  );
}
