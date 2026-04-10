'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, User, MessageSquare, Sparkles, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_yv2p4rh';
const TEMPLATE_ID = 'template_srxnagn';
const PUBLIC_KEY = 'soJLwCs94fCTltPBi';

export const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'Free Demo'
  });

  useEffect(() => {
    // Show after 5 seconds on every refresh
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      
      // Send using EmailJS (consistent with the contact page)
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          mobile: formData.phone,
          program: formData.interest,
          query: 'Website Popup Enquiry',
          reply_to: 'smartbrainsindia11@gmail.com'
        },
        PUBLIC_KEY
      );
      
      setIsSubmitted(true);
      
      // Auto close after success message
      setTimeout(() => {
        setIsOpen(false);
      }, 4000);
    } catch (error) {
      console.error('Submission error:', error);
      // Fallback: mailto if EmailJS fails
      const subject = `New Enquiry from ${formData.name}`;
      const body = `Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AInterest: ${formData.interest}`;
      window.location.href = `mailto:smartbrainsindia11@gmail.com?subject=${subject}&body=${body}`;
      
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Popup Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20"
          >
            {/* Top Accents */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500" />
            
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
            >
              <X className="w-6 h-6 text-gray-400" />
            </button>

            {!isSubmitted ? (
              <div className="p-8 sm:p-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
                  <Sparkles className="w-3.5 h-3.5" /> Special Offer
                </div>
                
                <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                  Unlock Your Child's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">Pure Potential</span>
                </h3>
                
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Join 1,000+ students in our expert-led brain training programs. Fill the form below to get a <strong>FREE Demo Session</strong>.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      required
                      type="text"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 font-medium"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      required
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 font-medium"
                    />
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-medium appearance-none"
                    >
                      <option value="Free Demo">Interested in Free Demo</option>
                      <option value="Fee Details">Inquire About Fees</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95 mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'SENDING...' : 'GET FREE DEMO NOW'}
                    {!isSubmitting && <Send className="w-5 h-5" />}
                  </button>
                </form>

                <p className="mt-6 text-center text-xs text-gray-400 leading-relaxed font-medium">
                  We respect your privacy. No spam, only helpful information about your child's development.
                </p>
              </div>
            ) : (
              <div className="p-12 text-center py-20">
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                  <Sparkles className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">Request Sent!</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. We've received your enquiry and our expert team will contact you within 24 hours.
                </p>
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-sm font-semibold text-slate-900">Immediate help? Call us:</p>
                  <p className="text-xl font-black text-blue-600 mt-2">+91 7396447470</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
