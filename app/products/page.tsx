import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductsContent } from "@/components/products/products-content";

export const metadata: Metadata = {
  title: "Products | Stone Aggregates & Manufactured Sand – Deogiri Stone",
  description:
    "Deogiri Stone Products supplies coarse aggregates (6MM, 10MM, 20MM, 28MM, 40MM, 60MM, GSB, Soling) and manufactured sand (P-Sand 0–2.36mm, M-Sand 2.36–5mm, Crush Sand 0–4.75mm, Stone Dust 0–3.68mm) from Bidkin, Aurangabad, Maharashtra.",
  keywords: [
    '6MM 10MM 20MM stone aggregate Aurangabad',
    'P-Sand 0-2.36mm supplier Maharashtra',
    'M-Sand 2.36-5mm Bidkin',
    'Crush Sand stone dust Aurangabad',
    'GSB Granular Sub Base supplier',
    'Soling aggregate Maharashtra',
    'coarse aggregate RCC construction',
    'fine aggregate plastering sand',
    'construction sand supplier Aurangabad',
    'RMC aggregate supplier Maharashtra',
  ],
  alternates: { canonical: 'https://www.deogiristone.in/products' },
  openGraph: {
    url: 'https://www.deogiristone.in/products',
    title: 'Stone Aggregates & Manufactured Sand Products – Deogiri Stone',
    description:
      'Full range of construction aggregates: 6MM to 60MM coarse aggregates, P-Sand, M-Sand, Crush Sand, Stone Dust, GSB, and Soling. Manufactured at Bidkin, Aurangabad with 250 TPH automated plant.',
  },
}

const productsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Deogiri Stone Products – Aggregates & Manufactured Sand',
  url: 'https://www.deogiristone.in/products',
  numberOfItems: 2,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Product',
        name: 'Coarse Aggregates',
        description:
          'Technically graded coarse aggregates produced with 250 TPH advanced technology. Available in 6MM (flooring), 10MM (RMC, Pavement), 20MM (RCC Structure), 28MM (Concrete), 40MM (Road construction), 60MM (flooring), GSB (Granular Sub Base), and Soling (Foundation).',
        brand: { '@type': 'Brand', name: 'Deogiri Stone Products Pvt. Ltd.' },
        manufacturer: {
          '@type': 'Organization',
          name: 'Deogiri Stone Products Pvt. Ltd.',
          address: 'Bidkin, Chhatrapati Sambhajinagar, Maharashtra',
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          areaServed: 'Maharashtra, India',
          priceCurrency: 'INR',
        },
        additionalProperty: [
          { '@type': 'PropertyValue', name: 'Available Sizes', value: '6MM, 10MM, 20MM, 28MM, 40MM, 60MM, GSB, Soling' },
          { '@type': 'PropertyValue', name: 'Applications', value: 'RCC Structures, Road Construction, RMC & Pavements, Foundations, Flooring' },
        ],
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Product',
        name: 'Fine Aggregates – Manufactured Sand',
        description:
          'High-quality manufactured sand produced using UK Patent washing technology (Weir Minerals). Includes P-Sand (0–2.36mm, plastering), M-Sand (2.36–5.00mm, master sand), Crush Sand (0–4.75mm), and Stone Dust (0–3.68mm). Sustainable alternative to river sand.',
        brand: { '@type': 'Brand', name: 'Deogiri Stone Products Pvt. Ltd.' },
        manufacturer: {
          '@type': 'Organization',
          name: 'Deogiri Stone Products Pvt. Ltd.',
          address: 'Bidkin, Chhatrapati Sambhajinagar, Maharashtra',
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          areaServed: 'Maharashtra, India',
          priceCurrency: 'INR',
        },
        additionalProperty: [
          { '@type': 'PropertyValue', name: 'P-Sand Size', value: '0 – 2.36 mm' },
          { '@type': 'PropertyValue', name: 'M-Sand Size', value: '2.36 – 5.00 mm' },
          { '@type': 'PropertyValue', name: 'Crush Sand Size', value: '0 – 4.75 mm' },
          { '@type': 'PropertyValue', name: 'Stone Dust Size', value: '0 – 3.68 mm' },
          { '@type': 'PropertyValue', name: 'Technology', value: 'UK Patent Sand Washing (Weir Minerals)' },
          { '@type': 'PropertyValue', name: 'Applications', value: 'Plastering, Concrete Products, Slab Construction, General Building' },
        ],
      },
    },
  ],
}

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />
      <main>
        <Navbar />
        <ProductsContent />
        <Footer />
      </main>
    </>
  );
}
