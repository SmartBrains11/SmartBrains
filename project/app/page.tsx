
import { HeroSection } from '../components/home/HeroSection';
import { ProgramsShowcase } from '../components/home/ProgramsShowcase';
import { WhySmartBrains } from '../components/home/WhySmartBrains';
import { TestimonialSlider } from '../components/home/TestimonialSlider';
import { CTASection } from '../components/home/CTASection';


export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProgramsShowcase />
      <WhySmartBrains />
      <TestimonialSlider />
      <CTASection />
    </div>
  );
}