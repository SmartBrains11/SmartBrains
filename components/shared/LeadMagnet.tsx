'use client';

import React, { useState } from 'react';
import { Download, Sparkles, CheckCircle, Mail, Phone, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [downloadProgress, setDownloadProgress] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !mobile) return;

    setStatus('submitting');
    
    // Simulate lead capture API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setStatus('success');

    // Simulate file download progress bar for premium feel
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Trigger actual file download from public assets or generate a mock link
          const mockFile = 'data:application/pdf;base64,JVBERi0xLjQKJcFSX2VvZiAKMQAwIG9iagogIDw8IC9UeXBlIC9DYXRhbG9nIC9QYWdlcyAyIDAgUiA+PiBlbmRvYmoKMiAwIG9iagogIDw8IC9UeXBlIC9QYWdlcyAvS2lkcyBbIDMgMCBSIF0gL0NvdW50IDEgPj4gZW5kb2JqCjMgMCBvYmogCiAgPDwgL1R5cGUgL1BhZ2UgL1BhcmVudCAyIDAgUiAvTWVkaWFCb3ggWyAwIDAgNTk1IDg0MiBdID4+IGVuZG9iagp4cmVmCjAgNAowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwMDA2OCAwMDAwMCBuIAowMDAwMDAwMTI3IDAwMDAgbiAKdHJhaWxlcagogIDw8IC9TaXplIDQgL1Jvb3QgMSAwIFIgPj4Kc3RhcnR4cmVmCjE5OQolJUVPRg==';
          const link = document.createElement('a');
          link.href = mockFile;
          link.download = 'SmartBrains_Brain_Development_Guide.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };

  return (
    <Card className="border-none shadow-2xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 text-white rounded-[2.5rem] overflow-hidden relative max-w-4xl mx-auto my-16">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <CardContent className="p-8 md:p-14 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> High-Value Resource
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase">
            Download Free <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-300">Brain Development Guide</span>
          </h3>
          <p className="text-slate-350 text-base md:text-lg leading-relaxed">
            Get our comprehensive 35-page guide featuring expert tips, memory triggers, study planning frameworks, and localized brain activation routines for kids.
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wide text-slate-400">
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Study Planner Included</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Memory Drills</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Parent Checklists</div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
          {status !== 'success' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h4 className="font-bold text-lg uppercase tracking-wide text-center mb-2">Claim Your Copy</h4>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/10 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm font-medium text-white placeholder:text-slate-400"
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  required
                  type="tel"
                  placeholder="Mobile Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/10 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm font-medium text-white placeholder:text-slate-400"
                />
              </div>
              <Button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold h-12 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 uppercase tracking-wider"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Get Guide Now
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg uppercase tracking-wide">Ready for Download!</h4>
              {downloadProgress < 100 ? (
                <div className="space-y-2">
                  <p className="text-xs text-slate-400">Preparing your PDF...</p>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 transition-all duration-300" style={{ width: `${downloadProgress}%` }} />
                  </div>
                </div>
              ) : (
                <p className="text-xs text-emerald-400 font-bold">Your download should start automatically.</p>
              )}
            </div>
          )}
        </div>

      </CardContent>
    </Card>
  );
}
