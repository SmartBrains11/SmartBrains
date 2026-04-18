"use client";

import { Phone, MessageCircle } from 'lucide-react';

export function ContactStrip() {
  return (
    <div className="bg-blue-600 py-8 text-white overflow-hidden relative border-t border-blue-500/30">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-black mb-2 tracking-tight">
              Ready to Unlock Your Child's Potential?
            </h2>
            <p className="text-blue-100 text-lg opacity-90 font-medium">
              Book a <span className="text-white font-bold underline decoration-orange-400 decoration-2 underline-offset-4">Free Demo Session</span> or talk to our experts today!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="tel:+917396447470"
              className="flex items-center justify-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-2xl font-black hover:bg-blue-50 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 active:translate-y-0"
            >
              <div className="bg-blue-100 p-2 rounded-lg">
                <Phone className="h-5 w-5" />
              </div>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[10px] uppercase tracking-widest opacity-70">Call Us Now</span>
                <span className="text-lg">+91 7396447470</span>
              </div>
            </a>

            <a
              href="https://wa.me/917386209090"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-black hover:bg-[#20bd5a] transition-all shadow-[0_10px_30px_rgba(37,211,102,0.2)] hover:-translate-y-1 active:translate-y-0 border border-white/20"
            >
              <div className="bg-white/20 p-2 rounded-lg">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[10px] uppercase tracking-widest opacity-80">Message Us On</span>
                <span className="text-lg">WhatsApp</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
