'use client';

import { motion } from 'framer-motion';
import Icon from '../Icon/Icon';
import SectionHeading from '../SectionHeading/SectionHeading';
import { categories } from '@/data/categories';
import { site } from '@/data/site';
import styles from './Categories.module.scss';

export default function Categories() {
  return (
    <section className={styles.section} id="categories" aria-label="Part categories">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Featured Categories"
          title="Parts We"
          accent="Move Daily"
          sub="From short blocks to ABS modules, our specialists source the categories below for cars and trucks faster than anywhere else in the country."
        />

        <ul className={styles.grid}>
          {categories.map((cat, i) => (
            <motion.li
              key={cat.id}
              className={styles.card}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url('${cat.image}')` }}
                aria-hidden="true"
              />
              <div className={styles.cardOverlay} aria-hidden="true" />
              <div className={styles.cardContent}>
                <div>
                  <span className={styles.cardEyebrow}>Category</span>
                  <h3 className={styles.cardTitle}>{cat.title}</h3>
                  <p className={styles.cardSub}>{cat.subtitle}</p>
                </div>
                <a href="#enquiry" className={styles.cardCta} aria-label={`Request a part for ${cat.title}`}>
                  <span>Request Part</span>
                  <Icon name="arrowRight" size={16} stroke={2.4} />
                </a>
              </div>
            </motion.li>
          ))}
        </ul>

        <div className={styles.ctaRow}>
          <p className={styles.ctaText}>Don&apos;t see your part listed?</p>
          <a href={site.phoneHref} className={styles.ctaBtn}>
            <Icon name="phone" size={18} stroke={2.4} />
            Call to Find Your Part
          </a>
        </div>
      </div>
    </section>
  );
}
