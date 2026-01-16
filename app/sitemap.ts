import { MetadataRoute } from 'next';

const baseUrl = 'https://www.smartbrainsindia.in';

const programs = [
  'dmit',
  'midbrain-activation',
  'photographic-memory',
  'enhancement',
  'quantum-speed-reading',
  'abacus',
  'vedic-math',
  'speed-reading',
  'handwriting',
  'midbrain-for-adults',
  'drawing-and-skill-development'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString().split('T')[0];

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/programs`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  // Dynamic program pages
  const programPages = programs.map((program) => ({
    url: `${baseUrl}/programs/${program}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...programPages];
}

