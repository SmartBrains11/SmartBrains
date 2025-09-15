import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingCTA } from '@/components/ui/FloatingCTA';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.smartbrainsindia.com'),
  title: {
    default: 'Smart Brains India | Brain Training & Cognitive Development',
    template: '%s | Smart Brains India'
  },
  description:
    'Brain training institute in Hyderabad & Vizianagaram. DMIT, Midbrain Activation, Photographic Memory, Speed Reading, Abacus & Vedic Math programs for kids, teens, and adults.',
  keywords: [
    'Smart Brains India',
    'brain training institute',
    'DMIT',
    'Midbrain Activation',
    'Photographic Memory',
    'Speed Reading',
    'Abacus Math',
    'Vedic Math',
    'Hyderabad',
    'Vizianagaram',
  ],
  openGraph: {
    title: 'Smart Brains India | Brain Training & Cognitive Development',
    description:
      'DMIT, Midbrain Activation, Photographic Memory, Speed Reading, Abacus & Vedic Math. Centers in Hyderabad & Vizianagaram.',
    url: 'https://www.smartbrainsindia.com',
    siteName: 'Smart Brains India',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Smart Brains India - Brain Training Programs'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.smartbrainsindia.com'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@smartbrainsindia',
    title: 'Smart Brains India | Brain Training & Cognitive Development',
    description:
      'DMIT, Midbrain Activation, Photographic Memory, Speed Reading, Abacus & Vedic Math. Centers in Hyderabad & Vizianagaram.',
    images: ['/og-default.jpg']
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}