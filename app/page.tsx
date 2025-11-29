import type { Metadata } from 'next';
import HeroSection from '../components/home/HeroSection';
import { ProgramsShowcase } from '../components/home/ProgramsShowcase';
import { WhySmartBrains } from '../components/home/WhySmartBrains';
import { TestimonialSlider } from '../components/home/TestimonialSlider';
import { CTASection } from '../components/home/CTASection';
import { MediaGallery } from '../components/home/MediaGallery';
import { MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Brain Training & Memory Classes for Kids in Hyderabad & Vizianagaram | Smart Brains India',
  description: 'Smart Brains India - #1 Brain Training Institute in Vizianagaram & Hyderabad | DMIT, Midbrain Activation, Speed Reading, Abacus & Vedic Math | ✓1000+ Students ✓Certified Trainers ✓Proven Results | FREE Demo: +91 7396447470',
  keywords: [
    'brain training for kids',
    'brain development classes',
    'memory improvement',
    'abacus classes',
    'Hyderabad',
    'Vizianagaram',
    'Smart Brains India',
    'midbrain activation',
    'photographic memory',
    'child development'
  ],
  openGraph: {
    title: 'Brain Training & Memory Classes for Kids in Hyderabad & Vizianagaram | Smart Brains India',
    description: 'Smart Brains India offers brain development, memory, abacus, midbrain activation and photographic memory classes for kids in Hyderabad and Vizianagaram.',
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
    title: 'Brain Training & Memory Classes for Kids in Hyderabad & Vizianagaram',
    description: 'Boost focus, confidence and exam performance with scientific brain training programs.',
    images: ['https://www.smartbrainsindia.com/og-default.jpg']
  },
  robots: { index: true, follow: true }
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

      {/* Hidden SEO Content for Search Engines */}
      <section className="sr-only" aria-label="SEO Rich Content">
        <h2>Brain Training Institute in Vizianagaram and Hyderabad</h2>
        <p>
          Smart Brains India is the premier brain development and skill training institute
          serving Vizianagaram, Hyderabad, and all of Andhra Pradesh. Founded in 2019 by
          certified brain training expert Lakkoju Jayalakshmi, we have successfully trained
          over 1000 students in cognitive development programs.
        </p>
        <p>
          Our Vizianagaram center is located at Dakkini Street, Backside of Ramamandir,
          3-1/4-12/2, Vizianagaram-535002, Andhra Pradesh. Contact us at +91 7396447470 for
          DMIT test, Midbrain Activation, Photographic Memory training, Quantum Speed Reading,
          Abacus Math classes, Vedic Math, Handwriting Improvement, and Drawing Skill Development.
        </p>
        <p>
          Our Hyderabad branch is at Prasanth Nagar Colony, Kondapur, Hyderabad-500084, Telangana.
          Phone: +91 7386209090. We serve students from Vizianagaram, Srikakulam, Visakhapatnam,
          Vijayawada, Guntur, Rajahmundry, Hyderabad, Kondapur, and surrounding areas.
        </p>
        <p>
          Specializing in Dermatoglyphics Multiple Intelligence Test (DMIT) for identifying inborn
          talents, Midbrain Activation for enhancing intuitive abilities in children aged 5-15 years,
          Advanced Midbrain programs for adults, Photographic Memory techniques for perfect recall,
          and comprehensive brain development programs backed by scientific research.
        </p>
      </section>
      <ProgramsShowcase />
      <MediaGallery />
      <WhySmartBrains />
      <TestimonialSlider />

      {/* Centres in Hyderabad & Vizianagaram Block */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Centres in Hyderabad & Vizianagaram
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our centres to experience our world-class brain training facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Hyderabad Centre */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                Hyderabad Centre
              </h3>
              <div className="space-y-4 text-gray-600">
                <p className="font-medium">Smart Brains India</p>
                <p>Prasanth Nagar Colony, Kondapur</p>
                <p>Hyderabad, Telangana - 500084</p>
                <div className="flex items-center pt-2">
                  <Phone className="w-5 h-5 text-blue-600 mr-2" />
                  <a href="tel:+917386209090" className="hover:text-blue-600 font-medium">+91 7386209090</a>
                </div>
                <div className="pt-4">
                  <Link
                    href="https://maps.google.com/?q=Smart+Brains+India+Hyderabad"
                    target="_blank"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 hover:underline"
                  >
                    View location on map &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Vizianagaram Centre */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-6 h-6 text-orange-600 mr-2" />
                Vizianagaram Centre
              </h3>
              <div className="space-y-4 text-gray-600">
                <p className="font-medium">Smart Brains India</p>
                <p>Dakkini Street, Backside of Ramamandir</p>
                <p>3-1/4-12/2, Vizianagaram - 535002</p>
                <p>Andhra Pradesh</p>
                <div className="flex items-center pt-2">
                  <Phone className="w-5 h-5 text-orange-600 mr-2" />
                  <a href="tel:+917396447470" className="hover:text-orange-600 font-medium">+91 7396447470</a>
                </div>
                <div className="pt-4">
                  <Link
                    href="https://maps.google.com/?q=Smart+Brains+India+Vizianagaram"
                    target="_blank"
                    className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 hover:underline"
                  >
                    View location on map &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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