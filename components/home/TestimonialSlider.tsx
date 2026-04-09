'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Parent of 8-year-old',
    content: "My daughter's memory and concentration have improved dramatically after joining the Photographic Memory program. She now remembers her lessons effortlessly and her confidence has soared.",
    rating: 5,
    program: 'Photographic Memory',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Parent of 10-year-old',
    content: 'The Abacus Math program has transformed my son\'s relationship with mathematics. He now solves complex calculations mentally and actually enjoys math class!',
    rating: 5,
    program: 'Abacus Math',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Anitha Reddy',
    role: 'Parent of twins (6 years)',
    content: 'Both my children completed the Midbrain Activation program and the results are amazing. Their intuition, creativity, and problem-solving skills have improved significantly.',
    rating: 5,
    program: 'Midbrain Activation',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Dr. Venkat Rao',
    role: 'Pediatrician & Parent',
    content: 'As a doctor and a parent, I was initially skeptical. But the DMIT assessment provided valuable insights into my child\'s potential, and the subsequent programs have been highly beneficial.',
    rating: 5,
    program: 'DMIT',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop'
  }
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(goToNext, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <section className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-orange-100/30 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <span className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
            Success Stories
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Voices of Our Parents
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Real feedback from families who have seen incredible growth in their children's abilities and confidence.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
          <div className="relative bg-white rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-16 lg:p-20 overflow-hidden min-h-[500px] flex items-center">
            {/* Quote decoration */}
            <Quote className="absolute top-12 left-12 h-24 w-24 text-slate-50 pointer-events-none" />

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="w-full"
              >
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="relative flex-shrink-0">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl overflow-hidden ring-8 ring-blue-50 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-2xl shadow-xl flex items-center justify-center border border-slate-100">
                      <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    </div>
                  </div>

                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex justify-center lg:justify-start gap-1 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-xl md:text-2xl lg:text-3xl text-slate-800 font-medium leading-relaxed italic mb-8">
                      "{testimonials[currentIndex].content}"
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-100 pt-8 mt-8">
                      <div className="flex items-center gap-4">
                        <div className="text-left">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 text-xl">
                              {testimonials[currentIndex].name}
                            </span>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                              <CheckCircle2 className="w-3 h-3" />
                              Verified Parent
                            </span>
                          </div>
                          <div className="text-slate-500 font-medium">{testimonials[currentIndex].role}</div>
                        </div>
                      </div>

                      <div className="px-6 py-2 rounded-2xl bg-slate-50 border border-slate-100">
                        <span className="text-slate-400 text-sm font-medium">Program: </span>
                        <span className="text-blue-600 font-bold">{testimonials[currentIndex].program}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="absolute bottom-8 right-8 flex gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="h-12 w-12 rounded-2xl border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="h-12 w-12 rounded-2xl border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Indicators with progress bar */}
          <div className="flex justify-center items-center gap-4 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`group relative h-2 transition-all duration-300 ${currentIndex === index ? 'w-12' : 'w-2 hover:w-6'}`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
              >
                <div className={`absolute inset-0 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-blue-600' : 'bg-slate-300 group-hover:bg-slate-400'}`} />
                {currentIndex === index && isAutoPlaying && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="absolute inset-0 bg-blue-400 rounded-full opacity-50"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}