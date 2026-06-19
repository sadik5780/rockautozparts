import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MobileCallButton from '@/components/MobileCallButton/MobileCallButton';
import LegalPage from '@/components/LegalPage/LegalPage';
import { site } from '@/data/site';

export const metadata = {
  title: 'Privacy Policy',
  description: `${site.name} privacy policy — how we collect, use, and protect customer data submitted through part requests and contact forms.`,
  alternates: { canonical: '/privacy-policy' },
};

// Render on demand — see note in src/app/layout.js.
export const dynamic = 'force-dynamic';

const sections = [
  {
    heading: '1. Information We Collect',
    body: [
      `${site.name} ("we," "us," or "our") collects information you voluntarily provide when you submit a part request, contact our team, or interact with our website. This typically includes your full name, phone number, email address, vehicle details (year, make, model, trim, engine size, VIN), and any part-related information you choose to share.`,
      'We may also automatically collect non-identifying technical data such as browser type, device information, IP address, referring pages, and pages visited on our site. This information is used to operate and improve our website.',
    ],
  },
  {
    heading: '2. How We Use Part Request & Contact Submissions',
    body: [
      'Information submitted through our part request and contact forms is used exclusively to respond to your inquiry, source and price the requested auto parts, coordinate shipping, and provide ongoing customer service related to your request.',
      'We do not sell or rent your personal information. We may share necessary details with verified parts suppliers in our network solely to fulfill the part you requested.',
    ],
  },
  {
    heading: '3. Cookies & Tracking Technologies',
    body: [
      'We use a small number of cookies and similar technologies to keep the site functional, remember your preferences, and measure aggregate traffic. You can disable cookies in your browser settings, although certain features of the site may not work as intended.',
      'We may use third-party analytics tools (such as privacy-respecting traffic analytics) to understand how visitors use the site. These tools do not collect information that personally identifies you.',
    ],
  },
  {
    heading: '4. How We Protect Your Data',
    body: [
      'We use industry-standard security measures — including encrypted transport (HTTPS), access controls, and limited retention — to protect personal information from unauthorized access, disclosure, or misuse.',
      'No method of transmission over the Internet is 100% secure. While we take reasonable steps to safeguard your information, we cannot guarantee absolute security.',
    ],
  },
  {
    heading: '5. Your Rights',
    body: [
      'You may request access to, correction of, or deletion of the personal information we hold about you at any time. To exercise these rights, contact us using the details below and allow up to 30 days for processing.',
    ],
  },
  {
    heading: '6. Children’s Privacy',
    body: [
      'Our services are intended for users 18 years of age and older. We do not knowingly collect personal information from children.',
    ],
  },
  {
    heading: '7. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time to reflect operational, legal, or regulatory changes. The "Last updated" date at the top of this page indicates when the most recent revision was made.',
    ],
  },
  {
    heading: '8. Contact Us',
    body: [
      `If you have any questions about this Privacy Policy or about the personal information we hold, please contact ${site.name} by phone at ${site.phone}.`,
      `Mailing address: ${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <LegalPage
          eyebrow="Legal"
          title="Privacy Policy"
          updated="January 12, 2026"
          intro={`This Privacy Policy describes how ${site.name} collects, uses, and protects information when you visit our website or submit a part request.`}
          sections={sections}
        />
      </main>
      <Footer />
      <MobileCallButton />
    </>
  );
}
