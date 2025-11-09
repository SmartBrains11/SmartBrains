import { notFound } from 'next/navigation';
import { ProgramDetailsView } from './_components/ProgramDetailsView';

// Program data
const programsData = {
  'dmit': {
    title: 'DMIT',
    subtitle: 'Dermatoglyphics Multiple Intelligence Test',
    description: 'A scientific method of understanding human potential through fingerprint analysis',
    longDescription: 'DMIT (Dermatoglyphics Multiple Intelligence Test) is a scientific study of fingerprint patterns that helps identify an individual\'s potential, personality traits, and learning styles. This assessment provides valuable insights into the best career paths, learning methods, and areas for development.',
    targetAge: 'All ages (Children, Teens, Adults)',
    duration: '1 Session + Detailed Consultation',
    classFormat: 'Individual Assessment',
    price: 'Contact for pricing',
    image: 'https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Identify innate talents and potential',
      'Understand learning styles and preferences',
      'Get career guidance and suggestions',
      'Discover personality traits',
      'Optimize educational approaches',
      'Improve parent-child relationships'
    ],
    structure: [
      'Fingerprint collection and analysis',
      'Brain mapping assessment',
      'Personality profiling',
      'Learning style identification',
      'Career guidance consultation',
      'Detailed report with recommendations'
    ],
    results: [
      '95% accuracy in personality assessment',
      'Clear career path identification',
      'Improved academic performance',
      'Better understanding of child\'s needs'
    ],
    testimonials: [
      {
        name: 'Dr. Venkat Rao',
        role: 'Pediatrician & Parent',
        content: 'DMIT provided incredible insights into my child\'s potential. The career guidance was spot-on and helped us make informed decisions about his education path.',
        rating: 5
      }
    ]
  },
  'midbrain-activation': {
    title: 'Midbrain Activation',
    subtitle: 'Enhance Intuitive Abilities',
    description: 'Stimulate the midbrain to enhance intuition, creativity, and mental abilities',
    longDescription: 'Midbrain Activation is a proven method to stimulate the midbrain, which acts as a bridge between the left and right brain. When activated, it enhances intuitive abilities, improves concentration, boosts creativity, and develops a better connection between conscious and subconscious mind.',
    targetAge: '5-15 years',
    duration: '2 Days Intensive Workshop',
    classFormat: 'Group Workshop (Max 15 students)',
    price: 'Contact for pricing',
    image: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Enhanced intuitive abilities',
      'Improved concentration and focus',
      'Increased creativity and imagination',
      'Better emotional balance',
      'Heightened sensory perception',
      'Improved academic performance'
    ],
    structure: [
      'Pre-workshop assessment',
      'Midbrain stimulation techniques',
      'Blindfold activities and games',
      'Concentration building exercises',
      'Creative thinking activities',
      'Post-workshop practice guidelines'
    ],
    results: [
      '85% of children show improved concentration',
      'Enhanced creativity in 90% participants',
      'Better academic scores reported',
      'Increased confidence and self-esteem'
    ],
    testimonials: [
      {
        name: 'Anitha Reddy',
        role: 'Parent of twins',
        content: 'Both my children completed midbrain activation and the results are amazing. Their intuition, creativity, and problem-solving skills have improved significantly.',
        rating: 5
      }
    ]
  },
  'photographic-memory': {
    title: 'Photographic Memory',
    subtitle: 'Develop Eidetic Memory',
    description: 'Master techniques for enhanced memory retention and recall abilities',
    longDescription: 'The Photographic Memory program teaches students advanced memory techniques to develop near-perfect recall abilities. Students learn visualization methods, association techniques, and memory palace concepts to dramatically improve their ability to remember and recall information.',
    targetAge: '6+ years',
    duration: '20 Sessions (2 months)',
    classFormat: 'Small Groups (Max 8 students)',
    price: 'Contact for pricing',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Near-perfect memory recall',
      'Enhanced learning speed',
      'Better academic performance',
      'Increased confidence in exams',
      'Improved concentration',
      'Long-term retention skills'
    ],
    structure: [
      'Memory assessment and baseline',
      'Visualization techniques training',
      'Association method learning',
      'Memory palace construction',
      'Practice with academic content',
      'Speed memory challenges'
    ],
    results: [
      '300% improvement in recall ability',
      '95% student satisfaction rate',
      'Significant academic improvement',
      'Enhanced exam performance'
    ],
    testimonials: [
      {
        name: 'Priya Sharma',
        role: 'Parent of 8-year-old',
        content: 'My daughter\'s memory and concentration have improved dramatically. She now remembers her lessons effortlessly and her confidence has soared.',
        rating: 5
      }
    ]
  },
  'abacus-math': {
    title: 'Abacus Math',
    subtitle: 'Mental Mathematics Mastery',
    description: 'Master mental mathematics and improve calculation speed with abacus training',
    longDescription: 'The Abacus Math program teaches children to perform complex mathematical calculations mentally using visualization of the abacus. This ancient tool, when properly learned, develops incredible mental math abilities and enhances overall cognitive function.',
    targetAge: '4-14 years',
    duration: '8 Levels Program (2 years)',
    classFormat: 'Small Groups (Max 10 students)',
    price: 'Contact for pricing',
    image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Lightning-fast mental calculations',
      'Enhanced number sense',
      'Improved concentration',
      'Better problem-solving skills',
      'Increased mathematical confidence',
      'Enhanced memory and visualization'
    ],
    structure: [
      'Basic abacus introduction',
      'Fundamental operations',
      'Mental abacus visualization',
      'Speed calculation training',
      'Competition preparation',
      'Advanced calculation techniques'
    ],
    results: [
      '500% improvement in calculation speed',
      '92% students excel in math exams',
      'Enhanced logical thinking',
      'Improved academic performance overall'
    ],
    testimonials: [
      {
        name: 'Rajesh Kumar',
        role: 'Parent of 10-year-old',
        content: 'The Abacus Math program has transformed my son\'s relationship with mathematics. He now solves complex calculations mentally and actually enjoys math class!',
        rating: 5
      }
    ]
  },
  'enhancement': {
    title: 'Enhancement',
    subtitle: 'Overall Cognitive Development',
    description: 'Comprehensive program for overall cognitive enhancement and brain development',
    longDescription: 'The Enhancement program is a comprehensive cognitive development course that focuses on improving multiple aspects of brain function simultaneously. This program combines various techniques from memory training, concentration building, creative thinking, and problem-solving to provide holistic brain development.',
    targetAge: '5-16 years',
    duration: '30 Sessions (3 months)',
    classFormat: 'Small Groups (Max 12 students)',
    price: 'Contact for pricing',
    image: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Improved focus and concentration',
      'Enhanced problem-solving abilities',
      'Better academic performance',
      'Increased creativity and imagination',
      'Stronger memory retention',
      'Improved learning speed'
    ],
    structure: [
      'Initial cognitive assessment',
      'Concentration building exercises',
      'Memory enhancement techniques',
      'Creative thinking activities',
      'Problem-solving challenges',
      'Progress tracking and evaluation'
    ],
    results: [
      '80% improvement in concentration levels',
      'Enhanced academic performance',
      'Better problem-solving skills',
      'Increased confidence and self-esteem'
    ],
    testimonials: [
      {
        name: 'Meera Patel',
        role: 'Parent of 12-year-old',
        content: 'The Enhancement program has been a game-changer for my daughter. Her focus, creativity, and overall academic performance have improved significantly.',
        rating: 5
      }
    ]
  },
  'quantum-speed-reading': {
    title: 'Quantum Speed Reading',
    subtitle: 'Revolutionary Reading Technique',
    description: 'Advanced speed reading technique using quantum methods for rapid comprehension',
    longDescription: 'Quantum Speed Reading is an advanced technique that goes beyond traditional speed reading. It involves training the brain to process information at quantum speeds while maintaining complete comprehension. This method activates the right brain\'s ability to process visual information rapidly.',
    targetAge: '8+ years',
    duration: '15 Sessions (6 weeks)',
    classFormat: 'Small Groups (Max 8 students)',
    price: 'Contact for pricing',
    image: 'https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Ultra-fast reading speeds',
      'Complete comprehension retention',
      'Enhanced information processing',
      'Improved academic efficiency',
      'Better exam preparation',
      'Increased learning capacity'
    ],
    structure: [
      'Reading speed assessment',
      'Right brain activation exercises',
      'Quantum reading techniques',
      'Comprehension building activities',
      'Speed practice sessions',
      'Final assessment and certification'
    ],
    results: [
      '1000+ words per minute reading speed',
      '95% comprehension retention',
      'Dramatic improvement in study efficiency',
      'Enhanced academic performance'
    ],
    testimonials: [
      {
        name: 'Arjun Singh',
        role: 'Parent of 14-year-old',
        content: 'My son can now read entire chapters in minutes with perfect understanding. This program has revolutionized his study habits and academic performance.',
        rating: 5
      }
    ]
  },
  'vedic-math': {
    title: 'Vedic Math',
    subtitle: 'Ancient Mathematical Techniques',
    description: 'Learn ancient Vedic mathematical techniques for faster calculations',
    longDescription: 'Vedic Mathematics is based on ancient Indian mathematical principles that provide simple, fast, and efficient methods for solving mathematical problems. These techniques help students perform complex calculations mentally with speed and accuracy.',
    targetAge: '8+ years',
    duration: '12 Sessions (6 weeks)',
    classFormat: 'Small Groups (Max 10 students)',
    price: 'Contact for pricing',
    image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Faster mathematical calculations',
      'Improved numerical ability',
      'Enhanced logical thinking',
      'Better problem-solving skills',
      'Increased mathematical confidence',
      'Reduced calculation errors'
    ],
    structure: [
      'Introduction to Vedic principles',
      'Basic calculation techniques',
      'Advanced multiplication methods',
      'Division and square techniques',
      'Algebraic applications',
      'Practice and mastery sessions'
    ],
    results: [
      '400% improvement in calculation speed',
      'Enhanced mathematical confidence',
      'Better performance in competitive exams',
      'Improved logical reasoning'
    ],
    testimonials: [
      {
        name: 'Lakshmi Devi',
        role: 'Parent of 11-year-old',
        content: 'Vedic Math has transformed my child\'s approach to mathematics. She now solves complex problems with ease and has developed a genuine love for math.',
        rating: 5
      }
    ]
  },
  'speed-reading': {
    title: 'Speed Reading',
    subtitle: 'Rapid Reading Skills',
    description: 'Develop speed reading skills while maintaining comprehension and retention',
    longDescription: 'Our Speed Reading program teaches students to read faster while maintaining excellent comprehension and retention. Students learn to eliminate subvocalization, improve eye movement patterns, and develop better reading strategies.',
    targetAge: '8+ years',
    duration: '10 Sessions (5 weeks)',
    classFormat: 'Small Groups (Max 10 students)',
    price: 'Contact for pricing',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Increased reading speed',
      'Better comprehension skills',
      'Improved time management',
      'Enhanced study efficiency',
      'Better exam preparation',
      'Increased knowledge absorption'
    ],
    structure: [
      'Reading speed baseline test',
      'Eye movement training',
      'Subvocalization elimination',
      'Comprehension techniques',
      'Practice with various texts',
      'Final speed and comprehension test'
    ],
    results: [
      '300% increase in reading speed',
      'Maintained 90%+ comprehension',
      'Improved academic performance',
      'Better time management skills'
    ],
    testimonials: [
      {
        name: 'Ravi Kumar',
        role: 'Parent of 13-year-old',
        content: 'The Speed Reading program has been incredible. My son now finishes his reading assignments in half the time with better understanding.',
        rating: 5
      }
    ]
  },
  'handwriting': {
    title: 'Handwriting',
    subtitle: 'Beautiful & Legible Writing',
    description: 'Improve handwriting skills, speed, and legibility for better academic performance',
    longDescription: 'Our Handwriting program focuses on developing beautiful, legible handwriting while improving writing speed. Students learn proper posture, grip, letter formation, and develop their own distinctive writing style.',
    targetAge: '5+ years',
    duration: '15 Sessions (8 weeks)',
    classFormat: 'Small Groups (Max 8 students)',
    price: 'Contact for pricing',
    image: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Neat and legible handwriting',
      'Improved writing speed',
      'Better academic grades',
      'Enhanced fine motor skills',
      'Increased writing confidence',
      'Proper writing posture'
    ],
    structure: [
      'Handwriting assessment',
      'Proper grip and posture training',
      'Letter formation practice',
      'Word and sentence writing',
      'Speed building exercises',
      'Personal style development'
    ],
    results: [
      'Significant improvement in legibility',
      '50% increase in writing speed',
      'Better grades in written exams',
      'Improved confidence in writing'
    ],
    testimonials: [
      {
        name: 'Sunita Sharma',
        role: 'Parent of 7-year-old',
        content: 'My daughter\'s handwriting has improved dramatically. Her teachers now compliment her neat writing, and her confidence has grown tremendously.',
        rating: 5
      }
    ]
  },
  'midbrain-adults': {
    title: 'Midbrain for Adults',
    subtitle: 'Adult Cognitive Enhancement',
    description: 'Midbrain activation program specially designed for adults and professionals',
    longDescription: 'Our Adult Midbrain Activation program is specifically designed for working professionals and adults who want to enhance their cognitive abilities, improve decision-making skills, and reduce stress. This program helps activate dormant brain potential.',
    targetAge: '18+ years',
    duration: '3 Days Intensive Workshop',
    classFormat: 'Small Groups (Max 12 adults)',
    price: 'Contact for pricing',
    image: 'https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Enhanced intuitive abilities',
      'Better decision-making skills',
      'Improved stress management',
      'Increased creativity at work',
      'Better work-life balance',
      'Enhanced problem-solving abilities'
    ],
    structure: [
      'Adult brain assessment',
      'Stress reduction techniques',
      'Intuition development exercises',
      'Decision-making enhancement',
      'Creative thinking workshops',
      'Integration and practice sessions'
    ],
    results: [
      'Improved workplace performance',
      'Better stress management',
      'Enhanced creative thinking',
      'Improved decision-making confidence'
    ],
    testimonials: [
      {
        name: 'Dr. Ramesh Gupta',
        role: 'Corporate Executive',
        content: 'The Adult Midbrain program has significantly improved my decision-making abilities and reduced my work stress. I feel more confident and creative in my professional life.',
        rating: 5
      }
    ]
  },
  'drawing-skills': {
    title: 'Drawing & Skill Development',
    subtitle: 'Artistic & Motor Skills',
    description: 'Develop artistic abilities and fine motor skills through structured drawing programs',
    longDescription: 'Our Drawing & Skill Development program combines artistic training with fine motor skill development. Students learn various drawing techniques while improving hand-eye coordination, creativity, and self-expression.',
    targetAge: '4+ years',
    duration: '20 Sessions (10 weeks)',
    classFormat: 'Small Groups (Max 8 students)',
    price: 'Contact for pricing',
    image: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Enhanced artistic abilities',
      'Improved fine motor skills',
      'Better hand-eye coordination',
      'Increased creativity and imagination',
      'Improved focus and patience',
      'Enhanced self-expression'
    ],
    structure: [
      'Basic drawing techniques',
      'Shape and form understanding',
      'Shading and texture work',
      'Color theory and application',
      'Creative composition',
      'Portfolio development'
    ],
    results: [
      'Significant improvement in artistic skills',
      'Enhanced fine motor development',
      'Increased creative confidence',
      'Better academic performance in art subjects'
    ],
    testimonials: [
      {
        name: 'Kavitha Reddy',
        role: 'Parent of 6-year-old',
        content: 'My son\'s artistic abilities have flourished in this program. His drawings are now detailed and creative, and his fine motor skills have improved significantly.',
        rating: 5
      }
    ]
  }
};

// Add more program data as needed for other programs
const defaultProgramData = {
  title: 'Program',
  subtitle: 'Cognitive Enhancement',
  description: 'Enhance cognitive abilities through structured training',
  longDescription: 'This program is designed to enhance cognitive abilities through proven methods and techniques.',
  targetAge: 'All ages',
  duration: 'Contact for details',
  classFormat: 'Group classes',
  price: 'Contact for pricing',
  image: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=800',
  benefits: ['Enhanced cognitive abilities', 'Improved performance', 'Better concentration'],
  structure: ['Assessment', 'Training', 'Practice', 'Evaluation'],
  results: ['Improved performance', 'Enhanced abilities'],
  testimonials: []
};

// Mapping between URL slugs and data keys
const slugToDataKey: Record<string, keyof typeof programsData> = {
  'dmit': 'dmit',
  'midbrain-activation': 'midbrain-activation',
  'photographic-memory': 'photographic-memory',
  'enhancement': 'enhancement',
  'quantum-speed-reading': 'quantum-speed-reading',
  'abacus': 'abacus-math',
  'vedic-math': 'vedic-math',
  'speed-reading': 'speed-reading',
  'handwriting': 'handwriting',
  'midbrain-for-adults': 'midbrain-adults',
  'drawing-and-skill-development': 'drawing-skills'
};

// Valid slugs for static generation
const validSlugs = [
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

export const dynamicParams = false;

export function generateStaticParams() {
  return validSlugs.map((slug) => ({
    program: slug,
  }));
}

export default function ProgramPage({ params }: { params: { program: string } }) {
  // Check if slug is valid
  if (!validSlugs.includes(params.program)) {
    notFound();
  }

  // Get the data key from slug mapping
  const dataKey = slugToDataKey[params.program];
  const programData = dataKey ? programsData[dataKey] : null;

  if (!programData) {
    notFound();
  }

  const url = `https://www.smartbrainsindia.com/programs/${params.program}`;

  // Define related programs mapping
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
      { slug: 'abacus', title: 'Abacus Math', description: 'Mental mathematics' }
    ],
    'abacus': [
      { slug: 'vedic-math', title: 'Vedic Math', description: 'Ancient calculation techniques' },
      { slug: 'enhancement', title: 'Enhancement Program', description: 'Overall development' },
      { slug: 'photographic-memory', title: 'Photographic Memory', description: 'Memory improvement' }
    ],
    'vedic-math': [
      { slug: 'abacus', title: 'Abacus Math', description: 'Mental math mastery' },
      { slug: 'enhancement', title: 'Enhancement Program', description: 'Cognitive development' },
      { slug: 'speed-reading', title: 'Speed Reading', description: 'Reading skills' }
    ],
    'speed-reading': [
      { slug: 'quantum-speed-reading', title: 'Quantum Speed Reading', description: 'Advanced reading technique' },
      { slug: 'photographic-memory', title: 'Photographic Memory', description: 'Memory enhancement' },
      { slug: 'handwriting', title: 'Handwriting', description: 'Writing skills' }
    ],
    'handwriting': [
      { slug: 'drawing-and-skill-development', title: 'Drawing & Skill Development', description: 'Artistic skills' },
      { slug: 'speed-reading', title: 'Speed Reading', description: 'Reading improvement' },
      { slug: 'enhancement', title: 'Enhancement Program', description: 'Overall development' }
    ],
    'midbrain-for-adults': [
      { slug: 'midbrain-activation', title: 'Midbrain Activation', description: 'For children and teens' },
      { slug: 'dmit', title: 'DMIT Assessment', description: 'Career guidance' },
      { slug: 'enhancement', title: 'Enhancement Program', description: 'Cognitive boost' }
    ],
    'drawing-and-skill-development': [
      { slug: 'handwriting', title: 'Handwriting', description: 'Writing skills' },
      { slug: 'enhancement', title: 'Enhancement Program', description: 'Overall development' },
      { slug: 'midbrain-activation', title: 'Midbrain Activation', description: 'Creativity boost' }
    ]
  };

  const relatedPrograms = relatedProgramsMap[params.program] || [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.smartbrainsindia.com'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Programs',
                item: 'https://www.smartbrainsindia.com/programs'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: programData.title,
                item: url
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: programData.title,
            description: programData.longDescription || programData.description,
            provider: {
              '@type': 'Organization',
              name: 'Smart Brains India',
              url: 'https://www.smartbrainsindia.com',
              telephone: ['+91 7396447470', '+91 7386209090']
            },
            courseCode: params.program,
            educationalLevel: programData.targetAge,
            timeRequired: programData.duration,
            inLanguage: 'en',
            teaches: programData.benefits,
            coursePrerequisites: {
              '@type': 'EducationalOccupationalCredential',
              credentialCategory: 'None required'
            },
            aggregateRating: programData.testimonials.length > 0 ? {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: programData.testimonials.length.toString()
            } : undefined
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: `What is ${programData.title}?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: programData.longDescription || programData.description
                }
              },
              {
                '@type': 'Question',
                name: `Who is ${programData.title} suitable for?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `${programData.title} is suitable for ${programData.targetAge}. ${programData.description}`
                }
              },
              {
                '@type': 'Question',
                name: `How long does ${programData.title} take?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `The ${programData.title} program duration is ${programData.duration}. The class format is ${programData.classFormat}.`
                }
              },
              {
                '@type': 'Question',
                name: `What are the benefits of ${programData.title}?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `Key benefits include: ${programData.benefits.slice(0, 3).join(', ')}. ${programData.results[0] || ''}`
                }
              },
              {
                '@type': 'Question',
                name: `Where is ${programData.title} available?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `${programData.title} is available at Smart Brains India centers in Hyderabad (Kondapur) and Vizianagaram. Call +91 7396447470 for Hyderabad or +91 7386209090 for Vizianagaram to book a free demo.`
                }
              }
            ]
          })
        }}
      />
      <ProgramDetailsView programData={programData} relatedPrograms={relatedPrograms} />
    </>
  );
}

export async function generateMetadata({ params }: { params: { program: string } }) {
  // Use slug mapping to get correct data key
  const dataKey = slugToDataKey[params.program];
  const data = dataKey ? (programsData as any)[dataKey] : null;
  const readable = params.program.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const programTitle = data?.title || readable;
  const title = `${programTitle} Training in Hyderabad & Vizianagaram | Smart Brains India`;
  const description = `${data?.longDescription || data?.description || 'Brain training program'} offered by Smart Brains India in Hyderabad and Vizianagaram. ${data?.targetAge ? `For ${data.targetAge}.` : ''} ${data?.duration ? `Duration: ${data.duration}.` : ''} Book free demo: +91 7396447470 or +91 7386209090.`;
  const url = `https://www.smartbrainsindia.com/programs/${params.program}`;
  
  // Enhanced keywords for better SEO
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
  } as any;
}