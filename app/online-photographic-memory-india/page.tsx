import { Metadata } from 'next';
import { OnlineProgramView, OnlineProgramData } from '@/components/online-programs/OnlineProgramView';
import { programFAQs } from '@/data/faqs';

const programData: OnlineProgramData = {
  title: 'Photographic Memory',
  subtitle: 'Master Near-Perfect Recall Through Remote Training',
  description: 'Our Online Photographic Memory training equips students across India with advanced visualization and association techniques via live interactive classes.',
  longDescription: 'The ability to instantly capture and recall visual information is a tremendous academic advantage. Our Pan-India Online Photographic Memory program translates powerful memory palace constructs, mental association, and eidetic visualization techniques into engaging digital exercises. Delivered through live video by memory experts, students learn to drastically reduce study time and increase retention.',
  targetAge: '6+ years',
  duration: '20 Online Sessions (2 months)',
  classFormat: 'Live Interactive Virtual Classroom',
  price: 'Contact for pricing',
  image: '/images/photograhic-memory.webp',
  imageAlt: 'Online Photographic Memory training classes in India',
  onlineBenefits: [
    'Digital flashcards and memory exercises optimized for screen learning',
    'Live memory challenges with peers across India',
    'Recordings of sessions available for revision',
    'Progressive digital assessments to track recall speed'
  ],
  studentSuccess: [
    'Students report a 300% improvement in visual recall within 8 weeks',
    'Significant reduction in exam preparation time',
    'Consistent improvement in long-term academic retention'
  ],
  parentConversion: 'Tired of seeing your child struggle with rote memorization? Enroll them in our nationwide online photographic memory program. We teach scientifically proven memory techniques that transform studying from a stressful chore into a highly efficient, visual process—all from the comfort of your living room.',
  faqs: programFAQs['photographic-memory'] || [
    {
      q: 'Can photographic memory be learned online?',
      a: 'Absolutely. The core of the training is visualization and technique. Our digital platform allows us to flash images and information at controlled speeds, which is perfect for online memory training.'
    },
    {
      q: 'Will this help with my child\'s school curriculum?',
      a: 'Yes. We teach students how to apply these memory palace and visualization techniques directly to their textbooks, historical dates, scientific formulas, and vocabulary.'
    }
  ],
  relatedPrograms: [
    { title: 'Offline Memory Training', href: '/programs/photographic-memory', description: 'In-person classes available at our centers' },
    { title: 'Online Speed Reading', href: '/online-speed-reading-india', description: 'Complement memory with fast reading' }
  ]
};

export const metadata: Metadata = {
  title: 'Online Photographic Memory Training India | Boost Child Memory',
  description: 'Join the best online photographic memory training program in India. Live classes to teach visualization, memory palaces, and rapid recall for better academic results.',
  keywords: ['online photographic memory training India', 'eidetic memory course online', 'memory improvement online classes', 'best memory training online India', 'photographic memory for kids online', 'improve child memory online'],
  alternates: { canonical: 'https://www.smartbrainsindia.in/online-photographic-memory-india' },
  openGraph: {
    title: 'Online Photographic Memory Training India | Boost Child Memory',
    description: 'Join the best online photographic memory training program in India. Live classes to teach visualization, memory palaces, and rapid recall.',
    url: 'https://www.smartbrainsindia.in/online-photographic-memory-india',
    type: 'website',
  }
};

export default function OnlinePhotographicMemoryIndiaPage() {
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
    '@id': 'https://www.smartbrainsindia.in/online-photographic-memory-india#course',
    'name': 'Online Photographic Memory Training',
    'description': programData.description,
    'provider': {
      '@type': 'EducationalOrganization',
      '@id': 'https://www.smartbrainsindia.in/#educational'
    },
    'courseMode': ['online'],
    'educationalLevel': 'Beginner to Intermediate',
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
      <OnlineProgramView programData={programData} programSlug="online-photographic-memory-india" />
    </>
  );
}
