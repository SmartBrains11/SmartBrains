import { Metadata } from 'next';
import { OnlineProgramView, OnlineProgramData } from '@/components/online-programs/OnlineProgramView';
import { programFAQs } from '@/data/faqs';

const programData: OnlineProgramData = {
  title: 'DMIT Assessment',
  subtitle: 'Dermatoglyphics Multiple Intelligence Test - Available Nationwide',
  description: 'Understand your child\'s innate potential from the comfort of your home with our secure and accurate Online DMIT Assessment.',
  longDescription: 'The Dermatoglyphics Multiple Intelligence Test (DMIT) is a highly accurate scientific method of analyzing fingerprint patterns to discover an individual\'s inborn talents, personality traits, and learning styles. Our Pan-India Online DMIT process is completely secure. We guide you step-by-step on how to capture fingerprints digitally and provide a comprehensive 1-on-1 online counseling session to discuss the detailed 30+ page report with our certified experts.',
  targetAge: 'All ages (Children, Teens, Adults)',
  duration: '1 Assessment + Detailed Online Consultation',
  classFormat: '1-on-1 Remote Video Consultation',
  price: 'Contact for pricing',
  image: '/images/DMIT.webp',
  imageAlt: 'Online DMIT test assessment counseling session in India',
  onlineBenefits: [
    'Secure digital fingerprint scanning from home',
    'Private 1-on-1 video counseling with experts',
    'No travel required - accessible from anywhere in India',
    'Digital copy of comprehensive 30+ page DMIT report'
  ],
  studentSuccess: [
    'Helped 500+ parents nationwide understand their child\'s learning style',
    '95% accuracy in personality and career aptitude mapping',
    'Reduced academic stress by identifying the right educational approach'
  ],
  parentConversion: 'Don\'t let geographical boundaries limit your child\'s potential. Our Online DMIT assessment gives you the exact blueprint of your child\'s innate talents, learning preferences, and future career aptitude, delivered directly to you by our certified experts via video consultation.',
  faqs: programFAQs['dmit'] || [
    {
      q: 'How is the online DMIT fingerprint scanning done?',
      a: 'We provide a highly secure, easy-to-use digital process to capture fingerprints using your smartphone camera or a simple scanner, guided step-by-step by our team.'
    },
    {
      q: 'Is the online counseling as effective as in-person?',
      a: 'Yes, absolutely. Our certified experts conduct a deep, interactive video session where they walk you through the entire report and answer all your questions, just like a physical meeting.'
    }
  ],
  relatedPrograms: [
    { title: 'Offline DMIT in Clinics', href: '/programs/dmit', description: 'Visit our centers in Hyderabad or Vizianagaram' },
    { title: 'Online Midbrain Activation', href: '/online-midbrain-activation-india', description: 'Enhance intuition remotely' }
  ]
};

export const metadata: Metadata = {
  title: 'Online DMIT Test India | Remote Fingerprint Analysis & Counseling',
  description: 'Get an accurate Online DMIT test anywhere in India. Secure digital fingerprint scanning and expert video counseling. Discover your child\'s innate potential from home.',
  keywords: ['online DMIT test India', 'remote DMIT assessment', 'online fingerprint analysis for kids', 'DMIT test online India', 'online career counseling DMIT', 'best online DMIT test'],
  alternates: { canonical: 'https://www.smartbrainsindia.in/online-dmit-india' },
  openGraph: {
    title: 'Online DMIT Test India | Remote Fingerprint Analysis & Counseling',
    description: 'Get an accurate Online DMIT test anywhere in India. Secure digital fingerprint scanning and expert video counseling.',
    url: 'https://www.smartbrainsindia.in/online-dmit-india',
    type: 'website',
  }
};

export default function OnlineDmitIndiaPage() {
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
    '@id': 'https://www.smartbrainsindia.in/online-dmit-india#course',
    'name': 'Online DMIT Assessment India',
    'description': programData.description,
    'provider': {
      '@type': 'EducationalOrganization',
      '@id': 'https://www.smartbrainsindia.in/#educational'
    },
    'courseMode': ['online'],
    'educationalLevel': 'Beginner to Advanced',
    'offers': {
      '@type': 'Offer',
      'category': 'Paid Course',
      'priceCurrency': 'INR',
      'price': '0',
      'description': 'Free initial consultation available.'
    }
  };

  return (
    <>
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <OnlineProgramView programData={programData} programSlug="online-dmit-india" />
    </>
  );
}
