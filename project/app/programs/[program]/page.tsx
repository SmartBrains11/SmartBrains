import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProgramDetailsView, ProgramData } from './_components/ProgramDetailsView';

// Valid program slugs - now 11 programs
const validSlugs = [
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

// Program data with new structure
const programsData: Record<string, ProgramData> = {
  'dmit': {
    title: 'DMIT Assessment',
    subtitle: 'Discover Your Child’s Innate Potential & Personality',
    description: 'A scientific way to understand your child’s unique learning style, talents, and personality.',
    longDescription: 'Every child is born with unique gifts. The DMIT (Dermatoglyphics Multiple Intelligence Test) is a scientific assessment that uses fingerprint analysis to help parents understand their child’s inborn potential, personality traits, and preferred learning style. It provides a roadmap for nurturing their natural talents.',
    targetAge: 'All Ages (Kids, Teens, Adults)',
    duration: '1 Session + Consultation',
    classFormat: 'One-on-One Assessment',
    price: 'Contact for pricing',
    image: 'https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Understand your child’s hidden talents and strengths',
      'Identify the best learning style (Visual, Auditory, or Kinesthetic)',
      'Gain clarity on suitable career paths and hobbies',
      'Understand personality traits for better parenting',
      'Reduce academic pressure by knowing their natural pace',
      'Helps parents make confident decisions for their child’s learning journey'
    ],
    structure: [
      'Simple, non-invasive fingerprint collection',
      'Scientific analysis and report generation',
      'Detailed one-on-one counseling session',
      'Personalized parenting and study recommendations',
      'Q&A session to clear all doubts',
      'Guidance on next steps for development'
    ],
    results: [
      'Clarity on child’s natural behaviors',
      'Improved parent-child understanding',
      'Less stress regarding academic choices',
      'Focused approach to skill development'
    ],
    testimonials: [
      {
        name: 'Dr. Venkat Rao',
        role: 'Pediatrician & Parent',
        content: 'This assessment was an eye-opener. It helped me understand why my son learns the way he does. The counseling was very supportive and gave us clear direction.',
        rating: 5
      }
    ]
  },
  'midbrain-activation': {
    title: 'Midbrain Activation',
    subtitle: 'Unlock Focus, Intuition, and Inner Confidence',
    description: 'A fun and engaging workshop to boost your child’s concentration and sensory perception.',
    longDescription: 'Midbrain Activation is a unique, fun-filled workshop designed to stimulate the brain’s bridge between the left and right hemispheres. By awakening this connection, children often experience heightened intuition, sharper focus, and a newfound sense of confidence in their daily activities.',
    targetAge: '5-15 years',
    duration: '2 Days Workshop',
    classFormat: 'Small Group Workshop',
    price: 'Contact for pricing',
    image: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Sharper focus and longer attention span',
      'Improvement in memory and recall',
      'Enhanced intuition and sensory perception',
      'Greater emotional stability and calmness',
      'Boost in creativity and imagination',
      'Helps children feel more capable and self-assured'
    ],
    structure: [
      'Fun brain gym exercises to relax the mind',
      'Interactive games to stimulate senses',
      'Music therapy and relaxation techniques',
      'Guided focus and concentration activities',
      'Confidence-building challenges',
      'Parent orientation for home practice'
    ],
    results: [
      'Noticeable improvement in concentration',
      'Better emotional regulation',
      'Increased interest in learning',
      'Enhanced self-confidence'
    ],
    testimonials: [
      {
        name: 'Anitha Reddy',
        role: 'Mother of two',
        content: 'I was skeptical at first, but the change in my children is real. They are calmer, more focused, and actually enjoy their study time now.',
        rating: 5
      }
    ]
  },
  'photographic-memory': {
    title: 'Photographic Memory',
    subtitle: 'Make Learning and Recall Effortless',
    description: 'Equip your child with powerful visualization techniques to remember what they learn.',
    longDescription: 'Imagine if your child could look at a page and recall it like a picture. Our Photographic Memory program teaches visualization and association techniques that make retaining information easier, faster, and much less stressful for students.',
    targetAge: '6+ years',
    duration: '20 Sessions (2 months)',
    classFormat: 'Small Group Classes',
    price: 'Contact for pricing',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Recall information with greater ease',
      'Reduce study time while retaining more',
      'Boost confidence during exams',
      'Make history, geography, and science fun to learn',
      'Improve long-term memory effectiveness',
      'Reduces exam anxiety for both parents and children'
    ],
    structure: [
      'Introduction to visualization methods',
      'Fun memory games and association exercises',
      'Techniques for remembering words and numbers',
      'Applying skills to school textbooks',
      'Speed recall challenges',
      'Regular progress checks'
    ],
    results: [
      'Faster revision before exams',
      'Improved retention of academic concepts',
      'Greater confidence in recalling answers',
      'Reduced stress during study hours'
    ],
    testimonials: [
      {
        name: 'Priya Sharma',
        role: 'Parent of 8-year-old',
        content: 'My daughter used to struggle with history dates. Now she turns them into mental pictures and remembers them easily. It’s wonderful to see her so confident.',
        rating: 5
      }
    ]
  },
  'abacus-math': {
    title: 'Abacus Math',
    subtitle: 'Build Speed, Accuracy, and Math Confidence',
    description: 'Transform math from a struggle into a strength with mental calculation skills.',
    longDescription: 'Abacus is not just about calculating fast; it’s about brain development. By visualizing the abacus beads, children learn to perform math problems mentally. This boosts their number sense, improved concentration, and removes the fear of mathematics.',
    targetAge: '4-14 years',
    duration: '8 Levels (Self-paced)',
    classFormat: 'Small Group Classes',
    price: 'Contact for pricing',
    image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Perform calculations mentally without gadgets',
      'Remove fear of numbers and math',
      'Improve concentration and listening skills',
      'Develop faster information processing',
      'Boost visualization capabilities',
      'Helps children excel in school math effortlessly'
    ],
    structure: [
      'Introduction to the Abacus tool',
      'Finger technique and bead movement',
      'Visualization practice (Mental Math)',
      'Speed and accuracy drills',
      'Fun math games and challenges',
      'Regular level-wise assessments'
    ],
    results: [
      'Significant improvement in math speed',
      'Better focus in all subjects',
      'Enhanced logical thinking',
      'Increased overall academic confidence'
    ],
    testimonials: [
      {
        name: 'Rajesh Kumar',
        role: 'Father of 10-year-old',
        content: 'Math was a nightmare for my son. After Abacus, he calculates faster than me! But more importantly, he no longer says "I hate math".',
        rating: 5
      }
    ]
  },
  'enhancement': {
    title: 'Enhancement Program',
    subtitle: 'Holistic Brain Development for Every Child',
    description: 'A complete cognitive boost focusing on memory, focus, and creativity combined.',
    longDescription: 'Our Enhancement program is a comprehensive course designed to work on multiple aspects of a child’s brain simultaneously. It combines memory techniques, concentration exercises, and creative thinking tasks to ensure overall cognitive growth.',
    targetAge: '5-16 years',
    duration: '30 Sessions (3 months)',
    classFormat: 'Small Group Classes',
    price: 'Contact for pricing',
    image: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Improve overall focus and attention',
      'Enhance creative problem-solving skills',
      'Boost memory retention for daily learning',
      'Develop a sharper, more active mind',
      'Encourage positive learning habits',
      'Gives parents peace of mind about their child’s development'
    ],
    structure: [
      'Initial skills assessment',
      'Brain gym and coordination exercises',
      'Memory and focus building activities',
      'Creative thinking puzzles',
      'Logic and reasoning games',
      'Continuous progress monitoring'
    ],
    results: [
      'Better attention span in class',
      'Improved ability to grasp new concepts',
      'More creative approach to problems',
      'Higher self-esteem'
    ],
    testimonials: [
      {
        name: 'Meera Patel',
        role: 'Mother of 12-year-old',
        content: 'I wanted something that covers everything—focus, memory, and logic. This program was perfect. My daughter is much more alert and active in her studies now.',
        rating: 5
      }
    ]
  },
  'quantum-speed-reading': {
    title: 'Quantum Speed Reading',
    subtitle: 'Process Books at Incredible Speeds',
    description: 'Unlock the ability to read and comprehend information much faster than traditional methods.',
    longDescription: 'Quantum Speed Reading is an advanced technique designed for students who want to take their reading ability to the next level. It trains the brain to capture visual information rapidly, allowing children to go through books quickly while understanding the core content.',
    targetAge: '8+ years',
    duration: '15 Sessions (6 weeks)',
    classFormat: 'Small Group Classes',
    price: 'Contact for pricing',
    image: 'https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Read books significantly faster',
      'Process information visually and quickly',
      'Improve concentration while reading',
      'Save time during revision and study',
      'Enhance right-brain imagination',
      'Builds confidence in handling large syllabuses'
    ],
    structure: [
      'Eye focus and relaxation training',
      'Visual processing exercises',
      'High-speed page flipping techniques',
      'Comprehension and recall practice',
      'Right-brain activation drills',
      'Review and feedback sessions'
    ],
    results: [
      'Drastically reduced reading time',
      'Improved ability to scan information',
      'Enhanced visual memory',
      'Greater confidence with heavy textbooks'
    ],
    testimonials: [
      {
        name: 'Arjun Singh',
        role: 'Father of 14-year-old',
        content: 'With board exams coming up, the syllabus was huge. This course helped my son revise faster and feel less overwhelmed by his textbooks.',
        rating: 5
      }
    ]
  },
  'vedic-math': {
    title: 'Vedic Math',
    subtitle: 'Simplify Complex Calculations with Logic',
    description: 'Master ancient Indian techniques to solve math problems quickly and accurately.',
    longDescription: 'Vedic Mathematics offers a set of simple, logical strategies to solve difficult math problems. It’s perfect for students who find school math tedious. These tricks make calculations fun, fast, and easy to verify, giving students a significant edge in exams.',
    targetAge: '8+ years',
    duration: '12 Sessions (6 weeks)',
    classFormat: 'Small Group Classes',
    price: 'Contact for pricing',
    image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Solve complex problems in seconds',
      'Verify answers to avoid mistakes',
      'Improve logical reasoning skills',
      'Enhance mental agility',
      'Enjoy learning math through tricks',
      'Helps children feel prepared for competitive exams'
    ],
    structure: [
      'Introduction to Vedic Sutras',
      'Tricks for fast multiplication and division',
      'Squares, cubes, and root techniques',
      'Algebraic shortcuts',
      'Speed calculation drills',
      'Application in school curriculum'
    ],
    results: [
      'Faster calculation speed',
      'Reduced rough work and errors',
      'Improved logic and reasoning',
      'Higher scores in math tests'
    ],
    testimonials: [
      {
        name: 'Lakshmi Devi',
        role: 'Mother of 11-year-old',
        content: 'She used to make silly mistakes in calculation. Vedic Math taught her how to check her own answers. Her accuracy has improved remarkably.',
        rating: 5
      }
    ]
  },
  'speed-reading': {
    title: 'Speed Reading',
    subtitle: 'Read More in Less Time',
    description: 'Learn to read efficiently without compromising on understanding.',
    longDescription: 'In today’s academic world, students have a lot to read. Our Speed Reading program helps them increase their reading pace by eliminating bad habits like reading aloud in the head. This leads to better study efficiency and more free time.',
    targetAge: '8+ years',
    duration: '10 Sessions (5 weeks)',
    classFormat: 'Small Group Classes',
    price: 'Contact for pricing',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Double or triple reading speed',
      'Maintain good comprehension',
      'Improve focus while reading',
      'Finish homework and revision faster',
      'Enjoy reading more books',
      'Reduces total study hours for parents and kids'
    ],
    structure: [
      'Current reading speed assessment',
      'Techniques to stop subvocalization',
      'Eye movement and span training',
      'Skimming and scanning methods',
      'Comprehension checks',
      'Final progress evaluation'
    ],
    results: [
      'Significant increase in words-per-minute',
      'Better time management',
      'Improved focus on text',
      'More enjoyable reading experience'
    ],
    testimonials: [
      {
        name: 'Ravi Kumar',
        role: 'Parent of 13-year-old',
        content: 'He reads so much faster now! What used to take him an hour, he finishes in 30 minutes. It gives him more time to play and relax.',
        rating: 5
      }
    ]
  },
  'handwriting': {
    title: 'Handwriting Improvement',
    subtitle: 'Beautiful Writing for Better Grades',
    description: 'Develop neat, legible, and impressive handwriting that boosts confidence.',
    longDescription: 'Good handwriting is not just about looking good; it affects grades and confidence. Our program focuses on the technical aspects of writing—posture, grip, and flow—to ensure every student develops a clear and beautiful writing style.',
    targetAge: '5+ years',
    duration: '15 Sessions (8 weeks)',
    classFormat: 'Small Group Classes',
    price: 'Contact for pricing',
    image: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Write neatly and legibly',
      'Improve writing speed without messiness',
      'Create a positive impression in exams',
      'Reduce hand fatigue while writing',
      'Develop patience and focus',
      'Parents report better teacher feedback'
    ],
    structure: [
      'Grip and posture correction',
      'Stroke and curve practice',
      'Letter formation and connecting',
      'Sentence alignment and spacing',
      'Speed writing practice',
      'Final presentation skills'
    ],
    results: [
      'Dramatic improvement in legibility',
      'Faster writing speed',
      'Higher scores in descriptive exams',
      'Increased pride in school work'
    ],
    testimonials: [
      {
        name: 'Sunita Sharma',
        role: 'Mother of 7-year-old',
        content: 'Her teachers explicitly mentioned how neat her papers are now. She feels so proud showing me her notebooks.',
        rating: 5
      }
    ]
  },
  'midbrain-adults': {
    title: 'Midbrain for Adults',
    subtitle: 'Relieve Stress & sharpen Your Mind',
    description: 'A specialized program to help adults regain focus, reduce stress, and improve intuition.',
    longDescription: 'Cognitive development isn’t just for kids. Adults face immense stress and mental fatigue. This program uses brain activation techniques to help professionals and adults clear mental clutter, improve decision-making, and tap into their intuitive capabilities for a balanced life.',
    targetAge: '18+ years',
    duration: '3 Days Workshop',
    classFormat: 'Small Group Workshop',
    price: 'Contact for pricing',
    image: 'https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Reduce stress and mental fatigue',
      'Improve focus and productivity at work',
      'Make better, intuitive decisions',
      'Enhance creativity in problem-solving',
      'Achieve better work-life balance',
      'Helps you feel more grounded and capable'
    ],
    structure: [
      'Stress management assessment',
      'Relaxation and breathing techniques',
      'Brain activation exercises',
      'Intuition development games',
      'Mindfulness practices',
      'Integration into daily routine'
    ],
    results: [
      'Lower stress levels',
      'Better clarity of thought',
      'Improved workplace efficiency',
      'Greater sense of well-being'
    ],
    testimonials: [
      {
        name: 'Dr. Ramesh Gupta',
        role: 'Corporate Executive',
        content: 'I needed something to manage my work pressure. This workshop gave me tools to stay calm and focused. My decision-making feels much sharper now.',
        rating: 5
      }
    ]
  },
  'drawing-skills': {
    title: 'Drawing & Skills',
    subtitle: 'Nurture Creativity & Motor Skills',
    description: 'A creative outlet that also builds patience, focus, and fine motor skills.',
    longDescription: 'Art is a powerful way for children to express themselves. Our Drawing & Skills program teaches fundamental art techniques while naturally improving hand-eye coordination, patience, and attention to detail—skills that help in academics too.',
    targetAge: '4+ years',
    duration: '20 Sessions (10 weeks)',
    classFormat: 'Small Group Classes',
    price: 'Contact for pricing',
    image: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Develop artistic expression',
      'Improve hand-eye coordination',
      'Build patience and concentration',
      'Boost creativity and imagination',
      'Enhance observation skills',
      'Gives children a productive, joy-filled hobby'
    ],
    structure: [
      'Introduction to shapes and lines',
      'Coloring techniques and theory',
      'Shading and texture basics',
      'Creative composition projects',
      'Free-hand drawing practice',
      'Showcasing student artwork'
    ],
    results: [
      'Beautiful artwork creation',
      'Better motor control (helps writing)',
      'Increased creative confidence',
      'Improved focus on tasks'
    ],
    testimonials: [
      {
        name: 'Kavitha Reddy',
        role: 'Parent of 6-year-old',
        content: 'He loves his drawing class! It’s the one time he sits quietly and focuses completely. His drawings have become so detailed and colorful.',
        rating: 5
      }
    ]
  }
};

export async function generateStaticParams() {
  return validSlugs.map((slug) => ({
    program: slug,
  }));
}

export async function generateMetadata({ params }: { params: { program: string } }): Promise<Metadata> {
  const data = programsData[params.program];
  const readable = params.program.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const programTitle = data?.title || readable;
  const title = `${programTitle} Training in Hyderabad & Vizianagaram | Smart Brains India`;
  const description = `${data?.longDescription || data?.description || 'Brain training program'} offered by Smart Brains India in Hyderabad and Vizianagaram. ${data?.targetAge ? `For ${data.targetAge}.` : ''} ${data?.duration ? `Duration: ${data.duration}.` : ''} Book free demo: +91 7396447470 or +91 7386209090.`;
  const url = `https://www.smartbrainsindia.com/programs/${params.program}`;

  const keywords = [
    programTitle.toLowerCase(),
    `${programTitle} training`,
    `${programTitle} course`,
    `${programTitle} in Hyderabad`,
    `${programTitle} in Vizianagaram`,
    'brain training',
    'cognitive development',
    data?.targetAge ? `${programTitle} for ${data.targetAge}` : '',
  ].filter(Boolean);

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      url,
      title,
      description,
      type: 'website',
      siteName: 'Smart Brains India',
      images: data?.image ? [{
        url: data.image,
        width: 1200,
        height: 630,
        alt: `${programTitle} - Smart Brains India`
      }] : undefined,
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: data?.image ? [data.image] : undefined
    },
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
  };
}

export default function ProgramPage({ params }: { params: { program: string } }) {
  if (!validSlugs.includes(params.program)) {
    notFound();
  }

  const programData = programsData[params.program];

  if (!programData) {
    notFound();
  }

  // Define related programs
  const relatedProgramsMap: Record<string, Array<{ slug: string; title: string; description: string }>> = {
    'dmit': [
      { slug: 'midbrain-activation', title: 'Midbrain Activation', description: 'Enhance intuitive abilities' },
      { slug: 'photographic-memory', title: 'Photographic Memory', description: 'Develop perfect recall' },
      { slug: 'enhancement', title: 'Enhancement Program', description: 'Overall cognitive development' }
    ],
    'midbrain-activation': [
      { slug: 'dmit', title: 'DMIT Assessment', description: 'Understand learning potential' },
      { slug: 'photographic-memory', title: 'Photographic Memory', description: 'Enhance memory skills' },
      { slug: 'enhancement', title: 'Enhancement Program', description: 'Comprehensive brain development' }
    ],
    'photographic-memory': [
      { slug: 'speed-reading', title: 'Speed Reading', description: 'Read faster with comprehension' },
      { slug: 'dmit', title: 'DMIT Assessment', description: 'Identify learning style' },
      { slug: 'enhancement', title: 'Enhancement Program', description: 'Overall cognitive boost' }
    ],
    'enhancement': [
      { slug: 'midbrain-activation', title: 'Midbrain Activation', description: 'Enhance intuition' },
      { slug: 'photographic-memory', title: 'Photographic Memory', description: 'Perfect memory recall' },
      { slug: 'dmit', title: 'DMIT Assessment', description: 'Discover potential' }
    ],
    'quantum-speed-reading': [
      { slug: 'speed-reading', title: 'Speed Reading', description: 'Traditional speed reading' },
      { slug: 'photographic-memory', title: 'Photographic Memory', description: 'Enhance memory' },
      { slug: 'abacus-math', title: 'Abacus Math', description: 'Mental mathematics' }
    ],
    'abacus-math': [
      { slug: 'vedic-math', title: 'Vedic Math', description: 'Ancient calculation techniques' },
      { slug: 'enhancement', title: 'Enhancement Program', description: 'Overall development' },
      { slug: 'photographic-memory', title: 'Photographic Memory', description: 'Memory improvement' }
    ],
    'vedic-math': [
      { slug: 'abacus-math', title: 'Abacus Math', description: 'Mental math mastery' },
      { slug: 'enhancement', title: 'Enhancement Program', description: 'Cognitive development' },
      { slug: 'speed-reading', title: 'Speed Reading', description: 'Reading skills' }
    ],
    'speed-reading': [
      { slug: 'quantum-speed-reading', title: 'Quantum Speed Reading', description: 'Advanced reading technique' },
      { slug: 'photographic-memory', title: 'Photographic Memory', description: 'Memory enhancement' },
      { slug: 'handwriting', title: 'Handwriting', description: 'Writing skills' }
    ],
    'handwriting': [
      { slug: 'drawing-skills', title: 'Drawing & Skill Development', description: 'Artistic skills' },
      { slug: 'speed-reading', title: 'Speed Reading', description: 'Reading improvement' },
      { slug: 'enhancement', title: 'Enhancement Program', description: 'Overall development' }
    ],
    'midbrain-adults': [
      { slug: 'midbrain-activation', title: 'Midbrain Activation', description: 'For children and teens' },
      { slug: 'dmit', title: 'DMIT Assessment', description: 'Career guidance' },
      { slug: 'enhancement', title: 'Enhancement Program', description: 'Cognitive boost' }
    ],
    'drawing-skills': [
      { slug: 'handwriting', title: 'Handwriting', description: 'Writing skills' },
      { slug: 'enhancement', title: 'Enhancement Program', description: 'Overall development' },
      { slug: 'midbrain-activation', title: 'Midbrain Activation', description: 'Creativity boost' }
    ]
  };

  const relatedPrograms = relatedProgramsMap[params.program] || [];

  return <ProgramDetailsView programData={programData} relatedPrograms={relatedPrograms} />;
}