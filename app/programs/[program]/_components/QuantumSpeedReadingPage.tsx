'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import { CheckCircle, Brain, Target, Star, ArrowLeft, Heart, BookOpen, Quote, ChevronLeft, ChevronRight, Instagram, Sparkles, Zap, Trophy, Users, Calendar, Eye, ZapOff, Timer, Gauge, Shield, ArrowRight, Mail, Phone, MessageSquare } from 'lucide-react';

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

/* ─── Book Absorber Widget ─── */
const REAL_WORDS = ['RIVER', 'GOLDEN', 'SILENCE', 'MOUNTAIN', 'ANCIENT', 'WISDOM', 'FLAME', 'MIRROR'];
const FILLER_WORDS = ['SHADOW', 'BRIDGE', 'FOREST', 'CRYSTAL', 'THUNDER', 'JOURNEY', 'TEMPLE', 'LIGHT', 'STONE', 'CIRCLE', 'RISING', 'DEPTH', 'HOLLOW', 'SPARK', 'WATER', 'WIND'];

function BookAbsorber() {
  const [step, setStep] = useState<'intro' | 'fanning' | 'recall' | 'results'>('intro');
  const [timer, setTimer] = useState(5);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [gameWords, setGameWords] = useState<{ word: string; isReal: boolean }[]>([]);
  const [currentRealWords, setCurrentRealWords] = useState<string[]>([]);
  const [pages, setPages] = useState<{ id: number; words: string[]; tilt: number }[]>([]);

  // Step 2: Fanning Logic
  useEffect(() => {
    if (step !== 'fanning') return;

    const startTime = Date.now();
    const duration = 5000;
    
    const timerInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, (duration - elapsed) / 1000);
      setTimer(remaining);
      if (remaining === 0) {
        clearInterval(timerInterval);
        setTimeout(() => setStep('recall'), 500);
      }
    }, 50);

    let pageId = 0;
    const pageInterval = setInterval(() => {
      const newPage = {
        id: pageId++,
        words: [...REAL_WORDS, ...FILLER_WORDS].sort(() => 0.5 - Math.random()).slice(0, 4),
        tilt: Math.random() * 6 - 3
      };
      setPages(prev => [...prev.slice(-10), newPage]);
    }, 100);

    return () => {
      clearInterval(timerInterval);
      clearInterval(pageInterval);
    };
  }, [step]);

  const startGame = () => {
    // Pick 5 real words and 7 fillers
    const selectedReal = [...REAL_WORDS].sort(() => 0.5 - Math.random()).slice(0, 5);
    const selectedFillers = [...FILLER_WORDS].sort(() => 0.5 - Math.random()).slice(0, 7);
    const combined = [
      ...selectedReal.map(w => ({ word: w, isReal: true })),
      ...selectedFillers.map(w => ({ word: w, isReal: false }))
    ].sort(() => 0.5 - Math.random());
    
    setGameWords(combined);
    setCurrentRealWords(selectedReal);
    setSelectedWords([]);
    setStep('fanning');
    setTimer(5);
  };

  const toggleWord = (word: string) => {
    setSelectedWords(prev => 
      prev.includes(word) ? prev.filter(w => w !== word) : [...prev, word]
    );
  };

  const score = selectedWords.filter(w => currentRealWords.includes(w)).length;

  return (
    <section className="py-20 bg-white border-y border-slate-100 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10 max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <Zap className="w-3.5 h-3.5" /> Interactive Challenge
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.05] uppercase mb-6">
            Can your brain absorb<br />
            <span className="text-indigo-600">without reading a word?</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Fan through a virtual book in 5 seconds — then see what your right brain quietly absorbed. The same exercise children do in the QSR workshop.
          </p>
        </div>

        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-200 shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col justify-center">
          
          {step === 'intro' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center max-w-2xl mx-auto">
              <div className="mb-10 flex justify-center">
                {/* CSS Book Graphic */}
                <div className="relative w-32 h-44 bg-indigo-600 rounded-r-xl shadow-xl transform hover:-rotate-6 transition-transform cursor-pointer group">
                  <div className="absolute inset-y-0 left-0 w-3 bg-indigo-800 rounded-l-sm" />
                  <div className="absolute inset-y-1 right-1 w-2 flex flex-col gap-0.5 opacity-30">
                    {[...Array(20)].map((_, i) => (
                      <div key={i} className="h-[1px] w-full bg-white" />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-10 h-10 text-white/40 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight uppercase">
                Swami Vivekananda absorbed entire books by fanning through the pages.
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                He never read word by word. He allowed his right brain to absorb the content — and could recall it completely. In this challenge, you will fan through a virtual book in 5 seconds. Do not try to read. Just let your brain absorb.
              </p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Takes less than 60 seconds</p>
              
              <Button onClick={startGame} size="lg" className="bg-indigo-600 hover:bg-indigo-700 h-16 px-12 rounded-2xl font-black text-lg shadow-xl shadow-indigo-100 uppercase tracking-wider mb-8 group">
                Start Fanning
                <Zap className="ml-3 w-5 h-5 group-hover:scale-125 transition-transform" />
              </Button>

              <div className="p-5 bg-white rounded-2xl border border-slate-200 text-sm text-slate-500 font-medium leading-relaxed italic">
                &quot;This is the exact technique children learn in the SmartBrains QSR workshop — except they do it with real books, and recall entire chapters.&quot;
              </div>
            </motion.div>
          )}

          {step === 'fanning' && (
            <div className="flex flex-col items-center justify-center flex-1">
              {/* Timer Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-slate-200 overflow-hidden">
                <motion.div 
                  initial={{ width: '100%' }}
                  animate={{ width: '0%' }}
                  transition={{ duration: 5, ease: 'linear' }}
                  className="h-full bg-indigo-600"
                />
              </div>
              
              <div className="mb-8 text-center">
                <span className="text-sm font-black text-indigo-600 uppercase tracking-widest block mb-1">Fanning</span>
                <span className="text-3xl font-black text-slate-900">{Math.ceil(timer)} seconds remaining</span>
              </div>

              {/* Fanning Pages Container */}
              <div className="relative w-full max-w-md h-80 perspective-[1000px] overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm border border-white shadow-inner flex items-center justify-center">
                {pages.map((page) => (
                  <motion.div
                    key={page.id}
                    initial={{ x: '120%', opacity: 0 }}
                    animate={{ x: '-120%', opacity: 1 }}
                    transition={{ duration: 0.3, ease: 'linear' }}
                    style={{ rotate: page.tilt }}
                    className="absolute w-64 h-80 bg-white border border-slate-100 shadow-lg p-8 flex flex-col justify-around items-center rounded-lg"
                  >
                    {page.words.map((word, i) => (
                      <span 
                        key={i} 
                        className="text-slate-900 font-black tracking-tighter blur-[0.6px] opacity-70"
                        style={{ 
                          fontSize: `${Math.random() * 4 + 13}px`,
                          transform: `rotate(${Math.random() * 10 - 5}deg) translateX(${Math.random() * 20 - 10}px)`
                        }}
                      >
                        {word}
                      </span>
                    ))}
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-xl font-medium text-slate-500 italic animate-pulse">
                  &quot;Don&apos;t try to read. Breathe. Let your right brain absorb.&quot;
                </p>
              </div>
            </div>
          )}

          {step === 'recall' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
              <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight text-center">
                Which of these words were in the book?
              </h3>
              <p className="text-slate-600 mb-10 text-center max-w-xl">
                Select every word you sensed — even if you are not sure. Trust what comes to you first.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mb-12">
                {gameWords.map(({ word }) => (
                  <button
                    key={word}
                    onClick={() => toggleWord(word)}
                    className={`h-16 rounded-xl border-2 transition-all font-black text-sm uppercase tracking-wider ${
                      selectedWords.includes(word)
                        ? 'bg-[#EEEDFE] border-[#534AB7] text-[#3C3489] scale-105 shadow-lg'
                        : 'bg-white border-slate-200 text-slate-400 hover:border-indigo-200 hover:text-indigo-400'
                    }`}
                  >
                    {word}
                  </button>
                ))}
              </div>

              <div className="flex flex-col items-center gap-6">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  {selectedWords.length} words selected
                </span>
                <Button 
                  disabled={selectedWords.length === 0}
                  onClick={() => setStep('results')}
                  className="bg-indigo-600 hover:bg-indigo-700 h-16 px-12 rounded-2xl font-black text-lg shadow-xl shadow-indigo-100 uppercase tracking-wider disabled:opacity-30"
                >
                  Reveal what your brain absorbed
                </Button>
              </div>
            </motion.div>
          )}

          {step === 'results' && (
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center">
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mb-12">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                  <div className="text-indigo-600 text-4xl font-black mb-1">{score} <span className="text-lg">/ 5</span></div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Your Score</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                  <div className="text-slate-900 text-4xl font-black mb-1">1–2 <span className="text-lg">/ 5</span></div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Untrained Average</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-indigo-100 shadow-md text-center ring-4 ring-indigo-50">
                  <div className="text-indigo-600 text-4xl font-black mb-1">4–5 <span className="text-lg">/ 5</span></div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">After QSR Training</div>
                </div>
              </div>

              {/* Word Results Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mb-8">
                {gameWords.map(({ word, isReal }) => {
                  const isSelected = selectedWords.includes(word);
                  let styles = 'bg-white/50 border-slate-100 text-slate-300 opacity-40';
                  let badge = null;

                  if (isReal && isSelected) {
                    styles = 'bg-[#E1F5EE] border-[#1D9E75] text-[#085041] scale-105 shadow-md z-10';
                    badge = 'In the book';
                  } else if (!isReal && isSelected) {
                    styles = 'bg-[#FCEBEB] border-[#E24B4A] text-[#A32D2D]';
                    badge = 'Not in book';
                  } else if (isReal && !isSelected) {
                    styles = 'bg-[#FAEEDA] border-[#EF9F27] text-[#854F0B]';
                    badge = 'You missed this';
                  }

                  return (
                    <div key={word} className={`h-20 rounded-xl border-2 flex flex-col items-center justify-center transition-all p-2 ${styles}`}>
                      <span className="font-black text-sm uppercase tracking-wider">{word}</span>
                      {badge && <span className="text-[9px] font-black uppercase tracking-tighter mt-1 opacity-70">{badge}</span>}
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap justify-center gap-6 mb-12 text-[10px] font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-[#E1F5EE] border border-[#1D9E75]" /> <span className="text-emerald-700">Your brain caught it</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-[#FCEBEB] border border-[#E24B4A]" /> <span className="text-rose-700">Not in the book</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-[#FAEEDA] border border-[#EF9F27]" /> <span className="text-amber-700">Your brain missed it</span></div>
              </div>

              {/* Dynamic Result Message */}
              <div className="text-center max-w-2xl mb-12">
                <h4 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 uppercase">
                  {score >= 4 ? `Extraordinary — ${score} out of 5!` :
                   score === 3 ? `Strong — ${score} out of 5.` :
                   score === 2 ? `${score} out of 5 — your right brain is listening.` :
                   `${score} out of 5 — the untrained result.`}
                </h4>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {score >= 4 ? "Your right brain absorbed words it never consciously read. This is the raw faculty that Quantum Speed Reading training develops into a complete skill — where children absorb not just words, but entire chapters, by fanning through a real book." :
                   score === 3 ? "Your right brain caught more than chance would predict. With QSR training, this latent ability is developed until children can fan through an entire book in under 10 minutes and recall its content accurately." :
                   score === 2 ? "You absorbed some content without reading a single word. QSR training strengthens exactly this faculty — until fanning through a book becomes a reliable, repeatable skill rather than an occasional sensing." :
                   "The conscious mind tries to read — and at fanning speed, catches nothing. QSR training bypasses the conscious mind entirely, teaching the right brain to absorb what the eyes cannot process. Every child starts here. No child stays here."}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 h-16 px-10 rounded-2xl font-black text-lg shadow-xl shadow-indigo-100 uppercase tracking-wider">
                  <Link href="/contact">Book a free demo</Link>
                </Button>
                <Button variant="outline" onClick={() => setStep('intro')} size="lg" className="h-16 px-10 rounded-2xl font-black text-lg uppercase tracking-wider border-slate-200">
                  Try Again
                </Button>
              </div>
            </motion.div>
          )}

        </div>

        {/* Program Comparison Callout */}
        <div className="mt-20 pt-20 border-t border-slate-100">
          <div className="text-center mb-12">
            <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Not sure which reading program is right?</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest self-start mb-4">Measurable WPM gains</span>
              <h5 className="text-xl font-black text-slate-900 mb-3 uppercase">Speed Reading</h5>
              <p className="text-slate-600 text-sm mb-6 flex-1 leading-relaxed">Train your eyes and brain to read 3–5x faster with full comprehension. 15 structured sessions for all ages.</p>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">15 sessions · ₹8,000 · All ages</div>
              <Button asChild variant="link" className="text-indigo-600 p-0 h-auto font-black uppercase text-xs justify-start group">
                <Link href="/programs/speed-reading" className="flex items-center">
                  View Program <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="bg-indigo-50/30 p-8 rounded-3xl border-2 border-indigo-100 shadow-lg flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-100/50 rounded-bl-[100px] pointer-events-none" />
              <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-widest self-start mb-4">Intuitive absorption</span>
              <h5 className="text-xl font-black text-slate-900 mb-3 uppercase">Quantum Speed Reading</h5>
              <p className="text-slate-600 text-sm mb-6 flex-1 leading-relaxed">Inspired by Swami Vivekananda — absorb entire books by fanning through pages. Right brain dominant. A completely different skill.</p>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">2 days · ₹10,000 · Age 5–17</div>
              <Button asChild variant="link" className="text-indigo-600 p-0 h-auto font-black uppercase text-xs justify-start group">
                <Link href="/programs/quantum-speed-reading" className="flex items-center">
                  View Program <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-500 font-medium mb-4">Still unsure? Call us — we will guide you to the right program.</p>
            <div className="flex flex-wrap justify-center gap-6 font-black text-slate-900">
              <Link href="tel:+917396447470" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                <Phone className="w-5 h-5 text-indigo-600" /> +91 7396447470
              </Link>
              <Link href="https://wa.me/917386209090" target="_blank" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                <MessageSquare className="w-5 h-5 text-emerald-500" /> WhatsApp Support
              </Link>
            </div>
          </div>
        </div>
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
        <span className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
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
                <Button onClick={startReading} size="lg" className="bg-indigo-600 hover:bg-indigo-700 h-14 px-12 rounded-2xl font-black text-base shadow-lg shadow-indigo-100 uppercase tracking-wider group">
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
                  className="h-full bg-indigo-500 transition-all duration-500"
                  style={{ width: `${Math.min((elapsed / 120) * 100, 100)}%` }}
                />
              </div>
              <div className="p-8 md:p-12">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-black text-indigo-600 uppercase tracking-widest">Reading…</span>
                  <span className="text-2xl font-black text-slate-900 tabular-nums">{elapsed.toFixed(1)}s</span>
                </div>
                <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm mb-8 relative">
                  <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
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
                <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-6 mb-8">
                  <h4 className="font-black text-slate-900 text-lg uppercase mb-2 tracking-tight">{result.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{result.body}</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 h-14 px-10 rounded-2xl font-black uppercase tracking-wider shadow-lg shadow-indigo-100">
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
              <Link href="tel:+917396447470" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
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

      {/* 2. Measurable Impact / Proven Results */}
      <section className="relative z-30 -mt-8 sm:-mt-12 px-6 lg:px-20 mb-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                value: '< 10 Mins',
                label: 'Full Book Absorbed',
                desc: 'Students can absorb an entire book with comprehension in minutes.',
                icon: Timer,
                colorTheme: 'indigo'
              },
              {
                value: 'Right Brain',
                label: 'Visual Absorption',
                desc: 'Activates the right brain to process information as images, not words.',
                icon: Brain,
                colorTheme: 'purple'
              },
              {
                value: 'Improved',
                label: 'Academic Scores',
                desc: 'Dramatic reduction in study time with significantly higher retention.',
                icon: Target,
                colorTheme: 'blue'
              },
              {
                value: '100%',
                label: 'Supervised & Safe',
                desc: 'Scientifically backed methods conducted by expert facilitators.',
                icon: Shield,
                colorTheme: 'emerald'
              }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              const styles = {
                indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100' },
                purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100' },
                blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' },
                emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100' },
              }[stat.colorTheme as 'indigo' | 'purple' | 'blue' | 'emerald'];

              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-2xl shadow-[0_15px_40px_rgba(8,112,184,0.06)] flex flex-col transform hover:-translate-y-1.5 transition-all duration-300 border border-slate-100 group relative overflow-hidden"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${styles.bg} ${styles.text}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className={`text-2xl font-black font-sans tracking-tight ${styles.text}`}>
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

      {/* 3. Discover Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Content Side */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-sm font-semibold tracking-wide text-indigo-600 uppercase">
                  Discover The Science
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase mb-6">
                  What is Quantum Speed Reading?
                </h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Swami Vivekananda was known to read entire library books overnight — not by reading each page, but by absorbing them. His guru Sri Ramakrishna Paramahamsa described this as the activation of the brain&apos;s deepest intuitive faculty — the ability to receive knowledge directly, beyond the linear process of reading.
                  </p>
                  <p>
                    Modern brain science calls this right brain visual absorption. When the right hemisphere is sufficiently activated, it can process large volumes of visual and written information simultaneously — the same way it processes a scene, a painting or a face in a single glance rather than piece by piece.
                  </p>
                  <p>
                    Quantum Speed Reading trains this exact faculty. Children learn to hold a book, fan or flip through it at speed, and allow the right brain to absorb the content — which they can then recall, summarise and apply.
                  </p>
                </div>
              </div>

              <div className="bg-indigo-50/50 border border-indigo-100 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 opacity-5 text-indigo-900">
                  <Sparkles className="w-64 h-64" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3 relative z-10">
                  <span className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                    <Brain className="w-5 h-5" />
                  </span>
                  Ancient Wisdom. Modern Brain Science.
                </h3>
                <p className="text-slate-700 leading-relaxed relative z-10">
                  Swami Vivekananda&apos;s ability to absorb books was not considered magic — it was considered the natural result of a highly trained, deeply focused mind. He would fan through pages with his eyes, and the content would become available to him as if he had read every word. Every child already has this faculty within them. The program simply awakens it.
                </p>
              </div>

              {/* Safety Note Card */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 flex items-start gap-4 shadow-sm relative overflow-hidden">
                <div className="bg-white p-3 rounded-xl shadow-sm text-emerald-600 shrink-0 relative z-10">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="relative z-10">
                  <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-sm">Important Safety Note</h4>
                  <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                    This is a 100% safe, science-backed program. There are no religious rituals, magic, or supernatural claims. All activities are conducted by trained facilitators in a controlled, child-friendly environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-72 h-[400px] md:w-96 md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white group">
                <Image
                  src="/images/Swami_Vivekananda_1893_Scanned_Image.jpg"
                  alt="Swami Vivekananda"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-black text-lg shadow-sm" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Swami Vivekananda</p>
                  <p className="text-indigo-100 text-sm font-medium" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>The Inspiration Behind QSR</p>
                </div>
              </div>

              {/* Decorative floating dots behind image */}
              <div className="absolute top-10 -right-10 w-24 h-24 bg-[radial-gradient(circle,rgba(79,70,229,0.2)_2px,transparent_2px)] bg-[length:12px_12px] -z-10" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[radial-gradient(circle,rgba(168,85,247,0.2)_2px,transparent_2px)] bg-[length:12px_12px] -z-10" />
            </div>

          </div>
        </div>
      </section>

      {/* 4. Main Content Grid */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 lg:items-start">
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

              {/* WPM Calculator Widget */}
              <WpmCalculator featuredProgram="qsr" />

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
              <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col">
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
                <div className="relative w-full aspect-[4/5] sm:aspect-square overflow-hidden bg-[#111] border-t border-slate-50">
                  <iframe
                    src="https://www.instagram.com/p/DRFpugekye9/embed/"
                    className="absolute top-[-54px] left-[-2px] w-[calc(100%+4px)] h-[800px] border-0"
                    allowFullScreen
                    allow="encrypted-media"
                    sandbox="allow-scripts allow-same-origin allow-presentation"
                    scrolling="no"
                    title="QSR Demo"
                  />
                  {/* Overlay to blend bottom crop */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111] to-transparent pointer-events-none" />
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
                <h3 className="text-[1.35rem] font-bold text-gray-900 mb-6 tracking-tight uppercase">Related Programs</h3>
                <div className="space-y-2">
                  <Link href="/programs/speed-reading" className="block p-3 -mx-3 rounded-xl hover:bg-slate-50 transition-colors group">
                    <div className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">Speed Reading</div>
                    <div className="text-sm text-slate-500 mt-0.5">Rapid reading with perfect comprehension</div>
                  </Link>
                  <Link href="/programs/photographic-memory" className="block p-3 -mx-3 rounded-xl hover:bg-slate-50 transition-colors group">
                    <div className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">Photographic Memory</div>
                    <div className="text-sm text-slate-500 mt-0.5">Perfect memory recall & learning</div>
                  </Link>
                  <Link href="/programs/midbrain-activation" className="block p-3 -mx-3 rounded-xl hover:bg-slate-50 transition-colors group">
                    <div className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">Midbrain Activation</div>
                    <div className="text-sm text-slate-500 mt-0.5">Unlock the power of intuition</div>
                  </Link>
                </div>
              </div>

              {/* Expected Results */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 overflow-hidden relative flex-1 flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <h3 className="text-[1.35rem] font-bold text-gray-900 mb-6 uppercase tracking-tight relative z-10">Expected Results</h3>
                <div className="space-y-4 flex-1 flex flex-col justify-center relative z-10">
                  {[
                    "First visible right brain absorption result by end of Day 1",
                    "Child can fan through a short book and recall key content accurately by Day 2",
                    "Study time reduced significantly within 30 days of regular practice",
                    "Sustained growth in absorption ability through follow-ups and daily fanning practice"
                  ].map((res, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 transform hover:scale-[1.02] transition-transform">
                      <div className="bg-white p-2 rounded-xl shadow-sm font-bold text-indigo-600 text-[10px] uppercase tracking-tighter ring-1 ring-slate-100 shrink-0 mt-0.5">Success</div>
                      <span className="text-slate-700 font-bold text-sm leading-tight">{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Interactive Widget */}
      <BookAbsorber />

      {/* 5. Carousel */}
      <TestimonialsCarousel />

      {/* 6. FAQ */}
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
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
