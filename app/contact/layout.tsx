import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Brain Training Centers in Hyderabad & Vizianagaram',
  description: 'Contact Smart Brains India for brain training programs. Visit our centers in Hyderabad (Kondapur) and Vizianagaram. Call +91 7396447470 or +91 7386209090. Book a free demo session today.',
  keywords: [
    'contact Smart Brains India',
    'brain training center Hyderabad',
    'brain training center Vizianagaram',
    'DMIT test booking',
    'Midbrain Activation consultation',
    'brain training contact',
    'Hyderabad brain training center',
    'Vizianagaram brain training center',
    'Kondapur brain training',
    'free demo session'
  ],
  openGraph: {
    title: 'Contact Us | Smart Brains India',
    description: 'Get in touch with Smart Brains India. Centers in Hyderabad & Vizianagaram. Book a free demo session.',
    url: 'https://www.smartbrainsindia.com/contact',
    siteName: 'Smart Brains India',
    images: [
      {
        url: 'https://www.smartbrainsindia.com/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Smart Brains India'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.smartbrainsindia.com/contact'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Smart Brains India',
    description: 'Get in touch with Smart Brains India. Book a free demo session for brain training programs.',
    images: ['https://www.smartbrainsindia.com/og-contact.jpg']
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
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
            '@type': 'ContactPage',
            name: 'Contact Smart Brains India',
            description: 'Contact information for Smart Brains India brain training centers',
            mainEntity: {
              '@type': 'Organization',
              name: 'Smart Brains India',
              telephone: ['+91 7396447470', '+91 7386209090'],
              email: 'smartbrainsindia11@gmail.com',
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
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday'
                ],
                opens: '09:00',
                closes: '19:00'
              }
            }
          })
        }}
      />
      {children}
    </>
  );
}

