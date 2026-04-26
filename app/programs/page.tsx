'use client';

import Image from 'next/image';
import Link from 'next/link'; 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, Eye, BookOpen, Calculator, Zap, PenTool, Users, Palette, Clock, Target, Award } from 'lucide-react';

const programs = [
  {
    id: 'midbrain-activation',
    title: 'Midbrain Activation',
    subtitle: 'Enhance Intuitive Abilities',
    description: 'Stimulate the midbrain to enhance intuition, creativity, and mental abilities',
    icon: Eye,
    color: 'purple',
    ages: '5-15 years',
    duration: '2 days workshop + 6 Follow ups',
    benefits: ['Enhanced intuition', 'Better concentration', 'Improved creativity'],
    href: '/programs/midbrain-activation',
    image: '/images/midbrain-activation.webp'
  },
  {
    id: 'photographic-memory',
    title: 'Photographic Memory',
    subtitle: 'Develop Eidetic Memory',
    description: 'Master techniques for enhanced memory retention and recall abilities',
    icon: BookOpen,
    color: 'green',
    ages: '6+ years',
    duration: '20 sessions',
    benefits: ['Perfect recall', 'Better academic performance', 'Increased confidence'],
    href: '/programs/photographic-memory',
    image: '/images/photograhic-memory.webp'
  },
  {
    id: 'enhancement',
    title: 'Enhancement',
    subtitle: 'Overall Cognitive Development',
    description: 'Comprehensive program for overall cognitive enhancement and brain development',
    icon: Zap,
    color: 'yellow',
    ages: '5-16 years',
    duration: '2 days workshop + 6 Follow up sessions',
    benefits: ['Improved focus', 'Better problem solving', 'Enhanced learning'],
    href: '/programs/enhancement',
    image: '/images/enhancment.webp'
  },
  {
    id: 'quantum-speed-reading',
    title: 'Quantum Speed Reading',
    subtitle: 'Revolutionary Reading Technique',
    description: 'Advanced speed reading technique using quantum methods for rapid comprehension',
    icon: Zap,
    color: 'indigo',
    ages: '8+ years',
    duration: '15 sessions',
    benefits: ['Ultra-fast reading', 'Complete comprehension', 'Information processing'],
    href: '/programs/quantum-speed-reading',
    image: '/images/quantumspeed-reading.webp'
  },
  {
    id: 'dmit',
    title: 'DMIT',
    subtitle: 'Dermatoglyphics Multiple Intelligence Test',
    description: 'Scientific fingerprint analysis to understand innate potential and learning styles',
    icon: Brain,
    color: 'blue',
    ages: 'All ages',
    duration: '1 session + consultation',
    benefits: ['Identify learning style', 'Career guidance', 'Personality insights'],
    href: '/programs/dmit',
    image: '/images/DMIT.webp'
  },
  {
    id: 'midbrain-adults',
    title: 'Midbrain for Adults',
    subtitle: 'Adult Cognitive Enhancement',
    description: 'Midbrain activation program specially designed for adults and professionals',
    icon: Users,
    color: 'gray',
    ages: '18+ years',
    duration: '3 days workshop + 6 Follow up',
    benefits: ['Enhanced intuition', 'Better decision making', 'Stress reduction'],
    href: '/programs/midbrain-adults',
    image: '/images/midbrain-adult.webp'
  },
  {
    id: 'abacus-math',
    title: 'Abacus Math',
    subtitle: 'Mental Mathematics Mastery',
    description: 'Master mental mathematics and improve calculation speed with abacus training',
    icon: Calculator,
    color: 'orange',
    ages: '4-14 years',
    duration: '8 levels program',
    benefits: ['Mental calculation', 'Number sense', 'Mathematical confidence'],
    href: '/programs/abacus-math',
    image: '/images/abacus.webp'
  },
  {
    id: 'vedic-math',
    title: 'Vedic Math',
    subtitle: 'Ancient Mathematical Techniques',
    description: 'Learn ancient Vedic mathematical techniques for faster calculations',
    icon: Target,
    color: 'red',
    ages: '8+ years',
    duration: '12 sessions',
    benefits: ['Faster calculations', 'Mathematical tricks', 'Improved accuracy'],
    href: '/programs/vedic-math',
    image: '/images/vedic-maths.webp'
  },
  {
    id: 'speed-reading',
    title: 'Speed Reading',
    subtitle: 'Rapid Reading Skills',
    description: 'Develop speed reading skills while maintaining comprehension and retention',
    icon: Clock,
    color: 'teal',
    ages: '8+ years',
    duration: '10 sessions',
    benefits: ['Faster reading', 'Better comprehension', 'Time efficiency'],
    href: '/programs/speed-reading',
    image: '/images/speed-reading.webp'
  },
  {
    id: 'drawing-skills',
    title: 'Drawing & Skill Development',
    subtitle: 'Artistic & Motor Skills',
    description: 'Develop artistic abilities and fine motor skills through structured drawing programs',
    icon: Palette,
    color: 'emerald',
    ages: '4+ years',
    duration: '20 sessions',
    benefits: ['Artistic skills', 'Motor development', 'Creative expression'],
    href: '/programs/drawing-skills',
    image: '/images/drawing.webp'
  },
  {
    id: 'handwriting',
    title: 'Handwriting',
    subtitle: 'Beautiful & Legible Writing',
    description: 'Improve handwriting skills, speed, and legibility for better academic performance',
    icon: PenTool,
    color: 'pink',
    ages: '5+ years',
    duration: '15 sessions',
    benefits: ['Neat handwriting', 'Improved speed', 'Better grades'],
    href: '/programs/handwriting',
    image: '/images/handwriting.webp'
  }
];


const colorClasses = {
  blue: 'text-blue-600 bg-blue-50 border-blue-200',
  purple: 'text-purple-600 bg-purple-50 border-purple-200',
  green: 'text-green-600 bg-green-50 border-green-200',
  yellow: 'text-yellow-600 bg-yellow-50 border-yellow-200',
  indigo: 'text-indigo-600 bg-indigo-50 border-indigo-200',
  orange: 'text-orange-600 bg-orange-50 border-orange-200',
  red: 'text-red-600 bg-red-50 border-red-200',
  teal: 'text-teal-600 bg-teal-50 border-teal-200',
  pink: 'text-pink-600 bg-pink-50 border-pink-200',
  gray: 'text-gray-600 bg-gray-50 border-gray-200',
  emerald: 'text-emerald-600 bg-emerald-50 border-emerald-200'
};

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 via-white to-orange-100 py-20">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 animate-fade-in tracking-tight">
            Our Brain Training Programs
          </h1>
          <p className="text-xl text-gray-600 mb-10 animate-fade-in-delay max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of scientifically designed programs
            that cater to different age groups and learning objectives. Each program
            is crafted to unlock specific cognitive abilities and enhance overall brain function.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 rounded-full text-lg shadow-xl hover:shadow-blue-200 transition-all">
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
            <Badge variant="secondary" className="text-sm px-4 py-2 rounded-full border-gray-200 uppercase tracking-widest font-bold">
              11 Specialized Programs Available
            </Badge>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => {
              const Icon = program.icon;
              const colorClass = colorClasses[program.color as keyof typeof colorClasses];

              return (
                <Card
                  key={program.id}
                  className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-blue-200 transform hover:-translate-y-3 animate-slide-in-up overflow-hidden bg-white rounded-3xl h-full flex flex-col"
                  style={{ animationDelay: `${programs.indexOf(program) * 100}ms` }}
                >
                  {/* Image Section */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>

                  <CardHeader className="text-center pb-4 pt-10 relative">
                    <div className={`absolute -top-8 left-1/2 -translate-x-1/2 inline-flex items-center justify-center w-16 h-16 rounded-full ${colorClass} mb-4 mx-auto transition-transform duration-300 group-hover:scale-110 shadow-lg border-4 border-white`}>
                      <Icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {program.title}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      {program.subtitle}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0 flex flex-col flex-1">
                    <p className="text-gray-600 mb-4 text-center leading-relaxed">
                      {program.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Age Group:</span>
                        <Badge variant="outline" className="group-hover:bg-blue-50 group-hover:border-blue-300 transition-colors duration-300">
                          {program.ages}
                        </Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Duration:</span>
                        <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                          {program.duration}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-medium text-sm mb-3 text-gray-900">Key Benefits:</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        {program.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start group-hover:text-gray-700 transition-colors duration-300">
                            <Award className="h-3 w-3 text-green-500 mr-2 flex-shrink-0 mt-0.5 group-hover:text-green-600 transition-colors duration-300" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-6 border-t border-gray-50">
                      <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 rounded-xl transition-all duration-300 transform group-hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-blue-200">
                        <Link href={program.href} className="flex items-center justify-center gap-2">
                          View Program Details
                          <span className="text-xl">→</span>
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-black mb-6">
            Not Sure Which Program is Right for Your Child?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our experts can help you choose the perfect program based on your child&apos;s
            age, interests, and learning goals. Book a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/programs/dmit">Start with DMIT Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s both;
        }
        
        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
}