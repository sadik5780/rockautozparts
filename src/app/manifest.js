import { site } from '@/data/site';

export default function manifest() {
  return {
    name: `${site.name} — OEM & Aftermarket Auto Parts`,
    short_name: site.shortName,
    description:
      'Tested engines, transmissions, suspension, brakes, and electrical components for cars and trucks, shipped nationwide across the USA.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F1115',
    theme_color: '#0F1115',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
