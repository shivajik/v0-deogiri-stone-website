import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/home/hero";
import { AboutSection } from "@/components/home/about-section";
import { ProductsSection } from "@/components/home/products-section";
import { ProcessSection } from "@/components/home/process-section";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CtaSection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: 'Deogiri Stone Products Pvt. Ltd. | Stone Aggregates & Manufactured Sand – Bidkin, Aurangabad',
  description:
    'Deogiri Stone Products Pvt. Ltd. manufactures premium stone aggregates (6MM–60MM, GSB, Soling) and manufactured sand (P-Sand, M-Sand, Crush Sand) at Bidkin, Chhatrapati Sambhajinagar, Maharashtra. 250 TPH plant, 100% solar energy. Call +91 9423779665.',
  keywords: [
    'stone aggregates Bidkin',
    'manufactured sand Aurangabad',
    'P-Sand M-Sand supplier Maharashtra',
    'construction aggregates Chhatrapati Sambhajinagar',
    'Deogiri Stone Products',
    'aggregate manufacturer Aurangabad',
    'crushed stone supplier Maharashtra',
  ],
  alternates: { canonical: 'https://www.deogiristone.in' },
  openGraph: {
    url: 'https://www.deogiristone.in',
    title: 'Deogiri Stone Products Pvt. Ltd. | Stone Aggregates & Manufactured Sand',
    description:
      'Premium stone aggregates and manufactured sand manufacturer at Bidkin, Aurangabad. 250 TPH plant, 100% solar. Trusted by 500+ contractors across Maharashtra.',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Deogiri Stone Products Pvt. Ltd.',
  alternateName: 'Deogiri Stone',
  url: 'https://www.deogiristone.in',
  logo: 'https://www.deogiristone.in/images/logo-dark.png',
  foundingDate: '2007',
  description:
    'Manufacturer and supplier of premium stone aggregates and manufactured sand (P-Sand, M-Sand) in Bidkin, Chhatrapati Sambhajinagar, Maharashtra, India.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bidkin',
    addressLocality: 'Chhatrapati Sambhajinagar',
    addressRegion: 'Maharashtra',
    postalCode: '431105',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9423779665',
    contactType: 'sales',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi', 'Marathi'],
  },
  sameAs: [],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.deogiristone.in/#business',
  name: 'Deogiri Stone Products Pvt. Ltd.',
  image: 'https://www.deogiristone.in/images/hero-quarry.jpg',
  url: 'https://www.deogiristone.in',
  telephone: '+91-9423779665',
  email: 'info@deogiristone.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bidkin',
    addressLocality: 'Chhatrapati Sambhajinagar',
    addressRegion: 'Maharashtra',
    postalCode: '431105',
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
  description:
    'Deogiri Stone Products Pvt. Ltd. is a premium manufacturer of stone aggregates (6MM, 10MM, 20MM, 28MM, 40MM, 60MM, GSB, Soling) and manufactured sand (P-Sand, M-Sand, Crush Sand, Stone Dust) located at Bidkin, Aurangabad, Maharashtra. Established in 2007 with a 250 TPH fully automated plant powered 100% by solar energy.',
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Bank Transfer',
  areaServed: {
    '@type': 'State',
    name: 'Maharashtra',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Stone Aggregates & Manufactured Sand',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Coarse Aggregates (6MM–60MM)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'P-Sand (Plastering Sand)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'M-Sand (Master Sand)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Crush Sand' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Stone Dust' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'GSB (Granular Sub Base)' } },
    ],
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Deogiri Stone Products Pvt. Ltd.',
  url: 'https://www.deogiristone.in',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.deogiristone.in/products',
    'query-input': 'required name=search_term_string',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of stone aggregates does Deogiri Stone supply?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Deogiri Stone supplies coarse aggregates in sizes 6MM, 10MM, 20MM, 28MM, 40MM, 60MM, GSB (Granular Sub Base), and Soling. We also supply manufactured sand including P-Sand, M-Sand, Crush Sand, and Stone Dust.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Deogiri Stone Products located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our manufacturing plant and mines are located at Bidkin, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra, India. GPS coordinates: 19.8658829, 75.3360152.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is P-Sand and M-Sand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'P-Sand (Plastering Sand) is manufactured sand with grain size 0–2.36 mm, ideal as a substitute for river sand in plastering and construction. M-Sand (Master Sand) has grain size 2.36–5.00 mm and offers higher flexural strength and better abrasion resistance than natural sand. Both are produced using UK Patent washing technology.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Deogiri Stone an eco-friendly manufacturer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Deogiri Stone Products Pvt. Ltd. runs its entire plant on 100% solar energy, reducing environmental impact. We also use manufactured sand as a sustainable alternative to river sand, helping protect river beds.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the production capacity of Deogiri Stone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our plant is a 250 TPH (tonnes per hour) fully automated 4-stage crusher with a sand washing unit using Weir Minerals UK Patent technology. We operate 24×7 with 10 fleet vehicles and 3 loaders.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I contact Deogiri Stone for a quote?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Call us at +91 9423779665 (Mon–Sat, 8AM–7PM) or email info@deogiristone.in. You can also visit our website at www.deogiristone.in to fill out a contact form.',
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <Navbar />
        <Hero />
        <AboutSection />
        <ProductsSection />
        <ProcessSection />
        <StatsSection />
        <TestimonialsSection />
        <CtaSection />
        <Footer />
      </main>
    </>
  );
}
