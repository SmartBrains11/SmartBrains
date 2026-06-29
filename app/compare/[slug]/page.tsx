import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { comparisons } from '@/data/comparisons';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Info, HelpCircle, ArrowRight } from 'lucide-react';

interface ComparisonPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(comparisons).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ComparisonPageProps): Promise<Metadata> {
  const comp = comparisons[params.slug];
  if (!comp) return {};

  return {
    title: comp.metaTitle,
    description: comp.metaDescription,
    alternates: {
      canonical: `https://www.smartbrainsindia.in/compare/${comp.slug}`,
    },
    openGraph: {
      title: comp.metaTitle,
      description: comp.metaDescription,
      url: `https://www.smartbrainsindia.in/compare/${comp.slug}`,
      type: 'website',
      locale: 'en_IN'
    }
  };
}

export default function ComparisonPage({ params }: ComparisonPageProps) {
  const comp = comparisons[params.slug];

  if (!comp) {
    notFound();
  }

  // Schema generation
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': comp.faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a
      }
    }))
  };

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
        'name': 'Compare',
        'item': 'https://www.smartbrainsindia.in/compare'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': comp.title,
        'item': `https://www.smartbrainsindia.in/compare/${comp.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-slate-50">
        <Breadcrumbs items={[{ label: 'Compare Programs', href: '/compare' }, { label: comp.title }]} />

        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/50 rounded-full blur-[100px] pointer-events-none" />

          <div className="container mx-auto px-6 lg:px-20 relative z-10 max-w-4xl text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
              <Info className="w-3.5 h-3.5" /> Parents Decision Guide
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none uppercase">
              {comp.title}
            </h1>
            <p className="text-xl text-slate-650 max-w-2xl mx-auto leading-relaxed">
              {comp.introduction}
            </p>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-16 bg-white border-y border-slate-150">
          <div className="container mx-auto px-6 lg:px-20 max-w-4xl">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight text-center mb-10">Direct Feature Comparison</h2>
            
            <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xl">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    {comp.comparisonTable.headers.map((header, i) => (
                      <th key={i} className="p-6 font-bold text-sm uppercase tracking-wider">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comp.comparisonTable.rows.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      {row.map((cell, j) => (
                        <td key={j} className={`p-6 text-sm ${j === 0 ? 'font-bold text-slate-800' : 'text-slate-600 leading-relaxed'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Who Should Choose Which Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-20 max-w-5xl">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight text-center mb-12">Which One is Right for You?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Option A Card */}
              <Card className="border-none shadow-xl rounded-3xl overflow-hidden hover:-translate-y-1 transition-transform bg-white">
                <div className="h-2 w-full bg-blue-600" />
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-black text-slate-900 uppercase">{comp.comparisonTable.headers[1]}</h3>
                  <p className="text-slate-600 leading-relaxed text-base">{comp.whoShouldChooseA}</p>
                  
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Key Advantages:</p>
                    {comp.benefitsA.map((b, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm font-semibold">{b}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 rounded-xl mt-6">
                    <Link href={comp.courseALink} className="flex items-center justify-center gap-2">
                      Explore Course <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Option B Card */}
              <Card className="border-none shadow-xl rounded-3xl overflow-hidden hover:-translate-y-1 transition-transform bg-white">
                <div className="h-2 w-full bg-orange-500" />
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-black text-slate-900 uppercase">{comp.comparisonTable.headers[2]}</h3>
                  <p className="text-slate-600 leading-relaxed text-base">{comp.whoShouldChooseB}</p>
                  
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Key Advantages:</p>
                    {comp.benefitsB.map((b, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm font-semibold">{b}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold h-12 rounded-xl mt-6">
                    <Link href={comp.courseBLink} className="flex items-center justify-center gap-2">
                      Explore Course <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-20 max-w-4xl">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight text-center mb-12">Comparison FAQs</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {comp.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border rounded-2xl px-6 bg-white border-slate-200 shadow-sm overflow-hidden">
                  <AccordionTrigger className="text-left font-bold text-slate-900 text-lg py-6">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-6 lg:px-20 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h4 className="text-2xl font-black uppercase">Still Unsure Which is Best?</h4>
              <p className="text-slate-400 text-sm mt-1">Book a free cognitive consultation session and let our experts analyze your child's learning type.</p>
            </div>
            <Button asChild className="bg-white text-slate-900 font-bold hover:bg-slate-100 h-14 rounded-2xl px-8 shrink-0">
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
          </div>
        </section>

      </div>
    </>
  );
}
