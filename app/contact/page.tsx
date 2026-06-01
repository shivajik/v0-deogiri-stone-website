import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactContent } from "@/components/contact/contact-content";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Quote – Deogiri Stone Products Aurangabad",
  description:
    "Contact Deogiri Stone Products Pvt. Ltd. for a free consultation and competitive pricing on stone aggregates and manufactured sand. Call +91 9423779665 (Mon–Sat, 8AM–7PM) or email info@deogiristone.in. Located at Bidkin, Chhatrapati Sambhajinagar, Maharashtra.",
  keywords: [
    'contact Deogiri Stone',
    'aggregate supplier contact Aurangabad',
    'stone aggregate quote Maharashtra',
    'buy P-Sand M-Sand Aurangabad',
    'construction material supplier contact',
    'Bidkin aggregate supplier phone',
  ],
  alternates: { canonical: 'https://www.deogiristone.in/contact' },
  openGraph: {
    url: 'https://www.deogiristone.in/contact',
    title: 'Contact Deogiri Stone Products | Free Quote – +91 9423779665',
    description:
      'Get a free quote on stone aggregates and manufactured sand. Call +91 9423779665 or email info@deogiristone.in. Plant located at Bidkin, Chhatrapati Sambhajinagar, Maharashtra.',
  },
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Deogiri Stone Products Pvt. Ltd.',
  url: 'https://www.deogiristone.in/contact',
  description:
    'Contact Deogiri Stone Products Pvt. Ltd. for free consultation, competitive pricing, and quotes on stone aggregates and manufactured sand in Maharashtra.',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Deogiri Stone Products Pvt. Ltd.',
    telephone: '+91-9423779665',
    email: 'info@deogiristone.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bidkin',
      addressLocality: 'Chhatrapati Sambhajinagar',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.8658829,
      longitude: 75.3360152,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '19:00',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-9423779665',
        contactType: 'sales',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '08:00',
          closes: '19:00',
        },
      },
    ],
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <main>
        <Navbar />
        <ContactContent />
        <Footer />
      </main>
    </>
  );
}
