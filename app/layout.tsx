import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'

import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.deogiristone.in'),
  title: {
    default: 'Deogiri Stone Products Pvt. Ltd. | Premium Aggregates & Manufactured Sand – Bidkin, Aurangabad',
    template: '%s | Deogiri Stone Products Pvt. Ltd.',
  },
  description:
    'Deogiri Stone Products Pvt. Ltd. manufactures and supplies premium stone aggregates (6MM–60MM, GSB, Soling) and manufactured sand (P-Sand, M-Sand, Crush Sand, Dust) from our plant at Bidkin, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra. 100% solar-powered. Trusted by 500+ contractors.',
  keywords: [
    'stone aggregates Aurangabad',
    'manufactured sand Maharashtra',
    'P-Sand supplier Aurangabad',
    'M-Sand supplier Bidkin',
    'Crush Sand Chhatrapati Sambhajinagar',
    'coarse aggregates supplier India',
    'construction aggregates Maharashtra',
    'Deogiri Stone Products',
    'stone quarry Bidkin',
    'GSB aggregate supplier',
    'concrete sand supplier',
    'construction material supplier Aurangabad',
    'aggregate manufacturer Maharashtra',
    '250 TPH crusher plant',
    'UK Patent sand washing technology',
  ],
  authors: [{ name: 'Deogiri Stone Products Pvt. Ltd.' }],
  creator: 'Deogiri Stone Products Pvt. Ltd.',
  publisher: 'Deogiri Stone Products Pvt. Ltd.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.deogiristone.in',
    siteName: 'Deogiri Stone Products Pvt. Ltd.',
    title: 'Deogiri Stone Products Pvt. Ltd. | Premium Aggregates & Manufactured Sand',
    description:
      'Premium stone aggregates and manufactured sand (P-Sand, M-Sand) manufacturer at Bidkin, Aurangabad, Maharashtra. 250 TPH fully automated plant. 100% solar-powered. Trusted by 500+ contractors across Maharashtra.',
    images: [
      {
        url: '/images/hero-quarry.jpg',
        width: 1200,
        height: 630,
        alt: 'Deogiri Stone Products - Premium Aggregates Manufacturer at Bidkin, Aurangabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deogiri Stone Products Pvt. Ltd. | Premium Aggregates & Manufactured Sand',
    description:
      'Premium stone aggregates and manufactured sand manufacturer at Bidkin, Aurangabad, Maharashtra. 250 TPH plant, 100% solar energy, 500+ contractors served.',
    images: ['/images/hero-quarry.jpg'],
  },
  alternates: {
    canonical: 'https://www.deogiristone.in',
  },
  verification: {
    google: '',
  },
}

export const viewport = {
  themeColor: '#8B6914',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
