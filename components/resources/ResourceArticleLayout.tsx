'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Info, ChevronRight, User, Calendar } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

const ARTICLES_LIST = [
  {
    title: 'Top 10 Brain Development Activities for Kids to Boost Intelligence',
    href: '/brain-development-activities-for-kids',
    description: 'Explore the best brain development activities for kids to boost memory, logic, and creativity.',
    image: '/images/abacus.webp'
  },
  {
    title: 'Effective Brain Development Programs for Kids',
    href: '/brain-development-programs-for-kids',
    description: 'Learn about structured programs designed to maximize cognitive ability and hemispheric balance.',
    image: '/images/midbrain-activation.webp'
  },
  {
    title: 'Child Intelligence Development: The Complete Guide',
    href: '/child-intelligence-development-guide',
    description: 'A scientifically validated blueprint for understanding and boosting child intelligence.',
    image: '/images/DMIT.webp'
  },
  {
    title: 'How to Improve Concentration in Children Naturally',
    href: '/improve-concentration-in-children',
    description: 'Proven strategies and brain exercises to help distracted children focus on studies.',
    image: '/images/speed-reading.webp'
  },
  {
    title: 'Essential Learning Skills for Modern Students',
    href: '/learning-skills-for-students',
    description: 'Critical cognitive skills students need to absorb, process, and retain information.',
    image: '/images/photograhic-memory.webp'
  },
  {
    title: 'Boost Memory Power for Kids: Myths vs Reality',
    href: '/memory-power-for-kids',
    description: 'Practical tools and visualization exercises to dramatically improve memory retention.',
    image: '/images/handwriting.webp'
  }
];


export interface FAQ {
  q: string;
  a: string;
}

export interface ResourceArticleData {
  title: string;
  description: string;
  publishDate: string;
  author: string;
  readTime: string;
  heroImage: string;
  faqs: FAQ[];
  relatedPrograms: Array<{ title: string; href: string; description: string }>;
}

interface ResourceArticleLayoutProps {
  articleData: ResourceArticleData;
  children: React.ReactNode;
}

export function ResourceArticleLayout({ articleData, children }: ResourceArticleLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs items={[{ label: 'Resources', href: '/resources' }, { label: articleData.title }]} />

      {/* Article Header */}
      <header className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-20 max-w-5xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 animate-fade-in">
            {articleData.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8 animate-fade-in-delay">
            {articleData.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-10 animate-fade-in-delay-2">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2 text-blue-600" />
              <span className="font-medium text-gray-800">By {articleData.author}</span>
              <span className="ml-2 px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold">Expert</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{articleData.publishDate}</span>
            </div>
            <div className="flex items-center">
              <Info className="w-4 h-4 mr-2" />
              <span>{articleData.readTime} read</span>
            </div>
          </div>
          
          <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl relative mb-12 animate-fade-in-up">
            <img 
              src={articleData.heroImage} 
              alt={articleData.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Main Content & Sidebar */}
      <div className="container mx-auto px-6 lg:px-20 max-w-6xl pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Article Body */}
          <article className="lg:col-span-8 prose prose-lg md:prose-xl prose-blue max-w-none text-gray-700 leading-loose">
            {children}

            {/* In-Article CTA */}
            <div className="my-12 not-prose">
              <Card className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white border-none shadow-xl transform transition-transform hover:scale-[1.01]">
                <CardContent className="p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Want to Unlock Your Child's True Potential?</h3>
                    <p className="text-blue-100 mb-0">Our scientifically proven programs deliver measurable cognitive improvements in just 4 weeks.</p>
                  </div>
                  <Button asChild variant="secondary" size="lg" className="whitespace-nowrap font-bold shadow-lg">
                    <Link href="/contact">Book Free Consultation</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* FAQs */}
            {articleData.faqs.length > 0 && (
              <div className="mt-16 not-prose">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Frequently Asked Questions</h3>
                <Accordion type="single" collapsible className="space-y-4">
                  {articleData.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-4 bg-gray-50/50 hover:bg-gray-50 transition-colors shadow-sm">
                      <AccordionTrigger className="text-left font-semibold text-gray-800 text-lg py-4 hover:no-underline">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed pb-4 text-base">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Author Card (EEAT) */}
            <Card className="shadow-lg border-t-4 border-t-blue-600 bg-gray-50/50">
              <CardContent className="p-6">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">About the Author</h4>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-2xl">
                    {articleData.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{articleData.author}</p>
                    <p className="text-blue-600 text-sm font-medium">Child Development Expert</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Certified expert in cognitive development, DMIT assessment, and specialized learning strategies at Smart Brains India. Dedicated to helping children unlock their ultimate potential.
                </p>
              </CardContent>
            </Card>

            {/* Related Programs */}
            <Card className="shadow-lg bg-white sticky top-24">
              <CardContent className="p-6">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">Recommended Programs</h4>
                <div className="space-y-4">
                  {articleData.relatedPrograms.map((program, i) => (
                    <Link key={i} href={program.href} className="group block p-4 rounded-xl border hover:border-blue-500 hover:shadow-md transition-all bg-gray-50 hover:bg-white">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{program.title}</h5>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                      </div>
                      <p className="text-sm text-gray-600">{program.description}</p>
                    </Link>
                  ))}
                  
                  <div className="pt-4">
                    <Button asChild className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                      <Link href="/programs">View All Programs</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

        </div>
      </div>

      {/* Parents Also Read */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="container mx-auto px-6 lg:px-20 max-w-6xl">
          <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8">Parents Also Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTICLES_LIST.filter(art => art.title !== articleData.title).slice(0, 3).map((art, idx) => (
              <Link key={idx} href={art.href} className="group block bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <img src={art.image} alt={art.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-6">
                  <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors text-base leading-snug line-clamp-2">{art.title}</h4>
                  <p className="text-sm text-slate-500 mt-2 line-clamp-2">{art.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
