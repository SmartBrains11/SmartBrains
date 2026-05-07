'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import { 
  CheckCircle, Brain, Target, Star, ArrowLeft,
  Quote, ChevronLeft, ChevronRight, Activity,
  Users, Calendar, Eye, Shield, ArrowRight, Sparkles,
  Briefcase, Heart, BookOpen, Clock, Zap
} from 'lucide-react';

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
    name: 'Arvind Sharma',
    role: 'Senior Manager, age 41',
    location: 'Hyderabad',
    content: "I am a senior manager at a multinational company and I make decisions that affect hundreds of people daily. Before this program, I was running on caffeine and anxiety — my thinking felt clouded and I constantly second-guessed myself. Two weeks after the workshop, my team actually asked me what changed. My clarity, my calmness under pressure and my ability to read situations accurately have improved in ways I cannot fully explain but absolutely feel.",
    accent: 'from-indigo-500 to-purple-500',
    accentLight: 'bg-indigo-50 text-indigo-600',
  },
  {
    name: 'Pradeep Nair',
    role: 'Software Engineer, age 36',
    location: 'Online batch',
    content: "I came in deeply skeptical — I have an engineering background and I do not accept things without evidence. What changed my mind was not what the trainer said but what I experienced personally. By the afternoon of Day 1, a kind of mental static I had lived with for years simply quietened. I slept better that night than I had in a decade. The follow-up sessions have kept that clarity building.",
    accent: 'from-blue-500 to-cyan-500',
    accentLight: 'bg-blue-50 text-blue-600',
  },
  {
    name: 'Ananya Krishnamurthy',
    role: 'Entrepreneur, age 38',
    location: 'Hyderabad',
    content: "As a mother of three running a small business, I had completely lost access to myself. I was reactive, exhausted and operating on autopilot. This program gave me back my centre. The meditation and tapping techniques from Day 1 are now part of my daily life. The unlimited follow-up means I can come back whenever life gets overwhelming — and knowing that support exists makes all the difference.",
    accent: 'from-emerald-500 to-teal-500',
    accentLight: 'bg-emerald-50 text-emerald-600',
  },
  {
    name: 'Subramaniam Iyer',
    role: 'Retired Professional, age 52',
    location: 'Vizianagaram',
    content: "I enrolled at 52, thinking this was probably for younger people. It was the best investment I have made in myself in years. The trainer adapted everything beautifully for where I am in life. My memory has sharpened, my anxiety has reduced measurably and I have a clarity about my priorities and decisions that I genuinely did not expect to find at this stage of life.",
    accent: 'from-amber-500 to-orange-500',
    accentLight: 'bg-amber-50 text-amber-600',
  }
];

function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
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

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>(':scope > div')?.offsetWidth ?? 400;
    el.scrollBy({ left: direction === 'left' ? -cardWidth - 24 : cardWidth + 24, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[30%] h-[50%] bg-indigo-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-sm font-semibold tracking-wide text-indigo-600 uppercase">Success Stories</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">Voices of Transformation</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">Real stories from professionals, entrepreneurs and parents who reclaimed their clarity.</p>
          </div>
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button onClick={() => scroll('left')} disabled={!canScrollLeft} className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 disabled:opacity-30 shadow-sm"><ChevronLeft className="w-5 h-5 text-slate-700" /></button>
            <button onClick={() => scroll('right')} disabled={!canScrollRight} className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 disabled:opacity-30 shadow-sm"><ChevronRight className="w-5 h-5 text-slate-700" /></button>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 px-6 lg:px-20 no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
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

export default function AdultMidbrainPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Breadcrumb */}
      <div className="bg-white border-b relative z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-indigo-600">Home</Link>
            <span>/</span>
            <Link href="/programs" className="hover:text-indigo-600">Programs</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Midbrain Activation for Adults</span>
          </div>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="show" variants={STAGGER} className="text-left">
              <motion.div variants={FADE_UP}>
                <Link href="/programs" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Programs
                </Link>
              </motion.div>
              <motion.h1 variants={FADE_UP} className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tight leading-[1.05]">
                Midbrain Activation for Adults
              </motion.h1>
              <motion.p variants={FADE_UP} className="text-xl md:text-2xl text-indigo-600 font-bold mb-6 leading-snug">
                Your Sixth Sense Was Never Lost. It Was Just Never Trained.
              </motion.p>
              <motion.p variants={FADE_UP} className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                As adults we are taught to rely entirely on logic, analysis and conscious thought. The result is a brain that is overworked, chronically stressed and cut off from its most powerful faculty — intuition. 
                <br/><br/>
                Midbrain Activation for Adults is a scientifically designed 2-day intensive that reawakens the mesencephalon — the brain&apos;s relay centre — restoring the deep intuitive intelligence, mental clarity and emotional balance that modern life systematically suppresses. 
                <br/><br/>
                <span className="text-slate-900 font-bold">With unlimited lifetime follow-up support, this is not a workshop you attend once. It is a permanent shift in how your brain operates.</span>
              </motion.p>
              
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 h-16 px-10 rounded-2xl font-black uppercase tracking-wider shadow-xl shadow-indigo-200 group">
                  <Link href="/contact">
                    Reserve Your Seat
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-slate-200 hover:border-indigo-600 hover:bg-indigo-50 h-16 px-10 rounded-2xl font-black uppercase tracking-wider text-slate-700 transition-all">
                  <Link href="tel:+917396447470">
                    Call to Know More
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
              <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                <Image
                  src="/images/midbrain-adults.webp"
                  alt="Adult Midbrain Activation Workshop"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="font-black text-2xl uppercase leading-tight mb-2">Reclaim Your Mind</p>
                  <p className="text-slate-200 font-medium">Clarity, intuition and emotional mastery.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-30 -mt-10 px-6 lg:px-20 mb-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: '85%', label: 'Reduction in Mental Fatigue', icon: Zap, color: 'text-amber-600', bg: 'bg-amber-50' },
              { value: '90%', label: 'Improved Decision Clarity', icon: Target, color: 'text-indigo-600', bg: 'bg-indigo-50' },
              { value: 'Lifetime', label: 'Follow-Up Support Included', icon: Clock, color: 'text-emerald-600', bg: 'bg-emerald-50' },
              { value: '100%', label: 'Supervised & Safe', icon: Shield, color: 'text-blue-600', bg: 'bg-blue-50' }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_15px_40px_rgba(8,112,184,0.06)] border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className={`text-2xl md:text-3xl font-black mb-2 ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs md:text-sm font-bold text-slate-600 uppercase tracking-wide leading-tight">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. The Adult Problem */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold tracking-wide text-indigo-600 uppercase mb-3 block">Why Adults Need This</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase mb-8">
                YOUR BRAIN IS EXHAUSTED. HERE IS WHY.
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  The adult brain processes over 35,000 decisions every single day. It is bombarded with notifications, deadlines, social obligations, financial pressure and an endless stream of digital noise. Over time, the brain compensates by going into a permanent state of low-grade stress — what neuroscientists call chronic sympathetic activation.
                </p>
                <p>
                  In this state, the prefrontal cortex — responsible for clear thinking and good decisions — becomes impaired. The midbrain, which should act as the calm, intuitive relay centre between the emotional and rational brain, gets bypassed entirely. The result is a person who is technically functioning but operating far below their true cognitive and emotional capacity.
                </p>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl mt-8 shadow-sm">
                  <p className="text-slate-800 font-bold mb-4 uppercase tracking-widest text-sm text-indigo-600">You know this feeling. It shows up as:</p>
                  <ul className="space-y-3">
                    {[
                      "Making decisions you later regret because they felt right in the moment",
                      "Being unable to think clearly under pressure",
                      "Chronic mental fatigue even after rest",
                      "Feeling disconnected from your instincts",
                      "Emotional reactivity that you cannot seem to control",
                      "A persistent sense that you are capable of more but cannot access it"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                        <span className="text-slate-700 font-medium text-[15px]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-slate-900 font-black text-xl leading-tight border-l-4 border-indigo-500 pl-4 py-2 mt-8">
                  Midbrain Activation does not add anything new to your brain. It removes the interference that is blocking what was always there.
                </p>
              </div>
            </div>

            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl hidden lg:block">
              <Image 
                src="/images/mental-fatigue.webp" 
                alt="Mental Fatigue" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="text-white text-3xl font-black uppercase mb-4 leading-tight">Break The Cycle Of Overload</h3>
                <p className="text-slate-300 font-medium text-lg">Restore your brain&apos;s natural state of calm and high performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What is Midbrain Activation for Adults? */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-20 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wide text-indigo-600 uppercase mb-3 block">Discover The Science</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase mb-6">
              WHAT IS MIDBRAIN ACTIVATION FOR ADULTS?
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-left md:text-center max-w-4xl mx-auto">
              <p>
                The midbrain — or mesencephalon — is a small but extraordinarily powerful brain region that acts as the central relay station for visual, auditory, motor and emotional information. In children it is active and responsive. In most adults, years of stress, digital overload and left-brain dominance have suppressed its function dramatically.
              </p>
              <p>
                Midbrain Activation for Adults uses a carefully sequenced combination of <strong className="text-slate-800">specialised sound frequencies, advanced brain gym, deep meditation, breathwork, tapping techniques and sensory activation exercises</strong> to bring the brain into a sustained alpha-theta wave state — the neurological sweet spot where intuition, creativity, emotional regulation and mental clarity all operate at peak performance simultaneously.
              </p>
            </div>
          </div>

          <div className="bg-[#2D1B4E] rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Brain className="w-64 h-64" />
            </div>
            <div className="relative z-10">
              <span className="bg-white/10 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">The Gandhari Vidya Connection</span>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">Ancient Wisdom Meets Modern Neuroscience</h3>
              <p className="text-indigo-100 text-lg leading-relaxed mb-6">
                In the Mahabharata, Queen Gandhari voluntarily blindfolded herself for life — and in doing so, developed perception far beyond the physical eye. This was not mythology. It was the documented result of a mind trained to transcend sensory dependency and access deep intuitive intelligence.
              </p>
              <p className="text-indigo-100 text-lg leading-relaxed mb-10">
                Modern brain science calls this the activation of the right hemisphere and the restoration of midbrain function. Our ancestors called it Gandhari Vidya. The SmartBrains Adult Midbrain Activation program bridges both traditions — giving adults a structured, science-backed method to access the same depth of perception in just 2 days.
              </p>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm flex gap-4">
                <Shield className="w-8 h-8 text-emerald-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-1">Important Note</h4>
                  <p className="text-indigo-100 text-sm leading-relaxed">
                    This is a 100% safe, evidence-informed program. There are no religious rituals, no supernatural claims and no pressure of any kind. All activities are conducted by certified facilitators in a professional, adult-appropriate environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Who Is This For? */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-20 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase mb-6">
              THIS PROGRAM IS FOR YOU IF —
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Working Professionals",
                desc: "You make high-stakes decisions daily but feel like your thinking is foggy, reactive and never truly sharp. You want clarity, faster processing and the ability to trust your instincts under pressure.",
                icon: Briefcase,
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                title: "Entrepreneurs & Business Owners",
                desc: "You need to read people, situations and opportunities accurately — often with incomplete information. Intuition is not a soft skill for you. It is a competitive advantage. This program sharpens it.",
                icon: Target,
                color: "text-indigo-600",
                bg: "bg-indigo-50"
              },
              {
                title: "Parents & Homemakers",
                desc: "You carry enormous cognitive and emotional load with very little recovery. You feel mentally depleted, emotionally reactive and disconnected from the calm, centred version of yourself. This program restores that baseline.",
                icon: Heart,
                color: "text-rose-600",
                bg: "bg-rose-50"
              },
              {
                title: "Students & Young Adults",
                desc: "You are preparing for competitive exams, interviews or career decisions. You need peak memory, razor-sharp focus and the ability to perform under pressure — not just study harder.",
                icon: BookOpen,
                color: "text-emerald-600",
                bg: "bg-emerald-50"
              },
              {
                title: "Anyone Seeking Deep Change",
                desc: "You have tried productivity systems, meditation apps and self-help books. Something is still missing. Midbrain Activation works at the neurological level — not the behavioural level. It changes the hardware, not just the habits.",
                icon: Sparkles,
                color: "text-amber-600",
                bg: "bg-amber-50"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Key Benefits Full Width */}
      <section className="py-20 bg-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="container mx-auto px-6 lg:px-20 max-w-6xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-12 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Dramatically sharper intuition — trust your instincts with confidence in personal and professional decisions",
              "Significant reduction in mental fatigue — think clearly for longer without exhaustion",
              "Emotional regulation — respond rather than react, even under high-pressure situations",
              "Deeper, more restorative sleep — the brain's natural recovery cycles are restored",
              "Enhanced memory and faster information processing",
              "Heightened creativity — access ideas and solutions that the overworked analytical mind blocks",
              "Stronger sense of inner calm and psychological resilience",
              "Lifetime follow-up support — your brain continues to develop long after the 2 days"
            ].map((benefit, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-indigo-50 font-medium leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Main Content Grid (Structure + Details) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              
              {/* Program Structure */}
              <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="px-10 pt-10 pb-6">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">Program Structure</h3>
                  <p className="text-indigo-600 mt-1 text-sm font-medium">2-Day Intensive · Full Day Each Day · Small Group · Offline & Online · Unlimited Lifetime Follow-Ups</p>
                </div>
                
                {/* Day 1 */}
                <div className="border-t border-slate-100">
                  <div className="px-10 py-5 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50">
                      <Zap className="w-5 h-5 text-indigo-600" />
                    </span>
                    <h4 className="font-bold text-indigo-600 text-lg uppercase tracking-wider">Day 1 — Decompression, Rewiring & Awakening</h4>
                  </div>
                  {[
                    { t: '9:00 – 9:30 AM', task: 'Welcome, Introductions & Intention Setting' },
                    { t: '9:30 – 10:30 AM', task: 'Advanced Brain Gym & Brain Yoga — Neural Activation' },
                    { t: '10:30 – 10:45 AM', task: 'Break' },
                    { t: '10:45 – 12:00 PM', task: 'Sound Frequency Therapy & Bilateral Brain Stimulation' },
                    { t: '12:00 – 1:00 PM', task: 'Lunch Break' },
                    { t: '1:00 – 2:15 PM', task: 'Tapping Techniques & Body-Based Stress Release' },
                    { t: '2:15 – 3:15 PM', task: 'Deep Guided Meditation — Alpha-Theta State Induction' },
                    { t: '3:15 – 3:30 PM', task: 'Break' },
                    { t: '3:30 – 4:30 PM', task: 'Intuition Activation Exercises — First Sensing Practice' },
                    { t: '4:30 – 5:30 PM', task: 'Group Sharing, Integration & Day 1 Debrief' }
                  ].map((s, i) => (
                    <div key={i} className="px-10 py-4 flex items-center border-t border-slate-50 last:border-b last:border-slate-100">
                      <span className="text-[10px] font-black text-indigo-500 w-32 shrink-0">{s.t}</span>
                      <span className="text-slate-700 text-sm font-semibold">{s.task}</span>
                    </div>
                  ))}
                  <div className="mx-10 mt-4 mb-8 bg-indigo-50 rounded-2xl px-6 py-4 flex items-center gap-4 border border-indigo-100/50">
                    <Star className="w-5 h-5 fill-current text-yellow-400 stroke-yellow-500 shrink-0" />
                    <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
                      <span className="font-bold text-slate-900">Day 1 Outcome:</span> Every participant experiences a measurable shift in mental state — a noticeable reduction in mental noise and a first glimpse of restored intuitive clarity by the end of Day 1.
                    </p>
                  </div>
                </div>

                {/* Day 2 */}
                <div className="border-t border-slate-100">
                  <div className="px-10 py-5 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-50">
                      <Target className="w-5 h-5 text-emerald-600" />
                    </span>
                    <h4 className="font-bold text-emerald-600 text-lg uppercase tracking-wider">Day 2 — Integration, Mastery & Life Application</h4>
                  </div>
                  {[
                    { t: '9:00 – 9:30 AM', task: 'Morning Brain Yoga & Breathwork' },
                    { t: '9:30 – 10:45 AM', task: 'Advanced Meditation — Sustained Alpha-Theta Deepening' },
                    { t: '10:45 – 11:00 AM', task: 'Break' },
                    { t: '11:00 – 12:30 PM', task: 'Advanced Intuition Training — Sensing, Perception & Decision Practice' },
                    { t: '12:30 – 1:30 PM', task: 'Lunch Break' },
                    { t: '1:30 – 2:30 PM', task: 'Emotional Intelligence & Regulation Techniques' },
                    { t: '2:30 – 3:30 PM', task: 'Practical Application — Work, Relationships & High-Pressure Scenarios' },
                    { t: '3:30 – 3:45 PM', task: 'Break' },
                    { t: '3:45 – 4:45 PM', task: 'Personal Development Planning — 90-Day Integration Map' },
                    { t: '4:45 – 5:30 PM', task: 'Certificate Ceremony, Closing & Individual Counselling' }
                  ].map((s, i) => (
                    <div key={i} className="px-10 py-4 flex items-center border-t border-slate-50 last:border-b last:border-slate-100">
                      <span className="text-[10px] font-black text-emerald-500 w-32 shrink-0">{s.t}</span>
                      <span className="text-slate-700 text-sm font-semibold">{s.task}</span>
                    </div>
                  ))}
                </div>

                {/* Follow-ups */}
                <div className="border-t border-slate-100 bg-amber-50/50 p-10">
                  <h4 className="font-black text-amber-800 text-xl uppercase tracking-wider mb-4 flex items-center gap-3">
                    <Clock className="w-6 h-6" /> Unlimited Lifetime Follow-Up — Included
                  </h4>
                  <p className="text-slate-700 leading-relaxed mb-4 font-medium">
                    This is not a standard follow-up schedule. There is no expiry, no limited number of sessions and no additional fee — ever.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm mb-4">
                    Participants return for follow-up support whenever they need it — before a major life decision, during a high-pressure period at work, when preparing for an exam, or simply when they want to deepen their practice. The same certified trainer who conducted your workshop is available to you for life.
                  </p>
                  <p className="font-bold text-amber-900 uppercase tracking-widest text-xs">One investment. Permanent access. No fine print.</p>
                </div>
              </div>

              {/* Expected Results */}
              <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Expected Results</h3>
                <div className="space-y-4">
                  {[
                    "Noticeable shift in mental clarity and reduced internal noise by end of Day 1",
                    "Measurable improvement in decision-making confidence and emotional regulation within 2 weeks",
                    "Significant reduction in chronic mental fatigue within 30 days of regular practice",
                    "Sustained enhancement of intuition, creativity and cognitive performance through lifetime follow-up"
                  ].map((res, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 transform hover:scale-[1.02] transition-transform">
                      <div className="bg-white p-2.5 rounded-xl shadow-sm font-bold text-indigo-600 text-[10px] uppercase tracking-tighter ring-1 ring-slate-100">Result</div>
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
                    { label: 'Target Age', val: 'Adults — 18 years and above' },
                    { label: 'Duration', val: '2 Full Days' },
                    { label: 'Timings', val: '9:00 AM – 5:30 PM each day' },
                    { label: 'Format', val: 'Offline & Online' },
                    { label: 'Batch Size', val: 'Max 15 Participants' },
                    { label: 'Follow-Ups', val: 'Unlimited · Lifetime · No extra fee' }
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
                        <div className="text-3xl font-black text-slate-900">₹20,000</div>
                      </div>
                      <div className="bg-indigo-100 text-indigo-700 text-[10px] font-black px-3 py-1 rounded-full uppercase">Per Person</div>
                    </div>
                    <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700 h-14 rounded-2xl text-base font-black shadow-lg shadow-indigo-100"><Link href="/contact">Book Now</Link></Button>
                    <p className="mt-4 text-center text-[11px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed px-4">Free Consultation Available</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <TestimonialsCarousel />

      {/* 8. FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-20 max-w-4xl">
          <div className="text-center mb-16">
            <span className="bg-indigo-50 text-indigo-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Support</span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-none uppercase mb-4">Got Questions?</h2>
            <p className="text-lg text-slate-600">Everything you need to know about Midbrain Activation for Adults.</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "How is the adult program different from the children's workshop?", a: "The children's program focuses on developing blindfold sensing, intuition and academic performance. The adult program is designed around the specific challenges adults face — chronic stress, decision fatigue, emotional reactivity, suppressed intuition and cognitive decline from overload. The techniques, pace, depth and application of the program are entirely adult-specific." },
              { q: "Is this safe? Are there any side effects?", a: "This is a 100% safe, evidence-informed program. All activities — brain yoga, meditation, breathwork, tapping and sensory exercises — are non-invasive and conducted by certified facilitators. Many participants report feeling deeply rested and unusually calm after Day 1. There are no known adverse effects." },
              { q: "What does 'unlimited lifetime follow-up' actually mean?", a: "It means exactly what it says. After completing the 2-day workshop, you have access to follow-up sessions with your trainer for the rest of your life — at no additional charge. There is no expiry date, no annual renewal and no hidden fee. You return whenever you need support, a refresher or deeper practice." },
              { q: "Is this suitable for people with anxiety or high stress?", a: "Yes — and in fact, adults dealing with chronic stress, anxiety and mental fatigue often experience the most dramatic results. The program works at the neurological level to restore the brain's natural calm baseline. However, if you have a diagnosed psychiatric condition, please consult your doctor before enrolling and inform your trainer during the pre-program consultation." },
              { q: "Can this be done online?", a: "Yes. The online batch uses live sessions with the same certified trainer, the same program structure and the same follow-up access. All exercises including brain yoga, meditation, breathwork and tapping are fully deliverable online." },
              { q: "I am very left-brained and analytical. Will this work for me?", a: "Often the most analytically dominant people experience the greatest shift — because the gap between their current state and their activated potential is the largest. Several of our most powerful testimonials come from engineers, doctors and corporate professionals." },
              { q: "What does ₹20,000 include?", a: "The full 2-day workshop, all training materials, your personalised 90-day integration plan, the completion certificate and unlimited lifetime follow-up support. No hidden charges of any kind." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-2xl px-6 bg-white border-slate-200 shadow-sm overflow-hidden">
                <AccordionTrigger className="text-left font-bold text-slate-900 text-lg py-6">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent)] pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-20 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none uppercase mb-6">Ready to Reclaim Your Mind?</h2>
          <p className="text-indigo-200 text-lg mb-12 max-w-2xl mx-auto">Book your seat or speak to our experts today.</p>
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
