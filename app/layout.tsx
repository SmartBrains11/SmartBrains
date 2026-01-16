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
    'brain development center',
    'cognitive development institute',
    'brain training center Vizianagaram',
    'DMIT test in Vizianagaram',
    'midbrain activation Vizianagaram',
    'abacus classes Vizianagaram',
    'vedic math classes Vizianagaram',
    'memory training Vizianagaram',
    'Dakkini Street brain development',
    'best brain training institute Vizianagaram',
    'photographic memory training Vizianagaram',
    'speed reading Vizianagaram',
    'brain training center Hyderabad',
    'DMIT test in Hyderabad',
    'midbrain activation Hyderabad',
    'brain development Kondapur',
    'Prasanth Nagar brain training',
    'cognitive training Hyderabad',
    'abacus classes Kondapur',
    'brain training Andhra Pradesh',
    'best brain development center Andhra Pradesh',
    'DMIT center Andhra Pradesh',
    'child development programs AP',
    'brain training Srikakulam',
    'brain development Visakhapatnam',
    'DMIT test Visakhapatnam',
    'DMIT test',
    'DMIT assessment',
    'Dermatoglyphics Multiple Intelligence Test',
    'Midbrain Activation',
    'Midbrain Activation training',
    'Photographic Memory',
    'Photographic Memory training',
    'Quantum Speed Reading',
    'Speed Reading course',
    'Abacus Math classes',
    'Vedic Math training',
    'handwriting improvement classes',
    'drawing skill development',
    'brain development institute near me',
    'where to get DMIT test in Vizianagaram',
    'best midbrain activation center near me',
    'memory power training for kids',
    'how to improve child memory and concentration',
    'brain training programs for children',
    'abacus math training near me',
    'DMIT test near me',
    'brain training near me Vizianagaram',
    'midbrain activation near Dakkini Street',
    'kids brain training',
    'child brain development',
    'adult brain training',
    'brain training for students',
    'academic performance improvement',
    'memory improvement for kids',
    'concentration improvement programs',
    'cognitive skills for children',
    'help my child focus better',
    'improve child concentration naturally',
    'boost child confidence',
    'child memory improvement program',
    'how to make my child smarter',
    'Hyderabad',
    'Vizianagaram',
    'Kondapur',
    'Telangana',
    'Andhra Pradesh',
    'brain training near me',
    'best brain training institute India',
    'trusted brain training institute',
    'certified DMIT center',
    'experienced brain trainers',
    '1000+ students trained',
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
    google: 'GfzqFXTBm6HXWvSFJVuFp2dXSedmIW3nWo7vlyswfZY',
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
                  priceRange: '$$',
                  openingHoursSpecification: [
                    {
                      '@type': 'OpeningHoursSpecification',
                      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                      opens: '09:00',
                      closes: '18:00'
                    }
                  ],
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: '17.4569',
                    longitude: '78.3659'
                  },
                  image: 'https://www.smartbrainsindia.com/logo.png'
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
                  priceRange: '$$',
                  openingHoursSpecification: [
                    {
                      '@type': 'OpeningHoursSpecification',
                      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                      opens: '09:00',
                      closes: '18:00'
                    }
                  ],
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: '18.1124',
                    longitude: '83.3953'
                  },
                  image: 'https://www.smartbrainsindia.com/logo.png'
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