import { Metadata } from 'next';
import { OnlineProgramView, OnlineProgramData } from '@/components/online-programs/OnlineProgramView';
import { programFAQs } from '@/data/faqs';

const programData: OnlineProgramData = {
  title: 'Midbrain Activation',
  subtitle: 'Stimulate Brain Potential Through Interactive Online Classes',
  description: 'Our revolutionary Midbrain Activation program is now available as a highly interactive, live online course for children across India.',
  longDescription: 'Midbrain Activation helps bridge the gap between the left and right hemispheres of the brain, leading to enhanced intuition, better concentration, and profound creativity. Our Pan-India online format is carefully designed to keep children engaged through specialized audio frequencies, interactive screen-based exercises, and remote blindfold activities supervised by expert trainers in real-time.',
  targetAge: '5-15 years',
  duration: 'Live Weekend Sessions (1 Month)',
  classFormat: 'Live Interactive Small Group Video Class',
  price: 'Contact for pricing',
  image: '/images/midbrain-activation.webp',
  imageAlt: 'Online Midbrain Activation classes for children in India',
  onlineBenefits: [
    'Live, interactive sessions with certified midbrain trainers',
    'Specially formatted high-quality audio tracks for brain stimulation provided digitally',
    'Convenient weekend batches from the safety of home',
    'Personalized attention in small virtual batches (Max 8 students)'
  ],
  studentSuccess: [
    '85% of online students demonstrate enhanced intuition within 4 weeks',
    'Noticeable improvement in academic focus and emotional stability',
    'Successful blindfold reading demonstrations achieved completely remotely'
  ],
  parentConversion: 'Give your child the gift of enhanced cognitive abilities without stepping out of your home. Our online midbrain activation utilizes scientifically proven audio frequencies and live interactive guidance to unlock your child\'s hidden potential. Join hundreds of parents across India who have witnessed remarkable changes in their children\'s focus and creativity.',
  faqs: programFAQs['midbrain-activation'] || [
    {
      q: 'Are online midbrain classes as effective as offline classes?',
      a: 'Yes. With high-quality headphones and a quiet room, the audio stimulation and interactive exercises yield the exact same cognitive benefits as physical classes.'
    },
    {
      q: 'What equipment do we need at home?',
      a: 'A stable internet connection, a laptop or tablet with a webcam, and a pair of good quality stereo headphones for the specialized audio tracks.'
    }
  ],
  relatedPrograms: [
    { title: 'Offline Midbrain Activation', href: '/programs/midbrain-activation', description: 'Visit our centers in Hyderabad or Vizianagaram' },
    { title: 'Online Photographic Memory', href: '/online-photographic-memory-india', description: 'Develop eidetic memory online' }
  ]
};

export const metadata: Metadata = {
  title: 'Online Midbrain Activation Course India | Remote Brain Training',
  description: 'Enroll your child in the best Online Midbrain Activation classes in India. Live interactive video sessions to enhance intuition, focus, and creativity from home.',
  keywords: ['online midbrain activation course India', 'remote brain development classes', 'online midbrain activation for kids', 'midbrain training online', 'live interactive brain training India', 'best midbrain activation online'],
  alternates: { canonical: 'https://www.smartbrainsindia.in/online-midbrain-activation-india' },
  openGraph: {
    title: 'Online Midbrain Activation Course India | Remote Brain Training',
    description: 'Enroll your child in the best Online Midbrain Activation classes in India. Live interactive video sessions to enhance intuition, focus, and creativity.',
    url: 'https://www.smartbrainsindia.in/online-midbrain-activation-india',
    type: 'website',
  }
};

export default function OnlineMidbrainIndiaPage() {
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
    '@id': 'https://www.smartbrainsindia.in/online-midbrain-activation-india#course',
    'name': 'Online Midbrain Activation Course',
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
      'description': 'Free demo session available.'
    }
  };

  return (
    <>
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <OnlineProgramView programData={programData} programSlug="online-midbrain-activation-india" />
    </>
  );
}
