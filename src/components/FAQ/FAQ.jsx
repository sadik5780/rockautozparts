'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../SectionHeading/SectionHeading';
import { faqs } from '@/data/faqs';
import styles from './FAQ.module.scss';

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className={styles.section} id="faq" aria-label="Frequently asked questions">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, Answered"
          accent="Before You Buy"
          sub="Straight answers on warranty, shipping, fitment, and how ordering works."
        />

        <ul className={styles.list}>
          {faqs.map((f, i) => {
            const isOpen = open === f.id;
            return (
              <motion.li
                key={f.id}
                className={styles.item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: 0.05 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className={styles.questionWrap}>
                  <button
                    type="button"
                    className={styles.question}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${f.id}`}
                    onClick={() => setOpen(isOpen ? null : f.id)}
                  >
                    <span>{f.question}</span>
                    <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} aria-hidden="true" />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${f.id}`}
                      className={styles.answer}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p>{f.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
