'use client';

import React from 'react';
import { Award, ShieldCheck, GraduationCap, CheckCircle, Users, BookOpen, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const trainers = [
  {
    name: 'Lakkoju Jayalakshmi',
    role: 'Founder & Chief Cognitive Director',
    details: 'Certified Dermatoglyphics Multiple Intelligence Analyst, Brain Gym practitioner, and student career alignment counselor since 2019.',
    credentials: 'M.Sc. Child Psychology, DMIT Certification'
  },
  {
    name: 'Lakshmi Devi',
    role: 'Senior Abacus & Vedic Math Specialist',
    details: 'Over 8 years of foundational mathematics instruction. Has successfully coached 400+ students for national arithmetic competitions.',
    credentials: 'Vedic Math Master Trainer, Abacus Level-8 Certified'
  },
  {
    name: 'Priyanka Lakkoju',
    role: 'Chief Sensory Integration Lead',
    details: 'Expert in right-brain activation methodology, sensory integration therapy, and pediatric learning style analysis.',
    credentials: 'B.Ed. Special Education, Midbrain Activation Analyst'
  }
];

const highlights = [
  {
    icon: ShieldCheck,
    title: 'ISO 9001:2015 Standards',
    desc: 'Our brain training methodologies and curricula conform to international quality management benchmarks.'
  },
  {
    icon: Award,
    title: '96% Success Rate',
    desc: 'Parent trackers reveal significant concentration and memory improvements within the first 12 weeks.'
  },
  {
    icon: GraduationCap,
    title: '1,000+ Graduates',
    desc: 'Empowering children across Hyderabad, Vizianagaram, and online nationwide batches.'
  }
];

export default function TrustEEAT() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 lg:px-20 max-w-6xl space-y-16">
        
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase">
            E-E-A-T Accredited
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase leading-none">
            Why Parents Trust Smart Brains India
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            We hold ourselves to elite academic standards. Our assessments are biologically mapped and conducted by certified pediatric counselors.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <Card key={idx} className="border-none shadow-md rounded-[2rem] overflow-hidden bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trainer Profiles */}
        <div className="space-y-8">
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight text-center">Meet Our Certified Mentors</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 relative hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg leading-tight">{trainer.name}</h4>
                    <p className="text-xs font-bold text-indigo-600 mt-1">{trainer.role}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider">
                    <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" /> Certified
                  </span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{trainer.details}</p>
                <div className="pt-3 border-t border-slate-100 flex gap-2 items-center text-xs font-semibold text-slate-400">
                  <Award className="w-4 h-4 text-slate-400" />
                  <span>{trainer.credentials}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
