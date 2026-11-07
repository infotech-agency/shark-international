import type { Metadata } from 'next';
import './globals.css';
import { company } from '@/config/company';
export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: 'SHARK INTERNATIONAL TRADING FZE LLC | Global Commodity Trading',
  description:
  'International trading in fertilizers, chemicals, steel, minerals, crude oil and essential commodities, with offices in New Delhi, Dubai and London.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'SHARK INTERNATIONAL TRADING FZE LLC',
    description: 'Global Trade. Trusted Partnerships.',
    images: ['/images/port.webp'],
  },
  icons: { icon: '/images/logo.png' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
