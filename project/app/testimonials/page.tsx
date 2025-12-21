import type { Metadata } from 'next';
import TestimonialsClient from './TestimonialsClient';

export const metadata: Metadata = {
  title: 'Parent Testimonials | Brain Training & Memory Classes Results',
  description: 'Read real testimonials from parents who have seen improvements in their children’s memory, focus, maths performance and confidence after joining Smart Brains India’s brain training programs.',
  keywords: ['parent testimonials', 'brain training reviews', 'Smart Brains India results', 'memory classes feedback'],
  openGraph: {
    title: 'Parent Testimonials | Brain Training & Memory Classes Results',
    description: 'Read real testimonials from parents who have seen improvements in their children’s memory, focus, maths performance and confidence.',
    url: 'https://www.smartbrainsindia.com/testimonials',
    siteName: 'Smart Brains India',
    images: [{ url: 'https://www.smartbrainsindia.com/og-testimonials.jpg', width: 1200, height: 630, alt: 'Parent Testimonials' }],
    locale: 'en_IN',
    type: 'website'
  },
  alternates: { canonical: 'https://www.smartbrainsindia.com/testimonials' },
  twitter: {
    card: 'summary_large_image',
    title: 'Parent Testimonials | Brain Training & Memory Classes Results',
    description: 'Read real testimonials from parents who have seen improvements in their children’s memory, focus, maths performance and confidence.',
    images: ['https://www.smartbrainsindia.com/og-testimonials.jpg']
  },
  robots: { index: true, follow: true }
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}