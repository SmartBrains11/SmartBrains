'use client';

import * as React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const galleryImages = [
    {
        id: 'gallery-1',
        src: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Students celebrating achievement',
        title: 'Achievement Celebration'
    },
    {
        id: 'gallery-2',
        src: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Group learning session',
        title: 'Group Learning'
    },
    {
        id: 'gallery-3',
        src: 'https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'One-on-one mentoring',
        title: 'Personal Mentoring'
    },
    {
        id: 'gallery-4',
        src: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Workshop activity',
        title: 'Workshop Activity'
    },
    {
        id: 'gallery-5',
        src: 'https://images.pexels.com/photos/4145047/pexels-photo-4145047.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Interactive training session',
        title: 'Interactive Training'
    }
];

export function SuccessGalleryCarousel() {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

    // 2 slides: first slide has 3 images, second slide has 2 images
    const totalSlides = 2;

    const nextSlide = React.useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, [totalSlides]);

    const prevSlide = React.useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    // Auto-advance carousel
    React.useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(nextSlide, 4000);
        return () => clearInterval(timer);
    }, [nextSlide, isAutoPlaying]);

    return (
        <div
            className="relative w-full"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Carousel Container */}
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {/* Slide 1: First 3 images */}
                    <div className="w-full flex-shrink-0">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {galleryImages.slice(0, 3).map((item) => (
                                <div
                                    key={item.id}
                                    className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <div className="text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                                            <p className="text-sm text-gray-200">{item.alt}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Slide 2: Last 2 images */}
                    <div className="w-full flex-shrink-0">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {galleryImages.slice(3, 5).map((item) => (
                                <div
                                    key={item.id}
                                    className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <div className="text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                                            <p className="text-sm text-gray-200">{item.alt}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <Button
                variant="ghost"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 text-gray-900 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 w-12 h-12 z-10"
                onClick={prevSlide}
            >
                <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 text-gray-900 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 w-12 h-12 z-10"
                onClick={nextSlide}
            >
                <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-3 mt-8">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={cn(
                            "transition-all duration-300 rounded-full",
                            currentIndex === index
                                ? "bg-blue-600 w-8 h-3"
                                : "bg-gray-300 hover:bg-gray-400 w-3 h-3"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
