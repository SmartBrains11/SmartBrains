import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ShieldCheck, Award, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Awards & Accreditation | ISO Certified | Smart Brains India',
  description: 'View the official certifications, licenses, and awards won by Smart Brains India. ISO 9001:2015 accredited children cognitive development center.',
  alternates: {
    canonical: 'https://www.smartbrainsindia.in/awards',
  }
};

const recognitions = [
  {
    title: 'ISO 9001:2015 Quality Standards Certified',
    authority: 'International Quality Accreditation Board',
    detail: 'Accredited in 2023 for conforming to strict quality management standards in children cognitive training, mental math curricula, and DMIT assessment processes.'
  },
  {
    title: 'Pediatric Learning Innovation Award 2024',
    authority: 'Regional Educational Board',
    detail: 'Recognized for creating personalized, home-integrated study planners that bridge fingerprint Multiple Intelligence mapping (DMIT) with Abacus classroom training.'
  }
];

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs items={[{ label: 'Our Trust', href: '/testimonials' }, { label: 'Awards & Recognition' }]} />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-20 max-w-4xl space-y-12">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <ShieldCheck className="w-16 h-16 text-indigo-650 mx-auto" />
            <h1 className="text-4xl font-black uppercase tracking-tight text-slate-900">Awards & Recognition</h1>
            <p className="text-lg text-slate-500 leading-relaxed font-medium">
              We hold ourselves to strict quality and compliance standards. Smart Brains India is officially licensed and ISO accredited.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recognitions.map((item, idx) => (
              <Card key={idx} className="border border-slate-100 shadow-md rounded-[2rem] overflow-hidden hover:shadow-lg transition-all duration-350 bg-white">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">{item.title}</h3>
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{item.authority}</p>
                  </div>
                  <p className="text-slate-650 leading-relaxed text-sm">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
