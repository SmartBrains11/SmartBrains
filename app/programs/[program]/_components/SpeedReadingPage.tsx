'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Brain, Target, Star, ArrowLeft, Heart, BookOpen, Quote, ChevronLeft, ChevronRight, Instagram, Sparkles, Zap, Trophy, Users, Calendar, Eye, ZapOff, Timer, Gauge, Lightbulb, ArrowRight, BookMarked, UserCheck } from 'lucide-react';

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
    name: 'Praveen Sharma',
    role: 'Software Professional, age 34',
    location: 'Hyderabad',
    content: "I enrolled myself as an adult — I read a lot for work and felt like I was always behind. By Session 8, my reading speed had doubled and my comprehension was actually better than before because I was more focused. By Session 15 I was reading reports in half the time. Wish I had learned this 20 years ago.",
    accent: 'from-cyan-500 to-blue-500',
    accentLight: 'bg-cyan-50 text-cyan-600',
  },
  {
    name: 'Geetha Lakshmi',
    role: 'Parent of daughter, age 13',
    location: 'Vizianagaram',
    content: "My daughter was spending 2–3 hours every evening just on reading assignments. After the Speed Reading program, she finishes the same content in under an hour and retains more. Her teachers have noticed she participates more in class because she actually has time to think about what she read.",
    accent: 'from-emerald-500 to-teal-500',
    accentLight: 'bg-emerald-50 text-emerald-600',
  },
  {
    name: 'Aditya Varma',
    role: 'College student, age 20',
    location: 'Online batch',
    content: "I am a college student preparing for competitive exams with massive reading loads. The chunking and active recall techniques from this program changed how I approach every paper. My reading speed went from around 200 WPM to over 750 WPM in 15 sessions. The ROI on ₹8,000 is extraordinary.",
    accent: 'from-indigo-500 to-violet-500',
    accentLight: 'bg-indigo-50 text-indigo-600',
  },
  {
    name: 'Madhavi Rao',
    role: 'Parent of son, age 9',
    location: 'Hyderabad',
    content: "My son is 9 years old and I wasn't sure if speed reading was appropriate for his age. The trainer adapted all the exercises to his level beautifully. By Session 10 he was reading his English textbook chapters twice as fast and actually enjoying reading for the first time. That alone was worth everything.",
    accent: 'from-rose-500 to-pink-500',
    accentLight: 'bg-rose-50 text-rose-600',
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
      <div className="absolute top-0 right-0 w-[30%] h-[50%] bg-cyan-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[25%] h-[40%] bg-emerald-50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-sm font-semibold tracking-wide text-cyan-600 uppercase">Success Stories</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">VOICES OF OUR STUDENTS</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">Real life transformations from our Speed Reading students.</p>
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
                <Quote className="w-10 h-10 text-slate-100 group-hover:text-cyan-50 transition-colors" />
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

/* ─── WPM Calculator Widget ─── */
const PASSAGE = `The human brain is one of the most extraordinary organs in the known universe. Despite weighing just about three pounds, it contains roughly eighty-six billion neurons, each connected to thousands of others, creating a network of staggering complexity. Every thought you have, every memory you hold, every skill you have ever learned — all of it lives within this remarkable structure. Scientists have spent centuries trying to understand how the brain works, and yet we are still only beginning to scratch the surface of its true capabilities. One of the most fascinating discoveries in recent decades is the concept of neuroplasticity — the brain's ability to rewire and reshape itself throughout a person's entire life. This means that with the right training and practice, anyone can develop new cognitive abilities at any age.`;
const WORD_COUNT = 130;

function WpmCalculator({ featuredProgram }: { featuredProgram: 'speed-reading' | 'qsr' }) {
  const [step, setStep] = useState<'intro' | 'reading' | 'results'>('intro');
  const [elapsed, setElapsed] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [barsVisible, setBarsVisible] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startReading = () => {
    setElapsed(0);
    setStep('reading');
    intervalRef.current = setInterval(() => {
      setElapsed(prev => prev + 0.5);
    }, 500);
  };

  const doneReading = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    const calculated = elapsed > 0 ? Math.round((WORD_COUNT / elapsed) * 60) : 0;
    setWpm(calculated);
    setStep('results');
    setTimeout(() => setBarsVisible(true), 100);
  };

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setStep('intro');
    setElapsed(0);
    setWpm(0);
    setBarsVisible(false);
  };

  const getResultMessage = (w: number) => {
    if (w < 150) return { title: 'Below Average Speed', body: 'Your reading speed is below average. Speed Reading training at SmartBrains can help you reach 600–800 WPM — cutting your study or work reading time by more than half.' };
    if (w <= 300) return { title: 'Average Reader', body: 'You read at an average pace. With Speed Reading training, students at your level typically reach 700–900 WPM within 15 sessions — that is 3–4x faster than you read today.' };
    if (w <= 500) return { title: 'Faster-Than-Average', body: 'You are already a faster-than-average reader. Speed Reading training can push you to 800–1000+ WPM — and Quantum Speed Reading opens a completely different level.' };
    return { title: 'Already a Fast Reader', body: 'You are already a fast reader. Quantum Speed Reading — the Vivekananda-inspired book absorption technique — might be the next extraordinary skill to explore.' };
  };

  const maxBarWpm = 800;
  const yourBarPct = Math.min((wpm / maxBarWpm) * 85, 85);
  const bars = [
    { label: 'You', value: wpm > 0 ? `${wpm} WPM` : '—', pct: barsVisible ? yourBarPct : 0, color: '#185FA5' },
    { label: 'Average Adult', value: '200 WPM', pct: barsVisible ? Math.round((200 / maxBarWpm) * 85) : 0, color: '#B4B2A9' },
    { label: 'After Training', value: '800+ WPM', pct: barsVisible ? 85 : 0, color: '#1D9E75' },
    { label: 'Quantum Speed Reading', value: 'Whole book in mins', pct: barsVisible ? 100 : 0, color: '#7F77DD' },
  ];

  const result = step === 'results' ? getResultMessage(wpm) : null;

  return (
    <div className="relative w-full">
      {/* Section Heading */}
      <div className="text-center mb-10 mt-4">
        <span className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
          <Gauge className="w-3.5 h-3.5" /> Takes less than 60 seconds
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase mb-3">
          What&apos;s Your Reading Speed?
        </h2>
        <p className="text-slate-500 text-lg max-w-xl mx-auto">
          Find out in 60 seconds — then see what training can unlock.
        </p>
      </div>

      {/* Widget Box */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden relative">

          {/* Step 1 — Intro */}
          {step === 'intro' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 md:p-12">
              <p className="text-slate-600 font-medium text-center mb-8 text-lg">
                Read the passage below at your normal pace. Press <strong>Start Reading</strong> when ready.
              </p>
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm mb-8">
                <p className="text-slate-700 leading-[1.9] text-base md:text-lg font-medium select-none">
                  {PASSAGE}
                </p>
              </div>
              <div className="flex justify-center">
                <Button onClick={startReading} size="lg" className="bg-cyan-600 hover:bg-cyan-700 h-14 px-12 rounded-2xl font-black text-base shadow-lg shadow-cyan-100 uppercase tracking-wider group">
                  Start Reading <Zap className="ml-2 w-4 h-4 group-hover:scale-125 transition-transform" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 2 — Reading */}
          {step === 'reading' && (
            <div className="relative">
              {/* Progress bar */}
              <div className="h-1.5 bg-slate-200 w-full">
                <div
                  className="h-full bg-cyan-500 transition-all duration-500"
                  style={{ width: `${Math.min((elapsed / 120) * 100, 100)}%` }}
                />
              </div>
              <div className="p-8 md:p-12">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-black text-cyan-600 uppercase tracking-widest">Reading…</span>
                  <span className="text-2xl font-black text-slate-900 tabular-nums">{elapsed.toFixed(1)}s</span>
                </div>
                <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm mb-8 relative">
                  <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <p className="text-slate-700 leading-[1.9] text-base md:text-lg font-medium select-none">
                    {PASSAGE}
                  </p>
                </div>
                <div className="flex justify-center">
                  <Button onClick={doneReading} size="lg" className="bg-slate-900 hover:bg-black h-14 px-12 rounded-2xl font-black text-base shadow-lg uppercase tracking-wider">
                    Done Reading ✓
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3 — Results */}
          {step === 'results' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-8 md:p-12">
              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                <div className="bg-white rounded-2xl border-2 border-[#185FA5] p-6 text-center shadow-sm">
                  <div className="text-3xl font-black text-[#185FA5] mb-1">{wpm}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Your Speed (WPM)</div>
                </div>
                <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center shadow-sm">
                  <div className="text-3xl font-black text-slate-700 mb-1">200</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Average Adult (WPM)</div>
                </div>
                <div className="bg-white rounded-2xl border border-[#1D9E75] p-6 text-center shadow-sm">
                  <div className="text-3xl font-black text-[#1D9E75] mb-1">800+</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">After Training (WPM)</div>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 mb-8 shadow-sm">
                <div className="space-y-4">
                  {bars.map((bar) => (
                    <div key={bar.label} className="flex items-center gap-3">
                      <div className="w-40 shrink-0 text-right">
                        <span className="text-xs font-bold text-slate-500">{bar.label}</span>
                      </div>
                      <div className="flex-1 h-8 bg-slate-50 rounded-lg overflow-hidden relative border border-slate-100">
                        <div
                          className="h-full rounded-lg flex items-center pl-3 transition-all duration-1000 ease-out"
                          style={{ width: `${bar.pct}%`, backgroundColor: bar.color }}
                        >
                          {bar.pct > 15 && (
                            <span className="text-white text-[11px] font-black whitespace-nowrap">{bar.value}</span>
                          )}
                        </div>
                        {bar.pct <= 15 && (
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[11px] font-black text-slate-400">{bar.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Result Message */}
              {result && (
                <div className="bg-cyan-50/60 border border-cyan-100 rounded-2xl p-6 mb-8">
                  <h4 className="font-black text-slate-900 text-lg uppercase mb-2 tracking-tight">{result.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{result.body}</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 h-14 px-10 rounded-2xl font-black uppercase tracking-wider shadow-lg shadow-cyan-100">
                  <Link href="/contact">Enquire About the Program</Link>
                </Button>
                <Button variant="outline" onClick={reset} size="lg" className="h-14 px-10 rounded-2xl font-black uppercase tracking-wider border-slate-200">
                  Test Again
                </Button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Program Comparison Callout */}
        <div className="mt-16 pt-16 border-t border-slate-100">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
              Not sure which program is right for you?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Speed Reading — featured on SR page */}
            <div className={`bg-white rounded-2xl p-8 flex flex-col ${featuredProgram === 'speed-reading' ? 'border-2 border-[#185FA5] shadow-md' : 'border border-slate-200 shadow-sm'}`}>
              <span className="text-[10px] font-black text-[#185FA5] bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest self-start mb-4">
                Measurable WPM gains
              </span>
              <h4 className="text-lg font-black text-slate-900 uppercase mb-3">Speed Reading</h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                Train your eyes and brain to read faster with full comprehension. Perfect if your child spends too long studying or you want a faster reading habit for work or college.
              </p>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">15 sessions · ₹8,000 · All ages</div>
              <Button asChild variant="outline" className="border-[#185FA5] text-[#185FA5] hover:bg-blue-50 font-black uppercase text-xs h-10 rounded-xl">
                <Link href="/programs/speed-reading" className="flex items-center justify-center gap-2">
                  View Speed Reading Program <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
            </div>

            {/* QSR — featured on QSR page */}
            <div className={`bg-white rounded-2xl p-8 flex flex-col ${featuredProgram === 'qsr' ? 'border-2 border-[#7F77DD] shadow-md' : 'border border-slate-200 shadow-sm'}`}>
              <span className="text-[10px] font-black text-[#7F77DD] bg-purple-50 px-3 py-1 rounded-full uppercase tracking-widest self-start mb-4">
                Intuitive absorption
              </span>
              <h4 className="text-lg font-black text-slate-900 uppercase mb-3">Quantum Speed Reading</h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                Inspired by Swami Vivekananda — absorb an entire book by fanning through it. Right brain dominant. A completely different skill from conventional reading.
              </p>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">2-day intensive · ₹10,000 · Age 5–17</div>
              <Button asChild variant="outline" className="border-[#7F77DD] text-[#7F77DD] hover:bg-purple-50 font-black uppercase text-xs h-10 rounded-xl">
                <Link href="/programs/quantum-speed-reading" className="flex items-center justify-center gap-2">
                  View QSR Program <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-500 font-medium mb-4">Still unsure? Call us and we&apos;ll guide you to the right program.</p>
            <div className="flex flex-wrap justify-center gap-6 font-bold text-slate-800">
              <Link href="tel:+917396447470" className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
                <span className="text-lg">📞</span> +91 7396447470
              </Link>
              <Link href="https://wa.me/917386209090" target="_blank" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                <span className="text-lg">💬</span> WhatsApp us
              </Link>
            </div>
          </div>
        </div>

    </div>
  );
}

export default function SpeedReadingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-cyan-600">Home</Link>
            <span>/</span>
            <Link href="/programs" className="hover:text-cyan-600">Programs</Link>
            <span>/</span>
            <span className="text-gray-900">Speed Reading</span>
          </div>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="show" variants={STAGGER} className="text-left">
              <motion.div variants={FADE_UP}>
                <Link href="/programs" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 mb-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Programs
                </Link>
              </motion.div>
              <motion.h1 variants={FADE_UP} className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tight">Speed Reading</motion.h1>
              <motion.p variants={FADE_UP} className="text-xl text-cyan-600 font-medium mb-6">Read Faster. Understand More. Study Smarter — At Any Age.</motion.p>
              <motion.p variants={FADE_UP} className="text-lg text-gray-600 mb-8 leading-relaxed">Speed Reading is a structured 15-session program that trains your brain to read significantly faster while retaining complete comprehension. Using proven techniques including eye movement training, chunking, elimination of subvocalisation and active recall — students at any age can multiply their reading speed and dramatically cut down the time they spend studying, reading reports or preparing for exams. Whether your child is in school or you are a working professional, this program delivers a measurable, practical skill you will use every single day.</motion.p>
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 uppercase font-black tracking-wider"><Link href="/contact">Enquire For Next Batch</Link></Button>
                <Button asChild variant="outline" size="lg" className="uppercase font-black tracking-wider border-cyan-200 hover:bg-cyan-50"><Link href="tel:+917396447470">Call to Know More</Link></Button>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
              <img src="/images/speed-reading.webp" alt="Speed Reading" className="w-full h-96 object-cover rounded-[2.5rem] shadow-2xl border-4 border-white" />
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center"><Gauge className="w-6 h-6 text-cyan-600" /></div>
                <div>
                  <div className="text-2xl font-black text-gray-900 leading-none">3–5x</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Faster Reading</div>
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
              { value: '3–5x', label: 'Faster Reading Speed', icon: Timer, color: 'cyan' },
              { value: '95%', label: 'Comprehension Retention', icon: Brain, color: 'emerald' },
              { value: 'Improved', label: 'Academic & Professional Efficiency', icon: Target, color: 'blue' },
              { value: 'Any Age', label: 'Kids & Adults Welcome', icon: UserCheck, color: 'indigo' }
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
                <span className="text-sm font-semibold tracking-wide text-cyan-600 uppercase">Discover The Science</span>
                <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase mb-6">What is Speed Reading?</h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-justify">
                  <p>The average person reads at 150–250 words per minute — and silently mouths every word in their head as they read. This habit, called subvocalisation, is the single biggest limiter of reading speed. The eyes and brain are capable of processing text far faster than the voice can speak — but most people never learn to use that capacity.</p>
                  <p>Speed Reading systematically removes these limiters. Over 15 structured sessions of 1.5 hours each, students learn to expand their visual field to take in multiple words at once, eliminate subvocalisation, use active chunking to group information meaningfully, and apply recall strategies to retain what they read without re-reading.</p>
                  <p>The result is a reader who moves through text 3 to 5 times faster — with better comprehension, less mental fatigue and dramatically improved study or work efficiency.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <Sparkles className="absolute -right-10 -bottom-10 w-48 h-48 opacity-10" />
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Structured Learning Rhythm</h3>
                <p className="text-cyan-50 leading-relaxed mb-6">Each session follows a structured rhythm to ensure consistent progress and technique mastery.</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/30 flex items-center justify-center shrink-0 text-sm font-bold">1</div>
                    <p className="text-sm text-cyan-50 pt-1">Brain Yoga & Focus Warm-Up</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/30 flex items-center justify-center shrink-0 text-sm font-bold">2</div>
                    <p className="text-sm text-cyan-50 pt-1">Technique Training Block where a new skill is introduced and practised</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/30 flex items-center justify-center shrink-0 text-sm font-bold">3</div>
                    <p className="text-sm text-cyan-50 pt-1">Improvement Session applying the technique to real reading material with speed and comprehension testing</p>
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
                    "Read 3–5x faster than your current speed within 15 sessions",
                    "Retain and recall more of what you read with active comprehension strategies",
                    "Cut study or work reading time by 50–70%",
                    "Eliminate subvocalisation — the habit silently slowing every reader down",
                    "Build focus and reading stamina for long study or work sessions",
                    "Gain a practical, measurable skill that works for school, college and professional life"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                      <span className="text-slate-700 font-medium leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* WPM Calculator Widget */}
              <WpmCalculator featuredProgram="speed-reading" />

              {/* Structure */}
              <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="px-10 pt-10 pb-6">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">Program Structure</h3>
                  <p className="text-cyan-600 mt-1 text-sm font-medium">15 Sessions · 1.5 Hours Per Session · Offline & Online · For All Ages</p>
                </div>
                
                {/* Phase 1 */}
                <div className="border-t border-slate-100">
                  <div className="px-10 py-5 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-50">
                      <BookOpen className="w-5 h-5 text-cyan-600" />
                    </span>
                    <h4 className="font-bold text-cyan-600 text-lg uppercase tracking-wider">Phase 1 — Assessment & Foundation (Sessions 1–4)</h4>
                  </div>
                  {[
                    { t: '0:00 – 0:20', task: 'Brain Yoga & Focus Warm-Up' },
                    { t: '0:20 – 1:00', task: 'Reading Speed Baseline Assessment & Eye Movement Introduction' },
                    { t: '1:00 – 1:30', task: 'Improvement Session — Subvocalisation Awareness Drills' }
                  ].map((s, i) => (
                    <div key={i} className="px-10 py-4 flex items-center border-t border-slate-50 last:border-b last:border-slate-100">
                      <span className="text-[10px] font-black text-cyan-500 w-28 shrink-0">{s.t}</span>
                      <span className="text-slate-700 text-sm font-semibold">{s.task}</span>
                    </div>
                  ))}
                </div>

                {/* Phase 2 */}
                <div className="border-t border-slate-100">
                  <div className="px-10 py-5 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50">
                      <Eye className="w-5 h-5 text-blue-600" />
                    </span>
                    <h4 className="font-bold text-blue-600 text-lg uppercase tracking-wider">Phase 2 — Technique Building (Sessions 5–10)</h4>
                  </div>
                  {[
                    { t: '0:00 – 0:20', task: 'Brain Yoga & Concentration Warm-Up' },
                    { t: '0:20 – 1:00', task: 'Chunking, Visual Expansion & Pointer Technique Training' },
                    { t: '1:00 – 1:30', task: 'Improvement Session — Timed Reading with Comprehension Testing' }
                  ].map((s, i) => (
                    <div key={i} className="px-10 py-4 flex items-center border-t border-slate-50 last:border-b last:border-slate-100">
                      <span className="text-[10px] font-black text-blue-500 w-28 shrink-0">{s.t}</span>
                      <span className="text-slate-700 text-sm font-semibold">{s.task}</span>
                    </div>
                  ))}
                </div>

                {/* Phase 3 */}
                <div className="border-t border-slate-100">
                  <div className="px-10 py-5 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50">
                      <Trophy className="w-5 h-5 text-indigo-600" />
                    </span>
                    <h4 className="font-bold text-indigo-600 text-lg uppercase tracking-wider">Phase 3 — Speed & Comprehension Mastery (Sessions 11–15)</h4>
                  </div>
                  {[
                    { t: '0:00 – 0:20', task: 'Brain Yoga & Active Recall Warm-Up' },
                    { t: '0:20 – 1:00', task: 'Advanced Speed Drills — Academic Texts, Reports & Long-form Content' },
                    { t: '1:00 – 1:30', task: 'Improvement Session — Full Speed + Comprehension Simulation' }
                  ].map((s, i) => (
                    <div key={i} className="px-10 py-4 flex items-center border-t border-slate-50 last:border-b last:border-slate-100">
                      <span className="text-[10px] font-black text-indigo-500 w-28 shrink-0">{s.t}</span>
                      <span className="text-slate-700 text-sm font-semibold">{s.task}</span>
                    </div>
                  ))}
                  <div className="mx-10 mt-4 mb-8 bg-indigo-50 rounded-2xl px-6 py-4 flex items-center gap-4 border border-indigo-100/50">
                    <Star className="w-5 h-5 fill-current text-yellow-400 stroke-yellow-500 shrink-0" />
                    <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
                      <span className="font-bold text-slate-900">Session 15 Milestone:</span> Every student completes a final speed and comprehension assessment demonstrating measurable improvement from Session 1, and receives their completion certificate.
                    </p>
                  </div>
                </div>

              </div>

              {/* Expected Results */}
              <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Expected Results</h3>
                <div className="space-y-4">
                  {[
                    "Visible improvement in reading speed from Session 3 onwards",
                    "Reading speed of 600–1000+ WPM with high comprehension by Session 15",
                    "Study or work reading time reduced by 50–70% within 4 weeks of completion",
                    "Sustained improvement through daily reading practice post-program"
                  ].map((res, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 transform hover:scale-[1.02] transition-transform">
                      <div className="bg-white p-2.5 rounded-xl shadow-sm font-bold text-cyan-600 text-[10px] uppercase tracking-tighter ring-1 ring-slate-100">Success</div>
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
                    { label: 'Target Age', val: 'Any Age — Kids & Adults' },
                    { label: 'Duration', val: '15 Sessions × 1.5 Hours' },
                    { label: 'Format', val: 'Offline & Online' },
                    { label: 'Batch Size', val: 'Max 8 Students' }
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
                        <div className="text-3xl font-black text-slate-900">₹8,000</div>
                      </div>
                      <div className="bg-cyan-100 text-cyan-700 text-[10px] font-black px-3 py-1 rounded-full uppercase">Per Student</div>
                    </div>
                    <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700 h-14 rounded-2xl text-base font-black shadow-lg shadow-cyan-100"><Link href="/contact">Enquire For Next Batch</Link></Button>
                    <p className="mt-4 text-center text-[11px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed px-4">Free Consultation Available</p>
                  </div>
                </div>
              </div>

              {/* Instagram Video Embed - Using a generic/placeholder for Speed Reading since none was specified */}
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
                <div className="w-full overflow-hidden bg-white border-t border-slate-50 flex items-center justify-center min-h-[400px] text-slate-400 text-sm">
                  {/* Note: I'm leaving this as a placeholder since there wasn't a specific video given for Speed Reading. In a real scenario, we'd embed the actual instagram link here. */}
                  <div className="flex flex-col items-center gap-3">
                    <BookMarked className="w-12 h-12 text-slate-200" />
                    <p>Live Demo Coming Soon</p>
                  </div>
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
            <span className="bg-cyan-50 text-cyan-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Support</span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-none uppercase">Got Questions?</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: 'Who is this program for — kids or adults?', a: 'Both. Speed Reading is suitable for any age — from school-going children to working professionals. The techniques are the same; the reading material used in sessions is adapted to the student\'s age and context.' },
              { q: 'How is Speed Reading different from Quantum Speed Reading?', a: 'Speed Reading trains the eyes and brain to read faster conventionally — higher WPM, better comprehension, eliminated subvocalisation. Quantum Speed Reading is a different technique entirely, inspired by Swami Vivekananda, where the brain absorbs content by fanning through a book without reading page by page. Both are offered by SmartBrains India as separate programs.' },
              { q: 'How many sessions and how long is each?', a: '15 sessions, each 1.5 hours. Sessions include a Brain Yoga warm-up, a technique training block and an improvement session with real reading practice.' },
              { q: 'How soon will I see a difference in reading speed?', a: 'Most students notice a measurable difference from Session 3 onwards. By Session 10, the improvement is significant enough that daily reading habits change noticeably.' },
              { q: 'Is the online batch equally effective?', a: 'Yes. The same certified trainer, curriculum and session structure apply online. All timed reading exercises and comprehension tests are fully adapted for online delivery.' },
              { q: 'What does ₹8,000 include?', a: 'All 15 sessions, training materials and the completion certificate. No hidden charges.' }
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent)] pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-20 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none uppercase mb-6">Ready to Unlock Your Potential?</h2>
          <p className="text-cyan-200 text-lg mb-12 max-w-2xl mx-auto">Book a Free Demo Session or talk to our experts today.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 h-16 px-12 rounded-2xl font-black text-lg shadow-xl shadow-cyan-900/40 uppercase tracking-wider transition-all hover:scale-105"><Link href="tel:+917396447470">Call Us Now: +91 7396447470</Link></Button>
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
