import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Eye, Calculator, BookOpen } from 'lucide-react';

const featuredPrograms = [
  {
    id: 'dmit',
    title: 'DMIT',
    description: 'Dermatoglyphics Multiple Intelligence Test to understand your child\'s innate potential',
    icon: Brain,
    color: 'blue',
    ages: 'All ages',
    href: '/programs/dmit'
  },
  {
    id: 'midbrain-activation',
    title: 'Midbrain Activation',
    description: 'Enhance intuition, creativity, and mental abilities through midbrain stimulation',
    icon: Eye,
    color: 'purple',
    ages: '5-15 years',
    href: '/programs/midbrain-activation'
  },
  {
    id: 'photographic-memory',
    title: 'Photographic Memory',
    description: 'Help your child remember and recall information instantly and boosts exam performance.',
    icon: BookOpen,
    color: 'green',
    ages: '6+ years',
    href: '/programs/photographic-memory'
  },
  {
    id: 'abacus-math',
    title: 'Abacus Math',
    description: 'Master mental mathematics and improve calculation speed with abacus training',
    icon: Calculator,
    color: 'orange',
    ages: '4-14 years',
    href: '/programs/abacus-math'
  }
];

export function ProgramsShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Featured Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover Smart Brains India’s scientifically proven brain training courses, designed to unlock potential and boost memory, focus, math skills, and creativity for all ages.
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
            };

            return (
              <Card key={program.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${colorClasses[program.color as keyof typeof colorClasses]} mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">
                    Age: {program.ages}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-center">
                    {program.description}
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={program.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}