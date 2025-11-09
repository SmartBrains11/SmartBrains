import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingCTA } from '@/components/ui/FloatingCTA';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.smartbrainsindia.com'),
  title: {
    default: 'Smart Brains India | Brain Training & Cognitive Development in Hyderabad & Vizianagaram',
    template: '%s | Smart Brains India'
  },
  description:
    'Leading brain training institute in Hyderabad & Vizianagaram. Expert-led programs: DMIT test, Midbrain Activation, Photographic Memory, Speed Reading, Abacus Math, Vedic Math for kids, teens & adults. Book free demo: +91 7396447470',
  keywords: [
    'Smart Brains India',
    'brain training institute',
    'brain training center Hyderabad',
    'brain training center Vizianagaram',
    'DMIT test',
    'DMIT assessment',
    'Midbrain Activation',
    'Midbrain Activation training',
    'Photographic Memory',
    'Photographic Memory training',
    'Speed Reading',
    'Speed Reading course',
    'Abacus Math',
    'Abacus Math classes',
    'Vedic Math',
    'Vedic Math training',
    'brain development programs',
    'cognitive development',
    'memory improvement',
    'kids brain training',
    'adult brain training',
    'Hyderabad',
    'Vizianagaram',
    'Kondapur',
    'brain training near me',
    'best brain training institute',
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
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual Google Search Console verification code
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'Education',
  authors: [{ name: 'Smart Brains India' }],
  creator: 'Smart Brains India',
  publisher: 'Smart Brains India',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://www.smartbrainsindia.com/#organization',
                  name: 'Smart Brains India',
                  url: 'https://www.smartbrainsindia.com',
                  logo: {
                    '@type': 'ImageObject',
                    '@id': 'https://www.smartbrainsindia.com/#logo',
                    url: 'https://www.smartbrainsindia.com/logo.png',
                    width: 512,
                    height: 512
                  },
                  sameAs: [
                    'https://www.facebook.com/',
                    'https://www.instagram.com/',
                    'https://www.youtube.com/'
                  ],
                  contactPoint: [
                    {
                      '@type': 'ContactPoint',
                      telephone: '+91 7396447470',
                      contactType: 'customer service',
                      areaServed: 'IN',
                      availableLanguage: ['en', 'hi', 'te']
                    },
                    {
                      '@type': 'ContactPoint',
                      telephone: '+91 7386209090',
                      contactType: 'customer service',
                      areaServed: 'IN',
                      availableLanguage: ['en', 'hi', 'te']
                    }
                  ]
                },
                {
                  '@type': 'LocalBusiness',
                  '@id': 'https://www.smartbrainsindia.com/#location-hyderabad',
                  name: 'Smart Brains India - Hyderabad',
                  parentOrganization: {
                    '@id': 'https://www.smartbrainsindia.com/#organization'
                  },
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Prasanth Nagar Colony, Kondapur',
                    addressLocality: 'Hyderabad',
                    addressRegion: 'Telangana',
                    postalCode: '500084',
                    addressCountry: 'IN'
                  },
                  telephone: '+91 7386209090',
                  areaServed: {
                    '@type': 'City',
                    name: 'Hyderabad'
                  },
                  url: 'https://www.smartbrainsindia.com/contact',
                  priceRange: '$$'
                },
                {
                  '@type': 'LocalBusiness',
                  '@id': 'https://www.smartbrainsindia.com/#location-vizianagaram',
                  name: 'Smart Brains India - Vizianagaram',
                  parentOrganization: {
                    '@id': 'https://www.smartbrainsindia.com/#organization'
                  },
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Dakkini Street, Backside of Ramamandir, 3-1/4-12/2',
                    addressLocality: 'Vizianagaram',
                    addressRegion: 'Andhra Pradesh',
                    postalCode: '535002',
                    addressCountry: 'IN'
                  },
                  telephone: '+91 7396447470',
                  areaServed: {
                    '@type': 'City',
                    name: 'Vizianagaram'
                  },
                  url: 'https://www.smartbrainsindia.com/contact',
                  priceRange: '$$'
                },
                {
                  '@type': 'EducationalOrganization',
                  '@id': 'https://www.smartbrainsindia.com/#educational',
                  name: 'Smart Brains India',
                  url: 'https://www.smartbrainsindia.com',
                  logo: {
                    '@id': 'https://www.smartbrainsindia.com/#logo'
                  },
                  address: [
                    {
                      '@type': 'PostalAddress',
                      streetAddress: 'Prasanth Nagar Colony, Kondapur',
                      addressLocality: 'Hyderabad',
                      addressRegion: 'Telangana',
                      postalCode: '500084',
                      addressCountry: 'IN'
                    },
                    {
                      '@type': 'PostalAddress',
                      streetAddress: 'Dakkini Street, Backside of Ramamandir, 3-1/4-12/2',
                      addressLocality: 'Vizianagaram',
                      addressRegion: 'Andhra Pradesh',
                      postalCode: '535002',
                      addressCountry: 'IN'
                    }
                  ],
                  contactPoint: [
                    {
                      '@type': 'ContactPoint',
                      telephone: '+91 7396447470',
                      contactType: 'customer service',
                      areaServed: 'IN'
                    },
                    {
                      '@type': 'ContactPoint',
                      telephone: '+91 7386209090',
                      contactType: 'customer service',
                      areaServed: 'IN'
                    }
                  ]
                }
              ]
            })
          }}
        />
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