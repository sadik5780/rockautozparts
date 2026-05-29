import './globals.scss';
import { site } from '@/data/site';

export const metadata = {
  metadataBase: new URL('https://rockautozparts.com'),
  title: {
    default: `${site.name} — OEM & Aftermarket Auto Parts Across the USA`,
    template: `%s | ${site.name}`,
  },
  description:
    'Rockautozparts.com supplies tested engines, transmissions, suspension, brakes, and electrical components to drivers and shops across the USA. Fast shipping. Warranty included. Expert support.',
  keywords: [
    'OEM auto parts',
    'aftermarket auto parts',
    'used engines',
    'used transmissions',
    'auto parts USA',
    'tested auto parts',
    'auto parts warranty',
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rockautozparts.com',
    siteName: site.name,
    title: `${site.name} — OEM & Aftermarket Auto Parts Across the USA`,
    description:
      'Tested engines, transmissions, suspension and more. Fast nationwide shipping with warranty protection.',
    images: [
      {
        url: 'https://images.pexels.com/photos/5158091/pexels-photo-5158091.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Rockautozparts.com warehouse',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — OEM & Aftermarket Auto Parts`,
    description:
      'Tested engines, transmissions, suspension and more. Fast nationwide shipping with warranty protection.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport = {
  themeColor: '#0F1115',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
