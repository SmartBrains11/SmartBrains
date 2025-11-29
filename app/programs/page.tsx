import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, Eye, BookOpen, Calculator, Zap, PenTool, Palette } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Brain Training Programs for Kids | DMIT, Midbrain, Photographic Memory, Abacus',
  description: 'Explore all Smart Brains India programs for children, including DMIT fingerprint intelligence test, midbrain activation, photographic memory, abacus and Vedic maths, speed reading, handwriting improvement and drawing skill development. Designed to boost focus, memory and confidence.',
  keywords: ['brain training programs for kids', 'memory classes', 'abacus', 'midbrain activation'],
  openGraph: {
    title: 'Brain Training Programs for Kids | DMIT, Midbrain, Photographic Memory, Abacus',
    description: 'Explore all Smart Brains India programs for children, including DMIT fingerprint intelligence test, midbrain activation, photographic memory, abacus and Vedic maths.',
    url: 'https://www.smartbrainsindia.com/programs',
    siteName: 'Smart Brains India',
    images: [{ url: 'https://www.smartbrainsindia.com/og-programs.jpg', width: 1200, height: 630, alt: 'Brain Training Programs' }],
    locale: 'en_IN',
    type: 'website'
  },
  alternates: { canonical: 'https://www.smartbrainsindia.com/programs' },
  twitter: {
    card: 'summary_large_image',
    title: 'Brain Training Programs for Kids | DMIT, Midbrain, Photographic Memory, Abacus',
    description: 'Explore all Smart Brains India programs for children, including DMIT fingerprint intelligence test, midbrain activation, photographic memory, abacus and Vedic maths.',
    images: ['https://www.smartbrainsindia.com/og-programs.jpg']
  },
  robots: { index: true, follow: true }
};

const programs = [
  {
    id: 'dmit',
    title: 'DMIT – Fingerprint Intelligence Test',
    description: [
      'DMIT (Dermatoglyphics Multiple Intelligence Test) is a scientific assessment suitable for all ages that reveals an individual\'s inborn potential, personality traits, and learning style through fingerprint analysis. By understanding these innate strengths, parents can make informed decisions about their child\'s education and career path.',
      'This test identifies the distribution of brain neurons and multiple intelligences, helping to discover hidden talents. It provides a comprehensive report that serves as a lifelong guide for personal and professional development.'
    ],
    icon: Brain,
    color: 'blue',
    ages: 'All ages',
    href: '/programs/dmit-test-kids'
  },
  {
    id: 'midbrain',
    title: 'Midbrain Activation Training',
    description: [
      'Midbrain Activation is a unique training program for children aged 5-15 years that stimulates the middle brain to act as a bridge between the left (logical) and right (creative) hemispheres. This activation leads to a significant improvement in learning efficiency and emotional stability.',
      'Children who undergo this training demonstrate enhanced intuition, better concentration, and the ability to process information faster. It is a fun, non-medical method to awaken the sleeping potential of the brain.'
    ],
    icon: Eye,
    color: 'purple',
    ages: '5-15 years',
    href: '/programs/midbrain-activation-kids'
  },
  {
    id: 'photographic-memory',
    title: 'Photographic Memory Program',
    description: [
      'Our Photographic Memory program is designed for children aged 6+ years to help them capture and recall information as clear mental images. This skill is invaluable for academic success, allowing students to memorize textbooks, diagrams, and formulas with ease.',
      'The training involves specific visualization exercises that strengthen the brain\'s ability to store visual data. Students report reduced exam stress and a newfound confidence in their ability to learn anything quickly.'
    ],
    icon: BookOpen,
    color: 'green',
    ages: '6+ years',
    href: '/programs/photographic-memory-training'
  },
  {
    id: 'abacus-vedic',
    title: 'Abacus & Vedic Math Classes',
    description: [
      'We offer combined Abacus and Vedic Math classes for children aged 4-14 years to master mental calculations and overcome the fear of mathematics. Abacus training builds a strong foundation in arithmetic using a physical tool that is eventually visualized mentally.',
      'Vedic Math complements this by teaching ancient sutras for solving complex problems in seconds. Together, these programs enhance speed, accuracy, concentration, and overall brain development.'
    ],
    icon: Calculator,
    color: 'orange',
    ages: '4-14 years',
    href: '/programs/abacus-vedic-math-classes'
  },
  {
    id: 'speed-reading',
    title: 'Speed Reading for Students',
    description: [
      'Speed Reading is an essential skill for students aged 8+ years, enabling them to read and comprehend text 3-5 times faster than average. This program focuses on expanding the eye span and reducing sub-vocalization.',
      'By processing information more efficiently, students can cover more study material in less time, leaving more room for revision and other activities. It transforms reading from a chore into a rapid information-gathering process.'
    ],
    icon: Zap,
    color: 'indigo',
    ages: '8+ years',
    href: '/programs/speed-reading-course'
  },
  {
    id: 'handwriting',
    title: 'Handwriting Improvement',
    description: [
      'Our Handwriting Improvement course helps children aged 5+ years develop legible, neat, and faster writing skills. Good handwriting is crucial for exam presentation and reflects a disciplined mind.',
      'Through structured practice and scientific techniques, we correct grip, posture, and letter formation. The result is beautiful handwriting that boosts a child\'s self-esteem and academic grades.'
    ],
    icon: PenTool,
    color: 'pink',
    ages: '5+ years',
    href: '/programs/handwriting-improvement'
  },
  {
    id: 'drawing',
    title: 'Drawing & Skill Development',
    description: [
      'The Drawing & Skill Development program nurtures creativity and fine motor skills in children aged 4+ years. Art is a powerful medium for brain development, encouraging self-expression and visual-spatial intelligence.',
      'We guide students through various techniques and mediums, helping them build patience, focus, and an appreciation for aesthetics. It is a relaxing yet stimulating activity that complements academic learning.'
    ],
    icon: Palette,
    color: 'emerald',
    ages: '4+ years',
    href: '/programs/drawing-skill-development'
  }
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Brain Training Programs for Kids – DMIT, Midbrain, Photographic Memory, Abacus & More
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-delay">
              Explore our comprehensive range of scientifically designed programs that cater to different age groups and learning objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-16 space-y-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            // Dynamic color classes
            const bgClass = program.color === 'blue' ? 'bg-blue-100 text-blue-600' :
              program.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                program.color === 'green' ? 'bg-green-100 text-green-600' :
                  program.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                    program.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' :
                      program.color === 'pink' ? 'bg-pink-100 text-pink-600' :
                        'bg-emerald-100 text-emerald-600';

            return (
              <div key={program.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8 md:p-10 border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${bgClass}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{program.title}</h2>
                    <div className="mb-4">
                      <Badge variant="secondary" className="text-sm font-medium">
                        Age: {program.ages}
                      </Badge>
                    </div>
                    <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-6">
                      {program.description.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                    <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                      <Link href={program.href}>Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}