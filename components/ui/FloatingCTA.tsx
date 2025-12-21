'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        size="lg"
        className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-orange-500 hover:bg-orange-600"
      >
        <Link href="/contact" className="flex items-center space-x-2">
          <MessageCircle className="h-5 w-5" />
          <span className="hidden sm:inline">Book Demo</span>
        </Link>
      </Button>
    </div>
  );
}