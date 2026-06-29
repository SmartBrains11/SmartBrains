'use client';

// Centralized analytics engine for Smart Brains India
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

// Reusable track event helper
export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window === 'undefined') return;

  // Staging/Dev Logging
  console.log(`[Analytics Event]: ${eventName}`, params);

  // 1. Google Analytics 4 (gtag)
  if (window.gtag) {
    window.gtag('event', eventName, params);
  }

  // 2. Google Tag Manager (dataLayer)
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }

  // 3. Meta Pixel (fbq)
  if (window.fbq) {
    window.fbq('trackCustom', eventName, params);
  }
}

// Dynamically inject scripts if configured
export function initAnalytics() {
  if (typeof window === 'undefined') return;

  // Ensure window arrays exist
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function (...args: any[]) {
    window.dataLayer.push(arguments);
  };

  // GA4 Injection
  if (GA4_ID) {
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.appendChild(gaScript);

    window.gtag('js', new Date());
    window.gtag('config', GA4_ID, { page_path: window.location.pathname });
  }

  // GTM Injection
  if (GTM_ID) {
    (function (w: any, d: any, s: any, l: any, i: any) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', GTM_ID);
  }

  // Meta Pixel Injection
  if (PIXEL_ID) {
    (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');
  }

  // Microsoft Clarity Injection
  if (CLARITY_ID) {
    (function (c: any, l: any, a: any, r: any, i: any, t?: any, y?: any) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
      t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", CLARITY_ID);
  }
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: any;
  }
}
