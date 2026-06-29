export interface TrainerData {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  philosophy: string;
  supervisedPrograms: string[];
  expertise: string[];
  metaTitle: string;
  metaDescription: string;
}

export const trainers: Record<string, TrainerData> = {
  'jayalakshmi-lakkoju': {
    slug: 'jayalakshmi-lakkoju',
    name: 'Jayalakshmi Lakkoju',
    role: 'Founder & CEO',
    image: '/images/jayalakshmi.webp',
    bio: 'Jayalakshmi Lakkoju is the founder and visionary leader of Smart Brains India. A certified child psychology consultant and advanced Dermatoglyphics Multiple Intelligence Analyst, she established the organization in 2019 to address foundational concentration blocks and learning style mismatches in modern education. Under her direct supervision, Smart Brains India has grown to serve over 1,000 students across active branches and online programs nationwide.',
    philosophy: 'Every child is born with unique biological learning strengths. True education lies not in standardized pressure, but in identifying and nurturing these innate pathways to make learning natural and stress-free.',
    supervisedPrograms: [
      'Dermatoglyphics Multiple Intelligence Test (DMIT)',
      'Midbrain Activation & Sensory Integration',
      'Advanced Memory Palace Visual Systems'
    ],
    expertise: [
      'Child Cognitive Psychology',
      'Neocortex Development Mapping',
      'Parent Counselling & Career Path Alignment'
    ],
    metaTitle: 'Jayalakshmi Lakkoju | Founder & CEO | Smart Brains India',
    metaDescription: 'Read the professional profile of Jayalakshmi Lakkoju, Founder & CEO of Smart Brains India. Certified DMIT Analyst & child development counselor.'
  },
  'priyanka-lakkoju': {
    slug: 'priyanka-lakkoju',
    name: 'Priyanka Lakkoju',
    role: 'Lead Cognitive Trainer',
    image: '/images/priyanka.webp',
    bio: 'Priyanka Lakkoju serves as the Lead Cognitive Trainer at Smart Brains India. She specializes in right-brain visual mapping, visual arithmetic (Mental Abacus), and mesencephalon sensory activation methodologies. Over the last 5+ years, she has coached over 500 children, guiding multiple students to regional and national Olympiad achievements.',
    philosophy: 'Children learn best when they can visualize abstract logic. By balancing both hemispheres, we expand the working memory, transforming study hours into highly creative and engaging play sessions.',
    supervisedPrograms: [
      'Abacus Mental Arithmetic (Levels 1-8)',
      'Vedic Mathematics Speed Shortcuts',
      'Speed Reading & Quantum Visual Scanning'
    ],
    expertise: [
      'Abacus Bead Visualization Coaching',
      'Hemispheric Bridge Stimulation',
      'Visual Fixation Span & Subvocalization Elimination'
    ],
    metaTitle: 'Priyanka Lakkoju | Lead Cognitive Trainer | Smart Brains India',
    metaDescription: 'Read the trainer profile of Priyanka Lakkoju, Lead Cognitive Trainer at Smart Brains India. Certified Abacus & Vedic Mathematics specialist.'
  }
};
