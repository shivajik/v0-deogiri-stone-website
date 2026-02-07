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
  title: 'Deogiri Stone | Premium Construction Aggregates Supplier',
  description:
    'Deogiri Stone is a leading supplier of high-quality construction aggregates including coarse aggregates, fine aggregates, crushed stone, gravel, and sand for all your building projects.',
  keywords: ['construction aggregates', 'crushed stone', 'gravel', 'sand', 'building materials', 'Deogiri Stone', 'India'],
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
