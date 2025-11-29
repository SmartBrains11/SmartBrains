import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProgramDetailsView, ProgramData } from './_components/ProgramDetailsView';

const validSlugs = [
  'dmit-test-kids',
  'midbrain-activation-kids',
  'photographic-memory-training',
  'abacus-vedic-math-classes',
  'speed-reading-course',
  'handwriting-improvement',
  'drawing-skill-development'
];

interface ProgramSEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

const programsSEO: Record<string, ProgramSEO> = {
  'dmit-test-kids': {
    metaTitle: 'DMIT Test for Kids in Hyderabad & Vizianagaram | Fingerprint Intelligence Analysis',
    metaDescription: 'Smart Brains India provides DMIT fingerprint intelligence tests for kids, students and teenagers in Hyderabad and Vizianagaram. Understand your child’s inborn talents, learning style, personality traits and career strengths to plan the right education path.',
    keywords: ['DMIT test for kids', 'fingerprint intelligence test', 'career guidance Hyderabad', 'DMIT Vizianagaram']
  },
  'midbrain-activation-kids': {
    metaTitle: 'Midbrain Activation Training for Kids in Hyderabad & Vizianagaram | Smart Brains India',
    metaDescription: 'Enroll your child in Smart Brains India’s midbrain activation classes to improve focus, memory, intuition and confidence. Safe, non‑medical brain training program for kids aged 5–15 years with online and offline batches in Hyderabad and Vizianagaram.',
    keywords: ['midbrain activation training', 'midbrain classes for kids', 'Hyderabad', 'Vizianagaram']
  },
  'photographic-memory-training': {
    metaTitle: 'Photographic Memory Classes for Kids | Improve Recall & Exam Performance',
    metaDescription: 'Smart Brains India’s photographic memory program trains children to store and recall visual information quickly, helping them revise faster, remember lessons longer and perform better in exams. Suitable for kids aged 6+ years.',
    keywords: ['photographic memory training', 'memory classes for kids', 'exam memory']
  },
  'abacus-vedic-math-classes': {
    metaTitle: 'Abacus and Vedic Math Classes for Kids | Online & Offline Batches',
    metaDescription: 'Give your child an edge in maths with Smart Brains India’s abacus and Vedic math classes. Kids learn super‑fast mental calculation, sharp focus and strong number sense through structured levels and fun practice activities.',
    keywords: ['abacus classes for kids', 'Vedic maths', 'mental math India']
  },
  'speed-reading-course': {
    metaTitle: 'Speed Reading Course for Students | 3x Faster Reading with Comprehension',
    metaDescription: 'Smart Brains India’s speed reading program helps students read 3–5x faster without losing comprehension, saving time in studies and reducing exam stress. Ideal for school and college students preparing for exams.',
    keywords: ['speed reading for students', 'read faster with comprehension']
  },
  'handwriting-improvement': {
    metaTitle: 'Handwriting Improvement Classes for Kids | Neat & Fast Exam Writing',
    metaDescription: 'Improve your child’s handwriting speed and clarity with Smart Brains India’s handwriting improvement classes. Structured practice sheets, letter formation drills and posture correction designed for better exam presentation.',
    keywords: ['handwriting improvement classes', 'neat handwriting for exams']
  },
  'drawing-skill-development': {
    metaTitle: 'Drawing & Creativity Classes for Kids | Skill Development Program',
    metaDescription: 'Smart Brains India’s drawing and skill development program helps children express creativity, develop motor skills and build confidence through guided art activities and projects. Suitable for kids of different age groups.',
    keywords: ['drawing classes for kids', 'creativity development', 'art for brain development']
  }
};

const programsData: Record<string, ProgramData> = {
  'dmit-test-kids': {
    title: 'DMIT Test for Kids – Fingerprint Intelligence Analysis',
    subtitle: 'Discover Your Child\'s Inborn Potential',
    description: 'DMIT (Dermatoglyphics Multiple Intelligence Test) is a scientific method to identify a person\'s inborn potential, personality, and learning style through fingerprint analysis.',
    targetAge: 'All Ages',
    duration: '1 Session + Consultation',
    classFormat: 'Offline / Online',
    price: 'Contact for Pricing',
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1200',
    sections: [
      {
        title: 'What Is DMIT and How It Works',
        content: 'DMIT (Dermatoglyphics Multiple Intelligence Test) is a scientific study of fingerprint patterns. Scientists have discovered a connection between fingerprints and the brain lobes. By analyzing fingerprints, we can understand the distribution of brain neurons and identify an individual\'s innate intelligence, personality traits, and learning styles.'
      },
      {
        title: 'How DMIT Helps Parents and Children',
        content: [
          'Identify inborn strengths and weaknesses.',
          'Understand the child\'s preferred learning style (Visual, Auditory, or Kinesthetic).',
          'Discover hidden talents and potential career paths.',
          'Improve parent-child communication by understanding personality traits.',
          'Reduce academic stress by adopting the right learning methods.'
        ]
      },
      {
        title: 'Who Should Take the DMIT Test',
        content: 'DMIT is suitable for everyone - toddlers (to understand potential), children (for learning styles), teenagers (for career guidance), and adults (for self-discovery and relationship management). It is a one-time test that provides lifelong insights.'
      },
      {
        title: 'DMIT Process at Smart Brains India',
        content: [
          'Step 1: Fingerprint Scanning (takes 10-15 minutes).',
          'Step 2: Report Generation (comprehensive analysis).',
          'Step 3: Counseling Session (expert guidance for parents/individuals).'
        ]
      },
      {
        title: 'FAQs on DMIT Test for Children',
        content: [
          'Q: Is DMIT scientific? A: Yes, it is based on Genetics, Embryology, and Neuroscience.',
          'Q: Is it safe? A: Yes, it is non-invasive and only involves scanning fingerprints.',
          'Q: Can fingerprints change? A: No, fingerprints are permanent and do not change over a lifetime.'
        ]
      }
    ],
    testimonials: [
      { name: 'Ravi Kumar', role: 'Parent', content: 'The DMIT report was an eye-opener. We realized why our son struggled with rote learning and excelled in practical tasks. Highly recommended!', rating: 5 }
    ]
  },
  'midbrain-activation-kids': {
    title: 'Midbrain Activation Classes for Kids (5–15 Years)',
    subtitle: 'Unlock the Hidden Potential of the Brain',
    description: 'Midbrain Activation is a specialized program designed to stimulate the middle brain, acting as a bridge between the left and right brain hemispheres.',
    targetAge: '5-15 Years',
    duration: '2 Days Workshop + Follow-ups',
    classFormat: 'Offline / Online',
    price: 'Contact for Pricing',
    image: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=1200',
    sections: [
      {
        title: 'What Is Midbrain Activation Training',
        content: 'Midbrain Activation is a technique to activate the "interbrain" or midbrain, which connects the left and right hemispheres. This activation allows for better communication between the logical and creative sides of the brain, leading to "Whole Brain Development".'
      },
      {
        title: 'Benefits of Midbrain Activation for Children',
        content: [
          'Improved concentration and focus.',
          'Enhanced memory and retention power.',
          'Better creativity and imagination.',
          'Emotional stability and confidence.',
          'Development of intuitive abilities (blindfold reading).'
        ]
      },
      {
        title: 'Age Group, Batch Details and Class Format',
        content: 'This program is strictly for children aged 5 to 15 years. The brain is most plastic during this phase, making it the ideal time for activation. We offer weekend workshops followed by regular practice sessions to sustain the results.'
      },
      {
        title: 'Home Practice Ideas to Support Training',
        content: 'We provide specific brain gym exercises and meditation techniques that children should practice at home for 10-15 minutes daily. Consistency is key to maintaining the activated state of the midbrain.'
      },
      {
        title: 'Is Midbrain Activation Safe? (FAQs)',
        content: [
          'Q: Is it safe? A: Yes, it is 100% safe and involves fun activities like music, dance, and brain exercises.',
          'Q: Is it magic? A: No, it is a scientific method of brain stimulation.',
          'Q: How long do results last? A: With regular practice, the benefits are lifelong.'
        ]
      }
    ],
    testimonials: [
      { name: 'S. Lakshmi', role: 'Mother', content: 'My daughter\'s concentration has improved drastically. She can now memorize answers much faster.', rating: 5 }
    ]
  },
  'photographic-memory-training': {
    title: 'Photographic Memory Training for Kids',
    subtitle: 'Boost Recall and Exam Performance',
    description: 'Master the art of capturing and recalling information instantly with our Photographic Memory training.',
    targetAge: '6+ Years',
    duration: '20 Sessions',
    classFormat: 'Offline / Online',
    price: 'Contact for Pricing',
    image: 'https://images.pexels.com/photos/4144224/pexels-photo-4144224.jpeg?auto=compress&cs=tinysrgb&w=1200',
    sections: [
      {
        title: 'How Photographic Memory Training Works',
        content: 'Photographic memory training involves techniques to convert textual or auditory information into mental images. Since the brain processes images much faster than text, this method allows for rapid storage and retrieval of information.'
      },
      {
        title: 'Benefits for School and Exams',
        content: [
          'Memorize long answers, essays, and formulas quickly.',
          'Retain information for longer periods without rote memorization.',
          'Reduce exam anxiety and boost confidence.',
          'Save study time and improve grades.'
        ]
      },
      {
        title: 'Ideal Age Group and Student Profile',
        content: 'This program is ideal for students aged 6 years and above who face difficulties in remembering lessons or want to excel in competitive exams. It is particularly beneficial for visual learners.'
      },
      {
        title: 'Class Structure and Activities',
        content: 'Classes include visualization exercises, memory games, association techniques, and practical application of these skills to school subjects.'
      },
      {
        title: 'FAQs About Photographic Memory for Children',
        content: [
          'Q: Can any child learn this? A: Yes, with practice, any child can improve their visual memory.',
          'Q: Will it help in all subjects? A: Yes, it applies to all subjects including languages, science, and social studies.'
        ]
      }
    ],
    testimonials: [
      { name: 'Anil Kumar', role: 'Father', content: 'My son used to forget what he studied the next day. Now he remembers everything clearly. Amazing program!', rating: 5 }
    ]
  },
  'abacus-vedic-math-classes': {
    title: 'Abacus & Vedic Math Classes for Kids',
    subtitle: 'Super‑Fast Mental Calculation Training',
    description: 'Enhance mathematical skills, speed, and accuracy with our combined Abacus and Vedic Math program.',
    targetAge: '4-14 Years',
    duration: 'Level-based / 12 Sessions',
    classFormat: 'Offline / Online',
    price: 'Contact for Pricing',
    image: 'https://images.pexels.com/photos/4145047/pexels-photo-4145047.jpeg?auto=compress&cs=tinysrgb&w=1200',
    sections: [
      {
        title: 'Why Abacus Training Helps Brain Development',
        content: 'Abacus is not just about math; it is a complete brain development tool. Moving the beads stimulates the nerve endings in the fingertips, which connect to the brain. It enhances visualization, concentration, and listening skills.'
      },
      {
        title: 'Abacus and Vedic Math Program Structure',
        content: [
          'Abacus: Foundation levels for basic operations (Addition, Subtraction, Multiplication, Division).',
          'Vedic Math: Advanced techniques and sutras for complex calculations (Square roots, Cubes, Algebra) for older kids.'
        ]
      },
      {
        title: 'Age Groups and Levels',
        content: 'Abacus is best started between 4-14 years. Vedic Math is recommended for children aged 8+ years. We offer multiple levels, from beginner to advanced.'
      },
      {
        title: 'Skills Children Gain with Abacus & Vedic Math',
        content: [
          'Lightning-fast mental calculations.',
          'Improved number sense and logical thinking.',
          'Enhanced photographic memory for numbers.',
          'Greater confidence in mathematics.'
        ]
      },
      {
        title: 'Parent FAQs About Abacus Classes',
        content: [
          'Q: Will it confuse with school math? A: No, it complements school math by providing a faster way to verify answers.',
          'Q: How much practice is needed? A: 10-15 minutes of daily practice is recommended.'
        ]
      }
    ],
    testimonials: [
      { name: 'Priya S.', role: 'Parent', content: 'My daughter no longer fears math. She calculates faster than a calculator!', rating: 5 }
    ]
  },
  'speed-reading-course': {
    title: 'Speed Reading Classes for Students',
    subtitle: 'Read Faster with Better Understanding',
    description: 'Learn to read 3-5x faster while maintaining or improving comprehension with our Speed Reading course.',
    targetAge: '8+ Years',
    duration: '10 Sessions',
    classFormat: 'Offline / Online',
    price: 'Contact for Pricing',
    image: 'https://images.pexels.com/photos/4144291/pexels-photo-4144291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    sections: [
      {
        title: 'What Is Speed Reading Training',
        content: 'Speed reading involves techniques to increase the rate at which you read text without compromising understanding. It trains the eyes to move smoothly and capture more words at a glance.'
      },
      {
        title: 'Benefits for School and Competitive Exams',
        content: [
          'Cover syllabus in less time.',
          'Improve focus and reduce distraction while reading.',
          'Quickly scan and locate key information.',
          'Crucial for competitive exams with time limits.'
        ]
      },
      {
        title: 'Class Format and Techniques We Teach',
        content: 'We teach techniques like skimming, scanning, chunking, and eliminating sub-vocalization. Classes are practical and involve reading drills with various texts.'
      },
      {
        title: 'Who Can Join the Speed Reading Program',
        content: 'Students aged 8 years and above, college students, and professionals who need to process large amounts of information daily.'
      },
      {
        title: 'FAQs on Speed Reading for Kids',
        content: [
          'Q: Will comprehension drop? A: No, our techniques ensure comprehension actually improves as focus increases.',
          'Q: Is it suitable for dyslexic students? A: It can be helpful, but we recommend a consultation first.'
        ]
      }
    ],
    testimonials: [
      { name: 'Karthik', role: 'Student', content: 'I can now finish a book in a few hours. It has helped me so much in my board exams.', rating: 5 }
    ]
  },
  'handwriting-improvement': {
    title: 'Handwriting Improvement Classes for Kids',
    subtitle: 'Neat Writing for Better Exam Scores',
    description: 'Transform your child\'s handwriting into a neat, legible, and impressive script with our specialized course.',
    targetAge: '5+ Years',
    duration: '15 Sessions',
    classFormat: 'Offline / Online',
    price: 'Contact for Pricing',
    image: 'https://images.pexels.com/photos/5088188/pexels-photo-5088188.jpeg?auto=compress&cs=tinysrgb&w=1200',
    sections: [
      {
        title: 'Why Handwriting Still Matters in Exams',
        content: 'Despite the digital age, exams are still handwritten. Legible handwriting ensures that examiners can read and grade answers correctly. It also reflects clarity of thought and discipline.'
      },
      {
        title: 'How Our Handwriting Program Works',
        content: 'We focus on grip correction, letter formation, spacing, slant, and speed. We use scientifically designed practice sheets to build muscle memory for good handwriting.'
      },
      {
        title: 'Age Group, Duration and Materials',
        content: 'Suitable for children aged 5 years and above. The course typically spans 15 sessions. All practice materials are provided.'
      },
      {
        title: 'Before and After Improvements Parents See',
        content: 'Parents notice a significant difference in legibility and neatness. Children also report less hand fatigue and improved writing speed.'
      },
      {
        title: 'FAQs on Handwriting Training',
        content: [
          'Q: Can bad handwriting be fixed? A: Yes, with the right technique and practice, anyone can improve.',
          'Q: Do you teach cursive? A: Yes, we teach both print and cursive styles.'
        ]
      }
    ],
    testimonials: [
      { name: 'Mrs. Reddy', role: 'Parent', content: 'My son\'s teacher praised his handwriting improvement. Thank you Smart Brains!', rating: 5 }
    ]
  },
  'drawing-skill-development': {
    title: 'Drawing & Skill Development Classes',
    subtitle: 'Build Creativity and Confidence in Kids',
    description: 'Nurture your child\'s artistic talents and fine motor skills with our structured drawing and skill development program.',
    targetAge: '4+ Years',
    duration: '20 Sessions',
    classFormat: 'Offline / Online',
    price: 'Contact for Pricing',
    image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1200',
    sections: [
      {
        title: 'Why Creative Skills Matter for Brain Development',
        content: 'Art engages the right brain, fostering creativity, emotional expression, and problem-solving skills. It also improves fine motor coordination and focus.'
      },
      {
        title: 'What Children Learn in Our Drawing & Skill Program',
        content: 'They learn various techniques like sketching, shading, coloring, and painting. We also include activities for hand-eye coordination and observation skills.'
      },
      {
        title: 'Age Groups and Batch Options',
        content: 'We have batches for different age groups starting from 4 years. Classes are held on weekends and weekdays.'
      },
      {
        title: 'Benefits Parents Notice at Home and School',
        content: 'Children become more patient, observant, and expressive. Their ability to visualize concepts improves, which helps in other subjects too.'
      },
      {
        title: 'FAQs on Drawing and Creativity Classes',
        content: [
          'Q: Do you provide materials? A: Yes, basic materials are provided for offline classes.',
          'Q: Is it a hobby class? A: It is a skill development course with a structured curriculum.'
        ]
      }
    ],
    testimonials: [
      { name: 'Swathi', role: 'Parent', content: 'My daughter loves the drawing class. It is her favorite time of the week.', rating: 5 }
    ]
  }
};

export async function generateStaticParams() {
  return validSlugs.map((slug) => ({
    program: slug,
  }));
}

export async function generateMetadata({ params }: { params: { program: string } }): Promise<Metadata> {
  const slug = params.program;
  const seo = programsSEO[slug];

  if (!seo) {
    return {
      title: 'Program Not Found | Smart Brains India',
      description: 'The requested program could not be found.',
    };
  }

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      url: `https://www.smartbrainsindia.com/programs/${slug}`,
      siteName: 'Smart Brains India',
      images: [
        {
          url: programsData[slug]?.image || 'https://www.smartbrainsindia.com/og-default.jpg',
          width: 1200,
          height: 630,
          alt: programsData[slug]?.title || 'Smart Brains India Program'
        }
      ],
      locale: 'en_IN',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.metaTitle,
      description: seo.metaDescription,
      images: [programsData[slug]?.image || 'https://www.smartbrainsindia.com/og-default.jpg']
    }
  };
}

export default function ProgramPage({ params }: { params: { program: string } }) {
  const slug = params.program;
  const data = programsData[slug];

  if (!data) {
    notFound();
  }

  // Find related programs (exclude current one)
  const relatedPrograms = Object.entries(programsData)
    .filter(([key]) => key !== slug)
    .slice(0, 3)
    .map(([key, value]) => ({
      slug: key,
      title: value.title,
      description: value.subtitle
    }));

  return <ProgramDetailsView programData={data} relatedPrograms={relatedPrograms} />;
}