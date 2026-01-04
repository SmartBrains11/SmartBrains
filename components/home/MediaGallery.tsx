'use client';

import Image from 'next/image';
import { LiteYouTubeEmbed } from '@/components/shared/LiteYouTubeEmbed';

const galleryItems = [
  {
    type: 'image' as const,
    src: '/images/Workshops.webp',
    alt: 'Students working together during a Smart Brains workshop',
    title: 'Hands-on Workshops',
    description:
      'Students collaborate on engaging brain training activities designed to build confidence and curiosity.',
  },
  {
    type: 'video' as const,
    videoId: 'r-5tJ-7LRxQ',
    title: 'Inside Smart Brains',
    description:
      'Take a quick tour of our classrooms and discover how we make learning exciting for every child.',
  },
  {
    type: 'image' as const,
    src: '/images/mentor.webp',
    alt: 'Instructor guiding a student through an activity',
    title: 'Expert Mentorship',
    description:
      'Certified mentors offer personalised attention to help every learner progress at their own pace.',
  },
  {
    type: 'video' as const,
    videoId: '3GmIpatp42g',
    title: 'Doctor Parent Testimonials',
    description:
      'Hear from parents on how Smart Brains programs transformed their child’s focus and confidence.',
  },
  {
    type: 'image' as const,
    src: '/images/achivements.webp',
    alt: 'Smart Brains students celebrating achievements with trophies and medals',
    title: 'Celebrating Wins',
    description:
      'We cheer every breakthrough—big or small—to keep students motivated and inspired.',
  },
  {
    type: 'image' as const,
    src: '/images/active-learning.webp',
    alt: 'Group activity focused on memory training',
    title: 'Active Learning',
    description:
      'Dynamic group sessions sharpen memory, focus, and problem-solving through play-based challenges.',
  },
];

export function MediaGallery() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
            Gallery
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
            Learning in Action
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Step inside Smart Brains classrooms with a glimpse of our vibrant
            sessions and joyful moments.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-lg transition"
            >
              {/* MEDIA */}
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={800}
                  className="w-full h-[260px] object-cover"
                  loading={index === 0 ? undefined : 'lazy'}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="w-full h-[260px]">
                  <LiteYouTubeEmbed
                    videoId={item.videoId}
                    title={item.title}
                    className="w-full h-full"
                  />
                </div>
              )}

              {/* TEXT */}
              <div className="flex flex-1 flex-col space-y-2 p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}