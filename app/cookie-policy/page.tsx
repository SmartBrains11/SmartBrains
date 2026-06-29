import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Shield, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie Policy & Tracking Consent | Smart Brains India',
  description: 'Read the Smart Brains India Cookie Policy. Learn about our integration with GA4, Meta Pixel, and Microsoft Clarity tracking systems.',
  alternates: {
    canonical: 'https://www.smartbrainsindia.in/cookie-policy',
  }
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs items={[{ label: 'Legal Policies', href: '/privacy-policy' }, { label: 'Cookie Policy' }]} />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-20 max-w-4xl space-y-8">
          <div className="flex items-center gap-3 text-emerald-600">
            <Shield className="w-10 h-10" />
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900">Cookie & Tracking Policy</h1>
          </div>

          <div className="prose prose-slate max-w-none text-slate-650 leading-relaxed space-y-6 text-base">
            <p className="font-bold text-slate-900">Last Updated: June 29, 2026</p>

            <p>
              This Cookie Policy details how Smart Brains India uses cookies, pixels, and tracking tags on our website.
            </p>

            <h3 className="text-xl font-bold text-slate-900 uppercase pt-4">What Are Cookies?</h3>
            <p>
              Cookies are small text files stored in your browser when you visit websites. They help remember inputs, maintain session security, and analyze page usage metrics.
            </p>

            <h3 className="text-xl font-bold text-slate-900 uppercase pt-4">Types of Cookies We Use</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Required to load basic security features and dynamic routing parameters.</li>
              <li><strong>Analytical Cookies (GA4 & Clarity):</strong> Aggregate anonymous traffic patterns (e.g. scroll milestones and duration on pages) to help us improve layout speeds.</li>
              <li><strong>Marketing Pixels (Meta Pixel):</strong> Retarget relevant course information to families on Facebook and Instagram based on interests.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 uppercase pt-4">How to Opt-Out</h3>
            <p>
              You can configure your browser preferences to reject cookies or warn you before accepting them. Rejecting cookies will not affect your access to reading resources, but some form submit features may load with slower configurations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
