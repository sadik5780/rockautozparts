const SITE_URL = 'https://rockautozparts.com';

export default function sitemap() {
  const lastModified = new Date('2026-05-29');

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-conditions`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
