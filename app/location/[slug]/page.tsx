import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Phone, MessageSquare, CheckCircle, Calendar, Star, Info, Shield, HelpCircle } from 'lucide-react';
import { generateLocationList, getLocationBySlug } from '@/data/locations';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

interface LocationPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const list = generateLocationList();
  return list.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const loc = getLocationBySlug(params.slug);
  if (!loc) return {};

  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: {
      canonical: `https://www.smartbrainsindia.in/location/${loc.slug}`,
    },
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      url: `https://www.smartbrainsindia.in/location/${loc.slug}`,
      type: 'website',
      locale: 'en_IN',
    }
  };
}

export default function LocationLandingPage({ params }: LocationPageProps) {
  const loc = getLocationBySlug(params.slug);

  if (!loc) {
    notFound();
  }

  // Schema data
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://www.smartbrainsindia.in/location/${loc.slug}#localbusiness`,
    'name': loc.branchName,
    'description': `${loc.programName} classes provided by Smart Brains India in ${loc.cityName}.`,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': loc.branchAddress,
      'addressLocality': loc.cityName,
      'addressCountry': 'IN'
    },
    'telephone': loc.branchPhone,
    'priceRange': '$$',
    'url': `https://www.smartbrainsindia.in/location/${loc.slug}`
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': loc.faqs.map(faq => ({
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
        'name': 'Locations',
        'item': 'https://www.smartbrainsindia.in/locations'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': loc.title,
        'item': `https://www.smartbrainsindia.in/location/${loc.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
        {/* Breadcrumb wrapper */}
        <Breadcrumbs items={[{ label: 'Locations', href: '/locations' }, { label: loc.title }]} />

        {/* Localized Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-indigo-100/40 rounded-full blur-[100px] pointer-events-none" />

          <div className="container mx-auto px-6 lg:px-20 relative z-10 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-widest rounded-full">
                  <MapPin className="w-3.5 h-3.5" /> Localized Program
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight uppercase">
                  {loc.programName} <br />
                  <span className="text-indigo-600">in {loc.cityName}</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                  Looking for the best {loc.programName.toLowerCase()} in {loc.cityName}? Smart Brains India offers verified cognitive training programs, fingerprint diagnostics, and personalized guidance for students.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-6 rounded-2xl shadow-xl shadow-indigo-100">
                    <Link href="/contact">Book Free Demo</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-slate-200 text-slate-700 font-bold px-8 py-6 rounded-2xl hover:bg-slate-50">
                    <Link href={`tel:${loc.branchPhone}`}>Call regional Office</Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative">
                <h3 className="text-2xl font-black text-slate-900 uppercase mb-6 tracking-tight">Free Assessment</h3>
                <p className="text-sm text-slate-500 mb-6">
                  Schedule a free child intelligence assessment or request details regarding batch timings in {loc.cityName}.
                </p>
                <form action="https://formspree.io/f/xyyzoqzo" method="POST" className="space-y-4">
                  <input type="hidden" name="Location" value={loc.title} />
                  <div>
                    <input
                      required
                      type="text"
                      name="Name"
                      placeholder="Your Full Name"
                      className="w-full pl-4 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm font-medium"
                    />
                  </div>
                  <div>
                    <input
                      required
                      type="tel"
                      name="Phone"
                      placeholder="Phone Number"
                      className="w-full pl-4 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm font-medium"
                    />
                  </div>
                  <div>
                    <select
                      name="Program"
                      className="w-full pl-4 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm font-medium"
                    >
                      <option value={loc.programName}>{loc.programName}</option>
                      <option value="Free Counselling">Free Career Counselling</option>
                      <option value="General Inquire">General Inquiry</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-lg transition-all"
                  >
                    SUBMIT REQUEST
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white border-y border-slate-150">
          <div className="container mx-auto px-6 lg:px-20 max-w-4xl space-y-12">
            
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Overview & Introduction</h2>
              <div className="text-lg text-slate-600 leading-relaxed space-y-4">
                <p>{loc.introduction}</p>
                <p>{loc.localImportance}</p>
              </div>
            </div>

            {/* Quick benefits checkmarks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              {[
                "Certified professional child development instructors",
                "State-of-the-art cognitive brain laboratories",
                "Personalized learning models tailored for school curricula",
                "Comprehensive follow-ups and performance trackers"
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-slate-700 font-semibold text-sm">{item}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Local branch & maps section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-20 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-6">
                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Branch Office</h2>
                <Card className="border-none shadow-xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-[2rem] overflow-hidden">
                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Branch Name</p>
                      <h4 className="text-xl font-bold">{loc.branchName}</h4>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Address</p>
                      <p className="text-slate-200 text-sm leading-relaxed">{loc.branchAddress}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Branch Phone</p>
                      <p className="text-xl font-black text-indigo-300">{loc.branchPhone}</p>
                    </div>
                    <div className="flex gap-4 pt-4">
                      <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold h-12 rounded-xl flex-1">
                        <Link href={`https://wa.me/${loc.branchPhone.replace(/[^\d]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                          <MessageSquare className="w-4 h-4" /> WhatsApp
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="border-slate-700 hover:bg-slate-800 text-slate-200 font-bold h-12 rounded-xl flex-1">
                        <Link href={`tel:${loc.branchPhone}`}>Call Now</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="w-full h-96 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
                <iframe
                  title={`${loc.cityName} branch map`}
                  src={loc.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-20 max-w-4xl">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {loc.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border rounded-2xl px-6 bg-white border-slate-200 shadow-sm overflow-hidden">
                  <AccordionTrigger className="text-left font-bold text-slate-900 text-lg py-6">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Bottom CTA bar */}
        <section className="py-12 bg-indigo-900 text-white">
          <div className="container mx-auto px-6 lg:px-20 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h4 className="text-xl font-bold uppercase">Ready to empower your child's brain structure?</h4>
              <p className="text-indigo-200 text-sm mt-1">Book your slots today. Offline and Online interactive coaching available.</p>
            </div>
            <div className="flex gap-4 shrink-0">
              <Button asChild className="bg-white text-indigo-900 font-bold hover:bg-slate-100 h-12 rounded-xl">
                <Link href="/contact">Book Free Demo</Link>
              </Button>
              <Button asChild variant="outline" className="border-indigo-500 text-white font-bold hover:bg-indigo-800 h-12 rounded-xl">
                <Link href={`/programs/${loc.programSlug}`}>Explore Course</Link>
              </Button>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
