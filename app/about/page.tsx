import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutContent } from "@/components/about/about-content";

export const metadata: Metadata = {
  title: "About Deogiri Stone Products Pvt. Ltd. | Established 2007, Bidkin Aurangabad",
  description:
    "Deogiri Stone Products Pvt. Ltd. was established in 2007 at Bidkin, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra. We manufacture premium stone aggregates and manufactured sand (P-Sand, M-Sand) using a 250 TPH solar-powered plant with UK Patent technology.",
  keywords: [
    'about Deogiri Stone',
    'stone aggregate manufacturer Aurangabad',
    'aggregate company Maharashtra 2007',
    'P-Sand M-Sand manufacturer Bidkin',
    'solar powered aggregate plant',
    'UK Patent sand washing technology',
    'Aditya Peddi Deogiri Stone',
  ],
  alternates: { canonical: 'https://www.deogiristone.in/about' },
  openGraph: {
    url: 'https://www.deogiristone.in/about',
    title: 'About Deogiri Stone Products Pvt. Ltd. | Established 2007',
    description:
      'Learn about Deogiri Stone Products Pvt. Ltd. — established in 2007 at Bidkin, Aurangabad. 250 TPH solar-powered plant, UK Patent technology, 500+ contractors served across Maharashtra.',
  },
}

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Deogiri Stone Products Pvt. Ltd.',
  url: 'https://www.deogiristone.in/about',
  description:
    'Deogiri Stone Products Pvt. Ltd. was established in 2007 at Bidkin, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra. We specialize in manufacturing stone aggregates and manufactured sand (P-Sand, M-Sand) using advanced technology including UK Patent sand washing.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Deogiri Stone Products Pvt. Ltd.',
    foundingDate: '2007',
    foundingLocation: {
      '@type': 'Place',
      name: 'Bidkin, Chhatrapati Sambhajinagar, Maharashtra, India',
    },
    description:
      'Premium manufacturer of stone aggregates and manufactured sand. 250 TPH fully automated plant. 100% solar energy. UK Patent washing technology (Weir Minerals). Supplied 15 lakh+ cubic meters of aggregates.',
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10, maxValue: 50 },
    slogan: 'Building Maharashtra\'s Future, One Stone at a Time',
    knowsAbout: [
      'Stone Aggregates Manufacturing',
      'Manufactured Sand Production',
      'P-Sand (Plastering Sand)',
      'M-Sand (Master Sand)',
      'UK Patent Sand Washing Technology',
      'Solar Energy powered plants',
      'Construction Material Supply',
    ],
  },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <main>
        <Navbar />
        <AboutContent />
        <Footer />
      </main>
    </>
  );
}
