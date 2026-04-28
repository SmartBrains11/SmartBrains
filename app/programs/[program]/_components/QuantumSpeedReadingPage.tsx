'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Brain, Target, Star, ArrowLeft, Heart, BookOpen, Quote, ChevronLeft, ChevronRight, Instagram, Sparkles, Zap, Trophy, Users, Calendar, Eye, ZapOff, Timer, Gauge, Shield, ArrowRight } from 'lucide-react';

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const STAGGER: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

/* ─── Testimonials Data ─── */
const TESTIMONIALS = [
  {
    name: 'Vasantha Kumari',
    role: 'Parent of daughter, age 11',
    location: 'Hyderabad',
    content: "When the trainer first explained that my daughter would absorb a book by flipping through it, I genuinely thought it was too good to be true. By the end of Day 2, she fanned through a storybook in 4 minutes and told me the entire plot. I had no words. This is real.",
    accent: 'from-blue-500 to-indigo-500',
    accentLight: 'bg-blue-50 text-blue-600',
  },
  {
    name: 'Kiran Babu',
    role: 'Parent of son, age 14',
    location: 'Vizianagaram',
    content: "My son has been using the fanning technique on his school chapters before exams. He spends 5 minutes fanning, then reviews his notes — and his recall during the exam is sharper than when he used to spend hours reading. His marks have improved and his study stress has dropped completely.",
    accent: 'from-purple-500 to-fuchsia-500',
    accentLight: 'bg-purple-50 text-purple-600',
  },
  {
    name: 'Ratna Devi',
    role: 'Parent of children age 9 & 12',
    location: 'Hyderabad',
    content: "I came with my husband specifically to watch the Day 2 demonstration. Seeing 12 children fan through books and then answer questions about the content — accurately — was one of the most remarkable things I have witnessed. We immediately enrolled our younger child as well.",
    accent: 'from-orange-500 to-amber-500',
    accentLight: 'bg-orange-50 text-orange-600',
  },
  {
    name: 'Suresh Anand',
    role: 'Parent of son, age 10',
    location: 'Online batch',
    content: "We attended the online batch and I was worried the technique wouldn't translate through a screen. It did. The trainer was excellent, the exercises were fully guided and my son showed his first result during the Day 1 online session itself. The follow-ups have kept the momentum strong.",
    accent: 'from-emerald-500 to-teal-500',
    accentLight: 'bg-emerald-50 text-emerald-600',
  }
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

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 10) {
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
      <div className="absolute top-0 right-0 w-[30%] h-[50%] bg-blue-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[25%] h-[40%] bg-purple-50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-sm font-semibold tracking-wide text-indigo-600 uppercase">Success Stories</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">VOICES OF OUR PARENTS</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">Real life transformations from our Quantum Speed Reading students.</p>
          </div>
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button onClick={() => scroll('left')} disabled={!canScrollLeft} className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 disabled:opacity-30 shadow-sm"><ChevronLeft className="w-5 h-5 text-slate-700" /></button>
            <button onClick={() => scroll('right')} disabled={!canScrollRight} className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 disabled:opacity-30 shadow-sm"><ChevronRight className="w-5 h-5 text-slate-700" /></button>
          </div>
        </div>
      </div>

      <div ref={scrollRef} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 px-6 lg:px-20 no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {TESTIMONIALS.map((test, idx) => (
          <div key={idx} className="snap-start shrink-0 w-[85vw] sm:w-[420px] lg:w-[460px] bg-white rounded-2xl border border-slate-100 shadow-[0_8px_40px_rgba(0,0,0,0.06)] flex flex-col relative overflow-hidden group">
            <div className={`h-1.5 w-full bg-gradient-to-r ${test.accent}`} />
            <div className="p-8 sm:p-9 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}</div>
                <Quote className="w-10 h-10 text-slate-100 group-hover:text-indigo-50 transition-colors" />
              </div>
              <p className="text-slate-600 leading-relaxed text-[15px] sm:text-base flex-1 mb-8">&quot;{test.content}&quot;</p>
              <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold ${test.accentLight}`}>{test.name.split(' ').map(n => n[0]).join('')}</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-[15px]">{test.name}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{test.role} · {test.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="shrink-0 w-1" aria-hidden="true" />
      </div>
    </section>
  );
}

export default function QuantumSpeedReadingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-indigo-600">Home</Link>
            <span>/</span>
            <Link href="/programs" className="hover:text-indigo-600">Programs</Link>
            <span>/</span>
            <span className="text-gray-900">Quantum Speed Reading</span>
          </div>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="show" variants={STAGGER} className="text-left">
              <motion.div variants={FADE_UP}>
                <Link href="/programs" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Programs
                </Link>
              </motion.div>
              <motion.h1 variants={FADE_UP} className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tight">Quantum Speed Reading</motion.h1>
              <motion.p variants={FADE_UP} className="text-xl text-indigo-600 font-medium mb-6">Your Child Can Absorb an Entire Book in Under 10 Minutes — Without Reading a Single Page.</motion.p>
              <motion.p variants={FADE_UP} className="text-lg text-gray-600 mb-8 leading-relaxed">Quantum Speed Reading is one of the most extraordinary brain abilities a child can develop — and it has roots in ancient Indian wisdom. Inspired by the legendary practice of Swami Vivekananda, who was known to absorb entire books by simply holding and flipping through them, QSR trains the right brain to receive and process written information subconsciously — without the eyes reading word by word. In just 2 intensive days, your child develops the ability to fan through a book and absorb its content at a level that has to be seen to be believed.</motion.p>
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 uppercase font-black tracking-wider"><Link href="/contact">Enquire For Next Batch</Link></Button>
                <Button asChild variant="outline" size="lg" className="uppercase font-black tracking-wider"><Link href="tel:+917396447470">Call to Know More</Link></Button>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
              <img src="/images/quantumspeed-reading.webp" alt="Quantum Speed Reading" className="w-full h-96 object-cover rounded-[2.5rem] shadow-2xl border-4 border-white" />
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center"><BookOpen className="w-6 h-6 text-indigo-600" /></div>
                <div>
                  <div className="text-2xl font-black text-gray-900 leading-none">&lt; 10 Mins</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Full Book Absorbed</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="relative z-30 -mt-10 px-6 lg:px-20 mb-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: 'Full Book', label: 'Absorbed in Under 10 Minutes', icon: Timer, color: 'indigo' },
              { value: 'Right Brain', label: 'Dominant Technique', icon: Brain, color: 'purple' },
              { value: 'Improved', label: 'Academic Retention', icon: Target, color: 'blue' },
              { value: '100%', label: 'Supervised & Safe', icon: Shield, color: 'emerald' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-7 rounded-2xl shadow-lg border border-slate-50 transform hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-${stat.color}-50 text-${stat.color}-600`}><stat.icon className="w-5 h-5" /></div>
                  <div className="text-2xl font-black text-gray-900 tracking-tight">{stat.value}</div>
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-2">{stat.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Discover Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-sm font-semibold tracking-wide text-indigo-600 uppercase">Discover The Science</span>
                <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase mb-6">What is Quantum Speed Reading?</h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-justify">
                  <p>Swami Vivekananda was known to read entire library books overnight — not by reading each page, but by absorbing them. His guru Sri Ramakrishna Paramahamsa described this as the activation of the brain&apos;s deepest intuitive faculty — the ability to receive knowledge directly, beyond the linear process of reading.</p>
                  <p>Modern brain science calls this right brain visual absorption. When the right hemisphere is sufficiently activated, it can process large volumes of visual and written information simultaneously — the same way it processes a scene, a painting or a face in a single glance rather than piece by piece.</p>
                  <p>Quantum Speed Reading trains this exact faculty. Children learn to hold a book, fan or flip through it at speed, and allow the right brain to absorb the content — which they can then recall, summarise and apply. The 2-day workshop uses right brain activation exercises, brain yoga, deep meditation, visualization training and progressive fanning practice to develop this ability step by step.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <Sparkles className="absolute -right-10 -bottom-10 w-48 h-48 opacity-10" />
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Ancient Wisdom. Modern Brain Science. One Extraordinary Ability.</h3>
                <p className="text-indigo-50 leading-relaxed mb-6">Swami Vivekananda&apos;s ability to absorb books was not considered magic — it was considered the natural result of a highly trained, deeply focused mind. He would fan through pages with his eyes, and the content would become available to him as if he had read every word.</p>
                <div className="space-y-4">
                  <p className="text-sm text-indigo-100 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">What saints and scholars practised through years of meditation, SmartBrains India teaches through a structured, child-friendly 2-day program — combining the wisdom of this ancient tradition with proven modern neuroscience. Every child already has this faculty within them. The program simply awakens it.</p>
                  <div className="flex items-start gap-3 mt-4 bg-indigo-800/30 p-4 rounded-xl">
                    <Shield className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <span className="text-sm font-bold uppercase tracking-widest text-emerald-400 block mb-1">Important Note</span>
                      <p className="text-xs text-indigo-100 leading-relaxed">This is a 100% safe, science-backed program. There are no religious rituals or supernatural claims. All activities are conducted by trained facilitators in a fully supervised, child-friendly environment.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Main Content Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Benefits */}
              <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
                <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Key Program Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Absorb entire books and chapters in a fraction of normal reading time",
                    "Dramatically reduce study time while improving retention",
                    "Awaken right brain dominance — improving intuition, memory and creativity alongside reading",
                    "Build extraordinary academic confidence and independent learning ability",
                    "Develop a skill virtually no other child in their class will have",
                    "Create a lifelong advantage in learning speed and information processing"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                      <span className="text-slate-700 font-medium leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Structure */}
              <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="px-10 pt-10 pb-6">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">Program Structure</h3>
                  <p className="text-indigo-600 mt-1 text-sm font-medium">2-Day Intensive · 10:00 AM – 5:00 PM Each Day · Offline & Online · 4 Follow-Up Sessions Included</p>
                </div>
                
                {/* Day 1 */}
                <div className="border-t border-slate-100">
                  <div className="px-10 py-5 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50">
                      <Calendar className="w-5 h-5 text-indigo-600" />
                    </span>
                    <h4 className="font-bold text-indigo-600 text-lg uppercase tracking-wider">Day 1 — Right Brain Awakening & Foundation</h4>
                  </div>
                  {[
                    { t: '10:00 – 10:20 AM', task: 'Opening Prayer & Intention Setting' },
                    { t: '10:20 – 11:15 AM', task: 'Brain Gym & Brain Yoga — Right Brain Activation' },
                    { t: '11:15 – 11:30 AM', task: 'Break' },
                    { t: '11:30 – 12:30 PM', task: 'Visual Processing Drills & Peripheral Expansion Exercises' },
                    { t: '12:30 – 1:15 PM', task: 'Lunch Break' },
                    { t: '1:15 – 2:15 PM', task: 'Guided Meditation & Deep Focus Training' },
                    { t: '2:15 – 3:00 PM', task: 'Introduction to Fanning Technique — First Practice' },
                    { t: '3:00 – 3:15 PM', task: 'Break' },
                    { t: '3:15 – 4:15 PM', task: 'Progressive Fanning Drills with Simple Texts' },
                    { t: '4:15 – 5:00 PM', task: 'First Absorption Test & Day 1 Results Session' }
                  ].map((s, i) => (
                    <div key={i} className="px-10 py-4 flex items-center border-t border-slate-50 last:border-b last:border-slate-100">
                      <span className="text-[10px] font-black text-indigo-500 w-36 shrink-0">{s.t}</span>
                      <span className="text-slate-700 text-sm font-semibold">{s.task}</span>
                    </div>
                  ))}
                  <div className="mx-10 mt-4 mb-8 bg-indigo-50 rounded-2xl px-6 py-4 flex items-center gap-4 border border-indigo-100/50">
                    <Star className="w-5 h-5 fill-current text-yellow-400 stroke-yellow-500 shrink-0" />
                    <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
                      <span className="font-bold text-slate-900">Day 1 Guarantee:</span> Every child demonstrates a first visible result in right brain visual absorption by the end of Day 1.
                    </p>
                  </div>
                </div>

                {/* Day 2 */}
                <div className="border-t border-slate-100">
                  <div className="px-10 py-5 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-50">
                      <Target className="w-5 h-5 text-purple-600" />
                    </span>
                    <h4 className="font-bold text-purple-600 text-lg uppercase tracking-wider">Day 2 — Activation & Mastery</h4>
                  </div>
                  {[
                    { t: '10:00 – 10:20 AM', task: 'Motivation Warm-Up & Advanced Brain Yoga' },
                    { t: '10:20 – 11:00 AM', task: 'Advanced Right Brain Drills & Visualization Deepening' },
                    { t: '11:00 – 11:15 AM', task: 'Break' },
                    { t: '11:15 – 1:00 PM', task: 'Full Quantum Fanning Practice — Books & Academic Texts' },
                    { t: '1:00 – 1:45 PM', task: 'Lunch Break' },
                    { t: '1:45 – 2:45 PM', task: 'Recall Testing — Summarise & Apply Absorbed Content' },
                    { t: '2:45 – 3:15 PM', task: 'Break & Physical Activation Session' },
                    { t: '3:15 – 4:30 PM', task: 'Advanced Book Absorption — Full Demonstration' },
                    { t: '4:30 – 5:00 PM', task: 'Certificate Ceremony & Parent Counselling Session' }
                  ].map((s, i) => (
                    <div key={i} className="px-10 py-4 flex items-center border-t border-slate-50 last:border-b last:border-slate-100">
                      <span className="text-[10px] font-black text-purple-500 w-36 shrink-0">{s.t}</span>
                      <span className="text-slate-700 text-sm font-semibold">{s.task}</span>
                    </div>
                  ))}
                </div>

                {/* Follow-Ups */}
                <div className="px-10 py-8 bg-slate-50/50 border-t border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <span className="font-black text-slate-900 text-sm uppercase tracking-tight">4 Follow-Up Sessions Included</span>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">Once every 2 weeks · 2–3 hours · Home practice 15–20 min/day recommended.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expected Results */}
              <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Expected Results</h3>
                <div className="space-y-4">
                  {[
                    "First visible right brain absorption result by end of Day 1",
                    "Child can fan through a short book and recall key content accurately by Day 2",
                    "Study time reduced significantly within 30 days of regular practice",
                    "Sustained growth in absorption ability through follow-ups and daily fanning practice"
                  ].map((res, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 transform hover:scale-[1.02] transition-transform">
                      <div className="bg-white p-2.5 rounded-xl shadow-sm font-bold text-indigo-600 text-[10px] uppercase tracking-tighter ring-1 ring-slate-100">Success</div>
                      <span className="text-slate-700 font-bold text-sm sm:text-base leading-tight">{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Program Details</h3>
                <div className="space-y-5">
                  {[
                    { label: 'Target Age', val: '5 – 17 years' },
                    { label: 'Duration', val: '2 Days (10 AM - 5 PM)' },
                    { label: 'Format', val: 'Offline & Online' },
                    { label: 'Batch Size', val: 'Max 15 Students' },
                    { label: 'Follow-Ups', val: '4 Sessions Included' }
                  ].map((d, i) => (
                    <div key={i} className="flex justify-between items-center pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                      <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">{d.label}</span>
                      <span className="text-slate-900 font-bold text-sm text-right ml-4">{d.val}</span>
                    </div>
                  ))}
                  <div className="mt-8 pt-8 border-t border-slate-100">
                    <div className="flex justify-between items-end mb-6">
                      <div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Investment</div>
                        <div className="text-3xl font-black text-slate-900">₹10,000</div>
                      </div>
                      <div className="bg-indigo-100 text-indigo-700 text-[10px] font-black px-3 py-1 rounded-full uppercase">All-Inclusive</div>
                    </div>
                    <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700 h-14 rounded-2xl text-base font-black shadow-lg shadow-indigo-100"><Link href="/contact">Book Free Demo</Link></Button>
                    <p className="mt-4 text-center text-[11px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed px-4">Free Consultation Available</p>
                  </div>
                </div>
              </div>

              {/* Instagram Video Embed */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.02)] overflow-hidden">
                <div className="flex items-center justify-between p-7 pb-4">
                  <h3 className="text-[1.35rem] font-bold text-gray-900 tracking-tight uppercase">Watch in Action</h3>
                  <Link 
                    href="https://www.instagram.com/smartbrainsindia.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-tr from-pink-500 to-orange-500 p-2 rounded-lg flex-shrink-0 hover:scale-110 transition-transform shadow-md"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </Link>
                </div>
                <div className="w-full overflow-hidden bg-white border-t border-slate-50">
                  <iframe
                    src="https://www.instagram.com/p/DRFpugekye9/embed/"
                    className="w-full border-0"
                    style={{ height: '550px' }}
                    allowFullScreen
                    allow="encrypted-media"
                    sandbox="allow-scripts allow-same-origin allow-presentation"
                    scrolling="no"
                    title="QSR Demo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Carousel */}
      <TestimonialsCarousel />

      {/* 6. FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-20 max-w-4xl">
          <div className="text-center mb-16">
            <span className="bg-indigo-50 text-indigo-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Support</span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-none uppercase">Got Questions?</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: 'Is this the same as normal speed reading?', a: 'No — these are completely different skills. Speed Reading trains the eyes and brain to read faster word by word. Quantum Speed Reading trains the right brain to absorb written content by fanning through pages — without conventional reading at all. SmartBrains India offers both as separate programs.' },
              { q: 'Is this based on Swami Vivekananda\'s technique?', a: 'Yes. The foundational inspiration for QSR comes from Swami Vivekananda\'s documented ability to absorb entire books through deep right brain activation. The program translates this ancient faculty into a structured, modern training method accessible to children.' },
              { q: 'Is this scientifically safe?', a: '100% yes. There are no religious rituals, no supernatural elements and no pressure of any kind. All activities are conducted by certified trainers in a fully supervised, child-friendly environment.' },
              { q: 'What age is this suitable for?', a: 'Children aged 5 to 17 years. Younger children benefit from the right brain activation foundation even as their fanning ability develops progressively with practice.' },
              { q: 'How soon will my child be able to fan through a full book?', a: 'Most children demonstrate their first absorption result by the end of Day 1. Full book fanning ability develops progressively through the 4 follow-up sessions and daily home practice.' },
              { q: 'What does ₹10,000 include?', a: 'The full 2-day workshop, all training materials, 4 follow-up sessions and the completion certificate. No additional charges.' }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-2xl px-6 bg-slate-50 border-slate-200 shadow-sm overflow-hidden">
                <AccordionTrigger className="text-left font-bold text-slate-900 text-lg py-6">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent)] pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-20 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none uppercase mb-6">Ready to Unlock Your Child&apos;s Potential?</h2>
          <p className="text-indigo-200 text-lg mb-12 max-w-2xl mx-auto">Book a Free Demo Session or talk to our experts today.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 h-16 px-12 rounded-2xl font-black text-lg shadow-xl shadow-indigo-900/40 uppercase tracking-wider transition-all hover:scale-105"><Link href="tel:+917396447470">Call Us Now: +91 7396447470</Link></Button>
            <Button asChild variant="outline" size="lg" className="border-slate-700 bg-transparent text-white hover:bg-slate-800 h-16 px-12 rounded-2xl font-black text-lg uppercase tracking-wider transition-all hover:scale-105 group">
              <Link href="https://wa.me/917396447470" className="flex items-center gap-3">
                Message Us on WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
