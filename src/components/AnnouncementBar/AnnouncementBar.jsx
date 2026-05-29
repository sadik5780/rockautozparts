import Icon from '../Icon/Icon';
import styles from './AnnouncementBar.module.scss';

const perks = [
  { icon: 'truck', label: 'Fast Shipping' },
  { icon: 'shield', label: 'Warranty Included' },
  { icon: 'wrench', label: 'Expert Support' },
];

export default function AnnouncementBar() {
  return (
    <div className={styles.bar} role="region" aria-label="Site announcements">
      <div className={styles.inner}>
        <p className={styles.headline}>
          <span className={styles.dot} aria-hidden="true" />
          OEM &amp; Aftermarket Parts for Cars &amp; Trucks — Shipped Across the USA
        </p>
        <ul className={styles.perks}>
          {perks.map((p) => (
            <li key={p.label} className={styles.perk}>
              <Icon name={p.icon} size={14} stroke={2.4} />
              <span>{p.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
