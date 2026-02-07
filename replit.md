# Deogiri Stone - Premium Aggregates Website

## Overview
A Next.js website for Deogiri Stone, a premium construction aggregates company. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS with shadcn/ui components.

## Project Architecture
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3 + shadcn/ui component library
- **Package Manager**: npm (use `--legacy-peer-deps` flag for installs due to peer dependency conflicts)

## Project Structure
```
app/              - Next.js App Router pages
  layout.tsx      - Root layout
  page.tsx        - Home page
  about/          - About page
  contact/        - Contact page
  products/       - Products page
components/       - React components
  ui/             - shadcn/ui base components
  home/           - Home page sections
  about/          - About page components
  contact/        - Contact page components
  products/       - Products page components
  navbar.tsx      - Navigation bar
  footer.tsx      - Footer
```

## Development
- **Dev server**: `npm run dev` (runs on 0.0.0.0:5000)
- **Build**: `npm run build`
- **Start production**: `npm run start` (runs on 0.0.0.0:5000)

## Replit Configuration
- Next.js configured with `allowedDevOrigins` for Replit proxy compatibility
- Dev and production servers bound to 0.0.0.0:5000
- Deployment target: autoscale
