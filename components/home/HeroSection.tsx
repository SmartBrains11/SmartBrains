'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  img: string;
  cta: { text: string; href: string };
  meta?: string;
  objectPosition?: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: 'Brain Training & Memory Development Classes for Kids in Hyderabad & Vizianagaram',
    subtitle: 'Interactive programs to boost memory, focus, creativity and confidence.',
    img: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=1600',
    cta: { text: 'Book Free Demo', href: '/contact' },
    meta: 'Hyderabad & Vizianagaram',
    objectPosition: '50% 36%',
  },
  {
    id: 2,
    title: 'Build Confidence Through Play',
    subtitle: 'Short sessions, measurable progress — learning that kids love.',
    img: 'https://images.pexels.com/photos/5905704/pexels-photo-5905704.jpeg?auto=compress&cs=tinysrgb&w=1600',
    cta: { text: 'Explore Programs', href: '/programs' },
    meta: '1000+ Students',
    objectPosition: '50% 38%',
  },
  {
    id: 3,
    title: 'Memory & Focus Training',
    subtitle: 'Photographic Memory, Midbrain Activation, Vedic & Abacus courses.',
    img: 'https://images.pexels.com/photos/4144224/pexels-photo-4144224.jpeg?auto=compress&cs=tinysrgb&w=1600',
    cta: { text: 'See Programs', href: '/programs#courses' },
    meta: '120+ Certified Coaches',
    objectPosition: '50% 34%',
  },
  {
    id: 4,
    title: 'Quantum Speed Reading',
    subtitle: 'Read faster with better comprehension — transform study time.',
    img: 'https://images.pexels.com/photos/4145047/pexels-photo-4145047.jpeg?auto=compress&cs=tinysrgb&w=1600',
    cta: { text: 'Start Free Trial', href: '/signup' },
    meta: 'Day 1 Results',
    objectPosition: '50% 36%',
  },
  {
    id: 5,
    title: 'Learn with Expert Coaches',
    subtitle: 'Certified trainers, weekly progress reports and parent-friendly tracking.',
    img: 'https://images.pexels.com/photos/4144291/pexels-photo-4144291.jpeg?auto=compress&cs=tinysrgb&w=1600',
    cta: { text: 'Book Free Demo', href: '/contact' },
    meta: 'Call 7396447470',
    objectPosition: '50% 36%',
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

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
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        setPrevIndex(index);
        setIndex((i) => (i + 1) % slides.length);
      }, 5000);
    }
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
  }, [isPaused, index, prefersReducedMotion]);

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
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full h-[91vh] md:h-[87vh] lg:h-[91vh] min-h-[582px]">
        {/* IMAGE LAYER */}
        <div className="absolute inset-0 -z-10 bg-black">
          {slides.map((slide, i) => {
            const isCurrent = i === index;
            const isPrev = prevIndex === i;
            if (!isCurrent && !isPrev) return null;

            const isLoaded = !!loaded[slide.id];
            const showCurrent = isCurrent && isLoaded;

            // Priority and loading props: avoid mixing priority + loading (Next.js rule)
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

            // we animate both opacity + slight scale to give a modern "float in" feel
            const initial = isPrev ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.03 };
            const animate = showCurrent ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 };

            return (
              <motion.div
                key={slide.id}
                initial={initial}
                animate={animate}
                transition={{ duration: crossfadeDuration, ease: [0.2, 0.8, 0.2, 1] }}
                className="absolute inset-0"
                onAnimationComplete={() => {
                  // if prev slide finished animating out, unmount it
                  if (isPrev && !showCurrent) {
                    setPrevIndex((p) => (p === i ? null : p));
                  }
                }}
              >
                {/* @ts-ignore - spreading conditional props */}
                <Image {...(imageProps as any)} />
                {/* overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/8 to-black/50 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-start pt-16 md:pt-20 lg:pt-24">
          {/* Increased horizontal padding so text doesn't hit arrows:
              - base: px-8
              - md: px-12
              - lg: px-20
              Also add explicit right padding to the content column (pr-16/24) */
          }
          <div className="container mx-auto px-8 md:px-12 lg:px-20">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={slides[index].id + '-' + index}
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={contentVariants}
                className="max-w-4xl text-white pl-2 sm:pl-4 pr-6 sm:pr-12 lg:pr-20"
              >
                <p className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-4">
                  SmartBrains India — Hyderabad & Vizianagaram
                </p>

                <h1 className="mt-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                  <motion.span
                    key={slides[index].title}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.42 }}
                    className="block"
                  >
                    {slides[index].title}
                  </motion.span>
                </h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.06, duration: 0.36 }}
                  className="mt-4 text-sm md:text-base text-white/90 max-w-lg pr-4"
                >
                  {slides[index].subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.12, duration: 0.36 }}
                  className="mt-6 flex flex-col sm:flex-row gap-3 items-start"
                >
                  <Link
                    href={slides[index].cta.href}
                    aria-label={slides[index].cta.text}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:brightness-105 transition"
                  >
                    {slides[index].cta.text}
                  </Link>

                  <a
                    href="tel:7396447470"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 text-white font-medium border border-white/20 hover:bg-white/5 transition"
                  >
                    Call 7396447470
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.18, duration: 0.42 }}
                  className="mt-8 flex flex-wrap gap-4 items-center"
                >
                  <div className="min-w-[120px]">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold">30k+</div>
                    <div className="text-xs md:text-sm text-white/80">Students Trained</div>
                  </div>

                  <div className="min-w-[120px]">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-amber-500">120+</div>
                    <div className="text-xs md:text-sm text-white/80">Coaches</div>
                  </div>

                  <div className="min-w-[140px]">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-emerald-400">96%</div>
                    <div className="text-xs md:text-sm text-white/80">Success Rate</div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* NAV BUTTONS */}
        <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-40">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="w-10 h-10 rounded-full bg-white/20 text-white backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40">
          <button
            onClick={next}
            aria-label="Next slide"
            className="w-10 h-10 rounded-full bg-white/20 text-white backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* INDICATORS */}
        <div className="absolute inset-x-0 bottom-12 z-40 flex items-center justify-center pointer-events-auto">
          <div className="flex items-center gap-3 bg-white/6 px-4 py-2 rounded-full backdrop-blur-sm">
            <div className="flex items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-3.5 h-3.5 rounded-full transition ${i === index ? 'bg-white' : 'bg-white/40'}`}
                />
              ))}
            </div>

            <button
              onClick={() => setIsPaused((p) => !p)}
              aria-label={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
              className="ml-3 px-3 py-1 rounded-full bg-white/10 text-white text-sm"
            >
              {isPaused ? 'Resume' : 'Pause'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
