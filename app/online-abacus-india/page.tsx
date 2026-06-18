import { Metadata } from 'next';
import { OnlineProgramView, OnlineProgramData } from '@/components/online-programs/OnlineProgramView';
import { programFAQs } from '@/data/faqs';

const programData: OnlineProgramData = {
  title: 'Abacus Classes',
  subtitle: 'Master Mental Mathematics from Home',
  description: 'Enroll in our premier online Abacus classes available across India. Build a strong mathematical foundation and lightning-fast calculation skills.',
  longDescription: 'The Abacus is a powerful ancient tool that transforms how children perceive numbers, turning abstract math into a visual, tactile experience. Our Pan-India Online Abacus Program utilizes digital abacus simulators alongside physical tools to teach mental arithmetic. Through live video guidance, our trainers ensure that each child\'s finger movements and visualization techniques are absolutely perfect, leading to incredible mental math speeds.',
  targetAge: '4-14 years',
  duration: '8 Levels (Continuous Online Program)',
  classFormat: 'Live Small Group Video Classes (Max 6 students)',
  price: 'Contact for pricing',
  image: '/images/abacus.webp',
  imageAlt: 'Online Abacus classes and mental math training for kids in India',
  onlineBenefits: [
    'Highly interactive digital abacus tools for screen sharing',
    'Live correction of finger movements via webcam',
    'Save commute time - consistent learning from home',
    'Online gamified practice sheets and speed tests'
  ],
  studentSuccess: [
    'Students perform complex arithmetic mentally faster than a calculator',
    'Elimination of math phobia in 98% of enrolled children',
    'Significant improvement in overall concentration and academic performance'
  ],
  parentConversion: 'Math phobia is common, but it is completely preventable. Our online abacus classes provide a fun, engaging, and highly visual way for your child to fall in love with numbers. With our expert trainers guiding them live online, watch your child calculate complex sums mentally with breathtaking speed.',
  faqs: programFAQs['abacus-math'] || [
    {
      q: 'How does an online abacus class work?',
      a: 'We use a combination of a physical abacus (which you will have at home) and a digital screen-shared abacus. The teacher watches the student\'s finger movements through the webcam and provides real-time corrections.'
    },
    {
      q: 'Is my child too young for online classes?',
      a: 'Our online batches for ages 4-6 are kept very small and are highly interactive, involving games and colorful visuals to keep them completely engaged.'
    }
  ],
  relatedPrograms: [
    { title: 'Offline Abacus Classes', href: '/programs/abacus-math', description: 'In-person classes at our local centers' },
    { title: 'Online Vedic Maths', href: '/online-vedic-maths-india', description: 'Advanced math tricks for older students' }
  ]
};

export const metadata: Metadata = {
  title: 'Online Abacus Classes India | Mental Math Training for Kids',
  description: 'Best online abacus classes in India. Live interactive mental math training for kids aged 4-14. Improve calculation speed, focus, and remove math phobia.',
  keywords: ['online abacus classes India', 'abacus online training', 'mental math classes online', 'best online abacus for kids', 'learn abacus online India', 'online math classes for children'],
  alternates: { canonical: 'https://www.smartbrainsindia.in/online-abacus-india' },
  openGraph: {
    title: 'Online Abacus Classes India | Mental Math Training for Kids',
    description: 'Best online abacus classes in India. Live interactive mental math training for kids.',
    url: 'https://www.smartbrainsindia.in/online-abacus-india',
    type: 'website',
  }
};

export default function OnlineAbacusIndiaPage() {
  const faqSchema = programData.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': programData.faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a
      }
    }))
  } : null;

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': 'https://www.smartbrainsindia.in/online-abacus-india#course',
    'name': 'Online Abacus Mastery Program',
    'description': programData.description,
    'provider': {
      '@type': 'EducationalOrganization',
      '@id': 'https://www.smartbrainsindia.in/#educational'
    },
    'courseMode': ['online'],
    'educationalLevel': 'Beginner',
    'offers': {
      '@type': 'Offer',
      'category': 'Paid Course',
      'priceCurrency': 'INR',
      'price': '0',
      'description': 'Contact for online batch pricing.'
    }
  };

  return (
    <>
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <OnlineProgramView programData={programData} programSlug="online-abacus-india" />
    </>
  );
}
