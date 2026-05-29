'use client';

import { motion } from 'framer-motion';
import Icon from '../Icon/Icon';
import SectionHeading from '../SectionHeading/SectionHeading';
import { features } from '@/data/features';
import styles from './WhyChooseUs.module.scss';

export default function WhyChooseUs() {
  return (
    <section className={styles.section} id="why" aria-label="Why choose us">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Why Rockautozparts"
          title="Built for Drivers,"
          accent="Trusted by Shops"
          sub="From the daily driver in the driveway to the work truck in the bay — we treat every part request like our own car is on the lift."
        />

        <ul className={styles.grid}>
          {features.map((f, i) => (
            <motion.li
              key={f.id}
              className={styles.card}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.cardInner}>
                <div className={styles.iconWrap}>
                  <Icon name={f.icon} size={28} stroke={2} />
                </div>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardText}>{f.description}</p>
                <span className={styles.cardNumber} aria-hidden="true">
                  0{i + 1}
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
