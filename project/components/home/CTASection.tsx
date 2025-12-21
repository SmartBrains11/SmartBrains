'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone, Calendar, Users } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="relative py-28 text-white overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Happy child learning"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* EXISTING Gradient Overlay (UNCHANGED COLORS) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Unlock Your Child&apos;s Potential?
        </h2>

        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of families who have already experienced the transformation.
          Book a free demo session today and see the difference our programs can make.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-blue-700 hover:bg-gray-100"
          >
            <Link href="/contact" className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Book Free Demo</span>
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-white text-blue-700 hover:bg-gray-100"
          >
            <Link href="/programs/dmit" className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Start with DMIT</span>
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <Users className="h-8 w-8 mx-auto mb-2 opacity-80" />
            <div className="text-sm opacity-80">Free Demo Session</div>
          </div>
          <div className="text-center">
            <Calendar className="h-8 w-8 mx-auto mb-2 opacity-80" />
            <div className="text-sm opacity-80">Flexible Scheduling</div>
          </div>
          <div className="text-center">
            <Phone className="h-8 w-8 mx-auto mb-2 opacity-80" />
            <div className="text-sm opacity-80">Instant Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
