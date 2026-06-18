import { MetadataRoute } from 'next';

const baseUrl = 'https://www.smartbrainsindia.in'; // Updated to match metadata.ts

const programs = [
  'dmit',
  'midbrain-activation',
  'photographic-memory',
  'enhancement',
  'quantum-speed-reading',
  'abacus-math',
  'vedic-math',
  'speed-reading',
  'handwriting',
  'midbrain-adults',
  'drawing-skills'
];

const newSeoPages = [
  // Phase 1: National Landing Pages
  'online-dmit-india',
  'online-midbrain-activation-india',
  'online-photographic-memory-india',
  'online-speed-reading-india',
  'online-abacus-india',
  'online-vedic-maths-india',
  
  // Phase 2: Authority Articles
  'memory-power-for-kids',
  'improve-concentration-in-children',
  'brain-development-programs-for-kids',
  'learning-skills-for-students',
  'increase-focus-and-attention-in-children',
  'brain-development-activities-for-kids',
  'study-skills-for-school-students',
  'child-intelligence-development-guide',
  
  // Hub
  'resources'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString().split('T')[0];

  // Static base pages
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

  // New SEO Routes (Phase 1 & Phase 2)
  const seoPages = newSeoPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...programPages, ...seoPages];
}

