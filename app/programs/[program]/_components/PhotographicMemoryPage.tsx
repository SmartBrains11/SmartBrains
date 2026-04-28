'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Brain, Target, Shield, Clock, MapPin, Monitor, Star, ArrowRight, Play, Users, Calendar, ArrowLeft, Heart, BookOpen, Quote, Phone, HelpCircle, Eye, Award, Mail, ChevronLeft, ChevronRight, Instagram, Sparkles, Zap, Timer, Triangle, Circle, Square, Sun, Clover, Moon, Bell, Crown, Leaf, Gem, Diamond, ArrowUp } from 'lucide-react';

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
    name: 'Lakshmi Devi',
    role: 'Parent of daughter, age 11',
    location: 'Hyderabad',
    content: "My daughter used to read a chapter three times before remembering it. After 8 sessions at SmartBrains, she reads once and can recall it the next morning. Her exam scores have improved and more importantly, she's not stressed before tests anymore.",
    accent: 'from-blue-500 to-indigo-500',
    accentLight: 'bg-blue-50 text-blue-600',
  },
  {
    name: 'Venkat Rao',
    role: 'Parent of son, age 13',
    location: 'Vizianagaram',
    content: "My son was convinced he had a 'bad memory' and that studying was just hard for him. The Memory Palace technique changed everything. He now memorizes science diagrams and history dates like a game. His self-confidence has completely transformed.",
    accent: 'from-orange-500 to-amber-500',
    accentLight: 'bg-orange-50 text-orange-600',
  },
  {
    name: 'Sunitha Murthy',
    role: 'Parent of twins, age 9',
    location: 'Hyderabad',
    content: "I enrolled my twins together and the competition between them made it even more fun. Both finished the 20 sessions and their school teachers have noticed the difference — one teacher asked me what tuition centre they go to. I said it's not tuition, it's memory training!",
    accent: 'from-purple-500 to-fuchsia-500',
    accentLight: 'bg-purple-50 text-purple-600',
  },
  {
    name: 'Farida Begum',
    role: 'Parent of daughter, age 10',
    location: 'Online batch',
    content: "We joined the online batch and were worried it wouldn't be as effective. But the trainer kept my daughter fully engaged every session. The brain yoga at the start is something she now does on her own every morning before studying. Results have been wonderful.",
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
      <div className="absolute bottom-0 left-0 w-[25%] h-[40%] bg-orange-50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-sm font-semibold tracking-wide text-blue-600 uppercase">Success Stories</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">VOICES OF OUR PARENTS</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">Real feedback from families who have seen incredible growth in their children&apos;s memory and focus.</p>
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
                <Quote className="w-10 h-10 text-slate-100 group-hover:text-blue-50 transition-colors" />
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

/* ─── Memory Test Component ─── */
const ITEM_POOL = [
  { id: 'triangle', label: 'Triangle', icon: Triangle },
  { id: 'circle', label: 'Circle', icon: Circle },
  { id: 'diamond', label: 'Diamond', icon: Diamond },
  { id: 'square', label: 'Square', icon: Square },
  { id: 'star', label: 'Star', icon: Star },
  { id: 'arrow', label: 'Arrow', icon: ArrowUp },
  { id: 'sun', label: 'Sun', icon: Sun },
  { id: 'heart', label: 'Heart', icon: Heart },
  { id: 'club', label: 'Club', icon: Clover },
  { id: 'spade', label: 'Spade', icon: Target }, // Using Target as a proxy for Spade
  { id: 'gem', label: 'Gem', icon: Gem },
  { id: 'peace', label: 'Peace', icon: Shield }, // Using Shield as a proxy for Peace
  { id: 'moon', label: 'Moon', icon: Moon },
  { id: 'bell', label: 'Bell', icon: Bell },
  { id: 'crown', label: 'Crown', icon: Crown },
  { id: 'leaf', label: 'Leaf', icon: Leaf },
];

const COLORS = [
  { bg: '#EEEDFE', text: '#534AB7' },
  { bg: '#E1F5EE', text: '#0F6E56' },
  { bg: '#FAEEDA', text: '#854F0B' },
  { bg: '#FAECE7', text: '#993C1D' },
  { bg: '#E6F1FB', text: '#185FA5' },
  { bg: '#EAF3DE', text: '#3B6D11' },
  { bg: '#FBEAF0', text: '#993556' },
  { bg: '#F1EFE8', text: '#5F5E5A' },
];

function MemoryTest() {
  const [step, setStep] = useState(1);
  const [items, setItems] = useState<any[]>([]);
  const [shownIds, setShownIds] = useState<string[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(10);

  const startTest = () => {
    const shuffled = [...ITEM_POOL].sort(() => Math.random() - 0.5);
    const selected12 = shuffled.slice(0, 12).map((item, idx) => ({ ...item, color: COLORS[idx % COLORS.length] }));
    const distractor4 = shuffled.slice(12, 16).map((item, idx) => ({ ...item, color: COLORS[(idx + 12) % COLORS.length] }));
    
    setItems([...selected12, ...distractor4].sort(() => Math.random() - 0.5));
    setShownIds(selected12.map(i => i.id));
    setStep(2);
    setTimeLeft(10);
    setSelectedIds([]);
  };

  useEffect(() => {
    if (step === 2) {
      if (timeLeft > 0) {
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        setStep(3);
      }
    }
  }, [step, timeLeft]);

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(i => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const getResults = () => {
    const recalled = selectedIds.filter(id => shownIds.includes(id)).length;
    let message = "";
    if (recalled >= 10) message = `Outstanding — ${recalled} out of 12! Your visual memory is already very strong. Photographic Memory training takes this to a level where your child recalls 12 out of 12 every single time — not when lucky, but on demand.`;
    else if (recalled >= 7) message = `Above average — ${recalled} out of 12. With Photographic Memory training, children at your level consistently reach 11–12 out of 12 within 20 sessions using visualization and memory palace techniques.`;
    else if (recalled >= 4) message = `${recalled} out of 12 — average untrained recall. This is exactly the gap the program closes. Trained children remember all 12 — not through repetition, but through a system that makes forgetting nearly impossible.`;
    else message = `${recalled} out of 12 — more common than you think. The brain was never taught HOW to remember. Photographic Memory training gives children a complete system — and within 20 sessions, recalling 12 out of 12 becomes effortless.`;

    return { recalled, message };
  };

  if (step === 1) {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-teal-50 text-center">
        <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-8">
          <Eye className="w-10 h-10 text-teal-600" />
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">How many can you remember?</h3>
        <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          You will see 12 items for just 10 seconds. Then they disappear. Select every item you remember from a larger set. This is the gap Photographic Memory training closes.
        </p>
        <div className="text-sm text-slate-400 mb-8 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
          <Clock className="w-4 h-4" /> Takes about 60 seconds
        </div>
        <Button onClick={startTest} className="bg-teal-600 hover:bg-teal-700 h-14 px-10 rounded-2xl text-lg font-black uppercase tracking-wider">Start the test</Button>
      </div>
    );
  }

  if (step === 2) {
    const shownItems = items.filter(i => shownIds.includes(i.id));
    return (
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-teal-50">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h3 className="text-xl font-black text-slate-900 uppercase">Memorise these 12 items — {timeLeft}s remaining</h3>
          <div className="w-full md:w-64 h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 10, ease: 'linear' }}
              className="h-full bg-green-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mb-10">
          {shownItems.map((item) => (
            <div key={item.id} className="aspect-square rounded-2xl flex flex-col items-center justify-center p-4 transition-transform hover:scale-105" style={{ backgroundColor: item.color.bg }}>
              <item.icon className="w-10 h-10 mb-2" style={{ color: item.color.text }} />
              <span className="text-[10px] font-black uppercase tracking-tighter" style={{ color: item.color.text }}>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="bg-blue-50 p-4 rounded-xl flex items-center gap-3 border border-blue-100">
          <Brain className="w-5 h-5 text-blue-600 shrink-0" />
          <p className="text-sm text-blue-700 font-bold leading-tight">Look carefully. Don&apos;t write anything down. Use only your memory.</p>
        </div>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-teal-50">
        <div className="mb-8">
          <h3 className="text-xl font-black text-slate-900 uppercase">Now recall — select every item you saw</h3>
          <div className="mt-4 bg-teal-50 p-4 rounded-xl flex items-center justify-between border border-teal-100">
            <p className="text-sm text-teal-700 font-bold">Tap everything you remember seeing.</p>
            <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-black">{selectedIds.length} SELECTED</span>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {items.map((item) => (
            <button 
              key={item.id} 
              onClick={() => toggleSelect(item.id)}
              className={`aspect-square rounded-2xl flex flex-col items-center justify-center p-4 border-4 transition-all ${selectedIds.includes(item.id) ? 'border-teal-500 scale-105 shadow-lg' : 'border-transparent hover:bg-slate-50'}`} 
              style={{ backgroundColor: item.color.bg }}
            >
              <item.icon className="w-10 h-10 mb-2" style={{ color: item.color.text }} />
              <span className="text-[10px] font-black uppercase tracking-tighter" style={{ color: item.color.text }}>{item.label}</span>
            </button>
          ))}
        </div>
        <Button onClick={() => setStep(4)} className="w-full bg-teal-600 hover:bg-teal-700 h-14 rounded-2xl text-lg font-black uppercase tracking-wider shadow-lg shadow-teal-100">Submit my answers</Button>
      </div>
    );
  }

  const results = getResults();
  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-teal-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100 text-center">
          <div className="text-3xl font-black text-teal-600 mb-1">{results.recalled}/12</div>
          <div className="text-[10px] font-black text-teal-700 uppercase tracking-widest">You Recalled</div>
        </div>
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
          <div className="text-3xl font-black text-slate-400 mb-1">5–6/12</div>
          <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Average Untrained</div>
        </div>
        <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 text-center">
          <div className="text-3xl font-black text-indigo-600 mb-1">11–12</div>
          <div className="text-[10px] font-black text-indigo-700 uppercase tracking-widest">After Training</div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {items.map((item) => {
          const isShown = shownIds.includes(item.id);
          const isSelected = selectedIds.includes(item.id);
          let statusStyle = "opacity-30";
          let borderStyle = "border-transparent";
          let bgColor = item.color.bg;

          if (isShown && isSelected) {
            statusStyle = "opacity-100";
            borderStyle = "border-[#1D9E75] border-4";
            bgColor = "#E1F5EE";
          } else if (!isShown && isSelected) {
            statusStyle = "opacity-100";
            borderStyle = "border-[#E24B4A] border-4";
            bgColor = "#FCEBEB";
          } else if (isShown && !isSelected) {
            statusStyle = "opacity-100";
            borderStyle = "border-[#EF9F27] border-4";
            bgColor = "#FAEEDA";
          }

          return (
            <div 
              key={item.id} 
              className={`aspect-square rounded-2xl flex flex-col items-center justify-center p-4 ${statusStyle} ${borderStyle}`} 
              style={{ backgroundColor: bgColor }}
            >
              <item.icon className="w-10 h-10 mb-2" style={{ color: item.color.text }} />
              <span className="text-[10px] font-black uppercase tracking-tighter" style={{ color: item.color.text }}>{item.label}</span>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-12 text-[10px] font-black uppercase tracking-widest text-slate-500">
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-[#E1F5EE] border border-[#1D9E75]" /> Correct</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-[#FCEBEB] border border-[#E24B4A]" /> Wrong Pick</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-[#FAEEDA] border border-[#EF9F27]" /> Missed</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-slate-100" /> Not Shown</div>
      </div>

      <div className="bg-slate-900 text-white p-8 rounded-3xl mb-12 relative overflow-hidden text-center">
        <Sparkles className="absolute -top-6 -right-6 w-24 h-24 opacity-10" />
        <p className="text-lg md:text-xl font-medium leading-relaxed relative z-10">{results.message}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-20">
        <Button asChild className="flex-1 bg-teal-600 hover:bg-teal-700 h-16 rounded-2xl text-lg font-black uppercase tracking-wider shadow-lg shadow-teal-100"><Link href="/contact">Book a free demo</Link></Button>
        <Button onClick={() => setStep(1)} variant="outline" className="flex-1 border-slate-200 hover:bg-slate-50 h-16 rounded-2xl text-lg font-black uppercase tracking-wider">Try again</Button>
      </div>

      {/* Program Callout */}
      <div className="border-t border-slate-100 pt-16">
        <h4 className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Explore programs</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-8 border-2 border-teal-500/30 shadow-xl relative overflow-hidden group">
            <div className="absolute top-4 right-4 bg-teal-50 text-teal-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">Memory & recall</div>
            <h5 className="text-xl font-black text-slate-900 mb-4 uppercase mt-2">Photographic Memory</h5>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">20 sessions of visualization, memory palace and association techniques — see once, recall forever.</p>
            <div className="flex items-center gap-4 text-[10px] font-black uppercase text-teal-600 bg-teal-50/50 p-3 rounded-xl w-fit">
              <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> 20 sessions</div>
              <div className="w-1 h-1 rounded-full bg-teal-200" />
              <div className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Age 5–17</div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 relative group transition-colors hover:bg-white hover:border-blue-200">
            <div className="absolute top-4 right-4 bg-slate-200 text-slate-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider group-hover:bg-blue-50 group-hover:text-blue-600">Intuition & sensing</div>
            <h5 className="text-xl font-black text-slate-900 mb-4 uppercase mt-2">Midbrain Activation</h5>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">2-day workshop that awakens the right brain — blindfold sensing, sixth sense and whole-brain learning.</p>
            <div className="flex items-center gap-4 text-[10px] font-black uppercase text-slate-500 group-hover:text-blue-600 bg-slate-100 group-hover:bg-blue-50/50 p-3 rounded-xl w-fit">
              <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> 2 days</div>
              <div className="w-1 h-1 rounded-full bg-slate-200" />
              <div className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Age 5–17</div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-4">Book a free demo or call us</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="tel:+917396447470" className="text-slate-900 font-black text-lg flex items-center gap-3 hover:text-blue-600 transition-colors">
              <Phone className="w-5 h-5 text-blue-600" /> +91 7396447470
            </Link>
            <Link href="https://wa.me/917386209090" target="_blank" className="text-slate-900 font-black text-lg flex items-center gap-3 hover:text-green-600 transition-colors">
              <Zap className="w-5 h-5 text-green-500" /> WhatsApp Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PhotographicMemoryPage() {
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
            <span className="text-gray-900">Photographic Memory</span>
          </div>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="show" variants={STAGGER} className="text-left">
              <motion.div variants={FADE_UP}>
                <Link href="/programs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Programs
                </Link>
              </motion.div>
              <motion.h1 variants={FADE_UP} className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tight">Photographic Memory</motion.h1>
              <motion.p variants={FADE_UP} className="text-xl text-blue-600 font-medium mb-6">Train Your Child&apos;s Brain to Remember Everything — Faster, Clearer, Longer</motion.p>
              <motion.p variants={FADE_UP} className="text-lg text-gray-600 mb-8 leading-relaxed">The Photographic Memory Program is a structured 20-session course that teaches children advanced memory techniques used by memory champions and top academic performers worldwide. Through visualization, association, and memory palace methods — combined with daily brain yoga and meditation — your child develops the ability to absorb, retain and recall information with extraordinary accuracy.</motion.p>
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><Link href="/contact">Enquire For Next Batch</Link></Button>
                <Button asChild variant="outline" size="lg"><Link href="tel:+917396447470">Call to Know More</Link></Button>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
              <img src="/images/photograhic-memory.webp" alt="Photographic Memory Training" className="w-full h-96 object-cover rounded-[2rem] shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center"><Zap className="w-6 h-6 text-blue-600" /></div>
                <div>
                  <div className="text-2xl font-black text-gray-900 leading-none">300%</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Faster Recall</div>
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
              { value: '300%', label: 'Recall Improvement', desc: 'Measurable increase in the ability to retrieve complex information.', icon: Zap, color: 'blue' },
              { value: '95%', label: 'Satisfaction Rate', desc: 'Consistently high ratings from parents across all memory batches.', icon: Star, color: 'orange' },
              { value: 'Improved', label: 'Academic Scores', desc: 'Direct correlation observed between training and school results.', icon: BookOpen, color: 'purple' },
              { value: '100%', label: 'Supervised & Safe', desc: 'Expert guidance ensures a positive learning environment.', icon: Shield, color: 'green' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-7 rounded-2xl shadow-lg border border-slate-50 transform hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-${stat.color}-50 text-${stat.color}-600`}><stat.icon className="w-5 h-5" /></div>
                  <div className="text-2xl font-black text-gray-900 tracking-tight">{stat.value}</div>
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-2">{stat.label}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{stat.desc}</p>
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
                <span className="text-sm font-semibold tracking-wide text-blue-600 uppercase">Discover The Science</span>
                <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase mb-6">What is Photographic Memory?</h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>Photographic memory — also called eidetic memory — is the brain&apos;s ability to form vivid, detailed mental images of information and retrieve them with precision, even days or weeks later. Most children have this ability naturally as toddlers, but it fades as the brain becomes conditioned to passive learning.</p>
                  <p>The SmartBrains Photographic Memory Program reverses this through a structured system of visualization training, sensory association and spaced repetition — rebuilding the neural pathways that make fast, accurate recall feel effortless.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: 'Brain Yoga', desc: '20 min warm-up' },
                  { title: 'Memory Tech', desc: '40 min training' },
                  { title: 'Applied Practice', desc: '30 min drills' }
                ].map((step, i) => (
                  <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-blue-600 font-bold text-sm mb-1">{step.title}</div>
                    <div className="text-slate-500 text-xs">{step.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <Sparkles className="absolute -right-10 -bottom-10 w-48 h-48 opacity-10" />
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">The Winning Method</h3>
                <p className="text-blue-50 leading-relaxed mb-6">Memory is not about repetition — it is about association. When a child links new information to a vivid mental image, a sound, or a story, the brain encodes it far more deeply than plain reading ever can.</p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm"><Brain className="w-5 h-5 text-blue-200" /><span className="text-sm font-medium">Alpha State Activation</span></div>
                  <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm"><Target className="w-5 h-5 text-blue-200" /><span className="text-sm font-medium">Memory Palace Construction</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Main Section Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8 flex flex-col">
              {/* Benefits */}
              <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
                <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Key Program Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Dramatically improved recall for lessons, formulas and text",
                    "Faster learning speed — absorb chapters in less time",
                    "Higher exam confidence from reliable memory retrieval",
                    "Stronger concentration built through daily meditation practice",
                    "Creative thinking through active visualization training",
                    "Long-term retention skills that last beyond school"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                      <span className="text-slate-700 font-medium leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Structure */}
              <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-10 pb-6 bg-slate-900 text-white">
                  <h3 className="text-2xl font-black uppercase tracking-tight">Program Structure</h3>
                  <p className="text-blue-300 mt-2 text-sm font-medium">20 Sessions · 1.5 Hours · Offline & Online</p>
                </div>
                {[
                  { phase: 'Phase 1 — Assessment & Foundation', sessions: 'Sessions 1–4', steps: [
                    { t: '0:00 – 0:20', task: 'Brain Yoga & Guided Meditation' },
                    { t: '0:20 – 1:00', task: 'Memory Baseline Assessment & Intro to Visualization' },
                    { t: '1:00 – 1:30', task: 'Improvement Session — Image Association Exercises' }
                  ]},
                  { phase: 'Phase 2 — Technique Building', sessions: 'Sessions 5–12', steps: [
                    { t: '0:00 – 0:20', task: 'Brain Yoga & Focused Breathing' },
                    { t: '0:20 – 1:00', task: 'Association Method, Story Linking & Number-Shape Systems' },
                    { t: '1:00 – 1:30', task: 'Improvement Session — Speed Memory Drills' }
                  ]},
                  { phase: 'Phase 3 — Memory Palace & Mastery', sessions: 'Sessions 13–20', steps: [
                    { t: '0:00 – 0:20', task: 'Brain Yoga & Visualization Warm-Up' },
                    { t: '0:20 – 1:00', task: 'Memory Palace Construction & Academic Application' },
                    { t: '1:00 – 1:30', task: 'Improvement Session — Exam Simulation & Recall Challenges' }
                  ]}
                ].map((p, idx) => (
                  <div key={idx} className="border-b last:border-0 border-slate-100">
                    <div className="px-10 py-5 bg-blue-50/50 flex justify-between items-center">
                      <span className="font-bold text-slate-900 text-sm">{p.phase}</span>
                      <Badge variant="outline" className="bg-white text-[10px] uppercase font-black">{p.sessions}</Badge>
                    </div>
                    {p.steps.map((s, i) => (
                      <div key={i} className="px-10 py-4 flex items-center border-t border-slate-50 first:border-0">
                        <span className="text-[10px] font-black text-blue-500 w-32 shrink-0">{s.t}</span>
                        <span className="text-slate-700 text-sm font-semibold">{s.task}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Results */}
              <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Expected Results</h3>
                <div className="space-y-4">
                  {[
                    "Visible improvement in memory recall within the first 4 sessions",
                    "Child can memorize and retrieve structured content (lists, formulas, sequences) with accuracy",
                    "Measurably faster study time confirmed by parents by Session 10",
                    "Sustained long-term retention through continued home practice (15 min/day)"
                  ].map((res, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="bg-white p-2 rounded-lg shadow-sm font-bold text-blue-600 text-xs">#{i+1}</div>
                      <span className="text-slate-700 font-semibold">{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col h-full space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <h3 className="text-lg font-black text-slate-900 mb-6 uppercase tracking-tight">Program Details</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Target Age', val: '5 – 17 years' },
                    { label: 'Duration', val: '20 Sessions' },
                    { label: 'Session Length', val: '1.5 Hours' },
                    { label: 'Format', val: 'Offline & Online' },
                    { label: 'Batch Size', val: 'Max 8 Students' }
                  ].map((d, i) => (
                    <div key={i} className="flex justify-between items-center pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                      <span className="text-slate-400 text-xs font-bold uppercase">{d.label}</span>
                      <span className="text-slate-900 font-bold text-sm tracking-tight">{d.val}</span>
                    </div>
                  ))}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Investment</div>
                        <div className="text-2xl font-black text-slate-900">₹10,000</div>
                      </div>
                      <div className="text-right">
                      </div>
                    </div>
                  </div>
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
                    src="https://www.instagram.com/p/DNWKnNSzN_3/embed/"
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

      {/* 5. Memory Test Activity - Full Width */}
      <section className="py-24 bg-white border-y border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">
                How many can you remember?<br />
                <span className="text-teal-600 mt-4 block">Test your memory — then see what training unlocks.</span>
              </h2>
            </div>
            <MemoryTest />
          </div>
        </div>
      </section>

      {/* 6. Carousel */}
      <TestimonialsCarousel />

      {/* 7. FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-20 max-w-4xl">
          <div className="text-center mb-16">
            <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Support</span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-none uppercase">Got Questions?</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: 'What exactly is the Photographic Memory program?', a: 'It is a 20-session structured training course that teaches children proven memory techniques — visualization, association, story linking and memory palace building — combined with brain yoga and meditation to maximise retention and recall.' },
              { q: 'What age group is this suitable for?', a: 'The program is designed for children aged 5 to 17 years. Techniques are adapted to the child\'s age and learning level within the batch.' },
              { q: 'How long is each session and what does it include?', a: 'Each session is 1.5 hours and has three parts: a Brain Yoga & Meditation warm-up (20 min), a Memory Technique Training block (40 min), and an applied Improvement Session with real practice (30 min).' },
              { q: 'How soon will I see results in my child?', a: 'Most parents notice a visible difference in recall and study confidence within the first 4 sessions. By Session 10, measurable improvement in study speed is typically confirmed.' },
              { q: 'Is the online batch as effective as the offline classes?', a: 'Yes. The same certified trainer, the same structured curriculum and the same session format are used for both modes. Weekly progress is shared with parents regardless of batch type.' },
              { q: 'What is the fee and what does it include?', a: 'The program fee is ₹10,000 per child for the full 20-session course. This includes all training materials, progress tracking and the completion certificate.' }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-2xl px-6 bg-slate-50 border-slate-200">
                <AccordionTrigger className="text-left font-bold text-slate-900 text-lg py-6">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}

function Badge({ children, className, variant = 'default' }: { children: React.ReactNode, className?: string, variant?: 'default' | 'outline' }) {
  const base = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  const styles = {
    default: "border-transparent bg-blue-600 text-white hover:bg-blue-600/80",
    outline: "border border-slate-200 text-slate-950 hover:bg-slate-100"
  };
  return <div className={`${base} ${styles[variant]} ${className}`}>{children}</div>;
}
