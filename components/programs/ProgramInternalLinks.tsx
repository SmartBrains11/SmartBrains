'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Calendar, HelpCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getRelatedBlogPosts } from '@/data/blogPosts';

interface ProgramInternalLinksProps {
  programSlug: string;
  relatedPrograms: Array<{ slug: string; title: string; description: string }>;
}

export function ProgramInternalLinks({ programSlug, relatedPrograms }: ProgramInternalLinksProps) {
  const relatedBlogs = getRelatedBlogPosts(programSlug, 3);

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Related Programs Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
              <span className="w-2 h-6 bg-blue-600 rounded-full" /> Related Programs
            </h3>
            <div className="space-y-4">
              {relatedPrograms.map((program) => (
                <Link
                  key={program.slug}
                  href={`/programs/${program.slug}`}
                  className="block p-5 bg-white rounded-2xl border border-slate-100 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
                >
                  <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors text-base flex items-center justify-between">
                    {program.title}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h4>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">{program.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Parents Also Read (Blog Content) */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
              <span className="w-2 h-6 bg-pink-500 rounded-full" /> Parents Also Read
            </h3>
            <div className="space-y-4">
              {relatedBlogs.length > 0 ? (
                relatedBlogs.map((blog) => (
                  <Link
                    key={blog.slug}
                    href={`/blog/${blog.slug}`}
                    className="block p-5 bg-white rounded-2xl border border-slate-100 hover:border-pink-500 hover:shadow-lg transition-all duration-300 group"
                  >
                    <span className="text-[10px] font-bold text-pink-600 uppercase tracking-widest bg-pink-50 px-2 py-0.5 rounded-full">
                      {blog.category}
                    </span>
                    <h4 className="font-bold text-slate-800 group-hover:text-pink-600 transition-colors text-base mt-3 leading-snug">
                      {blog.title}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-slate-400 mt-3 font-semibold">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="p-5 bg-white rounded-2xl border border-slate-100 text-slate-500 text-sm">
                  No related articles found. Check back soon!
                </div>
              )}
            </div>
          </div>

          {/* Free Counselling & CTA */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
              <span className="w-2 h-6 bg-emerald-500 rounded-full" /> Start Learning
            </h3>
            <Card className="border-none shadow-xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              <CardContent className="p-8 space-y-6">
                <h4 className="text-xl font-bold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-300">
                  Book A Free Demo Session
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Get a personalized walkthrough with our certified child intelligence coaches. 100% free with no commitment.
                </p>
                <div className="space-y-3 pt-2">
                  <Button asChild className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold h-12 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50">
                    <Link href="/contact">
                      <Calendar className="w-4 h-4" />
                      Book Free Demo
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full border-slate-700 hover:bg-slate-800 text-slate-200 hover:text-white font-bold h-12 rounded-xl">
                    <Link href="/contact?type=counselling">
                      <HelpCircle className="w-4 h-4 mr-2" />
                      Free Counselling
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
