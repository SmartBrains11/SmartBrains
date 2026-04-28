'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Slide = {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  img: string;
  cta: { text: string; href: string };
  cta2?: { text: string; href: string };
  objectPosition?: string;
};

const slides: Slide[] = [
  {
    id: 1,
    badge: 'Hyderabad & Vizianagaram · Online & Offline',
    title: 'Brain Training Academy for Kids Aged 5–16',
    subtitle: 'SmartBrains India builds memory power, sharp concentration and natural intuition in children — through structured, expert-led programs your child will actually enjoy.',
    img: '/images/hero1.1.webp',
    cta: { text: 'Book a Free Demo', href: '/contact' },
    cta2: { text: 'Call Support', href: 'tel:7396447470' },
    objectPosition: '50% 36%',
  },
  {
    id: 2,
    badge: 'Abacus · Vedic Maths · Midbrain Activation',
    title: 'Programs That Build Sharper, Smarter Minds',
    subtitle: 'Every course strengthens memory retention, improves concentration and awakens intuitive thinking in children aged 5 to 16.',
    img: '/images/banner-3.webp',
    cta: { text: 'Explore Programs', href: '/programs' },
    cta2: { text: 'Call Support', href: 'tel:7396447470' },
    objectPosition: '50% 38%',
  },
  {
    id: 3,
    badge: "The Skills Schools Don't Teach",
    title: 'Better Memory. Deeper Focus. Stronger Intuition.',
    subtitle: 'SmartBrains gives kids the mental tools to absorb faster, recall better and build natural intuition before the pressure peaks.',
    img: '/images/hero-4.webp',
    cta: { text: 'See How It Works', href: '/programs' },
    cta2: { text: 'Call Support', href: 'tel:7396447470' },
    objectPosition: '50% 34%',
  },
  {
    id: 4,
    badge: 'Flexible · Online & Offline · Centres',
    title: 'Learn at Our Centre or From Home',
    subtitle: 'Join live sessions at our centres or attend online from home. Same certified trainers, same proven methods and weekly progress reports.',
    img: '/images/hero2.webp',
    cta: { text: 'Choose Your Mode', href: '/programs' },
    cta2: { text: 'Call Support', href: 'tel:7396447470' },
    objectPosition: '50% 36%',
  },
  {
    id: 5,
    badge: '1,000+ Students · Certified Trainers',
    title: 'Certified Trainers. Real Results. Proud Parents.',
    subtitle: 'Our certified coaches use proven methods to build memory power, concentration and confidence in kids — with progress parents can see every week.',
    img: '/images/hero-5.webp',
    cta: { text: 'Book a Free Demo', href: '/contact' },
    cta2: { text: 'Call Support', href: 'tel:7396447470' },
    objectPosition: '50% 36%',
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isPaused) {
      autoplayRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
      }, 5000);
    } else if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isPaused]);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <section 
      className="relative w-full h-[500px] md:h-[550px] lg:h-[620px] overflow-hidden bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* BACKGROUND IMAGE SLIDER */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[index].img}
              alt={slides[index].title}
              fill
              priority
              className="object-cover"
              style={{ objectPosition: slides[index].objectPosition || '50% 36%' }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* REFINED GRADIENT OVERLAY (Subtle white opacity) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/90 via-white/60 to-transparent md:w-[75%] lg:w-[65%]" />
      
      {/* CONTENT AREA */}
      <div className="relative z-20 h-full container mx-auto px-6 lg:px-16 flex items-center">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-5 md:space-y-6"
            >
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100">
                <span className="flex h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[10px] md:text-xs font-bold tracking-wider text-blue-700 uppercase">
                  {slides[index].badge}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                {slides[index].title}
              </h1>

              <p className="text-base md:text-lg text-slate-600 max-w-lg leading-relaxed">
                {slides[index].subtitle}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild size="lg" className="rounded-full px-6 py-6 text-base font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95">
                  <Link href={slides[index].cta.href}>
                    <span className="flex items-center gap-2">
                      {slides[index].cta.text}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-6 py-6 text-base font-bold border-2 border-slate-200 bg-white/40 backdrop-blur-sm hover:bg-white transition-all active:scale-95">
                  <Link href={slides[index].cta2?.href || '#'}>
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {slides[index].cta2?.text}
                    </span>
                  </Link>
                </Button>
              </div>

              {/* Trust markers */}
              <div className="flex items-center gap-6 md:gap-10 pt-6 mt-4 border-t border-slate-200">
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-bold text-slate-800">1,000+</span>
                  <span className="text-[10px] md:text-xs font-medium text-slate-500 uppercase tracking-wide mt-0.5">Students</span>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-bold text-blue-600">Day 1</span>
                  <span className="text-[10px] md:text-xs font-medium text-slate-500 uppercase tracking-wide mt-0.5">Results</span>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-bold text-slate-800">15+</span>
                  <span className="text-[10px] md:text-xs font-medium text-slate-500 uppercase tracking-wide mt-0.5">Trainers</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* SLIDER CONTROLS */}
      <div className="absolute bottom-8 right-6 lg:right-16 z-30 flex items-center gap-4">
        <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-blue-600' : 'bg-slate-300'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={prev} className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all active:scale-90">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all active:scale-90">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}