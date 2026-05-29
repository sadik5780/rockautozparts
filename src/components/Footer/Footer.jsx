import Link from 'next/link';
import Icon from '../Icon/Icon';
import { site } from '@/data/site';
import styles from './Footer.module.scss';

const socialIconMap = {
  Facebook: 'facebook',
  Instagram: 'instagram',
  YouTube: 'youtube',
  LinkedIn: 'linkedin',
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo} aria-label={`${site.name} home`}>
              <span className={styles.logoMark} aria-hidden="true">
                <Icon name="gear" size={22} stroke={2.2} />
              </span>
              <span className={styles.logoText}>
                <span className={styles.logoBrand}>ROCKAUTOZ</span>
                <span className={styles.logoSub}>Parts.com</span>
              </span>
            </Link>
            <p className={styles.tagline}>
              Tested OEM &amp; aftermarket auto parts shipped nationwide. Trusted by mechanics, fleets, and drivers across the USA.
            </p>
            <ul className={styles.social}>
              {site.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className={styles.socialLink} aria-label={s.label}>
                    <Icon name={socialIconMap[s.label] || 'arrowRight'} size={18} stroke={2} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <Icon name="phone" size={16} stroke={2.2} />
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                <Icon name="map" size={16} stroke={2.2} />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Business Hours</h4>
            <ul className={styles.hours}>
              {site.hours.map((h) => (
                <li key={h.day}>
                  <Icon name="clock" size={14} stroke={2.2} />
                  <span className={styles.day}>{h.day}</span>
                  <span className={styles.time}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.links}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#why">Why Choose Us</Link></li>
              <li><Link href="/#categories">Categories</Link></li>
              <li><Link href="/#how">How It Works</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className={styles.divider} aria-hidden="true">•</span>
            <Link href="/terms-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
