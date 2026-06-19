import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MobileCallButton from '@/components/MobileCallButton/MobileCallButton';
import LegalPage from '@/components/LegalPage/LegalPage';
import { site } from '@/data/site';

export const metadata = {
  title: 'Terms & Conditions',
  description: `${site.name} terms and conditions covering website usage, quotes, warranty, shipping, and liability.`,
  alternates: { canonical: '/terms-conditions' },
};

// Render on demand — see note in src/app/layout.js.
export const dynamic = 'force-dynamic';

const sections = [
  {
    heading: '1. Website Usage',
    body: [
      `By accessing or using the ${site.name} website, you agree to these Terms & Conditions. If you do not agree, please do not use the site. We may modify these terms at any time; continued use of the site constitutes acceptance of the updated terms.`,
      'You agree to use the website only for lawful purposes and not to attempt to disrupt, reverse engineer, or gain unauthorized access to any portion of our systems.',
    ],
  },
  {
    heading: '2. Quote Disclaimer',
    body: [
      'All quotes provided by us are estimates based on the vehicle information you submit and current parts availability. Quotes are subject to verification of vehicle and part details, supplier availability, and final inspection.',
      'Pricing is valid for the period stated in the written quote. Final invoice amounts may vary if vehicle information was inaccurate or if substitution of an equivalent part is required and authorized.',
    ],
  },
  {
    heading: '3. Warranty Disclaimer',
    body: [
      'Warranty terms vary by part type and are clearly stated on each quote and invoice. The warranty covers defects in the part itself; it does not cover labor, consequential damages, improper installation, abuse, or use outside the part’s intended application.',
      'To remain valid, all parts must be installed by a qualified, professionally licensed mechanic, and all manufacturer fluids, gaskets, seals, and ancillary components recommended for installation must be replaced. Failure to follow proper installation procedures voids the warranty.',
    ],
  },
  {
    heading: '4. Shipping Disclaimer',
    body: [
      'Shipping estimates are provided in good faith based on carrier and supplier information at the time of quoting. Transit times are not guaranteed and may be affected by weather, carrier delays, holidays, or events outside our control.',
      'Risk of loss passes to the buyer on delivery. Inspect all shipments upon arrival and report visible damage to the carrier and to us within 48 hours of delivery.',
    ],
  },
  {
    heading: '5. Returns & Cancellations',
    body: [
      'Special-order parts, electrical components, and parts that have been installed are non-returnable. Eligible returns must be initiated within 30 days of delivery and may be subject to a restocking fee. Original shipping charges are non-refundable.',
    ],
  },
  {
    heading: '6. Additional Return Charges',
    body: [
      'If a customer returns a product, certain charges may be deducted from the original charged amount before the refund is issued.',
      'These deductions may include:',
      {
        list: [
          'Return shipping charges',
          'Original shipping charges, if applicable',
          'Handling or processing fees',
          'Restocking charges, if applicable',
          'Any carrier fees, inspection fees, or packaging charges related to the return',
        ],
      },
      'The final refund amount will be calculated after the returned item is received and inspected. Refund deductions may vary depending on the product type, condition, shipping cost, and reason for return.',
      `If the return is due to an error from our side, such as sending the wrong item or a verified issue caused by ${site.name}, we will review the case and may waive return-related deductions.`,
    ],
  },
  {
    heading: '7. Expedited / Fast Shipping Charges',
    body: [
      'Our standard estimated shipping time is usually 4–5 business days after processing and carrier pickup.',
      'If a customer wants faster delivery than our standard shipping time, extra shipping charges may apply. Fast shipping, priority shipping, express shipping, or special freight service costs will be quoted separately before the order is processed.',
      'Expedited shipping charges depend on:',
      {
        list: [
          'Customer location',
          'Part size and weight',
          'Carrier availability',
          'Freight or special handling requirements',
          'Requested delivery speed',
        ],
      },
      `Fast shipping fees are non-refundable once the order has been shipped, unless the delay or issue is caused by ${site.name}.`,
    ],
  },
  {
    heading: '8. Limitation of Liability',
    body: [
      `To the maximum extent permitted by law, ${site.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of profits, downtime, towing, or rental vehicle costs — arising from the use of, or inability to use, parts supplied by us.`,
      'Our total liability for any claim related to a part shall not exceed the purchase price of that specific part.',
    ],
  },
  {
    heading: '9. Intellectual Property',
    body: [
      'All content on this website — including logos, text, graphics, and imagery — is the property of its respective owners and is protected by applicable intellectual property laws. You may not reproduce, distribute, or modify any content without prior written permission.',
    ],
  },
  {
    heading: '10. Governing Law',
    body: [
      `These Terms & Conditions are governed by the laws of the State of ${site.address.state}, USA, without regard to conflict-of-law principles. Any dispute shall be resolved in the state or federal courts located in ${site.address.city}, ${site.address.state}.`,
    ],
  },
  {
    heading: '11. Contact Information',
    body: [
      `Questions about these terms can be directed to ${site.name} by phone at ${site.phone}.`,
      `Mailing address: ${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}.`,
    ],
  },
];

export default function TermsConditionsPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <LegalPage
          eyebrow="Legal"
          title="Terms & Conditions"
          updated="May 29, 2026"
          intro={`These Terms & Conditions govern your use of the ${site.name} website and the parts-quoting services we provide. Please read them carefully.`}
          sections={sections}
        />
      </main>
      <Footer />
      <MobileCallButton />
    </>
  );
}
