'use client';

import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading/SectionHeading';
import { steps } from '@/data/steps';
import styles from './HowItWorks.module.scss';

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how" aria-label="How it works">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="How It Works"
          title="From Inquiry to Doorstep"
          accent="in 3 Steps"
          sub="A frictionless process designed around real-world repair timelines — no chasing, no guesswork."
        />

        <div className={styles.timeline}>
          <div className={styles.line} aria-hidden="true">
            <motion.div
              className={styles.lineFill}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <ol className={styles.grid}>
            {steps.map((s, i) => (
              <motion.li
                key={s.id}
                className={styles.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={styles.bullet}>
                  <span className={styles.bulletNumber}>{String(s.id).padStart(2, '0')}</span>
                </div>
                <div className={styles.stepBody}>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepText}>{s.description}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
