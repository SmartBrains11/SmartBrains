import type { Metadata } from 'next';
import { HeroSection } from '../components/home/HeroSection';
import { ProgramsShowcase } from '../components/home/ProgramsShowcase';
import { WhySmartBrains } from '../components/home/WhySmartBrains';
import { TestimonialSlider } from '../components/home/TestimonialSlider';
import { CTASection } from '../components/home/CTASection';

export const metadata: Metadata = {
  title: 'Smart Brains India | Brain Training & Cognitive Development in Hyderabad & Vizianagaram',
  description: 'Leading brain training institute in Hyderabad & Vizianagaram. Expert-led programs: DMIT test, Midbrain Activation, Photographic Memory, Speed Reading, Abacus Math, Vedic Math for kids, teens & adults. Book free demo: +91 7396447470',
  keywords: [
    'Smart Brains India',
    'brain training institute',
    'brain training center Hyderabad',
    'brain training center Vizianagaram',
    'DMIT test',
    'DMIT assessment',
    'Midbrain Activation',
    'Photographic Memory',
    'Speed Reading',
    'Abacus Math',
    'Vedic Math',
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
    description: 'DMIT, Midbrain Activation, Photographic Memory, Speed Reading, Abacus & Vedic Math. Centers in Hyderabad & Vizianagaram.',
    url: 'https://www.smartbrainsindia.com',
    siteName: 'Smart Brains India',
    images: [
      {
        url: 'https://www.smartbrainsindia.com/og-default.jpg',
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
    description: 'DMIT, Midbrain Activation, Photographic Memory, Speed Reading, Abacus & Vedic Math. Centers in Hyderabad & Vizianagaram.',
    images: ['https://www.smartbrainsindia.com/og-default.jpg']
  },
};

export default function Home() {
  return (
    <div>
      {/* JSON-LD: EducationalOrganization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: 'Smart Brains India',
            url: 'https://www.smartbrainsindia.com',
            logo: 'https://www.smartbrainsindia.com/logo.png',
            sameAs: [
              'https://www.facebook.com/',
              'https://www.instagram.com/',
              'https://www.youtube.com/'
            ],
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
              { '@type': 'ContactPoint', telephone: '+91 7396447470', contactType: 'customer service', areaServed: 'IN' },
              { '@type': 'ContactPoint', telephone: '+91 7386209090', contactType: 'customer service', areaServed: 'IN' }
            ]
          })
        }}
      />
      <HeroSection />
      <ProgramsShowcase />
      <WhySmartBrains />
      <TestimonialSlider />
      <CTASection />

      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is Midbrain Activation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Midbrain Activation is a training approach to stimulate the midbrain and improve focus, creativity, memory and intuition for children and adults. It enhances intuitive abilities, improves concentration, boosts creativity, and develops better connection between conscious and subconscious mind.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do you offer programs in Hyderabad and Vizianagaram?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Smart Brains India operates two centers: Hyderabad (Prasanth Nagar Colony, Kondapur) and Vizianagaram (Dakkini Street, Backside of Ramamandir). Call +91 7396447470 for Hyderabad or +91 7386209090 for Vizianagaram.'
                }
              },
              {
                '@type': 'Question',
                name: 'Which courses are available?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We offer 11 specialized programs: DMIT (Dermatoglyphics Multiple Intelligence Test), Midbrain Activation, Photographic Memory, Enhancement, Quantum Speed Reading, Abacus Math, Vedic Math, Speed Reading, Handwriting, Midbrain for Adults, and Drawing & Skill Development.'
                }
              },
              {
                '@type': 'Question',
                name: 'What is DMIT test?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'DMIT (Dermatoglyphics Multiple Intelligence Test) is a scientific method of understanding human potential through fingerprint analysis. It helps identify learning styles, personality traits, career guidance, and areas for development with 95% accuracy.'
                }
              },
              {
                '@type': 'Question',
                name: 'What age groups do you serve?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We offer programs for all age groups: children (4+ years), teens, and adults (18+). Specific age requirements vary by program. DMIT serves all ages, while programs like Midbrain Activation are for 5-15 years, and Midbrain for Adults is for 18+ years.'
                }
              },
              {
                '@type': 'Question',
                name: 'How do I book a free demo session?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You can book a free demo session by calling us at +91 7396447470 (Hyderabad) or +91 7386209090 (Vizianagaram), or by filling out the contact form on our website. We offer flexible scheduling and instant support.'
                }
              },
              {
                '@type': 'Question',
                name: 'What are the benefits of brain training programs?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our brain training programs improve memory, focus, concentration, creativity, problem-solving skills, academic performance, reading speed, mathematical abilities, and overall cognitive function. Students typically see results from day 1 with 96% success rate.'
                }
              },
              {
                '@type': 'Question',
                name: 'Are the programs scientifically proven?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, all our programs are based on scientifically proven brain training techniques. We use structured cognitive enhancement methods that have been validated through research and have helped over 1000+ students achieve significant improvements.'
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}