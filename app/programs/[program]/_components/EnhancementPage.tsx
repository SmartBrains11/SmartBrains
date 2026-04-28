'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Brain, Target, Shield, Clock, MapPin, Monitor, Star, ArrowRight, Play, Users, Calendar, ArrowLeft, Heart, BookOpen, Quote, Phone, HelpCircle, Eye, Award, Mail, ChevronLeft, ChevronRight, Instagram, Sparkles, Zap, Trophy, Infinity as InfinityIcon } from 'lucide-react';

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
    name: 'Sudha Krishnamurthy',
    role: 'Parent of son, age 10',
    location: 'Hyderabad',
    content: "My son was always restless during studies — he could never sit for more than 10 minutes without getting distracted. After the Enhancement Program, his focus has improved so dramatically that he completed a 2-hour study session on his own last week. I actually checked if he was okay because it had never happened before!",
    accent: 'from-blue-500 to-indigo-500',
    accentLight: 'bg-blue-50 text-blue-600',
  },
  {
    name: 'Rajiv Nair',
    role: 'Parent of daughter, age 15',
    location: 'Online batch',
    content: "What impressed me most was the lifetime follow-up. We went back 3 months after the workshop because my daughter was preparing for her board exams and the trainer gave her a full refresher session at no cost. That level of commitment is rare and it made all the difference.",
    accent: 'from-orange-500 to-amber-500',
    accentLight: 'bg-orange-50 text-orange-600',
  },
  {
    name: 'Padmavathi Reddy',
    role: 'Parent of son, age 12',
    location: 'Vizianagaram',
    content: "My child struggled with creative thinking and would always go blank during open-ended questions at school. After the Enhancement Program, his teachers say he is now one of the most expressive students in class. The change in confidence is something even his grandparents have noticed.",
    accent: 'from-purple-500 to-fuchsia-500',
    accentLight: 'bg-purple-50 text-purple-600',
  },
  {
    name: 'Mohammed Irfan',
    role: 'Parent of son 8 & daughter 13',
    location: 'Hyderabad',
    content: "We enrolled both our children together. The trainer customised the activities to both their ages even within the same batch, which we didn't expect. Both completed the program and both have shown real, measurable improvements. The follow-up sessions keep the momentum going. Highly recommend this to every parent.",
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
            <p className="mt-4 text-lg text-slate-600 max-w-xl">Real feedback from families who have seen incredible growth in their children&apos;s cognitive abilities.</p>
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

export default function EnhancementPage() {
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
            <span className="text-gray-900">Enhancement Program</span>
          </div>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="show" variants={STAGGER} className="text-left">
              <motion.div variants={FADE_UP}>
                <Link href="/programs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Programs
                </Link>
              </motion.div>
              <motion.h1 variants={FADE_UP} className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tight">Enhancement Program</motion.h1>
              <motion.p variants={FADE_UP} className="text-xl text-blue-600 font-medium mb-6">One Program. Every Cognitive Skill Your Child Needs to Thrive Academically and in Life.</motion.p>
              <motion.p variants={FADE_UP} className="text-lg text-gray-600 mb-8 leading-relaxed">The Enhancement Program is SmartBrains India&apos;s most comprehensive brain development course — a powerful 2-day intensive that simultaneously trains memory, concentration, creative thinking and problem-solving. Backed by lifetime follow-up support, this is not a course your child attends — it is a transformation they carry forever.</motion.p>
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><Link href="/contact">Enquire For Next Batch</Link></Button>
                <Button asChild variant="outline" size="lg"><Link href="tel:+917396447470">Call to Know More</Link></Button>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
              <img src="/images/enhancement.webp" alt="Enhancement Training" className="w-full h-96 object-cover rounded-[2rem] shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center"><InfinityIcon className="w-6 h-6 text-blue-600" /></div>
                <div>
                  <div className="text-2xl font-black text-gray-900 leading-none">Lifetime</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Support Included</div>
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
              { value: '80%', label: 'Concentration Boost', desc: 'Significantly extended attention spans for better study focus.', icon: Target, color: 'blue' },
              { value: '90%', label: 'Problem-Solving', desc: 'Enhanced ability to analyze and solve complex academic tasks.', icon: Zap, color: 'orange' },
              { value: 'Improved', label: 'Academic Scores', desc: 'Direct correlation observed between training and school results.', icon: BookOpen, color: 'purple' },
              { value: 'Lifetime', label: 'Follow-Up Support', desc: 'Unlimited refresher sessions included for permanent growth.', icon: Heart, color: 'green' }
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
                <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase mb-6">What is the Enhancement Program?</h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>The human brain is not a single system — it is a network of interconnected functions. Memory affects focus. Focus affects creativity. Creativity affects problem-solving. When you train only one skill in isolation, you leave the rest of the network behind.</p>
                  <p>The Enhancement Program trains all of these simultaneously. Over 2 intensive days — combined with 4 structured follow-up sessions and unlimited lifetime support — children develop a complete cognitive toolkit that reshapes how they learn, think and respond under pressure.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                <div className="flex items-start gap-4">
                  <Brain className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">Total Activation</h4>
                    <p className="text-sm text-slate-500">Brain exercise & meditation warm-ups to prime neurons.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-orange-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">Applied IQ</h4>
                    <p className="text-sm text-slate-500">Lateral thinking & concentration mapping drills.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <Sparkles className="absolute -right-10 -bottom-10 w-48 h-48 opacity-10" />
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">The Lifetime Edge</h3>
                <p className="text-blue-50 leading-relaxed mb-6">Most brain training programs end when the course ends. The Enhancement Program does not.</p>
                <div className="space-y-4">
                  <p className="text-sm text-blue-100 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">Your child receives unlimited lifetime support. Whenever they face a new academic stage or need a cognitive refresher, our trainers are available at no extra cost.</p>
                  <div className="flex items-center gap-3"><Trophy className="w-5 h-5 text-blue-200" /><span className="text-sm font-bold uppercase tracking-widest">A True Lifelong Investment</span></div>
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
                    "Sharper focus and significantly extended concentration spans",
                    "Faster learning — absorb and process information in less time",
                    "Stronger memory retention across subjects and real-life situations",
                    "Creative and lateral thinking for problem-solving beyond textbooks",
                    "Higher academic confidence and reduced exam anxiety",
                    "Lifelong cognitive tools that grow with the child through every stage"
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
                <div className="px-10 pt-10 pb-6">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">Program Structure</h3>
                  <p className="text-blue-600 mt-1 text-sm font-medium">2-Day Intensive · 10:00 AM – 5:00 PM · Offline & Online</p>
                </div>
                
                {/* Day 1 */}
                <div className="border-t border-slate-100">
                  <div className="px-10 py-5 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </span>
                    <h4 className="font-bold text-blue-600 text-lg uppercase tracking-wider">Day 1 — Awakening the Whole Brain</h4>
                  </div>
                  {[
                    { t: '10:00 – 10:20 AM', task: 'Opening Prayer & Intention Setting' },
                    { t: '10:20 – 11:15 AM', task: 'Brain Gym & Brain Yoga Activation' },
                    { t: '11:15 – 11:30 AM', task: 'Break' },
                    { t: '11:30 – 12:30 PM', task: 'Concentration Foundations & Focus Training' },
                    { t: '12:30 – 1:15 PM', task: 'Lunch Break' },
                    { t: '1:15 – 2:15 PM', task: 'Memory Enhancement Techniques & Visualization' },
                    { t: '2:15 – 3:00 PM', task: 'Guided Meditation & Mind Relaxation' },
                    { t: '3:00 – 4:15 PM', task: 'Creative Thinking Activities & Problem Solving' },
                    { t: '4:15 – 5:00 PM', task: 'Day 1 Integration — Breakthrough Session' }
                  ].map((s, i) => (
                    <div key={i} className="px-10 py-4 flex items-center border-t border-slate-50 last:border-b last:border-slate-100">
                      <span className="text-[10px] font-black text-blue-500 w-36 shrink-0">{s.t}</span>
                      <span className="text-slate-700 text-sm font-semibold">{s.task}</span>
                    </div>
                  ))}
                  <div className="mx-10 mt-4 mb-8 bg-blue-50 rounded-2xl px-6 py-4 flex items-center gap-4 border border-blue-100/50">
                    <Star className="w-5 h-5 fill-current text-yellow-400 stroke-yellow-500 shrink-0" />
                    <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
                      <span className="font-bold text-slate-900">Day 1 Guarantee:</span> Every child experiences a measurable improvement in focus and a first breakthrough moment by the end of Day 1.
                    </p>
                  </div>
                </div>

                {/* Day 2 */}
                <div className="border-t border-slate-100">
                  <div className="px-10 py-5 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-50">
                      <Target className="w-5 h-5 text-orange-600" />
                    </span>
                    <h4 className="font-bold text-orange-600 text-lg uppercase tracking-wider">Day 2 — Mastery & Integration</h4>
                  </div>
                  {[
                    { t: '10:00 – 10:20 AM', task: 'Motivation Warm-Up & Advanced Brain Yoga' },
                    { t: '10:20 – 11:00 AM', task: 'Advanced Concentration Drills & Attention Training' },
                    { t: '11:15 – 1:00 PM', task: 'Memory Palace & Speed Learning Application' },
                    { t: '1:00 – 1:45 PM', task: 'Lunch Break' },
                    { t: '1:45 – 2:45 PM', task: 'Advanced Problem-Solving Challenges & IQ Games' },
                    { t: '2:45 – 3:15 PM', task: 'Break & Physical Brain Activation (Movement)' },
                    { t: '3:15 – 4:30 PM', task: 'Full Cognitive Integration — Academic Simulation' },
                    { t: '4:30 – 5:00 PM', task: 'Certificate Ceremony & Parent Counselling' }
                  ].map((s, i) => (
                    <div key={i} className="px-10 py-4 flex items-center border-t border-slate-50 last:border-b last:border-slate-100">
                      <span className="text-[10px] font-black text-orange-500 w-36 shrink-0">{s.t}</span>
                      <span className="text-slate-700 text-sm font-semibold">{s.task}</span>
                    </div>
                  ))}
                </div>

                {/* Follow-Ups */}
                <div className="px-10 py-8 bg-slate-50/50 border-t border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0 border border-green-100">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-black text-slate-900 text-sm uppercase tracking-tight">4 Follow-Up Sessions</span>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-0 text-[10px] font-black uppercase px-2">Included</Badge>
                      </div>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">Once every 2 weeks · 2–3 hours. Home practice 15–20 min/day recommended. Unlimited lifetime follow-up available after the 4 sessions.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Expected Results</h3>
                <div className="space-y-4">
                  {[
                    "Visible improvement in focus and learning speed by end of Day 1",
                    "Child demonstrates stronger memory and creative thinking by Day 2",
                    "Measurable improvement in academic performance confirmed within 30 days",
                    "Sustained growth through lifetime follow-up and daily practice"
                  ].map((res, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="bg-white p-2 rounded-lg shadow-sm font-bold text-blue-600 text-xs tracking-tighter">SUCCESS</div>
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
                    { label: 'Duration', val: '2 Days (10 AM - 5 PM)' },
                    { label: 'Format', val: 'Offline & Online' },
                    { label: 'Batch Size', val: 'Max 12 Students' },
                    { label: 'Follow-Ups', val: '4 Sessions + Lifetime' }
                  ].map((d, i) => (
                    <div key={i} className="flex justify-between items-center pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                      <span className="text-slate-400 text-xs font-bold uppercase">{d.label}</span>
                      <span className="text-slate-900 font-bold text-sm tracking-tight text-right ml-4">{d.val}</span>
                    </div>
                  ))}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Investment</div>
                        <div className="text-2xl font-black text-slate-900">₹10,000</div>
                      </div>
                      <div>
                        <Badge className="bg-blue-100 text-blue-700 text-[9px] font-black hover:bg-blue-100 border-0 uppercase">All-Inclusive</Badge>
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

      {/* 5. Carousel */}
      <TestimonialsCarousel />

      {/* 6. FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-20 max-w-4xl">
          <div className="text-center mb-16">
            <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Support</span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-none uppercase">Got Questions?</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: 'What makes the Enhancement Program different?', a: 'While other programs focus on one cognitive skill, the Enhancement Program trains all major functions simultaneously — memory, focus, creativity and problem-solving — creating a complete cognitive upgrade in just 2 days.' },
              { q: 'What does "lifetime follow-up" actually mean?', a: 'After completing the 2-day workshop and 4 scheduled sessions, your child can return for follow-up support at any point in the future — before exams or for a refresher — with no extra fee.' },
              { q: 'What age group is this suitable for?', a: 'The Enhancement Program is designed for children aged 5 to 17 years. Activities are adapted within the batch to suit different age groups.' },
              { q: 'How soon will we see results?', a: 'Most parents notice visible changes in focus and learning behaviour within 1–2 weeks. Measurable academic improvement is typically seen within the first month.' },
              { q: 'Is the online batch as effective as the offline workshop?', a: 'Yes. The same certified trainer, the same structured 2-day curriculum and the same follow-up schedule apply to both modes.' },
              { q: 'What is included in the ₹10,000 fee?', a: 'The fee covers the full 2-day workshop, all materials, 4 follow-up sessions and unlimited lifetime follow-up support.' }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-2xl px-6 bg-slate-50 border-slate-200">
                <AccordionTrigger className="text-left font-bold text-slate-900 text-lg py-6">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 7. Final Footer CTA */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent)] pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-20 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none uppercase mb-6">Ready to Unlock Your Child&apos;s Potential?</h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">Book a Free Demo Session or talk to our experts today and start the transformation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 h-14 px-10 rounded-2xl font-black text-base shadow-xl"><Link href="/contact">Book Free Demo</Link></Button>
            <Button asChild variant="outline" size="lg" className="border-slate-700 bg-transparent text-white hover:bg-slate-800 h-14 px-10 rounded-2xl font-black text-base"><Link href="https://wa.me/917396447470" className="flex items-center gap-2">WhatsApp Us</Link></Button>
          </div>
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
