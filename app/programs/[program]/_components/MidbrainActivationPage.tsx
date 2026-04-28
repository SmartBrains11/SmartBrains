'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Brain, Target, Shield, Clock, MapPin, Monitor, Star, ArrowRight, Play, Users, Calendar, ArrowLeft, Heart, BookOpen, Quote, Phone, HelpCircle, Eye, Award, Mail, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const STAGGER: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

/* ─── Testimonials Carousel ─── */
const TESTIMONIALS = [
  {
    name: 'Anitha Reddy',
    role: 'Parent of twins, age 9 & 11',
    location: 'Hyderabad',
    content:
      'Both my children completed the Midbrain Activation workshop and the results are amazing. Their intuition, creativity and problem-solving skills have improved significantly. My daughter can now identify colours with her eyes closed — I wouldn\'t have believed it if I hadn\'t seen it myself.',
    accent: 'from-blue-500 to-indigo-500',
    accentLight: 'bg-blue-50 text-blue-600',
  },
  {
    name: 'Ramesh Kumar',
    role: 'Parent of son, age 12',
    location: 'Vizianagaram',
    content:
      'My son was struggling with focus and used to get distracted very easily during studies. After the 2-day workshop and the follow-up sessions, his concentration has improved so much that his class teacher personally called me to ask what changed. Highly recommend Smart Brains!',
    accent: 'from-orange-500 to-amber-500',
    accentLight: 'bg-orange-50 text-orange-600',
  },
  {
    name: 'Priya Sharma',
    role: 'Parent of daughter, age 8',
    location: 'Hyderabad',
    content:
      'I was skeptical at first — honestly I thought it sounded too good to be true. But seeing my daughter read with a blindfold on at the closing session left me speechless. More than the ability itself, her confidence has shot up. She\'s a completely different child now.',
    accent: 'from-purple-500 to-fuchsia-500',
    accentLight: 'bg-purple-50 text-purple-600',
  },
  {
    name: 'Meena Varma',
    role: 'Parent of son, age 10',
    location: 'Online batch',
    content:
      'We enrolled for the online batch since we couldn\'t travel. The trainers were extremely professional and my son was fully engaged throughout. The follow-up sessions kept the progress going. His memory for his lessons has visibly improved and he\'s now excited about studying.',
    accent: 'from-emerald-500 to-teal-500',
    accentLight: 'bg-emerald-50 text-emerald-600',
  },
  {
    name: 'Suresh Babu',
    role: 'Parent of daughter, age 7',
    location: 'Vizianagaram',
    content:
      'My daughter was extremely shy and would never participate in class. After the Midbrain Activation program, she started raising her hand, answering questions confidently, and even won a storytelling competition at school. The transformation has been unbelievable — thank you Smart Brains!',
    accent: 'from-rose-500 to-pink-500',
    accentLight: 'bg-rose-50 text-rose-600',
  },
  {
    name: 'Kavitha Rao',
    role: 'Parent of son, age 14',
    location: 'Hyderabad',
    content:
      'As a parent of a teenager, I was worried he wouldn\'t take it seriously. But the trainers kept him fully engaged and by the end of Day 2 he was reading text through a blindfold. His study habits have improved dramatically and he now memorizes entire chapters in half the time he used to take.',
    accent: 'from-cyan-500 to-sky-500',
    accentLight: 'bg-cyan-50 text-cyan-600',
  },
];

function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(0);
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }
    const progress = el.scrollLeft / maxScroll;
    setScrollProgress(progress);
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < maxScroll - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  /* Auto-scroll: advances one card every 4s, loops back to start */
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 10) {
        // Loop back to start
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const cardWidth = el.querySelector<HTMLElement>(':scope > div')?.offsetWidth ?? 400;
        el.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>(':scope > div')?.offsetWidth ?? 400;
    el.scrollBy({ left: direction === 'left' ? -cardWidth - 24 : cardWidth + 24, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[30%] h-[50%] bg-blue-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[25%] h-[40%] bg-orange-50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Header with inline navigation */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
              Success Stories
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">
              VOICES OF OUR PARENTS
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              Real feedback from families who have seen incredible growth in their children&apos;s intuition and focus.
            </p>
          </div>

          {/* Navigation arrows — hidden on mobile where swipe works */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll testimonials left"
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 text-slate-700" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll testimonials right"
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
            >
              <ChevronRight className="w-5 h-5 text-slate-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll track — full-bleed */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 px-6 lg:px-20 no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {TESTIMONIALS.map((test, idx) => (
          <div
            key={idx}
            className="snap-start shrink-0 w-[85vw] sm:w-[420px] lg:w-[460px] bg-white rounded-2xl border border-slate-100 shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_60px_rgba(0,0,0,0.1)] transition-shadow duration-500 flex flex-col relative overflow-hidden group"
          >
            {/* Accent gradient strip */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${test.accent}`} />

            <div className="p-8 sm:p-9 flex flex-col flex-1">
              {/* Stars + Quote icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-10 h-10 text-slate-100 group-hover:text-blue-50 transition-colors" />
              </div>

              {/* Testimonial content */}
              <p className="text-slate-600 leading-relaxed text-[15px] sm:text-base flex-1 mb-8">
                &quot;{test.content}&quot;
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold ${test.accentLight}`}>
                  {test.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-[15px]">{test.name}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{test.role} · {test.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Spacer for right padding */}
        <div className="shrink-0 w-1" aria-hidden="true" />
      </div>

      {/* Progress bar */}
      <div className="container mx-auto px-6 lg:px-20 mt-8">
        <div className="h-1 bg-slate-100 rounded-full max-w-xs mx-auto overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.max(10, scrollProgress * 100)}%` }}
          />
        </div>
      </div>
    </section>
  );
}

export default function MidbrainActivationPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/programs" className="hover:text-blue-600">Programs</Link>
            <span>/</span>
            <span className="text-gray-900">Midbrain Activation</span>
          </div>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="show"
              variants={STAGGER}
              className="text-left"
            >
              <motion.div variants={FADE_UP}>
                <Link href="/programs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Programs
                </Link>
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Midbrain Activation
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-xl text-blue-600 font-medium mb-6">
                Activate Your Child&apos;s Third Eye — Enhance Intuition, Memory & Genius Learning
              </motion.p>

              <motion.p variants={FADE_UP} className="text-lg text-gray-600 mb-8 leading-relaxed">
                Midbrain Activation — also known as Gandhari Vidya and the Power of Intuition Program — is a scientifically designed 2-day workshop that stimulates the midbrain (mesencephalon), the bridge between your child&apos;s left and right brain. When activated, children develop the ability to read, sense, and perceive with eyes closed, while dramatically improving concentration, memory, creativity and academic confidence.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg">
                  <Link href="/contact">Enquire For Next Batch</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="tel:+917396447470">Call to Know More</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/images/midbrain-activation.webp"
                alt="Midbrain Activation Training"
                className="w-full h-96 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-white p-5 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] flex items-center gap-4 z-20 border border-slate-50">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-green-600 drop-shadow-sm" />
                </div>
                <div>
                  <div className="text-2xl font-black text-gray-900 leading-none mb-1">100%</div>
                  <div className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.15em] leading-tight text-left">
                    SUPERVISED &<br />SAFE
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Measurable Impact / Proven Results */}
      <section className="relative z-30 -mt-8 sm:-mt-12 px-6 lg:px-20 mb-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                value: '85%',
                label: 'Improved Concentration',
                desc: 'Measurably longer attention spans achieved within just 30 days.',
                icon: Target,
                colorTheme: 'blue'
              },
              {
                value: '90%',
                label: 'Enhanced Creativity',
                desc: 'Reported boost in imagination and out-of-the-box thinking.',
                icon: Brain,
                colorTheme: 'orange'
              },
              {
                value: 'Improved',
                label: 'Academic Scores',
                desc: 'Consistent growth recorded by parents across all batches.',
                icon: BookOpen,
                colorTheme: 'purple'
              },
              {
                value: '100%',
                label: 'Supervised & Safe',
                desc: 'Complete peace of mind conducted under expert watch.',
                icon: Shield,
                colorTheme: 'green'
              }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              const styles = {
                blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' },
                orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100' },
                purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100' },
                green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-100' },
              }[stat.colorTheme as 'blue' | 'orange' | 'purple' | 'green'];

              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-2xl shadow-[0_15px_40px_rgba(8,112,184,0.06)] flex flex-col transform hover:-translate-y-1.5 transition-all duration-300 border border-slate-100 group relative overflow-hidden"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${styles.bg} ${styles.text}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className={`text-3xl font-black font-sans tracking-tight ${styles.text}`}>
                      {stat.value}
                    </div>
                  </div>
                  <h4 className="text-[13px] font-bold uppercase tracking-widest text-[#0f172a] mb-2 leading-tight">
                    {stat.label}
                  </h4>
                  <p className="text-gray-500 text-[13px] font-medium leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* 3. Discover The Science / What is Midbrain Activation? */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Content Side */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
                  Discover The Science
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase mb-6">
                  What is Midbrain Activation?
                </h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    The midbrain (mesencephalon) is a small but powerful region of the brain that acts as the relay centre for visual, auditory and motor information. As children grow up, the brain naturally becomes more lateralized — relying more on one side — resulting in untapped potential.
                  </p>
                  <p>
                    Midbrain Activation reverses this trend by using specialized music, brain gym exercises, meditation and sensory activities to bring the brain into an optimal alpha-theta wave state, where both hemispheres work together at full capacity.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50/50 border border-orange-100 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 opacity-5">
                  <Target className="w-64 h-64 text-orange-900" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3 relative z-10">
                  <span className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                    <Brain className="w-5 h-5" />
                  </span>
                  The Gandhari Vidya Connection
                </h3>
                <p className="text-slate-700 leading-relaxed relative z-10">
                  In the Mahabharata, Queen Gandhari voluntarily blindfolded herself for life and developed extraordinary perception beyond the physical eye — what we call the &quot;third eye&quot; or sixth sense. This ancient wisdom is the cultural soul of our program. Modern brain science calls it intuition; our ancestors called it Gandhari Vidya. Both arrive at the same truth: every child already has this ability inside them.
                </p>
              </div>

              {/* Safety Note Card */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex items-start gap-4 shadow-sm relative overflow-hidden">
                <div className="bg-white p-3 rounded-xl shadow-sm text-blue-600 shrink-0 relative z-10">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="relative z-10">
                  <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-sm">Important Safety Note</h4>
                  <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                    This is a 100% safe, science-backed program. There are no religious rituals, magic, or supernatural claims. All activities are conducted by trained facilitators in a controlled, child-friendly environment. Blindfold activities are supervised at all times.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-72 h-[400px] md:w-96 md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white group">
                <Image
                  src="/images/gandari.jpg"
                  alt="Gandhari Devi with Blindfold"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback if the user hasn't added the image yet
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1596484552993-94c399cebcab?q=80&w=600&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-black text-lg shadow-sm" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Queen Gandhari</p>
                  <p className="text-orange-100 text-sm font-medium" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>The Cultural Soul of our Program</p>
                </div>
              </div>

              {/* Decorative floating dots behind image */}
              <div className="absolute top-10 -right-10 w-24 h-24 bg-[radial-gradient(circle,rgba(251,146,60,0.2)_2px,transparent_2px)] bg-[length:12px_12px] -z-10" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[radial-gradient(circle,rgba(59,130,246,0.2)_2px,transparent_2px)] bg-[length:12px_12px] -z-10" />
            </div>

          </div>
        </div>
      </section>

      {/* 4. Main Program Layout (Content + Sidebar) */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 lg:items-start">

            {/* LEFT COLUMN: Main Content */}
            <div className="lg:col-span-2 space-y-8 flex flex-col">

              {/* Key Benefits Card */}
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-8 tracking-tight">Key Benefits</h3>
                <ul className="space-y-4">
                  {[
                    "Laser-sharp focus and extended concentration spans",
                    "Significantly improved academic performance and memory retention",
                    "Enhanced emotional balance and self-confidence",
                    "Creative problem-solving and out-of-the-box thinking",
                    "Heightened intuition and sensory awareness",
                    "Boosted creativity, storytelling and imagination"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-[1.125rem] h-[1.125rem] text-[#2ebd59] mr-4 flex-shrink-0 mt-[3px]" strokeWidth={2.5} />
                      <span className="text-slate-700 text-lg sm:text-[1.125rem] font-medium leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Program Structure Card */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.02)] overflow-hidden">
                <div className="px-8 pt-8 pb-5">
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Program Structure</h3>
                  <p className="text-slate-500 mt-1 text-sm">2-day intensive · 10:00 AM – 5:00 PM each day</p>
                </div>

                {/* Day 1 */}
                <div>
                  <div className="flex items-center gap-3 px-8 pb-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-50">
                      <Calendar className="w-4 h-4 text-blue-600" />
                    </span>
                    <h4 className="font-bold text-blue-600 text-base">Day 1 — Awakening &amp; Foundation</h4>
                  </div>
                  <div>
                    {[
                      { t: '10:00 – 10:20 AM', title: 'Opening Prayer & Intention Setting' },
                      { t: '10:20 – 11:15 AM', title: 'Brain Gym (Brain Yoga)' },
                      { t: '11:15 – 11:30 AM', title: 'Break 1' },
                      { t: '11:30 AM – 12:30 PM', title: 'Brain Exercises, Games & Light Energy' },
                      { t: '12:30 – 1:15 PM', title: 'Lunch Break' },
                      { t: '1:15 – 2:15 PM', title: 'Tapping Exercises & Body Activation' },
                      { t: '2:15 – 3:00 PM', title: 'Mind Relaxation & Breathing Exercises' },
                      { t: '3:00 – 3:15 PM', title: 'Break 2' },
                      { t: '3:15 – 4:15 PM', title: 'Motivation, Meditation & Fun Dances' },
                      { t: '4:15 – 5:00 PM', title: 'First Intuition Process — Introduction' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-0 px-8 py-2.5 border-b border-slate-50 last:border-b-0">
                        <span className="text-xs font-bold text-blue-500 tracking-wide whitespace-nowrap w-40 shrink-0">{item.t}</span>
                        <span className="text-slate-800 text-[15px] font-medium leading-snug">{item.title}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mx-8 mt-4 mb-5 bg-blue-50 rounded-xl px-4 py-3 flex items-center gap-2.5">
                    <Star className="w-4 h-4 fill-current text-yellow-400 stroke-yellow-500 shrink-0" />
                    <p className="text-slate-700 text-xs font-medium"><span className="font-bold text-slate-900">Day 1 Guarantee:</span> Every child experiences a first visible intuition result by end of Day 1.</p>
                  </div>
                </div>

                <div className="border-t border-slate-100" />

                {/* Day 2 */}
                <div>
                  <div className="flex items-center gap-3 px-8 py-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-50">
                      <Target className="w-4 h-4 text-orange-600" />
                    </span>
                    <h4 className="font-bold text-orange-600 text-base">Day 2 — Activation &amp; Mastery</h4>
                  </div>
                  <div>
                    {[
                      { t: '10:00 – 10:20 AM', title: 'Opening Prayer & Motivation Warm Up' },
                      { t: '10:20 – 11:00 AM', title: 'Advanced Brain Gym & Brain Yoga' },
                      { t: '11:00 – 11:15 AM', title: 'Break 1' },
                      { t: '11:15 AM – 1:00 PM', title: 'Advanced Intuition Process & Object Sensing' },
                      { t: '1:00 – 1:45 PM', title: 'Lunch Break' },
                      { t: '1:45 – 2:45 PM', title: 'Tapping, Light Energy & Advanced Breathing' },
                      { t: '2:45 – 3:15 PM', title: 'Break 2 & Gym / Dance Session' },
                      { t: '3:15 – 4:30 PM', title: 'Full Midbrain Activation — Blindfold Mastery' },
                      { t: '4:30 – 5:00 PM', title: 'Certificate Ceremony & Parent Counselling' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-0 px-8 py-2.5 border-b border-slate-50 last:border-b-0">
                        <span className="text-xs font-bold text-orange-500 tracking-wide whitespace-nowrap w-40 shrink-0">{item.t}</span>
                        <span className="text-slate-800 text-[15px] font-medium leading-snug">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-100" />

                {/* Follow-Ups */}
                <div className="px-8 py-5 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 text-sm">4 Follow-Up Sessions</span>
                    <span className="ml-2 text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Included</span>
                    <p className="text-slate-400 text-xs mt-0.5">Once every 2 weeks · 2–3 hrs · Home practice 15–20 min/day</p>
                  </div>
                </div>
              </div>


              {/* Expected Results */}
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_4px_30px_rgba(0,0,0,0.04)] flex-1">
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-8 tracking-tight">Expected Results</h3>
                <ul className="space-y-4">
                  {[
                    "Immediate visible improvement in sensory activities by end of Day 1",
                    "Child can accurately read texts and identify objects with eyes closed",
                    "Measurably longer attention spans confirmed by parents within 30 days",
                    "Sustained growth in academic performance via regular practice"
                  ].map((result, i) => (
                    <li key={i} className="flex items-start">
                      <Star className="w-[1.125rem] h-[1.125rem] fill-[#f59e0b] text-[#f59e0b] mr-4 flex-shrink-0 mt-[3px]" />
                      <span className="text-slate-700 text-lg sm:text-[1.125rem] font-medium leading-relaxed">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* RIGHT COLUMN: Sticky Sidebar */}
            <div className="space-y-6 lg:sticky lg:top-8 flex flex-col h-full">

              {/* Program Details Card */}
              <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.02)]">
                <h3 className="text-[1.35rem] font-bold text-gray-900 mb-6 tracking-tight">Program Details</h3>
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-50">
                    <span className="text-slate-500 font-medium">Target Age:</span>
                    <span className="font-bold text-gray-900 px-3 py-1 bg-slate-100/80 rounded-full text-xs">5 – 17 years</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-50">
                    <span className="text-slate-500 font-medium">Duration:</span>
                    <span className="font-bold text-gray-900 text-right">2 Days<br /><span className="text-xs text-slate-500 font-medium block mt-0.5">10:00 AM – 5:00 PM</span></span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-50">
                    <span className="text-slate-500 font-medium">Format:</span>
                    <span className="font-bold text-gray-900">Offline &amp; Online</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-50">
                    <span className="text-slate-500 font-medium">Batch Size:</span>
                    <span className="font-bold text-gray-900">Max 15 Students</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-50">
                    <span className="text-slate-500 font-medium">Follow-ups:</span>
                    <span className="font-bold text-blue-600">4 Sessions</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Investment:</span>
                    <span className="font-black text-[#1e293b] text-right">₹10,000 / child<br /><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mt-1">Free Consultation Available</span></span>
                  </div>
                </div>
              </div>

              {/* Get Started Today */}
              <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.02)]">
                <h3 className="text-[1.35rem] font-bold text-gray-900 mb-2 tracking-tight">Get Started Today</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">Ready to unlock your child&apos;s potential? Contact us for a free consultation.</p>
                <div className="space-y-3">
                  <Link href="/contact" className="w-full flex items-center justify-center gap-2.5 bg-[#18181b] hover:bg-black text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all">
                    <Calendar className="w-4 h-4" /> Book Free Demo
                  </Link>
                  <Link href="tel:+917396447470" className="w-full flex items-center justify-center gap-2.5 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-gray-900 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-sm">
                    <Phone className="w-4 h-4" /> Call Now
                  </Link>
                  <Link href="mailto:info@smartbrainsindia.com" className="w-full flex items-center justify-center gap-2.5 bg-white border border-transparent hover:bg-slate-50 text-slate-600 py-3 rounded-xl text-sm font-medium transition-all">
                    <Mail className="w-4 h-4" /> Email Us
                  </Link>
                </div>
              </div>

              {/* Related Programs */}
              <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.02)]">
                <h3 className="text-[1.35rem] font-bold text-gray-900 mb-6 tracking-tight">Related Programs</h3>
                <div className="space-y-2">
                  <Link href="/programs/photographic-memory" className="block p-3 -mx-3 rounded-xl hover:bg-slate-50 transition-colors group">
                    <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Photographic Memory</div>
                    <div className="text-sm text-slate-500 mt-0.5">Perfect memory recall &amp; faster learning</div>
                  </Link>
                  <Link href="/programs/vedic-math" className="block p-3 -mx-3 rounded-xl hover:bg-slate-50 transition-colors group">
                    <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Vedic Math</div>
                    <div className="text-sm text-slate-500 mt-0.5">Blazing fast mental calculations</div>
                  </Link>
                  <Link href="/programs/concentration" className="block p-3 -mx-3 rounded-xl hover:bg-slate-50 transition-colors group">
                    <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Concentration Program</div>
                    <div className="text-sm text-slate-500 mt-0.5">Deep focus &amp; attention training</div>
                  </Link>
                  <Link href="/programs/abacus" className="block p-3 -mx-3 rounded-xl hover:bg-slate-50 transition-colors group">
                    <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Abacus</div>
                    <div className="text-sm text-slate-500 mt-0.5">Mental arithmetic mastery</div>
                  </Link>
                </div>
              </div>

              {/* Instagram Video Embed */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col flex-1">
                <div className="flex items-center justify-between p-7 pb-4">
                  <h3 className="text-[1.35rem] font-bold text-gray-900 tracking-tight">Watch in Action</h3>
                  <Link 
                    href="https://www.instagram.com/smartbrainsindia.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-tr from-pink-500 to-orange-500 p-2 rounded-lg flex-shrink-0 hover:scale-110 transition-transform shadow-md"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </Link>
                </div>
                <div className="relative w-full overflow-hidden flex-1 bg-white border-t border-slate-50 min-h-[550px]">
                  <iframe
                    src="https://www.instagram.com/p/DWVMZ7IE-sx/embed/"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    allow="encrypted-media"
                    sandbox="allow-scripts allow-same-origin allow-presentation"
                    scrolling="no"
                    title="Instagram Live Demo"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. Testimonials — Horizontal Scroll Carousel */}
      <TestimonialsCarousel />

      {/* 8. FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-20 max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
              <HelpCircle className="w-4 h-4" />
              Got Questions?
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to know about the workshop and enrollment process.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: 'What exactly is Midbrain Activation / Gandhari Vidya?', a: 'It is a scientifically designed 2-day workshop that uses brain gym exercises, sound-based stimulation, meditation and sensory activities to activate the midbrain — the region of the brain that connects the left and right hemispheres. When the brain enters an optimal alpha-theta wave state, children develop heightened intuition, memory, concentration and sensory perception. It is also known as Gandhari Vidya and the Power of Intuition Program.' },
              { q: 'Is this safe? Are there any religious or supernatural elements?', a: 'Completely safe. This is a 100% science-backed, child-friendly program. There are no religious rituals, magic tricks or supernatural claims involved. All blindfold activities are conducted under the direct supervision of trained facilitators in a controlled environment. The "Gandhari Vidya" name is a cultural reference — the program itself is grounded in neuroscience and brain development research.' },
              { q: 'My child is young. Are they eligible?', a: 'The program is designed for children between 5 and 17 years of age. This is the window when the brain is most receptive and neuroplasticity is at its peak. Children in this age group show the fastest and most lasting results. Outside this range, results can still be achieved but may take longer.' },
              { q: 'Are parents allowed inside the workshop?', a: 'Parents are welcome for the opening briefing and the closing ceremony on Day 2. During the actual workshop sessions, we request parents to wait outside — not because of secrecy, but because children concentrate significantly better without parental presence in the room. You will receive a full progress update at the end of each day.' },
              { q: 'What happens after the 2-day workshop? Will the results last?', a: 'Your investment includes 4 follow-up sessions (one every 2 weeks) to reinforce and stabilize the activation. Think of it like learning to ride a bicycle — the workshop teaches the skill, and daily practice makes it permanent. We advise children to do 15–20 minutes of blindfold practice daily for at least 30 days. After that, the skill becomes natural and long-lasting.' },
              { q: 'Is the online batch as effective as the offline workshop?', a: 'Yes. Our online batches follow the exact same curriculum and are conducted live by the same trainers. All that is required is a stable internet connection, a laptop, a phone, and a dark, quiet room. Active parental support during online sessions helps maximize results. Many of our successful cases have come from online batches.' },
              { q: 'What is the fee and what does it include?', a: 'The program fee is ₹10,000 per child. This includes the complete 2-day intensive workshop, all training materials, and all 4 follow-up sessions. There are no hidden charges. Contact us to know about the next available batch dates.' }
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-slate-200 rounded-2xl px-6 bg-white hover:bg-slate-50 border-b-0 shadow-sm transition-colors">
                <AccordionTrigger className="text-left text-lg font-bold text-slate-900 py-6 hover:no-underline hover:text-blue-600 transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

    </div>
  );
}
