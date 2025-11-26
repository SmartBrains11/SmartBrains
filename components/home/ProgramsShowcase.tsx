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
    <section className="py-28 bg-white">
      <div className="container mx-auto px-6">
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
                  transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 group`}
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
                <CardContent>
                  <p className="text-gray-600 mb-4 text-center text-base">
                    {program.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full hover:bg-gray-50"
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