'use client';

import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const galleryItems = [
  {
    type: 'image' as const,
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Students working together during a Smart Brains workshop',
    title: 'Hands-on Workshops',
    description: 'Students collaborate on engaging brain training activities designed to build confidence and curiosity.'
  },
  {
    type: 'video' as const,
    src: 'https://www.youtube.com/embed/rsuf3F612DQ',
    title: 'Inside Smart Brains',
    description: 'Take a quick tour of our classrooms and discover how we make learning exciting for every child.'
  },
  {
    type: 'image' as const,
    src: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Instructor guiding a student through an activity',
    title: 'Expert Mentorship',
    description: 'Certified mentors offer personalised attention to help every learner progress at their own pace.'
  },
  {
    type: 'video' as const,
    src: 'https://www.youtube.com/embed/3E7hkPZ-HTk',
    title: 'Parent Testimonials',
    description: 'Hear from parents on how Smart Brains programs transformed their child’s focus and confidence.'
  },
  {
    type: 'image' as const,
    src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80',
    alt: 'Young learner celebrating success in class',
    title: 'Celebrating Wins',
    description: 'We cheer every breakthrough—big or small—to keep students motivated and inspired.'
  },
  {
    type: 'image' as const,
    src: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Group activity focused on memory training',
    title: 'Active Learning',
    description: 'Dynamic group sessions sharpen memory, focus, and problem-solving through play-based challenges.'
  }
];

export function MediaGallery() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold tracking-wide text-blue-600 uppercase">Gallery</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
            Learning in Action
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Step inside Smart Brains classrooms with a glimpse of our vibrant sessions, hands-on activities,
            and the joyful moments families love.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={`${item.type}-${index}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative">
                <AspectRatio ratio={item.type === 'video' ? 16 / 9 : 4 / 3} className="overflow-hidden">
                  {item.type === 'image' ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      priority={index === 0}
                    />
                  ) : (
                    <iframe
                      src={`${item.src}?rel=0`}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="h-full w-full border-0"
                      loading="lazy"
                    />
                  )}
                </AspectRatio>
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

