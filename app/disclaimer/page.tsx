import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ShieldAlert, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer & Educational Advisory | Smart Brains India',
  description: 'Read the official educational disclaimer for Smart Brains India. Learn about our program scopes and medical/psychological content advisories.',
  alternates: {
    canonical: 'https://www.smartbrainsindia.in/disclaimer',
  }
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs items={[{ label: 'Legal Policies', href: '/privacy-policy' }, { label: 'Disclaimer' }]} />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-20 max-w-4xl space-y-8">
          <div className="flex items-center gap-3 text-amber-600">
            <ShieldAlert className="w-10 h-10" />
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900">Disclaimer & Educational Advisory</h1>
          </div>
          
          <div className="prose prose-slate max-w-none text-slate-650 leading-relaxed space-y-6 text-base">
            <p className="font-bold text-slate-900">Last Updated: June 29, 2026</p>
            
            <p>
              Smart Brains India programs—including Abacus Arithmetic, Vedic Mathematics, Midbrain Activation, Photographic Memory, and Dermatoglyphics Multiple Intelligence Test (DMIT) fingerprint assessments—are educational training and cognitive skill-development resources.
            </p>

            <h3 className="text-xl font-bold text-slate-900 uppercase pt-4">No Medical or Psychological Diagnostics</h3>
            <p>
              The information, test reports, and programs provided on this website are not intended to diagnose, treat, cure, or replace professional medical, neurological, psychological, psychiatric, or special education advice.
            </p>
            <p>
              If your child has learning disorders, clinical ADHD, dyslexia, autism spectrum parameters, or other clinical cognitive impairments, please consult a qualified healthcare professional, child developmental pediatrician, or certified educational psychologist.
            </p>

            <h3 className="text-xl font-bold text-slate-900 uppercase pt-4">Scope of Program Outcomes</h3>
            <p>
              Although 96% of our participants show noted concentration improvements, cognitive skill outcomes vary based on starting baselines, active participation, and the child's daily practice consistency at home. Smart Brains India does not claim or guarantee fixed academic grades or school rankings.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
