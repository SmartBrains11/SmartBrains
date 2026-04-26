import Image from 'next/image';
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
    href: '/programs/dmit',
    image: '/images/DMIT.webp'
  },
  {
    id: 'midbrain-activation',
    title: 'Midbrain Activation',
    description: 'Midbrain Activation is a specialized training program for children aged 5-15 years designed to stimulate the middle brain. This course enhances intuitive abilities, improves focus, and balances the left and right brain. Key benefits include better concentration, increased creativity, and emotional stability.',
    icon: Eye,
    color: 'purple',
    ages: '5-15 years',
    href: '/programs/midbrain-activation',
    image: '/images/midbrain-activation.webp'
  },
  {
    id: 'photographic-memory',
    title: 'Photographic Memory',
    description: 'Our Photographic Memory training helps children aged 6+ years develop the ability to recall information instantly and accurately. By mastering visualization techniques, students can remember lessons faster and retain them longer. This program significantly boosts exam performance and academic confidence.',
    icon: BookOpen,
    color: 'green',
    ages: '6+ years',
    href: '/programs/photographic-memory',
    image: '/images/photograhic-memory.webp'
  },
  {
    id: 'abacus-math',
    title: 'Abacus Math',
    description: 'Abacus Math is a brain development program for children aged 4-14 years that uses the ancient abacus tool to teach mental calculations. It improves speed, accuracy, and concentration. Students gain a strong foundation in mathematics, enhanced memory, and superior logical thinking skills.',
    icon: Calculator,
    color: 'orange',
    ages: '4-14 years',
    href: '/programs/abacus-math',
    image: '/images/abacus.webp'
  }
];

export function ProgramsShowcase() {
  return (
    <section className="py-20 sm:py-28 bg-[#fafafa]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <span className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
            Curriculum
          </span>
          <h2 className="mt-4 text-lg sm:text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-none uppercase">
            PROGRAMS TO BOOST BRAIN POWER
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover Smart Brains India&apos;s scientifically proven brain training courses, designed to unlock potential and boost memory, focus, math skills, and creativity for all ages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8 mb-16">
          {featuredPrograms.map((program) => {
            const Icon = program.icon;

            const colorTokens = {
              blue: { bg: 'bg-blue-50', text: 'text-blue-600', hoverBg: 'group-hover:bg-blue-100', hoverText: 'group-hover:text-blue-950' },
              purple: { bg: 'bg-purple-50', text: 'text-purple-600', hoverBg: 'group-hover:bg-purple-100', hoverText: 'group-hover:text-purple-950' },
              green: { bg: 'bg-emerald-50', text: 'text-emerald-600', hoverBg: 'group-hover:bg-emerald-100', hoverText: 'group-hover:text-emerald-950' },
              orange: { bg: 'bg-orange-50', text: 'text-orange-600', hoverBg: 'group-hover:bg-orange-100', hoverText: 'group-hover:text-orange-950' }
            } as const;

            const tokens = colorTokens[program.color as keyof typeof colorTokens];

            return (
              <Card
                key={program.id}
                className="bg-white rounded-3xl border-0 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-400 ease-out hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 group h-full flex flex-col overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative h-48 w-full">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  <div className={`absolute -bottom-6 left-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl ${tokens.bg} ${tokens.text} shadow-lg border-4 border-white transition-transform duration-300 group-hover:scale-110 z-10`}>
                    <Icon className="h-7 w-7" />
                  </div>
                </div>

                <div className="p-8 pt-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                    {program.title}
                  </h3>
                  <div className="inline-block px-3 py-1 rounded-md bg-gray-100 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">
                    Age: {program.ages}
                  </div>
                  <p className="text-gray-500 leading-relaxed text-sm line-clamp-4">
                    {program.description}
                  </p>
                </div>

                <div className="p-8 pt-6 mt-auto">
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 rounded-xl transition-all duration-300 transform group-hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-900/10 hover:shadow-blue-200"
                  >
                    <Link href={program.href} className="flex items-center justify-center gap-2">
                      View Program Details
                      <span className="text-xl">→</span>
                    </Link>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>


        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild className="px-10 py-7 rounded-full bg-gray-900 hover:bg-black text-white text-lg font-semibold shadow-xl hover:shadow-2xl hover:shadow-gray-900/20 transition-all active:scale-95">
            <Link href="/programs">View All Programs</Link>
          </Button>
          <Button asChild variant="outline" className="px-10 py-7 rounded-full border-blue-600 text-blue-600 hover:bg-blue-50 text-lg font-semibold shadow-lg transition-all active:scale-95">
            <Link href="/contact">Book Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}