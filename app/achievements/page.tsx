import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Trophy, Star, Award, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Student Achievements & Olympiad Results | Smart Brains India',
  description: 'Explore the accomplishments of Smart Brains India students. National Abacus champions, Vedic Math competition winners, and cognitive success stories.',
  alternates: {
    canonical: 'https://www.smartbrainsindia.in/achievements',
  }
};

const achievements = [
  {
    studentName: 'K. Sai Siddarth',
    age: '9 Years',
    award: 'National Abacus Competition 2025 - Grand Champion',
    detail: 'Completed 70 multi-digit mental arithmetic calculations in 3 minutes using bead visualization, securing first place.'
  },
  {
    studentName: 'M. Haritha Priya',
    age: '11 Years',
    award: 'Regional Vedic Math Olympiad 2025 - Gold Medalist',
    detail: 'Solved advanced algebraic equations and square roots mentally in single-step Sutra calculations, scoring 100/100.'
  },
  {
    studentName: 'P. Vignesh',
    age: '8 Years',
    award: 'Midbrain Activation Sensory Integration Showcase 2024',
    detail: 'Demonstrated complete hemispheric bridge balance, identifying colors and reading texts blindfolded with high sensory integration.'
  }
];

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs items={[{ label: 'Our Trust', href: '/testimonials' }, { label: 'Student Achievements' }]} />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-20 max-w-4xl space-y-12">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <Trophy className="w-16 h-16 text-indigo-600 mx-auto" />
            <h1 className="text-4xl font-black uppercase tracking-tight text-slate-900">Student Achievements</h1>
            <p className="text-lg text-slate-500 leading-relaxed font-medium">
              We celebrate the dedication of our students. Our certified mental arithmetic and memory systems consistently produce outstanding competition rankings.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {achievements.map((item, idx) => (
              <Card key={idx} className="border border-slate-100 shadow-md rounded-[2rem] overflow-hidden hover:shadow-lg transition-shadow bg-slate-50/50">
                <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 animate-bounce" />
                  </div>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{item.age}</span>
                      <h3 className="text-xl font-bold text-slate-900 leading-tight">{item.studentName}</h3>
                      <p className="text-sm font-bold text-slate-500">{item.award}</p>
                    </div>
                    <p className="text-slate-650 leading-relaxed text-sm">{item.detail}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
