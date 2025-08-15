'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, Users, Award, BookOpen, Clock, Target, 
  CheckCircle, Star, Calendar, Phone, Mail, Brain, Zap
} from 'lucide-react';

const trainingPrograms = [
  {
    id: 'trainer-certification',
    title: 'Trainer Certification Program',
    subtitle: 'Become a Certified Brain Training Instructor',
    description: 'Comprehensive certification program to become a qualified brain training instructor',
    duration: '3 Months Intensive Training',
    format: 'Hybrid (Online + In-person)',
    investment: '₹75,000 - ₹1,25,000',
    modules: [
      'Child Psychology & Development',
      'Neuroscience Fundamentals',
      'DMIT Assessment Techniques',
      'Midbrain Activation Methods',
      'Memory Enhancement Training',
      'Speed Reading Instruction',
      'Abacus & Vedic Math Teaching',
      'Program Management & Business Skills'
    ],
    benefits: [
      'Internationally recognized certification',
      'Complete training materials and resources',
      'Ongoing support and mentorship',
      'Business development guidance',
      'Marketing and promotional materials',
      'Access to updated curriculum'
    ],
    eligibility: [
      'Graduate in any discipline',
      'Passion for child development',
      'Good communication skills',
      'Basic computer knowledge'
    ],
    image: 'https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'master-trainer',
    title: 'Master Trainer Program',
    subtitle: 'Advanced Training for Experienced Instructors',
    description: 'Advanced program for experienced trainers to become master instructors and mentors',
    duration: '6 Months Advanced Training',
    format: 'Intensive Workshops + Mentorship',
    investment: '₹1,50,000 - ₹2,50,000',
    modules: [
      'Advanced Neuroscience Applications',
      'Research Methodology in Brain Training',
      'Program Development & Customization',
      'Train-the-Trainer Methodologies',
      'Quality Assurance & Assessment',
      'Center Management & Operations',
      'Franchise Development',
      'International Standards & Practices'
    ],
    benefits: [
      'Master trainer certification',
      'Authority to train other instructors',
      'Research collaboration opportunities',
      'Program development rights',
      'International recognition',
      'Lifetime learning updates'
    ],
    eligibility: [
      'Minimum 2 years training experience',
      'Existing brain training certification',
      'Proven track record with students',
      'Leadership and mentoring skills'
    ],
    image: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'online-certification',
    title: 'Online Certification Course',
    subtitle: 'Flexible Online Learning Program',
    description: 'Self-paced online certification program for aspiring brain training instructors',
    duration: '6 Months Self-Paced',
    format: 'Fully Online with Virtual Labs',
    investment: '₹45,000 - ₹65,000',
    modules: [
      'Introduction to Brain Training',
      'Digital Assessment Tools',
      'Online Teaching Methodologies',
      'Virtual Classroom Management',
      'Student Progress Tracking',
      'Parent Communication Skills',
      'Technology Integration',
      'Online Business Development'
    ],
    benefits: [
      'Flexible learning schedule',
      'Digital certification',
      'Online teaching resources',
      'Virtual mentorship sessions',
      'Technology platform access',
      'Global networking opportunities'
    ],
    eligibility: [
      'Any graduate or equivalent',
      'Reliable internet connection',
      'Basic computer skills',
      'Commitment to complete course'
    ],
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const trainingFeatures = [
  {
    icon: GraduationCap,
    title: 'Expert Faculty',
    description: 'Learn from certified master trainers with years of practical experience'
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'Complete training covering all aspects of brain training and business development'
  },
  {
    icon: Users,
    title: 'Hands-on Practice',
    description: 'Practical training sessions with real students under expert supervision'
  },
  {
    icon: Award,
    title: 'Recognized Certification',
    description: 'Internationally recognized certification accepted by educational institutions'
  },
  {
    icon: Target,
    title: 'Job Placement Support',
    description: 'Career guidance and job placement assistance for certified trainers'
  },
  {
    icon: Zap,
    title: 'Ongoing Support',
    description: 'Continuous support, updates, and professional development opportunities'
  }
];

const successStories = [
  {
    name: 'Priya Mehta',
    role: 'Certified Trainer, Mumbai',
    story: 'After completing the certification program, I started my own brain training center. Within 6 months, I had 50+ students and achieved financial independence.',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
    achievement: 'Successful Center Owner'
  },
  {
    name: 'Rajesh Gupta',
    role: 'Master Trainer, Delhi',
    story: 'The master trainer program helped me advance my career significantly. I now train other instructors and have opened multiple centers across North India.',
    image: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=400',
    achievement: 'Regional Training Head'
  },
  {
    name: 'Anitha Sharma',
    role: 'Online Trainer, Bangalore',
    story: 'The online certification allowed me to balance my family responsibilities while building a rewarding career. I now conduct online sessions for students worldwide.',
    image: 'https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=400',
    achievement: 'International Online Trainer'
  }
];

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Training Programs
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Become a certified brain training instructor and join the growing field of 
              cognitive development. Our comprehensive training programs prepare you to 
              make a meaningful impact in children's lives while building a rewarding career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="#training-programs">Explore Programs</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get Information</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Training */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Smart Brains Training?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our training programs are designed by experts and backed by years of practical experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="training-programs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Training Programs
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Choose the program that best fits your career goals and schedule.
            </p>
          </div>

          <div className="space-y-12">
            {trainingPrograms.map((program, index) => (
              <Card 
                key={program.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {program.title}
                      </h3>
                      <p className="text-lg text-blue-600 font-medium mb-4">
                        {program.subtitle}
                      </p>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {program.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-gray-600">{program.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-600">{program.format}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Target className="h-4 w-4 text-orange-600" />
                        <span className="text-sm font-medium text-gray-900">{program.investment}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Modules:</h4>
                        <ul className="space-y-1">
                          {program.modules.slice(0, 4).map((module, moduleIndex) => (
                            <li key={moduleIndex} className="flex items-center text-sm">
                              <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-600">{module}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                        <ul className="space-y-1">
                          {program.benefits.slice(0, 4).map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm">
                              <Star className="h-3 w-3 text-yellow-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild className="flex-1">
                        <Link href="/contact">Apply Now</Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1">
                        <Link href="/contact">Get Details</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Hear from our certified trainers who have built successful careers in brain training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{story.name}</CardTitle>
                      <CardDescription>{story.role}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {story.achievement}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic leading-relaxed">
                    "{story.story}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Training Process
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our structured approach ensures comprehensive learning and practical application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Application & Assessment',
                description: 'Submit application and complete initial assessment to determine program fit'
              },
              {
                step: '2',
                title: 'Theoretical Training',
                description: 'Comprehensive classroom training covering neuroscience, psychology, and methodologies'
              },
              {
                step: '3',
                title: 'Practical Training',
                description: 'Hands-on practice sessions with real students under expert supervision'
              },
              {
                step: '4',
                title: 'Certification & Support',
                description: 'Final assessment, certification, and ongoing support for career development'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-xl font-bold mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Training Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Join hundreds of certified trainers who are making a difference in children's lives 
            while building rewarding careers. Take the first step today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact" className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Schedule Consultation</span>
              </Link>
            </Button>
             <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
               <a href="tel:+919876543210" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call for Details</span>
               </a>
             </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <Phone className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <div className="text-sm opacity-80">Call for Training Info</div>
              <div className="font-semibold">+91 7396447470</div>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <div className="text-sm opacity-80">Email for Details</div>
              <div className="font-semibold">smartbrainsindia11@gmail.com</div>
            </div>
            <div className="text-center">
              <Brain className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <div className="text-sm opacity-80">Visit Training Centers</div>
              <div className="font-semibold">Hyderabad & Vizianagaram</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}