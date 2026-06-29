import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BookOpen, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Editorial Policy & Content Standards | Smart Brains India',
  description: 'Read the Smart Brains India Editorial Policy. Discover how we fact-check and publish expert-certified children development and learning advice.',
  alternates: {
    canonical: 'https://www.smartbrainsindia.in/editorial-policy',
  }
};

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs items={[{ label: 'Legal Policies', href: '/privacy-policy' }, { label: 'Editorial Policy' }]} />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-20 max-w-4xl space-y-8">
          <div className="flex items-center gap-3 text-indigo-650">
            <BookOpen className="w-10 h-10" />
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900">Editorial Policy & Standards</h1>
          </div>

          <div className="prose prose-slate max-w-none text-slate-650 leading-relaxed space-y-6 text-base">
            <p className="font-bold text-slate-900">Last Reviewed: June 29, 2026</p>

            <p>
              Smart Brains India is committed to delivering accurate, scientific, and trustworthy child cognitive development information. Our content guidelines ensure that parents receive helpful guidance backed by neurological facts and developmental benchmarks.
            </p>

            <h3 className="text-xl font-bold text-slate-900 uppercase pt-4">1. Expertise and Certification</h3>
            <p>
              Every educational guide, blog article, and course description is drafted or reviewed by certified trainers (including specialists in child psychology, Abacus levels, and multiple intelligence analysis). We trace methods back to peer-reviewed neuroscience studies and developmental frameworks (such as Howard Gardner\'s Multiple Intelligences theory).
            </p>

            <h3 className="text-xl font-bold text-slate-900 uppercase pt-4">2. Avoidance of Speculative Claims</h3>
            <p>
              We maintain absolute clarity and transparency regarding program limits. We explicitly avoid making exaggerated claims (e.g. claiming our programs cure clinical cognitive disorders).
            </p>

            <h3 className="text-xl font-bold text-slate-900 uppercase pt-4">3. Regular Fact-Checking & Updates</h3>
            <p>
              Our guides are reviewed bi-annually to reflect evolving learning benchmarks and parent feedback. Every article features a clear review date and links to trainer profiles to build digital trust (E-E-A-T).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
