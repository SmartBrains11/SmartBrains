import { Metadata } from 'next';
import { OnlineProgramView, OnlineProgramData } from '@/components/online-programs/OnlineProgramView';
import { programFAQs } from '@/data/faqs';

const programData: OnlineProgramData = {
  title: 'Vedic Maths',
  subtitle: 'Ancient High-Speed Math Tricks Delivered Online',
  description: 'Master the world\'s fastest mental math system with our Pan-India online Vedic Maths training for students and competitive exam aspirants.',
  longDescription: 'Vedic Mathematics is an ancient Indian system that simplifies complex arithmetic operations into quick, mental, one-line formulas (Sutras). Our Online Vedic Maths course brings these powerful techniques to students across India via high-definition live streaming. The digital format allows for instant screen-sharing of complex problems, digital whiteboarding, and real-time solving races among students nationwide.',
  targetAge: '8+ years to Competitive Exam Aspirants',
  duration: '12 Online Sessions (6 weeks)',
  classFormat: 'Live Interactive Virtual Classroom',
  price: 'Contact for pricing',
  image: '/images/vedic-maths.webp',
  imageAlt: 'Online Vedic Maths classes for fast calculations in India',
  onlineBenefits: [
    'Digital whiteboard sessions for clear step-by-step formula breakdowns',
    'Live competitive math sprints with students across India',
    'Accessible from any device, anywhere',
    'Recorded sessions available for reviewing complex Sutras'
  ],
  studentSuccess: [
    '400% improvement in calculation speed for algebra and arithmetic',
    'Massive advantage in competitive exams (Olympiads, JEE, Bank PO)',
    'Elimination of rough-work dependency and calculation errors'
  ],
  parentConversion: 'In competitive exams, time is the deciding factor. Equip your child with the 16 Sutras of Vedic Mathematics through our specialized online program. They will learn to solve complex multiplications, squares, and cubes mentally in seconds, giving them unparalleled confidence and an immense competitive edge.',
  faqs: programFAQs['vedic-math'] || [
    {
      q: 'How is Vedic Math different from Abacus?',
      a: 'Abacus is a tool-based visualization method primarily for younger kids (4-14). Vedic Math uses mental formulas (Sutras) to solve complex arithmetic and algebra rapidly, making it ideal for older students (8+) and competitive exam aspirants.'
    },
    {
      q: 'Do online classes work well for teaching math formulas?',
      a: 'Extremely well. We use digital whiteboards where trainers break down the Sutras step-by-step, allowing students to see the process clearly and ask questions in real-time.'
    }
  ],
  relatedPrograms: [
    { title: 'Offline Vedic Maths', href: '/programs/vedic-math', description: 'In-person classes at our centers' },
    { title: 'Online Abacus Classes', href: '/online-abacus-india', description: 'Foundation math for younger children' }
  ]
};

export const metadata: Metadata = {
  title: 'Online Vedic Maths Training India | Fast Mental Calculation Tricks',
  description: 'Join the best Online Vedic Maths classes in India. Learn ancient high-speed mental math tricks (Sutras) for school and competitive exams through live video sessions.',
  keywords: ['online vedic maths training India', 'vedic math online course', 'learn vedic maths online', 'fast calculation tricks online', 'vedic maths for competitive exams online', 'best vedic math classes India'],
  alternates: { canonical: 'https://www.smartbrainsindia.in/online-vedic-maths-india' },
  openGraph: {
    title: 'Online Vedic Maths Training India | Fast Mental Calculation Tricks',
    description: 'Join the best Online Vedic Maths classes in India. Learn ancient high-speed mental math tricks (Sutras) via live video sessions.',
    url: 'https://www.smartbrainsindia.in/online-vedic-maths-india',
    type: 'website',
  }
};

export default function OnlineVedicMathsIndiaPage() {
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
    '@id': 'https://www.smartbrainsindia.in/online-vedic-maths-india#course',
    'name': 'Online Vedic Maths Course',
    'description': programData.description,
    'provider': {
      '@type': 'EducationalOrganization',
      '@id': 'https://www.smartbrainsindia.in/#educational'
    },
    'courseMode': ['online'],
    'educationalLevel': 'Intermediate to Advanced',
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
      <OnlineProgramView programData={programData} programSlug="online-vedic-maths-india" />
    </>
  );
}
