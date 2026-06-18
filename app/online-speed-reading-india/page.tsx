import { Metadata } from 'next';
import { OnlineProgramView, OnlineProgramData } from '@/components/online-programs/OnlineProgramView';
import { programFAQs } from '@/data/faqs';

const programData: OnlineProgramData = {
  title: 'Speed Reading',
  subtitle: 'Read Faster with Perfect Comprehension Online',
  description: 'Join our nationwide online speed reading course and learn how to triple your reading speed from the comfort of your home.',
  longDescription: 'In today\'s fast-paced academic and professional world, the ability to process written information rapidly is a superpower. Our Online Speed Reading program is delivered live across India, teaching students how to eliminate subvocalization, expand peripheral vision, and absorb blocks of text simultaneously. The digital format allows us to use specialized software and screen-pacing tools that train the eyes far more effectively than traditional offline methods.',
  targetAge: '8+ years to Adults',
  duration: '10 Online Sessions (5 weeks)',
  classFormat: 'Live Interactive Virtual Classroom',
  price: 'Contact for pricing',
  image: '/images/speed-reading.webp',
  imageAlt: 'Online Speed Reading classes for students and professionals in India',
  onlineBenefits: [
    'Digital eye-tracking and text-pacing exercises',
    'Interactive reading speed assessments conducted remotely',
    'Perfect for screen reading optimization (PDFs, eBooks, online articles)',
    'Live Q&A and comprehension testing with the instructor'
  ],
  studentSuccess: [
    'Average students increase reading speed from 200 WPM to 600+ WPM',
    'Maintained or improved comprehension scores (90%+)',
    'Professionals report saving 2+ hours daily on emails and reports'
  ],
  parentConversion: 'If your child takes hours to finish a single chapter, they are operating at a disadvantage. Our Pan-India online speed reading course uses advanced digital techniques to train their brain to read faster and understand better. Give them the skills to breeze through their curriculum and competitive exams.',
  faqs: programFAQs['speed-reading'] || [
    {
      q: 'Is speed reading effective for studying textbooks?',
      a: 'Yes. We teach specific skimming and scanning techniques tailored for academic textbooks, helping students find and retain core concepts rapidly.'
    },
    {
      q: 'Does reading faster reduce understanding?',
      a: 'No. Traditional reading (reading word-by-word) actually allows the brain to wander. Speed reading requires high focus, which typically increases comprehension.'
    }
  ],
  relatedPrograms: [
    { title: 'Offline Speed Reading', href: '/programs/speed-reading', description: 'In-person classes at our centers' },
    { title: 'Online Photographic Memory', href: '/online-photographic-memory-india', description: 'Enhance your memory capacity online' }
  ]
};

export const metadata: Metadata = {
  title: 'Speed Reading Online Course India | Read Faster & Better',
  description: 'Join our nationwide online speed reading course. Triple your reading speed, eliminate subvocalization, and improve comprehension with live interactive classes.',
  keywords: ['speed reading online course India', 'read faster online classes', 'best speed reading course India', 'online reading improvement', 'how to read faster online', 'speed reading for students online'],
  alternates: { canonical: 'https://www.smartbrainsindia.in/online-speed-reading-india' },
  openGraph: {
    title: 'Speed Reading Online Course India | Read Faster & Better',
    description: 'Join our nationwide online speed reading course. Triple your reading speed and improve comprehension.',
    url: 'https://www.smartbrainsindia.in/online-speed-reading-india',
    type: 'website',
  }
};

export default function OnlineSpeedReadingIndiaPage() {
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
    '@id': 'https://www.smartbrainsindia.in/online-speed-reading-india#course',
    'name': 'Online Speed Reading Course',
    'description': programData.description,
    'provider': {
      '@type': 'EducationalOrganization',
      '@id': 'https://www.smartbrainsindia.in/#educational'
    },
    'courseMode': ['online'],
    'educationalLevel': 'Intermediate',
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
      <OnlineProgramView programData={programData} programSlug="online-speed-reading-india" />
    </>
  );
}
