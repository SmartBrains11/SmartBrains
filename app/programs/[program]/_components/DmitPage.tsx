'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import { 
  CheckCircle, Brain, Target, Star, ArrowLeft, Heart, 
  Quote, ChevronLeft, ChevronRight, Fingerprint, Activity,
  Users, Calendar, Eye, Shield, ArrowRight, Mail, Phone, MessageSquare,
  FileText, Lightbulb, Map, PenTool, Music, Sparkles, BookOpen
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
    name: 'Ramesh Babu',
    role: 'Parent of son, age 15',
    location: 'Hyderabad',
    content: "We had been pushing our son towards engineering because that is what we knew. The DMIT report showed overwhelming dominance in interpersonal and linguistic intelligence — not logical-mathematical. We changed course, focused on communication and leadership, and he has completely transformed. His confidence and academic enthusiasm are unrecognisable.",
    accent: 'from-blue-500 to-indigo-500',
    accentLight: 'bg-blue-50 text-blue-600',
  },
  {
    name: 'Sunitha Varma',
    role: 'Parent of daughter, age 12',
    location: 'Vizianagaram',
    content: "My daughter was labelled 'average' at school. The DMIT report revealed extremely high spatial and visual intelligence — areas her school simply never measured. We enrolled her in the right programs, changed how we helped her study at home, and within one term her marks improved significantly. She was never average — she was just being taught the wrong way.",
    accent: 'from-purple-500 to-fuchsia-500',
    accentLight: 'bg-purple-50 text-purple-600',
  },
  {
    name: 'Kiran Mehta',
    role: 'Working professional, age 34',
    location: 'Online assessment',
    content: "I took the DMIT assessment as an adult at 34 and it was one of the most clarifying experiences of my life. I had always felt like I was in the wrong career. The report confirmed this and mapped out exactly where my natural strengths lie. I have since made a career transition and feel more fulfilled professionally than I ever have.",
    accent: 'from-orange-500 to-amber-500',
    accentLight: 'bg-orange-50 text-orange-600',
  },
  {
    name: 'Padma Reddy',
    role: 'Parent of son, age 10',
    location: 'Hyderabad',
    content: "The follow-up consultation was as valuable as the assessment itself. Our consultant walked us through every section of the report, explained exactly how to apply the findings to our son's daily study routine, and recommended two SmartBrains programs that matched his brain profile perfectly. It felt like a personalised roadmap — not a generic report.",
    accent: 'from-emerald-500 to-teal-500',
    accentLight: 'bg-emerald-50 text-emerald-600',
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
      <div className="absolute top-0 right-0 w-[30%] h-[50%] bg-blue-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-sm font-semibold tracking-wide text-indigo-600 uppercase">Success Stories</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">Life Changing Clarity</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">Real stories from parents and professionals who found direction with DMIT.</p>
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

/* ─── Quiz Widget ─── */
function IntelligenceQuiz() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({
    linguistic: 0,
    logical: 0,
    spatial: 0,
    kinesthetic: 0,
    musical: 0,
    interpersonal: 0,
  });

  const questions = [
    {
      q: "When learning something new, does your child prefer to:",
      options: [
        { text: "Read instructions or listen to an explanation", type: "linguistic" },
        { text: "Look at diagrams, charts, or maps", type: "spatial" },
        { text: "Try doing it immediately with their hands", type: "kinesthetic" },
        { text: "Figure out the logical steps and patterns", type: "logical" }
      ]
    },
    {
      q: "What is their favorite free-time activity?",
      options: [
        { text: "Reading books or writing stories", type: "linguistic" },
        { text: "Playing an instrument or listening to music", type: "musical" },
        { text: "Sports, dancing, or building things", type: "kinesthetic" },
        { text: "Spending time and talking with friends", type: "interpersonal" }
      ]
    },
    {
      q: "When faced with a problem, they usually:",
      options: [
        { text: "Talk it out to find a solution", type: "interpersonal" },
        { text: "Look for logical reasons and ask 'why'", type: "logical" },
        { text: "Hum or tap to a rhythm while thinking", type: "musical" },
        { text: "Draw or doodle to visualize it", type: "spatial" }
      ]
    }
  ];

  const handleOption = (type: string) => {
    setScores(prev => ({ ...prev, [type]: prev[type] + 1 }));
    setStep(s => s + 1);
  };

  const getResult = () => {
    let topType = "linguistic";
    let max = 0;
    for (const [type, score] of Object.entries(scores)) {
      if (score > max) { max = score; topType = type; }
    }
    
    const typeNames: Record<string, string> = {
      linguistic: "Linguistic Intelligence",
      logical: "Logical-Mathematical Intelligence",
      spatial: "Spatial/Visual Intelligence",
      kinesthetic: "Bodily-Kinesthetic Intelligence",
      musical: "Musical Intelligence",
      interpersonal: "Interpersonal Intelligence"
    };

    return typeNames[topType];
  };

  return (
    <div className="bg-white rounded-3xl border border-indigo-100 shadow-[0_10px_40px_rgba(79,70,229,0.1)] p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-5 text-indigo-600 pointer-events-none">
        <Brain className="w-48 h-48" />
      </div>
      
      <div className="relative z-10 text-center mb-8">
        <span className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          <Lightbulb className="w-3.5 h-3.5" /> Interactive Quiz
        </span>
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">Which intelligence is your child?</h3>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {step < questions.length ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold text-slate-800 text-center mb-6">
                <span className="text-indigo-500 mr-2">Q{step + 1}.</span> {questions[step].q}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {questions[step].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOption(opt.type)}
                    className="p-4 text-left border-2 border-slate-100 rounded-xl hover:border-indigo-600 hover:bg-indigo-50 transition-all font-medium text-slate-700"
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-center gap-2">
                {questions.map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i === step ? 'bg-indigo-600' : 'bg-slate-200'}`} />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center bg-indigo-50/50 p-8 rounded-2xl border border-indigo-100"
            >
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-white rounded-full text-indigo-600 shadow-sm mb-6">
                <Target className="w-8 h-8" />
              </div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">Likely Dominance</p>
              <h4 className="text-3xl font-black text-indigo-700 mb-6">{getResult()}</h4>
              
              <div className="bg-white p-5 rounded-xl border border-slate-200 text-sm text-slate-600 leading-relaxed italic mb-8">
                "This quiz is based on observation. DMIT gives you the full picture across <strong>all 10 intelligences</strong> with 95% accuracy — based on biology, not observation."
              </div>

              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 px-10 rounded-xl font-black uppercase tracking-wider">
                <Link href="/contact">Book Scientific DMIT Test</Link>
              </Button>
              <Button variant="ghost" onClick={() => { setStep(0); setScores({linguistic: 0, logical: 0, spatial: 0, kinesthetic: 0, musical: 0, interpersonal: 0}); }} className="mt-4 w-full">
                Retake Quiz
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─── Mock Report Widget ─── */
function SampleReport() {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-sm">
      <div className="text-center mb-10">
        <span className="text-sm font-semibold tracking-wide text-indigo-600 uppercase block mb-2">Inside The 68-Page Report</span>
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase">A Blueprint of Your Child&apos;s Mind</h3>
        <p className="text-slate-600 mt-3">Parents are paying ₹5,000 for this life-changing clarity. Here is a glimpse of what you receive.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Mock UI */}
        <div className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500">
          <div className="bg-indigo-600 p-4 flex justify-between items-center text-white">
            <div className="font-bold tracking-widest text-xs uppercase">DMIT Intelligence Profile</div>
            <Fingerprint className="w-5 h-5 opacity-50" />
          </div>
          <div className="p-6 space-y-6">
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Brain Dominance</div>
              <div className="flex gap-2">
                <div className="flex-1 bg-slate-100 rounded-lg p-3 border border-slate-200">
                  <div className="text-xs text-slate-500 mb-1">Left Brain</div>
                  <div className="text-xl font-black text-slate-800">42%</div>
                </div>
                <div className="flex-1 bg-indigo-50 rounded-lg p-3 border border-indigo-200 ring-2 ring-indigo-500 ring-offset-2">
                  <div className="text-xs text-indigo-600 font-bold mb-1">Right Brain (Dominant)</div>
                  <div className="text-xl font-black text-indigo-700">58%</div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Top 3 Intelligences</div>
              <div className="space-y-3">
                {[{name: 'Interpersonal', pct: 92, color: 'bg-emerald-500'}, {name: 'Visual/Spatial', pct: 85, color: 'bg-blue-500'}, {name: 'Kinesthetic', pct: 78, color: 'bg-amber-500'}].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                      <span>{item.name}</span>
                      <span>{item.pct}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color}`} style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-lg text-xs text-slate-600 leading-relaxed border border-slate-100">
              <span className="font-bold text-slate-800">Recommendation:</span> Strong interpersonal and spatial skills indicate high success in architecture, design leadership, or psychology. Auditory learning is lowest (32%), recommend highly visual study aids.
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-6">
          {[
            { title: "Brain Dominance (Left vs Right)", desc: "Discover whether your child processes logic first, or creativity and emotion." },
            { title: "10 Multiple Intelligences", desc: "A precise ranking of all 10 intelligences, from strongest natural gifts to areas needing support." },
            { title: "VAK Learning Style", desc: "Visual, Auditory, or Kinesthetic? Know exactly how they absorb information best." },
            { title: "Career & Subject Alignment", desc: "Stop guessing. Get a scientifically mapped list of careers that fit their hardwired potential." }
          ].map((f, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 mt-1">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{f.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DmitPage() {
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
            <span className="text-gray-900 font-medium">DMIT</span>
          </div>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="show" variants={STAGGER} className="text-left">
              <motion.div variants={FADE_UP}>
                <Link href="/programs" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Programs
                </Link>
              </motion.div>
              <motion.div variants={FADE_UP} className="mb-2">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100/80 border border-indigo-200 text-indigo-700 text-xs font-black uppercase tracking-widest shadow-sm">
                  <Fingerprint className="w-4 h-4" /> Scientifically Validated
                </span>
              </motion.div>
              <motion.h1 variants={FADE_UP} className="text-4xl md:text-5xl font-black text-gray-900 mb-2 uppercase tracking-tight">
                DMIT
              </motion.h1>
              <motion.h2 variants={FADE_UP} className="text-lg md:text-xl font-bold text-slate-500 mb-4 uppercase tracking-wide">
                Dermatoglyphics Multiple Intelligence Test
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-xl text-indigo-600 font-medium mb-6">
                Your Fingerprints Were Set Before You Were Born. They Already Know Your Child&apos;s Strengths.
              </motion.p>
              <motion.p variants={FADE_UP} className="text-lg text-gray-600 mb-8 leading-relaxed">
                DMIT is a scientifically validated assessment that analyses fingerprint patterns — formed in the womb between the 13th and 21st week of pregnancy and never changing throughout life — to map your child&apos;s innate intelligence, natural learning style, dominant brain hemisphere, personality traits and ideal career direction. 
                <br/><br/>
                <span className="text-slate-900 font-bold">One session. One detailed 68-page report. A lifetime of clarity on how your child thinks, learns and thrives.</span>
              </motion.p>
              
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 uppercase font-black tracking-wider">
                  <Link href="/contact">Book Your Assessment</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="uppercase font-black tracking-wider border-indigo-200 hover:bg-indigo-50">
                  <Link href="tel:+917396447470">Call to Know More</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
              <img src="/images/DMIT.webp" alt="DMIT Fingerprint Assessment" className="w-full h-96 object-cover rounded-[2.5rem] shadow-2xl border-4 border-white" />
              
              {/* Teen Callout */}
              <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white p-5 md:p-6 rounded-3xl shadow-xl border border-slate-100 max-w-xs flex items-center gap-4 transform hover:-translate-y-2 transition-transform">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Map className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Class 9-12 Parents</div>
                  <div className="text-sm font-bold text-slate-900 leading-tight">Stop Guessing Careers. Get direction based on biology.</div>
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
              { value: '95%', label: 'Accuracy in Intelligence Mapping', icon: Target, color: 'text-indigo-600', bg: 'bg-indigo-50' },
              { value: '10', label: 'Multiple Intelligences Assessed', icon: Brain, color: 'text-purple-600', bg: 'bg-purple-50' },
              { value: '1 Session', label: 'Complete Assessment & 68-pg Report', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
              { value: 'All Ages', label: 'Children, Teens & Adults', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50' }
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

      {/* 2. What is DMIT? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold tracking-wide text-indigo-600 uppercase mb-3 block">Discover The Science</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase mb-8">
                WHAT IS DMIT?
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-900">Dermatoglyphics</strong> is the scientific study of fingerprint ridge patterns — a field that has been researched for over a century by neurologists, geneticists and behavioural scientists. The word comes from the Greek <em>derma</em> (skin) and <em>glyph</em> (carving).
                </p>
                <p>
                  Every ridge pattern on your child&apos;s fingertips corresponds directly to a specific region of the brain&apos;s cerebral cortex. By analysing these patterns — their type, density, distribution and formation — DMIT maps which areas of the brain are most developed, which intelligences are dominant, and how the child naturally receives, processes and retains information.
                </p>
                <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-2xl mt-8">
                  <p className="text-slate-800 font-medium">
                    The result is a comprehensive brain profile built not on observation, opinion or teacher feedback — but on <strong className="text-indigo-700 font-black">biological data</strong> that has been present since before birth and will never change.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Fingerprint className="w-64 h-64" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-6 relative z-10 border-b border-white/20 pb-6">Why Fingerprints Never Lie</h3>
              <div className="space-y-6 relative z-10 text-slate-300 leading-relaxed text-lg">
                <p>
                  Fingerprints are formed between the 13th and 21st week of foetal development — at exactly the same time the brain&apos;s cerebral cortex is forming its neural structures. This is not a coincidence. The same genetic blueprint that shapes the brain also shapes the fingerprint ridge patterns.
                </p>
                <p>
                  This biological connection is the foundation of DMIT. Unlike personality tests that change with mood, age or circumstance — <strong className="text-white">fingerprint patterns are permanent</strong>. Your child&apos;s DMIT report reflects their true, hardwired potential — not who they are having a good day, but who they are at their core.
                </p>
                <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/10">
                  <Shield className="w-10 h-10 text-emerald-400 shrink-0" />
                  <p className="text-sm text-slate-400">
                    SmartBrains India uses certified DMIT software and trained assessment specialists to ensure every report is accurate, detailed and actionable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 10 Intelligences (Strongest section) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 max-w-6xl relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <Brain className="w-4 h-4" /> Dr. Howard Gardner&apos;s Theory
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase mb-6">
              Every Child Is Intelligent —<br/><span className="text-indigo-600">Just Not in the Same Way</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Harvard psychologist Dr. Howard Gardner identified 10 distinct types of human intelligence. DMIT maps your child&apos;s natural dominance across all 10. No intelligence is better than another. The report shows your child&apos;s unique constellation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: 'Linguistic', desc: 'Natural ability with language, reading, writing and communication', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
              { title: 'Logical', desc: 'Strength in reasoning, numbers, patterns and problem-solving', icon: Activity, color: 'text-indigo-600', bg: 'bg-indigo-50' },
              { title: 'Spatial', desc: 'Ability to think in images, visualise and navigate space', icon: Eye, color: 'text-purple-600', bg: 'bg-purple-50' },
              { title: 'Musical', desc: 'Sensitivity to rhythm, pitch, tone and musical patterns', icon: Music, color: 'text-pink-600', bg: 'bg-pink-50' },
              { title: 'Kinesthetic', desc: 'Intelligence expressed through movement, sport and physical skill', icon: Activity, color: 'text-orange-600', bg: 'bg-orange-50' },
              { title: 'Interpersonal', desc: 'Natural understanding of other people — social & leadership ability', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50' },
              { title: 'Intrapersonal', desc: 'Deep self-awareness, emotional intelligence and inner clarity', icon: Heart, color: 'text-rose-600', bg: 'bg-rose-50' },
              { title: 'Naturalist', desc: 'Affinity for the natural world, patterns in nature, living things', icon: Sparkles, color: 'text-teal-600', bg: 'bg-teal-50' },
              { title: 'Existential', desc: 'Philosophical depth — big-picture thinking and meaning-making', icon: Brain, color: 'text-cyan-600', bg: 'bg-cyan-50' },
              { title: 'Visual', desc: 'Exceptional perception of detail, design and visual patterns', icon: PenTool, color: 'text-amber-600', bg: 'bg-amber-50' }
            ].map((int, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${int.bg} ${int.color} group-hover:scale-110 transition-transform`}>
                  <int.icon className="w-6 h-6" />
                </div>
                <h4 className="font-black text-slate-900 mb-2 uppercase tracking-wide">{int.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{int.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20">
            <IntelligenceQuiz />
          </div>
        </div>
      </section>

      {/* 4. DMIT vs IQ + Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-20 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Key Benefits */}
            <div>
              <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8">Key Benefits of DMIT</h3>
              <div className="space-y-5">
                {[
                  "Know exactly how your child learns best — visual, auditory, kinesthetic or reading-based",
                  "Identify dominant intelligences and build an education path around genuine strengths",
                  "Stop guessing about career direction — DMIT maps natural aptitude to suitable fields",
                  "Understand your child's personality type and communication style",
                  "Improve parent-child communication by understanding how your child processes the world",
                  "Eliminate academic pressure caused by teaching a child in a style that does not suit their brain",
                  "Applicable at any age — children, teenagers and adults all benefit from this clarity"
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
                    <p className="text-slate-700 font-medium leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* IQ Comparison */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6">DMIT vs Standard IQ Test</h3>
              <p className="text-slate-600 mb-8">Parents who have done IQ tests need to understand why DMIT is fundamentally different and more comprehensive.</p>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-200">
                  <div className="font-bold text-slate-400 uppercase tracking-widest text-xs">Standard IQ Test</div>
                  <div className="font-bold text-indigo-600 uppercase tracking-widest text-xs">DMIT Assessment</div>
                </div>
                
                {[
                  { iq: "Measures only 1–2 intelligences (Logical & Linguistic)", dmit: "Measures all 10 Multiple Intelligences" },
                  { iq: "Changes with age, mood and test conditions", dmit: "Never changes (Fingerprints are permanent)" },
                  { iq: "Based on performance on a specific day", dmit: "Based on hardwired biological data" },
                  { iq: "Can be trained for or gamed", dmit: "Cannot be faked or altered" }
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-100 last:border-0">
                    <div className="text-sm text-slate-600">{row.iq}</div>
                    <div className="text-sm font-bold text-indigo-900">{row.dmit}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Sample Report Callout */}
      <section className="py-20 bg-indigo-900 border-y border-indigo-800">
        <div className="container mx-auto px-6 lg:px-20 max-w-6xl">
          <SampleReport />
        </div>
      </section>

      {/* 6. Main Content Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              
              {/* Assessment Structure */}
              <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="px-10 pt-10 pb-6">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">Assessment Structure</h3>
                  <p className="text-indigo-600 mt-1 text-sm font-medium">1 Assessment Session + 1 Follow-Up · Individual · Offline & Online</p>
                </div>
                
                {/* Session 1 */}
                <div className="border-t border-slate-100">
                  <div className="px-10 py-5 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50">
                      <Brain className="w-5 h-5 text-indigo-600" />
                    </span>
                    <h4 className="font-bold text-indigo-600 text-lg uppercase tracking-wider">Session 1 — Assessment & Report (2-3 Hours)</h4>
                  </div>
                  {[
                    { t: 'Step 1', task: 'Welcome Briefing — Understanding the assessment process.' },
                    { t: 'Step 2', task: 'Fingerprint Collection — All 10 fingers, using certified scanner.' },
                    { t: 'Step 3', task: 'Automated DMIT software analysis — Brain mapping computation.' },
                    { t: 'Step 4', task: 'Report Generation — 68-page personalised intelligence profile.' },
                    { t: 'Step 5', task: 'Initial Report Walkthrough — Certified consultant explains findings.' },
                    { t: 'Step 6', task: 'Parent Q&A — Learning style, education and career guidance.' }
                  ].map((s, i) => (
                    <div key={i} className="px-10 py-4 flex items-center border-t border-slate-50 last:border-b last:border-slate-100">
                      <span className="text-[10px] font-black text-indigo-500 w-28 shrink-0">{s.t}</span>
                      <span className="text-slate-700 text-sm font-semibold">{s.task}</span>
                    </div>
                  ))}
                </div>

                {/* Session 2 */}
                <div className="border-t border-slate-100">
                  <div className="px-10 py-5 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-50">
                      <Users className="w-5 h-5 text-emerald-600" />
                    </span>
                    <h4 className="font-bold text-emerald-600 text-lg uppercase tracking-wider">Session 2 — Follow-Up Consultation (1-1.5 Hours)</h4>
                  </div>
                  <div className="px-10 py-4 border-t border-slate-50 border-b border-slate-100">
                    <p className="text-slate-700 text-sm font-semibold leading-relaxed">
                      Scheduled 2–4 weeks after the assessment. Reviews how the family has applied the report findings, answers deeper questions, and provides additional guidance on academic planning, program selection and development priorities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Expected Results */}
              <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Expected Results</h3>
                <div className="space-y-4">
                  {[
                    "Complete clarity on dominant intelligences & learning style in 1 session",
                    "A specific, personalised action plan for academic improvement",
                    "Measurable improvement in study efficiency by teaching to brain type",
                    "Stronger parent-child relationship through deeper understanding"
                  ].map((res, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 transform hover:scale-[1.02] transition-transform">
                      <div className="bg-white p-2.5 rounded-xl shadow-sm font-bold text-indigo-600 text-[10px] uppercase tracking-tighter ring-1 ring-slate-100">Clarity</div>
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
                    { label: 'Target Age', val: 'Children, Teens, Adults' },
                    { label: 'Duration', val: '1 Assessment (2-3 hrs)' },
                    { label: 'Format', val: 'Offline & Online' },
                    { label: 'Report', val: '68-page Profile' }
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
                        <div className="text-3xl font-black text-slate-900">₹5,000</div>
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
            <p className="text-lg text-slate-600">Everything you need to know about DMIT and the assessment process.</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: 'What exactly is DMIT and how does it work?', a: 'DMIT analyses the ridge patterns on all 10 fingerprints using certified software that maps each pattern to corresponding brain regions. The result is a detailed intelligence and personality profile built on biological data that has been fixed since before birth.' },
              { q: 'Is this scientifically proven?', a: 'Yes. Dermatoglyphics has been studied for over 100 years and is supported by research in neuroscience, genetics and developmental biology. The connection between fingerprint ridge patterns and brain structure has been documented in peer-reviewed research across multiple countries.' },
              { q: 'What age is DMIT suitable for?', a: 'DMIT is suitable for all ages — from children as young as 2–3 years (fingerprints are fully formed at birth) through teenagers making subject and career choices, to adults seeking career clarity or self-understanding.' },
              { q: 'How long does the assessment take?', a: 'The assessment session takes 2–3 hours including fingerprint collection, software analysis, report generation and initial consultation. The follow-up session is 1–1.5 hours and is scheduled 2–4 weeks later.' },
              { q: 'Is the report personalised or generic?', a: 'Every report is completely personalised to the individual\'s fingerprint data. No two reports are identical. The 68-page report covers brain dominance, all 10 intelligences, learning style, personality type, recommended study methods and career directions.' },
              { q: 'Can DMIT be done online?', a: 'Yes. Fingerprint collection is done using a certified scanner at our centre or via a home kit we provide. The consultation and follow-up sessions are available both offline at our Hyderabad and Vizianagaram centres and online.' },
              { q: 'What does ₹5,000 include?', a: 'The full assessment session, certified software analysis, a 68-page personalised report, initial report walkthrough with a certified consultant and one follow-up consultation. No hidden charges.' }
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none uppercase mb-6">Ready to Discover Your Child&apos;s True Potential?</h2>
          <p className="text-indigo-200 text-lg mb-12 max-w-2xl mx-auto">Book your DMIT assessment or speak to our experts today.</p>
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
