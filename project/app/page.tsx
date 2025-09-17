
import { HeroSection } from '../components/home/HeroSection';
import { ProgramsShowcase } from '../components/home/ProgramsShowcase';
import { WhySmartBrains } from '../components/home/WhySmartBrains';
import { TestimonialSlider } from '../components/home/TestimonialSlider';
import { CTASection } from '../components/home/CTASection';


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
                  text: 'Midbrain Activation is a training approach to stimulate the midbrain and improve focus, creativity, memory and intuition for children and adults.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do you offer programs in Hyderabad and Vizianagaram?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Smart Brains India operates in Hyderabad (Kondapur) and Vizianagaram (Dakkini Street).'
                }
              },
              {
                '@type': 'Question',
                name: 'Which courses are available?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'DMIT, Midbrain Activation, Photographic Memory, Enhancement, Abacus Math, Vedic Math, Speed Reading, Handwriting, Midbrain for Adults, and Drawing & Skill Development.'
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}