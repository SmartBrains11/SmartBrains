import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pillars } from '@/data/pillars';
import { getCourseSchema, getFAQSchema } from '@/lib/schemas';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { LeadMagnet } from '@/components/shared/LeadMagnet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Clock, BookOpen, ShieldAlert, Award, Star } from 'lucide-react';

interface PillarPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(pillars).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PillarPageProps): Promise<Metadata> {
  const p = pillars[params.slug];
  if (!p) return {};

  return {
    title: p.metaTitle,
    description: p.metaDescription,
    keywords: p.keywords,
    alternates: {
      canonical: `https://www.smartbrainsindia.in/pillar/${p.slug}`,
    },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDescription,
      url: `https://www.smartbrainsindia.in/pillar/${p.slug}`,
      type: 'article',
      locale: 'en_IN'
    }
  };
}

export default function PillarPage({ params }: PillarPageProps) {
  const p = pillars[params.slug];

  if (!p) {
    notFound();
  }

  // Generate Schemas
  const courseSchema = getCourseSchema(p.title, p.metaDescription);
  const faqSchema = getFAQSchema(p.faqs);
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.smartbrainsindia.in'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Pillars',
        'item': 'https://www.smartbrainsindia.in/pillars'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': p.title,
        'item': `https://www.smartbrainsindia.in/pillar/${p.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-slate-50">
        <Breadcrumbs items={[{ label: 'Knowledge Pillars', href: '/resources' }, { label: p.title }]} />

        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-6 lg:px-20 relative z-10 max-w-5xl space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-indigo-400" /> Educational Authority Pillar
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase">
              {p.title}
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
              {p.introduction}
            </p>

            {/* Quick Specs Block */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400 shrink-0">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold">Ideal Age Group</p>
                  <p className="font-bold text-slate-200">{p.ageGroup}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold">Program Duration</p>
                  <p className="font-bold text-slate-200">{p.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400 shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold">Methodology Type</p>
                  <p className="font-bold text-slate-200">Scientific Brain Training</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="py-16 bg-white border-b border-slate-150">
          <div className="container mx-auto px-6 lg:px-20 max-w-4xl space-y-8">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Expected Learning Outcomes</h2>
            <div className="grid grid-cols-1 gap-4">
              {p.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
                  <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-slate-700 font-semibold text-base leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Core Sections */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-20 max-w-4xl space-y-16">
            
            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">{p.section1Title}</h2>
              <p className="text-lg text-slate-650 leading-relaxed">{p.section1Content}</p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">{p.section2Title}</h2>
              <p className="text-lg text-slate-650 leading-relaxed">{p.section2Content}</p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">{p.section3Title}</h2>
              <p className="text-lg text-slate-650 leading-relaxed">{p.section3Content}</p>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">{p.section4Title}</h2>
              <p className="text-lg text-slate-650 leading-relaxed">{p.section4Content}</p>
            </div>

            {/* YMYL Educational Disclaimer */}
            <Card className="border-none shadow-sm bg-amber-50/50 rounded-2xl overflow-hidden">
              <CardContent className="p-6 flex gap-4">
                <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs font-bold text-amber-800 uppercase tracking-wider">Educational Disclaimer</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{p.disclaimer}</p>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Lead Magnet Block */}
        <LeadMagnet />

        {/* FAQs Accordion */}
        <section className="py-20 bg-white border-t border-slate-150">
          <div className="container mx-auto px-6 lg:px-20 max-w-4xl">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight text-center mb-12">Pillar FAQs</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {p.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border rounded-2xl px-6 bg-white border-slate-200 shadow-sm overflow-hidden">
                  <AccordionTrigger className="text-left font-bold text-slate-900 text-lg py-6">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Bar */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-6 lg:px-20 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h4 className="text-2xl font-black uppercase">Empower Your Child\'s Learning Architecture</h4>
              <p className="text-slate-400 text-sm mt-1">Book your free trial batch or register for fingerprint assessments today.</p>
            </div>
            <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-14 rounded-2xl px-8 shrink-0">
              <Link href={p.ctaLink}>{p.ctaText}</Link>
            </Button>
          </div>
        </section>

      </div>
    </>
  );
}
