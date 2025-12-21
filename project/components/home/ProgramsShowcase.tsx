import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Eye, Calculator, BookOpen } from 'lucide-react';

const featuredPrograms = [
  {
    id: 'dmit',
    title: 'DMIT Test',
    description: 'DMIT (Dermatoglyphics Multiple Intelligence Test) is a scientific fingerprint analysis that reveals a child\'s inborn potential, personality, and learning style. Suitable for all ages, it helps parents understand their child\'s strengths and weaknesses. Benefits include personalized learning strategies and career guidance.',
    icon: Brain,
    color: 'blue',
    ages: 'All ages',
    href: '/programs/dmit'
  },
  {
    id: 'midbrain-activation',
    title: 'Midbrain Activation',
    description: 'Midbrain Activation is a specialized training program for children aged 5-15 years designed to stimulate the middle brain. This course enhances intuitive abilities, improves focus, and balances the left and right brain. Key benefits include better concentration, increased creativity, and emotional stability.',
    icon: Eye,
    color: 'purple',
    ages: '5-15 years',
    href: '/programs/midbrain-activation'
  },
  {
    id: 'photographic-memory',
    title: 'Photographic Memory',
    description: 'Our Photographic Memory training helps children aged 6+ years develop the ability to recall information instantly and accurately. By mastering visualization techniques, students can remember lessons faster and retain them longer. This program significantly boosts exam performance and academic confidence.',
    icon: BookOpen,
    color: 'green',
    ages: '6+ years',
    href: '/programs/photographic-memory'
  },
  {
    id: 'abacus-math',
    title: 'Abacus Math',
    description: 'Abacus Math is a brain development program for children aged 4-14 years that uses the ancient abacus tool to teach mental calculations. It improves speed, accuracy, and concentration. Students gain a strong foundation in mathematics, enhanced memory, and superior logical thinking skills.',
    icon: Calculator,
    color: 'orange',
    ages: '4-14 years',
    href: '/programs/abacus-math'
  }
];

export function ProgramsShowcase() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Featured Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover Smart Brains India's scientifically proven brain training courses, designed to unlock potential and boost memory, focus, math skills, and creativity for all ages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredPrograms.map((program) => {
            const Icon = program.icon;
            const colorClasses = {
              blue: 'text-blue-600 bg-blue-50',
              purple: 'text-purple-600 bg-purple-50',
              green: 'text-green-600 bg-green-50',
              orange: 'text-orange-600 bg-orange-50'
            } as const;

            const gradientBg: Record<keyof typeof colorClasses, string> = {
              blue: 'from-white to-white',
              purple: 'from-white to-white',
              green: 'from-white to-white',
              orange: 'from-white to-white'
            };

            const ringColor: Record<keyof typeof colorClasses, string> = {
              blue: 'ring-blue-100 hover:ring-blue-300 hover:shadow-blue-200/60',
              purple: 'ring-purple-100 hover:ring-purple-300 hover:shadow-purple-200/60',
              green: 'ring-green-100 hover:ring-green-300 hover:shadow-green-200/60',
              orange: 'ring-orange-100 hover:ring-orange-300 hover:shadow-orange-200/60'
            };

            return (
              <Card
                key={program.id}
                className={`bg-gradient-to-br ${gradientBg[program.color as keyof typeof gradientBg]} 
                  rounded-xl shadow-sm ring-1 ring-transparent ${ringColor[program.color as keyof typeof ringColor]} 
                  transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 group h-full flex flex-col`}
              >
                <CardHeader className="text-center">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${colorClasses[program.color as keyof typeof colorClasses]} mb-4`}>
                    <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <CardTitle className="text-xl font-bold">{program.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">
                    Age: {program.ages}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 mb-4 text-center text-base line-clamp-4 flex-1">
                    {program.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full hover:bg-gray-50 mt-auto"
                  >
                    <Link href={program.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}