'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Brain, Users, Award, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/5905704/pexels-photo-5905704.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4144224/pexels-photo-4144224.jpeg?auto=compress&cs=tinysrgb&w=800"
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-orange-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Unlock Your Child's{' '}
              <span className="text-blue-600">Brain Potential</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Scientifically proven brain training programs for kids, teens, and adults in Hyderabad & Vizianagaram. Improve memory, focus, speed reading, mathematical skills, and creativity through structured cognitive enhancement techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Book a Free Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/programs">Explore Programs</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">1000+</div>
                <div className="text-sm text-gray-600">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">11+</div>
                <div className="text-sm text-gray-600">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">96%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Side - Slider */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="relative w-full h-80 overflow-hidden rounded-lg mb-6">
                <AnimatePresence>
                  {images.map((img, index) =>
                    index === current ? (
                      <motion.img
                        key={img}
                        src={img}
                        alt="Brain training"
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                      />
                    ) : null
                  )}
                </AnimatePresence>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Brain className="h-6 w-6 text-blue-600" />
                  <span className="text-sm font-medium">Cognitive Enhancement</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-orange-600" />
                  <span className="text-sm font-medium">All Age Groups</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-green-600" />
                  <span className="text-sm font-medium">Certified Programs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-6 w-6 text-purple-600" />
                  <span className="text-sm font-medium">Day 1 Results</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
