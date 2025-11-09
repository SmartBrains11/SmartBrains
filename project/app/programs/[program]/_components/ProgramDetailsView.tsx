'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Clock, Users, Target, Award, CheckCircle, Star, 
  Calendar, Phone, Mail, ArrowLeft, Brain, BookOpen 
} from 'lucide-react';

interface ProgramData {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  targetAge: string;
  duration: string;
  classFormat: string;
  price: string;
  image: string;
  benefits: string[];
  structure: string[];
  results: string[];
  testimonials: Array<{
    name: string;
    role: string;
    content: string;
    rating: number;
  }>;
}

interface ProgramDetailsViewProps {
  programData: ProgramData;
  relatedPrograms?: Array<{
    slug: string;
    title: string;
    description: string;
  }>;
}

export function ProgramDetailsView({ programData, relatedPrograms = [] }: ProgramDetailsViewProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/programs" className="hover:text-blue-600">Programs</Link>
            <span>/</span>
            <span className="text-gray-900">{programData.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Link href="/programs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Programs
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
                {programData.title}
              </h1>
              <p className="text-xl text-blue-600 font-medium mb-6 animate-fade-in-delay">
                {programData.subtitle}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in-delay-2">
                {programData.longDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Book Free Demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <img
                src={programData.image}
                alt={programData.title}
                className="w-full h-96 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-6 w-6 mr-2 text-blue-600" />
                    Program Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {programData.description}
                  </p>
                </CardContent>
              </Card>

              {/* Structure */}
              <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <CardHeader>
                  <CardTitle>Program Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {programData.structure.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium hover:bg-blue-200 transition-colors duration-300">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <CardHeader>
                  <CardTitle>Key Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {programData.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Results */}
              <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <CardHeader>
                  <CardTitle>Real Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {programData.results.map((result, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300">
                        <Award className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Testimonials */}
              {programData.testimonials.length > 0 && (
                <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                  <CardHeader>
                    <CardTitle>What Parents Say</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {programData.testimonials.map((testimonial, index) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-6 hover:bg-gray-50 p-4 rounded-r-lg transition-colors duration-300">
                          <div className="flex mb-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <p className="text-gray-700 italic mb-3 leading-relaxed">"{testimonial.content}"</p>
                          <div>
                            <div className="font-semibold text-gray-900">{testimonial.name}</div>
                            <div className="text-gray-600 text-sm">{testimonial.role}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Program Info Card */}
              <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <CardHeader>
                  <CardTitle>Program Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Target Age:</span>
                    <Badge variant="outline">{programData.targetAge}</Badge>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{programData.duration}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Format:</span>
                    <span className="font-medium">{programData.classFormat}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Investment:</span>
                    <span className="font-medium text-blue-600">{programData.price}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <CardHeader>
                  <CardTitle>Get Started Today</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">
                    Ready to unlock your child's potential? Contact us for a free consultation and demo session.
                  </p>
                  <div className="space-y-3">
                    <Button asChild className="w-full hover:scale-105 transition-transform duration-300">
                      <Link href="/contact" className="flex items-center justify-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>Book Free Demo</span>
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full hover:scale-105 transition-transform duration-300">
                      <Link href="tel:+919876543210" className="flex items-center justify-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>Call Now</span>
                      </Link>
                    </Button>
                    <Button asChild variant="ghost" className="w-full hover:scale-105 transition-transform duration-300">
                      <Link href="mailto:info@smartbrains.in" className="flex items-center justify-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>Email Us</span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Related Programs */}
              {relatedPrograms.length > 0 && (
                <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                  <CardHeader>
                    <CardTitle>Related Programs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {relatedPrograms.map((related) => (
                        <Link 
                          key={related.slug}
                          href={`/programs/${related.slug}`} 
                          className="block p-3 rounded-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300"
                        >
                          <div className="font-medium text-gray-900">{related.title}</div>
                          <div className="text-sm text-gray-600">{related.description}</div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}