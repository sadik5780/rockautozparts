// JSON-LD structured data builders.
// These feed search engines and answer engines a machine-readable description
// of the business, the site, and the FAQ — the foundation of AEO.

import { site } from '@/data/site';
import { categories } from '@/data/categories';

const SITE_URL = 'https://rockautozparts.com';

// AutoPartsStore is a recognized schema.org type and the most specific match.
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoPartsStore',
    '@id': `${SITE_URL}/#business`,
    name: site.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo2.png`,
    image: `${SITE_URL}/logo2.png`,
    telephone: site.phone,
    description:
      'Tested engines, transmissions, suspension, brakes, and electrical components for cars and trucks, shipped nationwide across the USA with warranty included.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '17:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Auto Parts Categories',
      itemListElement: categories.map((c) => ({
        '@type': 'OfferCatalog',
        name: c.title,
        description: c.subtitle,
      })),
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: site.name,
    publisher: { '@id': `${SITE_URL}/#business` },
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

// Renders one or more schema objects into a single <script> string-safe array.
export function JsonLd({ data }) {
  const payload = Array.isArray(data) ? data : [data];
  return payload.map((schema, i) => (
    <script
      key={i}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  ));
}
