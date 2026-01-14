'use client';

import * as React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const missionImages = [
    {
        src: '/images/about-carousal1.png',
        alt: 'Children learning together'
    },
    {
        src: '/images/first-batch.webp',
        alt: 'Student focused on study'
    },
    {
        src: '/images/about-carousel2.jpg',
        alt: 'Brain training session'
    },
    {
        src: '/images/about-carousel4.jpg',
        alt: 'Abacus practice'
    },
    {
        src: '/images/about-carousel3.jpg',
        alt: 'Group activity'
    }
];

export function MissionCarousel() {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextSlide = React.useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % missionImages.length);
    }, []);

    const prevSlide = React.useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + missionImages.length) % missionImages.length);
    }, []);

    // Auto-advance
    React.useEffect(() => {
        const timer = setInterval(nextSlide, 2000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl group">
            <div
                className="flex transition-transform duration-500 ease-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {missionImages.map((image, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0 relative">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={prevSlide}
            >
                <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={nextSlide}
            >
                <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {missionImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={cn(
                            "w-2 h-2 rounded-full transition-all duration-300",
                            currentIndex === index ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
                        )}
                    />
                ))}
            </div>
        </div>
    );
}
