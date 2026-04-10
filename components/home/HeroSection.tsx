'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    img: '/images/hero1.1.png',
    cta: { text: 'Book a Free Demo', href: '/contact' },
    cta2: { text: 'Call 7396447470', href: 'tel:7396447470' },
    objectPosition: '50% 36%',
  },
  {
    id: 2,
    badge: 'Abacus · Vedic Maths · Midbrain Activation · Speed Reading',
    title: 'Programs That Build Sharper, Smarter Minds',
    subtitle: 'Every course strengthens memory retention, improves concentration and awakens intuitive thinking in children aged 5 to 16.',
    img: '/images/banner-3.png',
    cta: { text: 'Explore Our Programs', href: '/programs' },
    cta2: { text: 'Call 7396447470', href: 'tel:7396447470' },
    objectPosition: '50% 38%',
  },
  {
    id: 3,
    badge: "The Skills Schools Don't Teach",
    title: 'Better Memory. Deeper Focus. Stronger Intuition.',
    subtitle: 'Academic pressure starts early and schools rarely teach children how to think. SmartBrains gives kids the mental tools to absorb faster, recall better and build natural intuition before the pressure peaks.',
    img: '/images/hero-4.png',
    cta: { text: 'See How It Works', href: '/programs#courses' },
    cta2: { text: 'Call 7396447470', href: 'tel:7396447470' },
    objectPosition: '50% 34%',
  },
  {
    id: 4,
    badge: 'Flexible · Online & Offline · Hyderabad & Vizianagaram',
    title: 'Learn at Our Centre or From Home',
    subtitle: 'Join live sessions at our Hyderabad or Vizianagaram centres or attend online from home. Same certified trainers, same proven methods and weekly progress reports shared directly with parents.',
    img: '/images/hero2.jpg',
    cta: { text: 'Choose Your Mode', href: '/programs' },
    cta2: { text: 'Call 7396447470', href: 'tel:7396447470' },
    objectPosition: '50% 36%',
  },
  {
    id: 5,
    badge: '1,000+ Students · 10+ Trainers · 96% Success Rate',
    title: 'Certified Trainers. Real Results. Proud Parents.',
    subtitle: 'Our certified coaches use proven methods to build memory power, concentration and confidence in kids aged 5 to 16 — with progress parents can see every week.',
    img: '/images/hero-5.png',
    cta: { text: 'Book a Free Demo', href: '/contact' },
    cta2: { text: 'Call 7396447470', href: 'tel:7396447470' },
    objectPosition: '50% 36%',
  },
];


export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Stats
  const studentsCount = 1000;
  const trainersCount = 120; // Updated from slide 3 meta: 10+ Certified Coaches
  const successRate = 96;

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Preload images and mark loaded
  useEffect(() => {
    slides.forEach((s) => {
      const img = new window.Image();
      img.src = s.img;
      img.onload = () => setLoaded((p) => ({ ...p, [s.id]: true }));
      img.onerror = () => setLoaded((p) => ({ ...p, [s.id]: true }));
    });
  }, []);

  // autoplay
  useEffect(() => {
    if (prefersReducedMotion) return;

    if (!isPaused) {
      autoplayRef.current = setInterval(() => {
        setIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % slides.length;
          setPrevIndex(prevIndex);
          return newIndex;
        });
      }, 5000);
    } else {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
  }, [isPaused, prefersReducedMotion]);

  const goTo = (i: number) => {
    if (i === index) return;
    setPrevIndex(index);
    setIndex(i);
  };
  const prev = () => {
    setPrevIndex(index);
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };
  const next = () => {
    setPrevIndex(index);
    setIndex((i) => (i + 1) % slides.length);
  };

  // animation timing
  const crossfadeDuration = 0.8; // slower for a smoother feel

  // content animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.42 } },
  };

  return (
    <header
      className="relative w-full overflow-hidden bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full h-[95vh] min-h-[600px] md:h-[90vh]">
        {/* IMAGE LAYER */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, i) => {
            const isCurrent = i === index;
            const isPrev = prevIndex === i;
            if (!isCurrent && !isPrev) return null;

            const isLoaded = !!loaded[slide.id];
            const showCurrent = isCurrent && isLoaded;

            const isPriority = i === 0;
            const loadingProp = isPriority ? undefined : isCurrent ? 'eager' as const : 'lazy' as const;

            const imageProps = {
              src: slide.img,
              alt: slide.title,
              fill: true,
              sizes: '100vw',
              style: { objectFit: 'cover', objectPosition: slide.objectPosition || '50% 36%' },
              onLoadingComplete: () => setLoaded((p: Record<number, boolean>) => ({ ...p, [slide.id]: true })),
              priority: isPriority ? true : undefined,
              ...(loadingProp ? { loading: loadingProp } : {}),
            };

            const initial = isPrev ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 };
            const animate = showCurrent ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.02 };

            return (
              <motion.div
                key={slide.id}
                initial={initial}
                animate={animate}
                transition={{ duration: crossfadeDuration, ease: "easeInOut" }}
                className="absolute inset-0"
                onAnimationComplete={() => {
                  if (isPrev && !showCurrent) {
                    setPrevIndex((p) => (p === i ? null : p));
                  }
                }}
              >
                {/* @ts-ignore */}
                <Image {...(imageProps as any)} />
                {/* Lighter Gradient Overlay for Better Visibility */}
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)'
                }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
              </motion.div>
            );
          })}
        </div>

        {/* CONTENT */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="container mx-auto px-12 md:px-20 lg:px-24 pt-12">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={slides[index].id + '-' + index}
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={contentVariants}
                className="max-w-4xl text-white md:mt-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-6"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  <span className="text-xs font-semibold tracking-wide text-white uppercase">
                    {slides[index].badge}
                  </span>
                </motion.div>

                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-black leading-tight tracking-tight text-white drop-shadow-md">
                  <motion.span
                    key={slides[index].title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="block whitespace-nowrap"
                  >
                    {slides[index].title}
                  </motion.span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mt-5 text-base sm:text-lg md:text-xl text-gray-100 font-normal max-w-2xl leading-relaxed drop-shadow-sm"
                >
                  {slides[index].subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="mt-8 flex flex-col sm:flex-row gap-4 items-start"
                >
                  <Link
                    href={slides[index].cta.href}
                    aria-label={slides[index].cta.text}
                    className="flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-black font-semibold text-base hover:bg-gray-100 transition-all active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                  >
                    {slides[index].cta.text}
                  </Link>

                  <a
                    href={slides[index].cta2?.href || "tel:7396447470"}
                    className="flex items-center justify-center px-7 py-3.5 rounded-full bg-transparent text-white font-semibold text-base border border-white/40 hover:bg-white/10 backdrop-blur-sm transition-all active:scale-95"
                  >
                    {slides[index].cta2?.text || "Call 7396447470"}
                  </a>
                </motion.div>

                {/* PREMIUM STATS ROW */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="mt-10 md:mt-12 inline-flex flex-wrap gap-8 sm:gap-14 border-t border-white/30 pt-6 pb-12 pr-6 md:pr-12"
                >
                  <div>
                    <div className="text-2xl md:text-3xl font-black text-white mb-1 drop-shadow-md">
                      {studentsCount.toLocaleString()}+
                    </div>
                    <div className="text-xs font-semibold text-gray-200 uppercase tracking-widest">
                      Students Trained
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl md:text-3xl font-black text-white mb-1 drop-shadow-md">
                      {trainersCount}+
                    </div>
                    <div className="text-xs font-semibold text-gray-200 uppercase tracking-widest">
                      Certified Trainers
                    </div>
                  </div>

                  <div className="hidden sm:block">
                    <div className="text-2xl md:text-3xl font-black text-white mb-1 drop-shadow-md">
                      {successRate}%
                    </div>
                    <div className="text-xs font-semibold text-gray-200 uppercase tracking-widest">
                      Success Rate
                    </div>
                  </div>

                  <div className="hidden lg:block">
                    <div className="text-2xl md:text-3xl font-black text-white mb-1 drop-shadow-md">
                      Online & Offline
                    </div>
                    <div className="text-xs font-semibold text-gray-200 uppercase tracking-widest">
                      Learning Modes
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* LEFT NAV BUTTON */}
        <div className="absolute left-2 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        {/* RIGHT NAV BUTTON */}
        <div className="absolute right-2 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20">
          <button
            onClick={next}
            aria-label="Next slide"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* INDICATORS */}
        <div className="absolute left-0 right-0 bottom-6 md:bottom-8 z-20 flex justify-center pointer-events-auto">
          <div className="flex flex-col md:flex-row items-center gap-4 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
            <div className="flex items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`transition-all rounded-full ${i === index ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={() => setIsPaused((p) => !p)}
              aria-label={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
              className="px-3 py-1 rounded-full bg-white/10 text-white hover:bg-white/20 text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              {isPaused ? 'Resume' : 'Pause'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}