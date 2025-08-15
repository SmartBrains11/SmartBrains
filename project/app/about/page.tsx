'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Target, Heart, BookOpen, Star } from 'lucide-react';

const trainers = [
  {
    name: 'Lakkoju Jayalakshmi',
    role: 'Founder & Senior Trainer',
    specialization: 'DMIT, Midbrain Activation, Parenting Guidance',
    experience: '6+ years',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Co-founder of Smart Brains, Jayalakshmi brings a mother’s intuition and years of hands-on experience in helping children unlock their potential. Inspired by her own son’s growth through brain training, she has dedicated her life to guiding parents and empowering children through personalized learning techniques.',
    certifications: [
      'Certified DMIT Analyst',
      'Midbrain Activation Specialist',
      'Parenting & Child Development Facilitator'
    ]
  },
  {
    name: 'Lakkoju Priyanka',
    role: 'Co-Founder & Chief Trainer',
    specialization: 'Brain Training, Photographic Memory, Quantum Speed Reading',
    experience: '5+ years',
    image: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Priyanka leads the training programs at Smart Brains with a passion for helping children achieve academic success and personal growth. She specializes in advanced learning methods like photographic memory and speed reading, making education engaging, fun, and impactful for every student.',
    certifications: [
      'Certified Brain Training Expert',
      'Photographic Memory & Speed Reading Specialist',
      'Child Motivation & Life Skills Coach'
    ]
  },
  {
    name: 'Sekhar',
    role: 'Management Head & Support Trainer',
    specialization: 'Institution Management, Basic Brain Training',
    experience: '3+ years',
    image: 'https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Sekhar oversees the management and operations of Smart Brains, ensuring smooth scheduling, quality control, and parent support. He also participates in training sessions, providing additional guidance to students when needed.',
    certifications: [
      'Educational Program Management',
      'Support Brain Training Facilitator'
    ]
  }
];


const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from program design to student outcomes.'
  },
  {
    icon: Heart,
    title: 'Care',
    description: 'Every child is unique and deserves individual attention and care in their learning journey.'
  },
  {
    icon: BookOpen,
    title: 'Innovation',
    description: 'We continuously innovate our teaching methods based on latest research in neuroscience.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We believe in building a supportive community of learners, parents, and educators.'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              About Smart Brains
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-delay leading-relaxed ">
               At Smart Brains, we believe every child has unique potential. The journey began when Lakkoju Jayalakshmi saw her own son transform through brain training. 
               Inspired, she founded Smart Brains to help learners of all ages enhance memory, focus, creativity, and confidence through proven programs like Midbrain Activation, DMIT, Photographic Memory, Abacus, Vedic Math, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To make quality brain training accessible to every child and adult in India, enabling them to achieve academic excellence, emotional strength, and lifelong learning skills.
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To be India’s most trusted brain training center, empowering every child to reach their full potential and excel in academics, creativity, and life skills. We aim to spread this opportunity to every child and support parents in guiding their kids towards a brighter, more confident future.              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">1000+</div>
                  <div className="text-sm text-gray-600">Students Trained</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Children learning"
                className="w-full h-96 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-fade-in">Founder's Story</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <img
                  src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Dr. Priya Sharma"
                  className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="lg:col-span-2 text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lakkoju Jayalakshmi</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Lakkoju Jayalakshmi, the visionary founder of Smart Brains India, began her journey with a deep passion for empowering children to unlock their hidden potential. Inspired by her own son’s transformation through brain training techniques, she dedicated her life to bringing advanced programs like Midbrain Activation, Photographic Memory, Quantum Speed Reading, and Vedic Math to children across India. With years of expertise and heartfelt commitment, she has helped thousands of students enhance focus, confidence, and academic performance. Her mission is simple to help every child discover their inborn talents and achieve success in life.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  "Smart Brains was founded in 2019 with a simple belief - every child is gifted, 
                  they just need the right approach to unlock their potential. Today, we're proud 
                  to have helped over 1000 students discover their strengths and excel in their studies."
                </p>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Brain Training Expert</Badge>
                  <Badge variant="outline">6+ Years Experience</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer Profiles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">Meet Our Expert Trainers</h2>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-delay">
              Our certified trainers bring years of experience and passion for cognitive development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-4 hover:scale-110 transition-transform duration-300"
                  />
                  <CardTitle className="text-xl">{trainer.name}</CardTitle>
                  <CardDescription className="font-medium text-blue-600">
                    {trainer.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Specialization:</span>
                      <span className="text-gray-600">{trainer.specialization}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Experience:</span>
                      <Badge variant="outline">{trainer.experience}</Badge>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{trainer.bio}</p>
                  
                  <div>
                    <h4 className="font-medium text-sm mb-2">Certifications:</h4>
                    <div className="space-y-1">
                      {trainer.certifications.map((cert, certIndex) => (
                        <div key={certIndex} className="flex items-center text-sm">
                          <Award className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Parents Trust Smart Brains */}
      <section className="py-16 bg-blue-50">
  <div className="container mx-auto px-4 lg:px-16">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
        Why Parents Trust Smart Brains
      </h2>
      <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed animate-fade-in-delay">
        At Smart Brains, we’ve earned the trust of parents across India by delivering proven results,
        personalized learning, and a nurturing environment that helps children excel academically
        and in life.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="h-6 w-6 mr-2 text-blue-600" />
            Proven Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 leading-relaxed">
            Over 1,000 students have improved their memory, focus, and academic performance through
            our specialized brain training programs. Our track record speaks for itself.
          </p>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="h-6 w-6 mr-2 text-green-600" />
            Parent-Centered Approach
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 leading-relaxed">
            We work closely with parents to understand their child’s needs, provide progress updates,
            and offer parenting guidance for better communication and learning at home.
          </p>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="h-6 w-6 mr-2 text-orange-600" />
            Customized Learning Plans
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 leading-relaxed">
            Every child learns differently. We design tailored training programs that match their
            learning style, strengths, and areas of improvement for maximum growth.
          </p>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Heart className="h-6 w-6 mr-2 text-purple-600" />
            Caring & Experienced Trainers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 leading-relaxed">
            Our trainers are not just educators — they are mentors who genuinely care about each
            child’s confidence, happiness, and long-term success.
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
      </section>


      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">Our Values</h2>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-delay">
              The principles that guide everything we do at Smart Brains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index} 
                  className="text-center animate-fade-in-up hover:transform hover:-translate-y-2 transition-transform duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4 hover:bg-blue-200 hover:scale-110 transition-all duration-300">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
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