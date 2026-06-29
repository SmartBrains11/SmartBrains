'use client';

import React from 'react';
import Link from 'next/link';
import { User, Award, ArrowRight, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function MeetExperts() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-20 max-w-5xl space-y-16">
        
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-indigo-500" /> Academic Leadership
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase leading-none">
            Meet Our Experts
          </h2>
          <p className="text-lg text-slate-650 leading-relaxed font-medium">
            Smart Brains India is led by certified cognitive development experts and child psychologists dedicated to structured, scientific mental expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Jayalakshmi Card */}
          <Card className="border border-slate-100 shadow-md rounded-[2.5rem] overflow-hidden hover:shadow-xl transition-shadow bg-slate-50/50">
            <CardContent className="p-8 space-y-6 flex flex-col h-full">
              <div className="flex gap-4 items-center">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <User className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight">Jayalakshmi Lakkoju</h3>
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mt-0.5">Founder & CEO</p>
                </div>
              </div>
              <p className="text-slate-650 leading-relaxed text-sm flex-grow">
                Certified child psychology counselor and lead Dermatoglyphics Multiple Intelligence Analyst. Oversees research and diagnostics for all branches and online classrooms.
              </p>
              <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold h-12 rounded-xl">
                <Link href="/trainer/jayalakshmi-lakkoju" className="flex items-center justify-center gap-2">
                  View Profile <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Priyanka Card */}
          <Card className="border border-slate-100 shadow-md rounded-[2.5rem] overflow-hidden hover:shadow-xl transition-shadow bg-slate-50/50">
            <CardContent className="p-8 space-y-6 flex flex-col h-full">
              <div className="flex gap-4 items-center">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight">Priyanka Lakkoju</h3>
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mt-0.5">Lead Cognitive Trainer</p>
                </div>
              </div>
              <p className="text-slate-650 leading-relaxed text-sm flex-grow">
                Certified visual arithmetic and right-brain activation specialist. Has coached over 500 children in Abacus and Vedic Maths, driving medal-winning Olympiad results.
              </p>
              <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold h-12 rounded-xl">
                <Link href="/trainer/priyanka-lakkoju" className="flex items-center justify-center gap-2">
                  View Profile <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

        </div>

      </div>
    </section>
  );
}
export default MeetExperts;
