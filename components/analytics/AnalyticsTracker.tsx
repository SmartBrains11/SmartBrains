'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initAnalytics, trackEvent } from '@/lib/analytics';

export function AnalyticsTracker() {
  const pathname = usePathname();

  // 1. Initialize trackers on mount
  useEffect(() => {
    initAnalytics();
  }, []);

  // 2. Track Page View on route change
  useEffect(() => {
    trackEvent('page_view', { page_path: pathname });
  }, [pathname]);

  // 3. Track Scroll Depth & Intercept Clicks
  useEffect(() => {
    const firedDepths = new Set<number>();

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - windowHeight;

      if (docHeight <= 0) return;

      const pct = Math.round((scrollY / docHeight) * 100);

      // Check milestones
      [25, 50, 75, 100].forEach((milestone) => {
        if (pct >= milestone && !firedDepths.has(milestone)) {
          firedDepths.add(milestone);
          trackEvent('scroll_depth', { depth: milestone, page: pathname });
        }
      });
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Bubble up to find anchor or button
      const element = target.closest('a, button');
      if (!element) return;

      const text = (element.textContent || '').trim();
      const href = element.getAttribute('href') || '';

      // Check WhatsApp clicks
      if (href.includes('wa.me') || href.includes('whatsapp.com')) {
        trackEvent('whatsapp_click', { text, href, page: pathname });
        return;
      }

      // Check Call clicks
      if (href.startsWith('tel:')) {
        trackEvent('phone_click', { text, href, page: pathname });
        return;
      }

      // Check Brochure Downloads
      if (href.toLowerCase().includes('brochure') || href.toLowerCase().includes('.pdf')) {
        trackEvent('brochure_download', { text, href, page: pathname });
        return;
      }

      // Check Demo/Counselling Clicks
      if (href.includes('contact') || text.toLowerCase().includes('demo') || text.toLowerCase().includes('consultation')) {
        trackEvent('book_demo_click', { text, href, page: pathname });
        return;
      }

      // Fallback CTA Click event
      if (element.tagName === 'BUTTON' || element.classList.contains('btn') || href) {
        trackEvent('cta_click', { text, href, page: pathname });
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
    };
  }, [pathname]);

  return null;
}
export default AnalyticsTracker;
