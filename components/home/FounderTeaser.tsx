'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FounderTeaser = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-60" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image side with creative framing */}
            <div className="w-full lg:w-2/5 flex justify-center">
              <div className="relative">
                {/* Decorative frames */}
                <div className="absolute -inset-4 border-2 border-blue-100 rounded-[2.5rem] transform rotate-3" />
                <div className="absolute -inset-4 border-2 border-orange-100 rounded-[2.5rem] transform -rotate-3" />

                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/Jaya-lakshmi.png"
                    alt="Lakkoju Jayalakshmi - Founder of Smart Brains India"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
                </div>

                {/* Badge/Overlay */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] border border-gray-100 animate-bounce-subtle">
                  <div className="flex items-center gap-2 mb-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-4 h-4 text-orange-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs font-bold text-gray-900 uppercase tracking-wider">Trusted by 1000+ Parents</p>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                The Heart Behind Smart Brains India
              </div>

              <h2 className="text-lg sm:text-2xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight leading-none uppercase">
                LAKKOJU JAYALAKSHMI
              </h2>
              <p className="text-xl text-blue-600 font-bold mb-8">
                Founder & Certified Brain Training Expert
              </p>

              <div className="relative mb-10">
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                  A mother turned mission-maker. Jayalakshmi founded Smart Brains India in 2019 after personally witnessing the life-changing power of brain training in her own child's journey. With deep expertise, a mother's heart, and a scientist's curiosity, she has dedicated her life to unlocking the hidden genius in every child she meets.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 transition-all font-bold group"
                >
                  Read More
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 overflow-hidden relative">
                      <Image
                        src={`/images/about${i}.webp`}
                        alt="Student"
                        fill
                        className="object-cover"
                        onError={(e) => {
                          // Fallback if image doesn't exist
                          (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`;
                        }}
                      />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-blue-600 text-xs font-bold relative">
                    +1k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};
