import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Smart Brains India | Brain Training Centres in Hyderabad & Vizianagaram',
  description: 'Get in touch with Smart Brains India to enquire about brain training, memory, abacus, midbrain activation and DMIT programs. Call, WhatsApp or visit our centres in Hyderabad and Vizianagaram, or submit the enquiry form to book a free counselling session.',
  keywords: ['contact Smart Brains India', 'brain training Hyderabad address', 'brain training Vizianagaram contact', 'book demo session'],
  openGraph: {
    title: 'Contact Smart Brains India | Brain Training Centres in Hyderabad & Vizianagaram',
    description: 'Get in touch with Smart Brains India to enquire about brain training, memory, abacus, midbrain activation and DMIT programs.',
    url: 'https://www.smartbrainsindia.com/contact',
    siteName: 'Smart Brains India',
    images: [{ url: 'https://www.smartbrainsindia.com/og-contact.jpg', width: 1200, height: 630, alt: 'Contact Smart Brains India' }],
    locale: 'en_IN',
    type: 'website'
  },
  alternates: { canonical: 'https://www.smartbrainsindia.com/contact' },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Smart Brains India | Brain Training Centres in Hyderabad & Vizianagaram',
    description: 'Get in touch with Smart Brains India to enquire about brain training, memory, abacus, midbrain activation and DMIT programs.',
    images: ['https://www.smartbrainsindia.com/og-contact.jpg']
  },
  robots: { index: true, follow: true }
};

export default function ContactPage() {
  return <ContactClient />;
}
