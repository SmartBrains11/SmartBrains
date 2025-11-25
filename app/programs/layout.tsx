import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brain Training Programs | DMIT, Midbrain Activation & More',
  description: 'Explore 11 specialized brain training programs in Hyderabad & Vizianagaram. DMIT, Midbrain Activation, Photographic Memory, Speed Reading, Abacus Math, Vedic Math, and more. Expert-led courses for kids, teens, and adults.',
  keywords: [
    'brain training programs',
    'DMIT test',
    'Midbrain Activation',
    'Photographic Memory training',
    'Speed Reading course',
    'Abacus Math classes',
    'Vedic Math training',
    'brain development programs',
    'cognitive training',
    'memory improvement',
    'Hyderabad brain training',
    'Vizianagaram brain training',
    'kids brain development',
    'adult brain training'
  ],
  openGraph: {
    title: 'Brain Training Programs | Smart Brains India',
    description: '11 specialized brain training programs in Hyderabad & Vizianagaram. Expert-led courses for cognitive development.',
    url: 'https://www.smartbrainsindia.com/programs',
    siteName: 'Smart Brains India',
    images: [
      {
        url: 'https://www.smartbrainsindia.com/og-programs.jpg',
        width: 1200,
        height: 630,
        alt: 'Brain Training Programs - Smart Brains India'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.smartbrainsindia.com/programs'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brain Training Programs | Smart Brains India',
    description: '11 specialized brain training programs for cognitive development in Hyderabad & Vizianagaram.',
    images: ['https://www.smartbrainsindia.com/og-programs.jpg']
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
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Brain Training Programs',
            description: 'Comprehensive list of brain training and cognitive development programs',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'DMIT - Dermatoglyphics Multiple Intelligence Test',
                url: 'https://www.smartbrainsindia.com/programs/dmit'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Midbrain Activation',
                url: 'https://www.smartbrainsindia.com/programs/midbrain-activation'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Photographic Memory',
                url: 'https://www.smartbrainsindia.com/programs/photographic-memory'
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: 'Enhancement Program',
                url: 'https://www.smartbrainsindia.com/programs/enhancement'
              },
              {
                '@type': 'ListItem',
                position: 5,
                name: 'Quantum Speed Reading',
                url: 'https://www.smartbrainsindia.com/programs/quantum-speed-reading'
              },
              {
                '@type': 'ListItem',
                position: 6,
                name: 'Abacus Math',
                url: 'https://www.smartbrainsindia.com/programs/abacus-math'
              },
              {
                '@type': 'ListItem',
                position: 7,
                name: 'Vedic Math',
                url: 'https://www.smartbrainsindia.com/programs/vedic-math'
              },
              {
                '@type': 'ListItem',
                position: 8,
                name: 'Speed Reading',
                url: 'https://www.smartbrainsindia.com/programs/speed-reading'
              },
              {
                '@type': 'ListItem',
                position: 9,
                name: 'Handwriting',
                url: 'https://www.smartbrainsindia.com/programs/handwriting'
              },
              {
                '@type': 'ListItem',
                position: 10,
                name: 'Midbrain for Adults',
                url: 'https://www.smartbrainsindia.com/programs/midbrain-adults'
              },
              {
                '@type': 'ListItem',
                position: 11,
                name: 'Drawing & Skill Development',
                url: 'https://www.smartbrainsindia.com/programs/drawing-skills'
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}

