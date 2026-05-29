'use client';

import { motion } from 'framer-motion';
import Icon from '../Icon/Icon';
import SectionHeading from '../SectionHeading/SectionHeading';
import { testimonials } from '@/data/testimonials';
import styles from './Testimonials.module.scss';

function Stars({ count }) {
  return (
    <div className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`${styles.star} ${i < count ? styles.starFilled : ''}`}>
          <Icon name="star" size={16} stroke={1.5} />
        </span>
      ))}
    </div>
  );
}

function initials(name) {
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials" aria-label="Customer testimonials">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Real Customers"
          title="Mechanics & Drivers"
          accent="Who Came Back"
          sub="Repeat business is the only metric that matters in this industry. Here's what our customers say after the part is in."
        />

        <ul className={styles.grid}>
          {testimonials.map((t, i) => (
            <motion.li
              key={t.id}
              className={styles.card}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.cardInner}>
                <span className={styles.quoteMark} aria-hidden="true">“</span>
                <Stars count={t.rating} />
                <p className={styles.quote}>{t.quote}</p>
                <div className={styles.person}>
                  <div className={styles.avatar} aria-hidden="true">{initials(t.name)}</div>
                  <div className={styles.personMeta}>
                    <span className={styles.personName}>{t.name}</span>
                    <span className={styles.personRole}>
                      {t.role} • {t.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
