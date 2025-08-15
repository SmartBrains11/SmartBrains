'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, MapPin, TrendingUp, Award, CheckCircle, Star, 
  Phone, Mail, Calendar, Building, Target, Heart,
  BookOpen, Handshake, DollarSign, BarChart3
} from 'lucide-react';

const franchisePackages = [
  {
    name: 'Basic Franchise',
    investment: 'Low Investment',
    coverage: 'City/Town Level',
    programs: '6 Core Programs',
    support: '6 Months',
    features: [
      'DMIT Assessment Tools',
      'Midbrain Activation Program',
      'Photographic Memory Training',
      'Abacus Math Program',
      'Speed Reading Course',
      'Handwriting Improvement'
    ]
  },
  {
    name: 'Premium Franchise',
    investment: 'Moderate Investment',
    coverage: 'District Level',
    programs: '9 Programs',
    support: '12 Months',
    features: [
      'All Basic Programs',
      'Quantum Speed Reading',
      'Vedic Math Training',
      'Enhancement Program',
      'Advanced Marketing Support',
      'Online Learning Platform'
    ]
  },
  {
    name: 'Master Franchise',
    investment: 'High Investment',
    coverage: 'State/Regional Level',
    programs: 'All 11 Programs',
    support: '24 Months',
    features: [
      'Complete Program Portfolio',
      'Midbrain for Adults',
      'Drawing & Skill Development',
      'Sub-franchise Rights',
      'Advanced Training Modules',
      'Exclusive Territory Rights'
    ]
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Growing Market',
    description: 'Brain training industry growing at 25% annually with increasing awareness among parents.'
  },
  {
    icon: Award,
    title: 'Proven Programs',
    description: 'Scientifically backed programs with 95% success rate and thousands of satisfied students.'
  },
  {
    icon: Users,
    title: 'Complete Support',
    description: 'Comprehensive training, marketing support, and ongoing guidance for franchise success.'
  },
  {
    icon: Building,
    title: 'Low Investment',
    description: 'Start your own brain training center with minimal investment and maximum returns.'
  },
  {
    icon: Target,
    title: 'Exclusive Territory',
    description: 'Protected territory rights ensuring no competition from other Smart Brains centers.'
  },
  {
    icon: Heart,
    title: 'Social Impact',
    description: 'Make a meaningful difference in children\'s lives while building a profitable business.'
  }
];

const requirements = [
  'Minimum 1000 sq ft space in commercial area',
  'Educational background preferred',
  'Passion for child development and education',
  'Basic computer and communication skills',
  'Commitment to maintain quality standards',
  'Local market knowledge and connections'
];

const support = [
  {
    category: 'Training & Certification',
    items: [
      'Comprehensive trainer certification program',
      'Program-specific training modules',
      'Assessment and evaluation techniques',
      'Child psychology and development'
    ]
  },
  {
    category: 'Marketing Support',
    items: [
      'Brand guidelines and marketing materials',
      'Digital marketing strategies and content',
      'Local advertising campaign support',
      'Social media management guidance'
    ]
  },
  {
    category: 'Operational Support',
    items: [
      'Center setup and interior design guidance',
      'Student management system',
      'Progress tracking and reporting tools',
      'Quality assurance and monitoring'
    ]
  },
  {
    category: 'Ongoing Support',
    items: [
      'Regular training updates and workshops',
      '24/7 technical and operational support',
      'New program launches and updates',
      'Performance monitoring and improvement'
    ]
  }
];

export default function FranchisePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Join India’s No.1 Brain Training Franchise Network
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-delay leading-relaxed ">
              Partner with Smart Brains, India’s leading brain development institute with 12+ years of expertise, a 95% student success rate, and 1000+ lives transformed. Build a profitable business while making a lasting impact on children’s futures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="#franchise-inquiry" className="flex items-center space-x-2">
                  <Handshake className="h-5 w-5" />
                  <span>Become a Partner</span>
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="tel:+917396447470" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call for Details</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Smart Brains Franchise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
              Why Choose Smart Brains Franchise?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-delay max-w-4xl mx-auto">
              Join a proven business model backed by neuroscience, cognitive psychology, and education research. Get complete training, marketing support, and protected territory rights.            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4 hover:bg-blue-200 hover:scale-110 transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Franchise Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
              Franchise Investment Options
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-delay">
              Choose the franchise package that best fits your investment capacity and market size.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {franchisePackages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up ${index === 1 ? 'border-2 border-blue-500 relative' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{pkg.investment}</div>
                  <CardDescription className="text-lg">{pkg.coverage}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="font-medium">Programs:</span>
                      <Badge variant="outline">{pkg.programs}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Support Period:</span>
                      <span className="text-gray-600">{pkg.support}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold">Included Features:</h4>
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full hover:scale-105 transition-transform duration-300" variant={index === 1 ? "default" : "outline"}>
                    Get Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Franchise Requirements
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're looking for passionate partners who share our vision of transforming 
                children's lives through quality brain training programs.
              </p>
              
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3 hover:text-gray-900 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right">
              <img
                src="https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Franchise partner training"
                className="w-full h-96 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support System */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
              Comprehensive Franchise Support
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-delay">
              We provide end-to-end support to ensure your franchise success from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {support.map((category, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3 hover:text-gray-900 transition-colors duration-300">
                        <Star className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
              Franchise Success Stories
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-delay">
              Hear from our successful franchise partners across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Franchise partner"
                    className="w-16 h-16 rounded-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <CardTitle>Rajesh Sharma</CardTitle>
                    <CardDescription>Smart Brains Pune</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "Starting Smart Brains franchise was the best decision I made. In just 18 months, 
                  we've trained over 200 students and achieved break-even. The support from headquarters 
                  has been exceptional."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Franchise partner"
                    className="w-16 h-16 rounded-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <CardTitle>Lakkoju Priyana</CardTitle>
                    <CardDescription>Smart Brains Bangalore</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "The comprehensive training and ongoing support made it easy to establish our center. 
                  Parents trust the Smart Brains brand, and we're seeing amazing results in children's 
                  cognitive development."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="franchise-inquiry" className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Smart Brains Franchise?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Take the first step towards building a rewarding business that makes a real 
            difference in children's lives. Contact us today for detailed information.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact" className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Schedule Meeting</span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="mailto:franchise@smartbrains.in" className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Email Us</span>
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <Phone className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <div className="text-sm opacity-80">Call for Franchise Details</div>
              <div className="font-semibold">+91 7396447470</div>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <div className="text-sm opacity-80">Email for Information</div>
              <div className="font-semibold">franchise@smartbrains.in</div>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <div className="text-sm opacity-80">Visit Our Centers</div>
              <div className="font-semibold">Hyderabad & Vizianagaram</div>
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