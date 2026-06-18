'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Calendar, Phone, Mail, ArrowLeft, Star, CheckCircle, Globe, Video
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export interface OnlineProgramData {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  targetAge: string;
  duration: string;
  classFormat: string;
  price: string;
  image: string;
  imageAlt: string;
  onlineBenefits: string[];
  studentSuccess: string[];
  parentConversion: string;
  faqs: Array<{ q: string; a: string }>;
  relatedPrograms: Array<{ title: string; href: string; description: string }>;
}

interface OnlineProgramViewProps {
  programData: OnlineProgramData;
  programSlug: string;
}

export function OnlineProgramView({ programData, programSlug }: OnlineProgramViewProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Online {programData.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-100 opacity-50 blur-3xl"></div>
        
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Badge className="mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-none px-4 py-1 text-sm font-semibold flex inline-flex items-center w-max">
                <Globe className="w-4 h-4 mr-2" />
                Available Pan-India Online
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight animate-fade-in">
                Online {programData.title} <span className="text-blue-600">in India</span>
              </h1>
              <p className="text-xl text-gray-700 font-medium mb-6 animate-fade-in-delay">
                {programData.subtitle}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in-delay-2">
                {programData.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 shadow-lg hover:shadow-xl transition-all">
                  <Link href="/contact">Book Free Online Demo</Link>
                </Button>
              </div>
            </div>

            <div className="animate-slide-in-right relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img
                src={programData.image}
                alt={programData.imageAlt}
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl relative z-10"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Video className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Live Interactive</p>
                    <p className="font-bold text-gray-900">Online Classes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Long Description */}
              <div className="prose max-w-none text-gray-700 text-lg leading-relaxed animate-fade-in-up">
                <p>{programData.longDescription}</p>
              </div>

              {/* Parent Conversion Content */}
              <Card className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white border-none shadow-xl animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Why Parents Choose Us</h2>
                  <p className="text-lg opacity-90 mb-6">{programData.parentConversion}</p>
                  <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto font-semibold">
                    <Link href="/contact">Speak to an Expert Today</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Online Benefits */}
              {programData.onlineBenefits.length > 0 && (
                <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Our Online Classes</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {programData.onlineBenefits.map((benefit, i) => (
                      <Card key={i} className="hover:shadow-md transition-shadow border-l-4 border-l-blue-500">
                        <CardContent className="p-6 flex items-start">
                          <CheckCircle className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{benefit}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Student Success */}
              {programData.studentSuccess.length > 0 && (
                <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Student Success Outcomes</h2>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="divide-y">
                        {programData.studentSuccess.map((result, i) => (
                          <div key={i} className="p-4 sm:p-6 flex items-center bg-white hover:bg-gray-50 transition-colors">
                            <Star className="h-5 w-5 text-yellow-400 fill-current mr-4 flex-shrink-0" />
                            <span className="text-gray-800 text-lg">{result}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* FAQs Section */}
              {programData.faqs.length > 0 && (
                <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <Accordion type="single" collapsible className="space-y-3">
                        {programData.faqs.map((faq, i) => (
                          <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-4 bg-gray-50/50 hover:bg-gray-50 transition-colors">
                            <AccordionTrigger className="text-left font-semibold text-gray-800 text-lg py-4 hover:no-underline">{faq.q}</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed pb-4 text-base">{faq.a}</AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Program Info Card */}
              <Card className="shadow-lg border-t-4 border-t-blue-600 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <CardHeader className="bg-gray-50 border-b pb-4">
                  <CardTitle className="text-xl">Online Course Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 flex items-center"><Globe className="w-4 h-4 mr-2" /> Format:</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">{programData.classFormat}</Badge>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Target Age:</span>
                    <span className="font-medium text-gray-900">{programData.targetAge}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium text-gray-900">{programData.duration}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Investment:</span>
                    <span className="font-bold text-blue-700">{programData.price}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="shadow-lg bg-gray-900 text-white animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <CardHeader>
                  <CardTitle className="text-xl text-white">Start Your Journey</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Join thousands of students across India who have transformed their cognitive abilities through our online programs.
                  </p>
                  <div className="space-y-3">
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white border-none shadow-md">
                      <Link href="/contact" className="flex items-center justify-center space-x-2 py-6">
                        <Video className="h-5 w-5" />
                        <span className="text-lg">Book Free Demo</span>
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
                      <Link href="tel:+917396447470" className="flex items-center justify-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>Call +91 7396447470</span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Related Links */}
              {programData.relatedPrograms.length > 0 && (
                <div className="animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 px-1">More Resources</h3>
                  <div className="space-y-3">
                    {programData.relatedPrograms.map((related, i) => (
                      <Link
                        key={i}
                        href={related.href}
                        className="group block p-4 rounded-xl border bg-white hover:border-blue-500 hover:shadow-md transition-all"
                      >
                        <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{related.title}</div>
                        <div className="text-sm text-gray-500 mt-1">{related.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
