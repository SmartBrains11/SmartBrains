
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
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Hyderabad & Vizianagaram',
              addressCountry: 'IN'
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+91 7396447470',
              contactType: 'customer service',
              areaServed: 'IN'
            }
          })
        }}
      />
      <HeroSection />
      <ProgramsShowcase />
      <WhySmartBrains />
      <TestimonialSlider />
      <CTASection />
    </div>
  );
}