import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { trainers } from '@/data/trainers';
import { getPersonSchema } from '@/lib/schemas';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, BookOpen, Star, Mail, Phone, Heart, CheckCircle } from 'lucide-react';

interface TrainerPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(trainers).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: TrainerPageProps): Promise<Metadata> {
  const t = trainers[params.slug];
  if (!t) return {};

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: `https://www.smartbrainsindia.in/trainer/${t.slug}`,
    },
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url: `https://www.smartbrainsindia.in/trainer/${t.slug}`,
      type: 'profile',
      locale: 'en_IN'
    }
  };
}

export default function TrainerPage({ params }: TrainerPageProps) {
  const t = trainers[params.slug];

  if (!t) {
    notFound();
  }

  // Generate Person Schema
  const personSchema = getPersonSchema(
    t.name,
    t.role,
    t.bio,
    `https://www.smartbrainsindia.in${t.image}`,
    `https://www.smartbrainsindia.in/trainer/${t.slug}`
  );

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
        'name': 'Trainers',
        'item': 'https://www.smartbrainsindia.in/trainers'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': t.name,
        'item': `https://www.smartbrainsindia.in/trainer/${t.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-slate-50">
        <Breadcrumbs items={[{ label: 'Our Experts', href: '/about' }, { label: t.name }]} />

        {/* Profile Details Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-20 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              
              {/* Photo & Basic Details Column */}
              <div className="md:col-span-4 space-y-6">
                <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100 flex items-center justify-center text-slate-400">
                  {/* Fallback visual indicator since no direct assets yet */}
                  <div className="text-center p-6 space-y-3">
                    <Heart className="w-12 h-12 text-indigo-500 mx-auto animate-pulse" />
                    <p className="font-bold text-slate-800 text-lg">{t.name}</p>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Mail className="w-4 h-4 text-indigo-600" />
                    <span>info@smartbrainsindia.in</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Phone className="w-4 h-4 text-indigo-600" />
                    <span>+91 7396447470</span>
                  </div>
                </div>

                <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold h-12 rounded-xl">
                  <Link href="/contact">Book Consultation</Link>
                </Button>
              </div>

              {/* Bio & Details Column */}
              <div className="md:col-span-8 space-y-8">
                <div>
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Pediatric Specialist</span>
                  <h1 className="text-4xl font-black text-slate-900 tracking-tight mt-1">{t.name}</h1>
                  <p className="text-sm font-bold text-slate-500 mt-0.5">{t.role}</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 border-b pb-2">Biography</h3>
                  <p className="text-slate-650 leading-relaxed text-base md:text-lg">{t.bio}</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 border-b pb-2">Educational Philosophy</h3>
                  <blockquote className="border-l-4 border-indigo-600 pl-4 italic text-slate-600 leading-relaxed">
                    "{t.philosophy}"
                  </blockquote>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2"><Award className="w-5 h-5 text-indigo-600" /> Key Expertise</h4>
                    <ul className="space-y-2 text-sm text-slate-600 font-semibold">
                      {t.expertise.map((exp, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Star className="w-3.5 h-3.5 fill-indigo-600 text-indigo-600" /> {exp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2"><BookOpen className="w-5 h-5 text-indigo-600" /> Supervised Curriculums</h4>
                    <ul className="space-y-2 text-sm text-slate-600 font-semibold">
                      {t.supervisedPrograms.map((prog, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> {prog}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}
