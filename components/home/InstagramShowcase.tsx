'use client';

import { Instagram, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface ReelCardProps {
  title: string;
  postId: string;
  thumbnail: string;
  isActive: boolean;
  onActivate: () => void;
}

function ReelCard({ title, postId, thumbnail, isActive, onActivate }: ReelCardProps) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl shadow-xl h-[380px] bg-slate-900 border border-slate-100 cursor-pointer"
      onClick={!isActive ? onActivate : undefined}
    >
      {isActive ? (
        /* ── Active: mount the iframe ── */
        <>
          <iframe
            src={`https://www.instagram.com/reel/${postId}/embed/?hidecaption=true&autoplay=1`}
            className="absolute border-0"
            style={{
              width: '130%',
              height: 'calc(100% + 500px)',
              top: '-60px',
              left: '-15%',
              pointerEvents: 'auto',
            }}
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            scrolling="no"
            title={title}
          />
          {/* Mask the "View on Instagram" button at the bottom of the embed */}
          <div
            className="absolute bottom-0 left-0 right-0 z-10"
            style={{
              height: '56px',
              background: 'linear-gradient(to top, #0f172a 70%, transparent)',
              pointerEvents: 'none',
            }}
          />
          {/* Mask top Instagram header bar */}
          <div
            className="absolute top-0 left-0 right-0 z-10"
            style={{
              height: '52px',
              background: '#0f172a',
              pointerEvents: 'none',
            }}
          />
        </>
      ) : (
        /* ── Inactive: show thumbnail + play button ── */
        <>
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 65vw, 20vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 hover:bg-white/30 transition-all duration-200 hover:scale-110">
              <Play className="w-8 h-8 text-white fill-white" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const videos = [
  {
    title: "Midbrain Activation",
    postId: "DJogAEisXkN",
    thumbnail: "/images/midbrain-activation.webp"
  },
  {
    title: "Photographic Memory",
    postId: "DNWKnNSzN_3",
    thumbnail: "/images/photograhic-memory.webp"
  },
  {
    title: "Cycling Blindfold",
    postId: "DRwANz6k5Bf",
    thumbnail: "/images/about3.webp"
  },
  {
    title: "Advance Intuition",
    postId: "DQwjda6E6uc",
    thumbnail: "/images/enhancment.webp"
  },
  {
    title: "Ganesh Idol Blindfold",
    postId: "DN2ixTO5qjl",
    thumbnail: "/images/drawing.webp"
  },
  {
    title: "DIY Art Blindfold",
    postId: "DNqmbdLh0Sf",
    thumbnail: "/images/active-learning.webp"
  },
  {
    title: "Rubik's Cube Blindfold",
    postId: "CvIOSIKAkaL",
    thumbnail: "/images/Workshops.webp"
  },
  {
    title: "Blindfold Cricket",
    postId: "DWRxaQBk0Az",
    thumbnail: "/images/about1.webp"
  },
  {
    title: "Quantum Speed Reading",
    postId: "DRFpugekye9",
    thumbnail: "/images/quantumspeed-reading.webp"
  }
];

export const InstagramShowcase = () => {
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const handleActivate = (postId: string) => {
    // Toggling the same card collapses it back to thumbnail
    setActivePostId(prev => (prev === postId ? null : postId));
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Premium Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-50/50 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-pink-600 text-sm font-bold uppercase tracking-wider">
            <Instagram className="w-4 h-4" /> SmartBrains Live
          </span>
          <h2 className="mt-6 text-lg sm:text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-none uppercase">
            EXTRAORDINARY RESULTS
          </h2>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Watch our students showcase incredible mental abilities.
            <span className="block text-slate-400 text-sm mt-2 font-normal">Tap any card to play the video.</span>
          </p>
        </motion.div>

        {/* Desktop: 5-col top row */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8">
          {videos.slice(0, 5).map((video, index) => (
            <motion.div
              key={video.postId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col gap-4"
            >
              <ReelCard
                {...video}
                isActive={activePostId === video.postId}
                onActivate={() => handleActivate(video.postId)}
              />
              <p className="text-sm font-bold text-slate-800 px-1 text-center tracking-wide uppercase">{video.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Desktop: 4-col bottom row */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 mt-24 max-w-[85%] mx-auto">
          {videos.slice(5).map((video, index) => (
            <motion.div
              key={video.postId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 5) * 0.1 }}
              className="flex flex-col gap-4"
            >
              <ReelCard
                {...video}
                isActive={activePostId === video.postId}
                onActivate={() => handleActivate(video.postId)}
              />
              <p className="text-sm font-bold text-slate-800 px-1 text-center tracking-wide uppercase">{video.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet: horizontal scrollable strip */}
        <div className="lg:hidden flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
          {videos.map((video) => (
            <div key={video.postId} className="flex-shrink-0 w-[65vw] sm:w-[40vw] snap-start flex flex-col gap-4">
              <ReelCard
                {...video}
                isActive={activePostId === video.postId}
                onActivate={() => handleActivate(video.postId)}
              />
              <p className="text-sm font-bold text-slate-800 px-1 text-center tracking-wide uppercase">{video.title}</p>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <a
            href="https://www.instagram.com/smartbrainsindia.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white rounded-full font-black text-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-300 group"
          >
            JOIN OUR COMMUNITY ON INSTAGRAM
            <div className="bg-gradient-to-tr from-pink-500 to-orange-500 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <Instagram className="w-5 h-5 text-white" />
            </div>
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};
