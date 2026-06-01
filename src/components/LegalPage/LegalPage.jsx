import Link from 'next/link';
import Icon from '../Icon/Icon';
import styles from './LegalPage.module.scss';

export default function LegalPage({ eyebrow, title, updated, intro, sections }) {
  return (
    <article className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroInner}>
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            <Link href="/" className={styles.crumbLink}>Home</Link>
            <Icon name="arrowRight" size={12} stroke={2} />
            <span>{title}</span>
          </nav>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          <h1 className={styles.title}>{title}</h1>
          {updated && (
            <p className={styles.updated}>
              <Icon name="clock" size={14} stroke={2.2} /> Last updated {updated}
            </p>
          )}
          {intro && <p className={styles.intro}>{intro}</p>}
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.bodyInner}>
          {sections.map((s) => (
            <section key={s.heading} className={styles.section}>
              <h2 className={styles.sectionTitle}>{s.heading}</h2>
              {s.body.map((p, i) =>
                typeof p === 'object' && p.list ? (
                  <ul key={i} className={styles.list}>
                    {p.list.map((item, j) => (
                      <li key={j} className={styles.listItem}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={i} className={styles.paragraph}>{p}</p>
                )
              )}
            </section>
          ))}

          <div className={styles.backWrap}>
            <Link href="/" className={styles.backLink}>
              <Icon name="arrowRight" size={16} stroke={2.4} className={styles.backArrow} />
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
