import type { Metadata } from 'next';

const baseUrl = 'https://www.smartbrainsindia.com';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Education',
  authors: [{ name: 'Smart Brains India' }],
  creator: 'Smart Brains India',
  publisher: 'Smart Brains India',
};

