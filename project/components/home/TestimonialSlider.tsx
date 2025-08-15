'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Parent of 8-year-old',
    content: 'My daughter\'s memory and concentration have improved dramatically after joining the Photographic Memory program. She now remembers her lessons effortlessly and her confidence has soared.',
    rating: 5,
    program: 'Photographic Memory'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Parent of 10-year-old',
    content: 'The Abacus Math program has transformed my son\'s relationship with mathematics. He now solves complex calculations mentally and actually enjoys math class!',
    rating: 5,
    program: 'Abacus Math'
  },
  {
    id: 3,
    name: 'Anitha Reddy',
    role: 'Parent of twins (6 years)',
    content: 'Both my children completed the Midbrain Activation program and the results are amazing. Their intuition, creativity, and problem-solving skills have improved significantly.',
    rating: 5,
    program: 'Midbrain Activation'
  },
  {
    id: 4,
    name: 'Dr. Venkat Rao',
    role: 'Pediatrician & Parent',
    content: 'As a doctor and a parent, I was initially skeptical. But the DMIT assessment provided valuable insights into my child\'s potential, and the subsequent programs have been highly beneficial.',
    rating: 5,
    program: 'DMIT'
  }
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Parents Say About Us
          </h2>
          <p className="text-xl text-gray-600">
            Real experiences from parents who have seen the transformation in their children.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <Quote className="h-12 w-12 text-blue-600 mb-6" />
            
            <div className="mb-6">
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                "{testimonials[currentIndex].content}"
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-gray-900 text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600">{testimonials[currentIndex].role}</div>
                <div className="text-blue-600 text-sm font-medium mt-1">
                  Program: {testimonials[currentIndex].program}
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToPrevious}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToNext}
                  className="rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}