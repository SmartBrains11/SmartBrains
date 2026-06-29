import type { Metadata } from 'next';
import HeroSection from '../components/home/HeroSection';
import dynamic from 'next/dynamic';

const ProgramsShowcase = dynamic(() => import('../components/home/ProgramsShowcase'));
const FounderTeaser = dynamic(() => import('../components/home/FounderTeaser'));
const WhySmartBrains = dynamic(() => import('../components/home/WhySmartBrains'));
const InstagramShowcase = dynamic(() => import('../components/home/InstagramShowcase'));
const TestimonialSlider = dynamic(() => import('../components/home/TestimonialSlider'));
const CTASection = dynamic(() => import('../components/home/CTASection'));
const MediaGallery = dynamic(() => import('../components/home/MediaGallery'));
const ContactPopup = dynamic(() => import('../components/home/ContactPopup'), { ssr: false });
import { MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import TrustEEAT from '../components/home/TrustEEAT';
import { MeetExperts } from '../components/home/MeetExperts';



export const metadata: Metadata = {
  title: 'Brain Training & Memory Classes for Kids in Hyderabad & Vizianagaram | Online Classes across India | Smart Brains India',
  description: 'Smart Brains India - #1 Brain Training Institute in Vizianagaram & Hyderabad | Now offering Live Online Classes across India | DMIT, Midbrain Activation, Speed Reading, Abacus & Vedic Math | Book FREE Demo: +91 7396447470',
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
    'child development',
    // Pan-India & Online Classes Additions
    'online brain training',
    'online abacus classes',
    'online DMIT test India',
    'midbrain activation online',
    'photographic memory training online',
    'nationwide brain development',
    'online classes for children'
  ],
  openGraph: {
    title: 'Brain Training & Memory Classes for Kids in Hyderabad & Vizianagaram | Smart Brains India',
    description: 'Smart Brains India offers brain development, memory, abacus, midbrain activation and photographic memory classes for kids in Hyderabad and Vizianagaram.',
    url: 'https://www.smartbrainsindia.in',
    siteName: 'Smart Brains India',
    images: [
      {
        url: 'https://www.smartbrainsindia.in/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Smart Brains India - Brain Training Programs'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.smartbrainsindia.in'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@smartbrainsindia',
    title: 'Brain Training & Memory Classes for Kids in Hyderabad & Vizianagaram',
    description: 'Boost focus, confidence and exam performance with scientific brain training programs.',
    images: ['https://www.smartbrainsindia.in/og-default.jpg']
  },
  robots: { index: true, follow: true }
};

export default function Home() {
  return (
    <div>
      {/* JSON-LD: SearchAction */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            'url': 'https://www.smartbrainsindia.in',
            'potentialAction': {
              '@type': 'SearchAction',
              'target': 'https://www.smartbrainsindia.in/blog?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          })
        }}
      />
      {/* JSON-LD: EducationalOrganization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: 'Smart Brains India',
            url: 'https://www.smartbrainsindia.in',
            logo: 'https://www.smartbrainsindia.in/logo.png',
            sameAs: [
              'https://www.facebook.com/profile.php?id=61583366865848',
              'https://www.instagram.com/smartbrainsindia.in/',
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
      <ContactPopup />

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
        <p>
          Smart Brains India also provides live, interactive online classes and programs nationwide across India. 
          Our online cognitive training, mental arithmetic, and brain development courses are tailored to serve 
          students in major cities including Delhi, Mumbai, Bengaluru, Chennai, Pune, Kolkata, and other regions, 
          bringing our certified trainers and proven scientific methods directly to your home.
        </p>
      </section>
      <ProgramsShowcase />
      <FounderTeaser />
      <MediaGallery />
      <WhySmartBrains />
      <TrustEEAT />
      <MeetExperts />
      <InstagramShowcase />
      <TestimonialSlider />

      {/* Centres in Hyderabad & Vizianagaram Block */}
      <section className="py-12 sm:py-20 sm:py-28 bg-[#fafafa]">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16 lg:mb-20">
            <span className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
              Find Us
            </span>
            <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-none uppercase">
              CENTRES IN HYDERABAD & VIZIANAGARAM
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Visit our centres to experience our world-class brain training facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Hyderabad Centre */}
            <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[2.5rem] border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] transition-all duration-400 group">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-blue-50 text-blue-600 mb-5 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
                Hyderabad Centre
              </h3>
              <div className="space-y-2 sm:space-y-4 text-gray-500 text-base sm:text-lg">
                <p className="font-semibold text-gray-900">Smart Brains India</p>
                <p>Prasanth Nagar Colony, Kondapur</p>
                <p>Hyderabad, Telangana - 500084</p>
                <div className="flex items-center pt-2">
                  <Phone className="w-6 h-6 text-blue-600 mr-3" />
                  <a href="tel:+917386209090" className="hover:text-blue-600 font-medium transition-colors">+91 7386209090</a>
                </div>
                <div className="pt-8 mt-auto">
                  <Link
                    href="https://maps.google.com/?q=Smart+Brains+India+Hyderabad"
                    target="_blank"
                    className="inline-flex items-center justify-center w-full px-8 py-4 rounded-xl bg-gray-50 hover:bg-blue-50 text-blue-600 font-semibold transition-colors group/btn"
                  >
                    View location on map
                    <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Vizianagaram Centre */}
            <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[2.5rem] border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(234,88,12,0.08)] transition-all duration-400 group flex flex-col">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-orange-50 text-orange-600 mb-5 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
                Vizianagaram Centre
              </h3>
              <div className="space-y-2 sm:space-y-4 text-gray-500 text-base sm:text-lg flex-1">
                <p className="font-semibold text-gray-900">Smart Brains India</p>
                <p>Dakkini Street, Backside of Ramamandir</p>
                <p>3-1/4-12/2, Vizianagaram - 535002, AP</p>
                <div className="flex items-center pt-2">
                  <Phone className="w-6 h-6 text-orange-600 mr-3" />
                  <a href="tel:+917396447470" className="hover:text-orange-600 font-medium transition-colors">+91 7396447470</a>
                </div>
              </div>
              <div className="pt-8 mt-auto">
                <Link
                  href="https://maps.google.com/?q=Smart+Brains+India+Vizianagaram"
                  target="_blank"
                  className="inline-flex items-center justify-center w-full px-8 py-4 rounded-xl bg-gray-50 hover:bg-orange-50 text-orange-600 font-semibold transition-colors group/btn"
                >
                  View location on map
                  <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                </Link>
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