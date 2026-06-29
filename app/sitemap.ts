import { MetadataRoute } from 'next';
import { generateLocationList } from '@/data/locations';
import { comparisons } from '@/data/comparisons';
import { pillars } from '@/data/pillars';
import { trainers } from '@/data/trainers';

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
  'resources',
  
  // Phase 3: Trust & Editorial Pages
  'disclaimer',
  'editorial-policy',
  'cookie-policy',
  'achievements',
  'awards'
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

  // Localized City Landing Pages
  const locationList = generateLocationList();
  const locationPages = locationList.map((loc) => ({
    url: `${baseUrl}/location/${loc.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Program Comparison Pages
  const comparisonPages = Object.keys(comparisons).map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Content Pillar Pages
  const pillarPages = Object.keys(pillars).map((slug) => ({
    url: `${baseUrl}/pillar/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Trainer Pages
  const trainerPages = Object.keys(trainers).map((slug) => ({
    url: `${baseUrl}/trainer/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...programPages, ...seoPages, ...locationPages, ...comparisonPages, ...pillarPages, ...trainerPages];
}


